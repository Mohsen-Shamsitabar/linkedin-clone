import { NextResponse, type NextRequest } from "next/server";

import { generateJwtToken, supabase } from "@/libs";

export type RegisterPayload = {
  email: string;
  password: string;
};

export type RegisterPostResponse = {
  accessToken: string;
  refreshToken: string;
};

export async function POST(req: NextRequest) {
  const { email, password } = (await req.json()) as RegisterPayload;

  // Validation
  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password required" },
      { status: 400 },
    );
  }

  // Check existing user
  const { data, error: fetchError } = await supabase
    .from("users")
    .select("*")
    .eq("email", email);

  if (fetchError) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }

  const user = data.at(0);

  if (user) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  // Create User
  const { error: insertError } = await supabase
    .from("users")
    .insert({ email, password });

  if (insertError) {
    return NextResponse.json({ error: "User not created" }, { status: 400 });
  }

  // Create JWT
  const accessToken = await generateJwtToken(email);
  const refreshToken = await generateJwtToken(email);

  const response = new NextResponse(
    JSON.stringify({ accessToken, refreshToken }),
    { status: 201 },
  );

  response.cookies.set({
    name: "access_token",
    value: accessToken,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 2, // 2 hours
  });

  response.cookies.set({
    name: "refresh_token",
    value: refreshToken,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return response;
}
