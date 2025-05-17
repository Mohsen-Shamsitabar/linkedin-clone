/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
"use server";

import { SignJWT } from "jose";

export async function generateJwtToken(payload: string) {
  return await new SignJWT({ payload })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("2h")
    .sign(new TextEncoder().encode(process.env.JWT_SECRET_KEY));
}
