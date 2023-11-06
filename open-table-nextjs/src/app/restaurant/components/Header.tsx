import React from "react";
import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

const fetchBanerImage = async (
  slug: string
): Promise<{
  main_image: string;
}> => {
  const banerImage = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      main_image: true,
    },
  });

  if (!banerImage) {
    notFound();
  }

  return banerImage;
};

const Header = async ({ name }: { name: string }) => {
  const renderTitle = () => {
    const title = name.split("-");

    title[title.length - 1] = `(${title[title.length - 1]})`;
    return title.join(" ");
  };

  const banerImage = await fetchBanerImage(name);

  const styleBaner = () => {
    return banerImage.main_image
      ? {
          backgroundImage: `url(${banerImage.main_image})`,
          backgroundSize: "cover",
        }
      : {};
  };

  return (
    <div className='h-96 overflow-hidden'>
      <div
        className='bg-center { bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center'
        style={styleBaner()}
      >
        <h1 className='text-7xl text-white capitalize text-shadow text-center'>
          {renderTitle()}
        </h1>
      </div>
    </div>
  );
};

export default Header;
