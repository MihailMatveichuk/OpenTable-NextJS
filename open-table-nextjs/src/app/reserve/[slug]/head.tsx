"use client";
import { useParams } from "next/navigation";

export default function Head() {
  const params = useParams();

  console.log(params);

  return (
    <>
      <title>{params?.slug}</title>
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <meta content='Generate' name='description' />
      <link rel='icon' href='/open-table-nextjs/src/app/favicon.ico' />
    </>
  );
}
