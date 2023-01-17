import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";
import { useSubscription } from "../hooks/useSubscription";

import netflixLogo from "../public/netflix-logo.svg";
import netflixProfile from "../public/netflix-profile.webp";
import memberIcon from "../public/member-icon.svg";
import { Membership } from "../components/Membership";
import { GetStaticProps } from "next";
import { getProducts, Product } from "@stripe/firestore-stripe-payments";
import { payments } from "../lib/stripe";

interface Props {
  products: Product[];
}

export default function account({ products }: Props) {
  const { user, logout } = useAuth();
  const subscription = useSubscription(user);

  return (
    <>
      <Head>
        <title>Account Settings – Cloneflix</title>
        <meta
          name="description"
          content="A Netflix's Clone create with Next.js to pratice programming"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-body">
        <Link href="/">
          <Image
            src={netflixLogo}
            alt="netflix logo"
            className="cursor-pointer w-[120px] h-[90px] object-contain"
          ></Image>
        </Link>
        <Link href="/account">
          <Image
            src={netflixProfile}
            alt="profile user"
            className="cursor-pointer rounded"
          ></Image>
        </Link>
      </header>

      <main className=" mx-auto max-w-6xl pt-24 pb-12 px-[4%] transition-all md:px-10">
        <div className=" flex flex-col gap-x-4 md:flex-row md:items-center">
          <h1 className=" text-3xl md:text-4xl">Account</h1>
          <div className=" flex items-center gap-x-1.5 -ml-0.5">
            <Image src={memberIcon} alt="member icon"></Image>
            <p className=" text-xs font-semibold text-gray">
              Member since {subscription?.created}
            </p>
          </div>
        </div>

        <Membership />

        <div className="accountBox">
          <h4>Plan Details</h4>
          {/* Find the current plan */}

          <div>
            {
              products.filter(
                (product) => product.id === subscription?.product
              )[0]?.name
            }
          </div>
          <p className=" cursor-pointer text-blue-500 hover:underline md:text-right">
            Change plan
          </p>
        </div>

        <div className="accountBox">
          <h4 className="text-lg text-gray">Settings</h4>
          <p className=" col-span-3 cursor-pointer text-blue-500 hover:underline">
            Sign out of all devices
          </p>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProducts(payments, {
    includePrices: true,
    activeOnly: true,
  })
    .then((res) => res)
    .catch((error) => console.log(error.message));

  return {
    props: {
      products,
    },
  };
};
