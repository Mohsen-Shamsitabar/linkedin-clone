import { NextResponse, type NextRequest } from "next/server";
import { generateJwtToken, supabase } from "@/libs";

export type LoginPayload = {
  email: string;
  password: string;
};

export async function POST(req: NextRequest) {
  const { email, password } = (await req.json()) as LoginPayload;

  // Find user (replace with DB lookup)
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email);

  if (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }

  const user = data.at(0);

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const userPassword = user.password;

  // Verify password
  const validPassword = password === userPassword;

  if (!validPassword) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const accessToken = await generateJwtToken(email);
  const refreshToken = await generateJwtToken(email);

  const response = NextResponse.json(
    { accessToken, refreshToken },
    { status: 200 },
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
