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
    const { id, firstName, lastName, email, phone, city, password } = req.body;
    const errors: string[] = [];

    const validationSchema = [
      {
        valid: validator.isLength(firstName, { min: 1, max: 20 }),
        errrMessage: "First name is invalid",
      },
      {
        valid: validator.isLength(lastName, { min: 1, max: 20 }),
        errrMessage: "Last name is invalid",
      },
      {
        valid: validator.isEmail(email),
        errrMessage: "Email is invalid",
      },
      {
        valid: validator.isMobilePhone(phone),
        errrMessage: "Phone is invalid",
      },
      {
        valid: validator.isLength(city, { min: 1, max: 20 }),
        errrMessage: "City is invalid",
      },
      {
        valid: validator.isStrongPassword(password),
        errrMessage: "Password is not strong enough",
      },
    ];

    validationSchema.forEach((check) => {
      if (!check.valid) {
        errors.push(check.errrMessage);
      }
    });

    if (errors.length) {
      return res.status(400).json({ errorMessage: errors });
    }

    const userWithEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userWithEmail) {
      return res
        .status(400)
        .json({ errorMessage: "This email is associated with another user" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        password: hashedPassword,
        email,
        city,
        phone,
      },
    });

    const ALG = "HS256";
    const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

    const token = await new jose.SignJWT({
      email: user.email,
    })
      .setProtectedHeader({ alg: ALG })
      .setExpirationTime("24h")
      .sign(SECRET);

    res.status(200).json({
      hello: token,
    });
  }
  return res.status(404).json("Unknown endpoint");
}
