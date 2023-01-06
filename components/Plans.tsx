import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import netflixLogo from "../public/netflix-logo.svg";

export function Plans() {
  return (
    <>
      <Head>
        <title>Cloneflix</title>
        <meta
          name="description"
          content="A Netflix's Clone create with Next.js to pratice programming"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className=" h-16 border-b border-white/10 bg-body">
        <Link href={"/"}>
          <Image
            src={netflixLogo}
            alt="netflix logo"
            width={150}
            height={90}
            className="cursor-pointer object-contain"
          />
        </Link>
        <button className=" text-lg font-medium hover:underline">
          Sign Out
        </button>
      </header>
    </>
  );
}
