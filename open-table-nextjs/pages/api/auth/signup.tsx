import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import { PrismaClient } from "@prisma/client";

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
        errrMessage: "First name is invalued",
      },
      {
        valid: validator.isLength(lastName, { min: 1, max: 20 }),
        errrMessage: "Last name is invalued",
      },
      {
        valid: validator.isEmail(email),
        errrMessage: "Email is invalued",
      },
      {
        valid: validator.isMobilePhone(phone),
        errrMessage: "Phone is invalued",
      },
      {
        valid: validator.isLength(city, { min: 1, max: 20 }),
        errrMessage: "City is invalued",
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
      return res.status(400).json({ errortMessage: errors });
    }

    const userWithEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userWithEmail) {
      return res
        .status(400)
        .json({ errortMessage: "This email is associated with another user" });
    }

    res.status(200).json({
      hello: "there",
    });
  }
}
