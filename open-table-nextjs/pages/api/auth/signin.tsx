import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import * as jose from "jose";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const errors: string[] = [];

    const validationSchema = [
      {
        valid: validator.isEmail(email),
        errrMessage: "Email is invalued",
      },
      {
        valid: validator.isLength(password, { min: 1 }),
        errrMessage: "Password is invalued",
      },
    ];

    validationSchema.forEach((check) => {
      if (!check.valid) {
        errors.push(check.errrMessage);
      }
    });

    if (errors.length) {
      return res.status(400).json({ errortMessage: errors });
    }

    const userWithEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!userWithEmail) {
      return res
        .status(401)
        .json({ errortMessage: "Email or password is not correct" });
    }

    const isMatch = await bcrypt.compare(password, userWithEmail.password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ errortMessage: "Email or password is not correct" });
    }

    const ALG = "HS256";
    const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

    const token = await new jose.SignJWT({
      email: userWithEmail.email,
    })
      .setProtectedHeader({ alg: ALG })
      .setExpirationTime("24h")
      .sign(SECRET);

    res.status(200).json({
      authorized: isMatch,
    });
  }

  return res.status(404).json("Unknown endpoint");
}
