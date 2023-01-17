import { CheckIcon } from "@heroicons/react/outline";
import { Product } from "@stripe/firestore-stripe-payments/lib/product";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { loadCheckout } from "../lib/stripe";

import netflixLogo from "../public/netflix-logo.svg";
import { Spinner } from "./Spinner";
import { Table } from "./Table";

interface Props {
  products: Product[];
}

export function Plans({ products }: Props) {
  const { logout, user } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<Product | null>(products[2]);
  const [isBillingLoading, setIsBillingLoading] = useState(false);

  const subscribeToPlan = () => {
    if (!user) return;

    loadCheckout(selectedPlan?.prices[0].id!);
    setIsBillingLoading(true);
  };

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
            className="cursor-pointer w-[150px] h-[90px] object-contain"
          />
        </Link>
        <button
          className=" text-lg font-medium hover:underline"
          onClick={logout}
        >
          Sign Out
        </button>
      </header>

      <main className=" max-w-5xl mx-auto pt-28 pb-12 px-5 transition-all md:px-10">
        <h1 className=" mb-3 text-3xl font-medium">
          Choose the plan that's right for you
        </h1>
        <ul>
          <li className=" flex items-center gap-x-2 text-lg">
            <CheckIcon className=" h-7 w-7 text-netflix" />
            Watch all you want. Ad-free.
          </li>
          <li className=" flex items-center gap-x-2 text-lg">
            <CheckIcon className=" h-7 w-7 text-netflix" />
            Recommendations just for you.
          </li>
          <li className=" flex items-center gap-x-2 text-lg">
            <CheckIcon className=" h-7 w-7 text-netflix" />
            Change or cancel your plan anytime.
          </li>
        </ul>

        <div className=" flex mt-4 flex-col space-y-4">
          <div className="flex w-full items-center justify-center self-end md:w-3/5">
            {products &&
              products.map((product) => (
                <div
                  className={`planBox ${
                    selectedPlan?.id === product.id
                      ? "planSelected"
                      : "opacity-60"
                  }`}
                  key={product.id}
                  onClick={() => setSelectedPlan(product)}
                >
                  {product.name}
                </div>
              ))}
          </div>

          <Table products={products} selectedPlan={selectedPlan} />

          <button
            disabled={!selectedPlan || isBillingLoading}
            className={`mx-auto w-11/12 bg-netflix py-4 rounded shadow text-xl hover:bg-netflix-hover md:w-[420px] ${
              isBillingLoading && "opacity-60"
            }`}
            onClick={subscribeToPlan}
          >
            {isBillingLoading ? <Spinner /> : "Subscribe"}
          </button>
        </div>
      </main>
    </>
  );
}
