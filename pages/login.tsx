import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useAuth } from "../hooks/useAuth";

import netflixLogin from "../public/netflix-login.webp";
import netflixLogo from "../public/netflix-logo.svg";

interface Inputs {
  email: string;
  password: string;
}

export default function Login() {
  const [login, setLogin] = useState(false);
  const { signIn, signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    if (login) {
      await signIn(data.email, data.password);
    } else {
      await signUp(data.email, data.password);
    }
  };

  return (
    <>
      <Head>
        <title>Login – Cloneflix</title>
        <meta
          name="description"
          content="A Netflix's Clone create with Next.js to pratice programming"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" relative flex h-screen w-screen flex-col bg-dark transition duration-300 md:items-center md:justify-center md:bg-transparent">
        <Image
          src={netflixLogin}
          alt="catalog netflix"
          fill
          className=" -z-10 !hidden opacity-60 object-cover sm:!inline"
        />

        <Link href={"/login"}>
          <Image
            className=" absolute left-6 top-6 object-contain cursor-pointer md:left-10 md:top-6"
            src={netflixLogo}
            alt="netflix logo"
            width={167}
            height={45}
            priority
          />
        </Link>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" relative bg-dark/75 mt-24 py-6 px-8 space-y-8 rounded md:mt-0 md:max-w-md md:px-14"
        >
          <h1 className=" text-4xl font-semibold">Sign In</h1>
          <div className="space-y-4">
            <label className=" inline-block w-full">
              <input
                className="inputLogin"
                type="email"
                placeholder="Email or phone number"
                {...register("email", { required: true })}
              />{" "}
              {errors.email && (
                <p className=" p-1 text-sm text-orange-500">
                  Please enter a valid email or phone number.
                </p>
              )}
            </label>
            <label className=" inline-block w-full">
              <input
                className="inputLogin"
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />{" "}
              {errors.password && (
                <p className=" p-1 text-sm text-orange-500">
                  Your password must contain between 4 and 60 characters.
                </p>
              )}
            </label>
          </div>

          <button
            onClick={() => setLogin(true)}
            className=" w-full py-3 rounded font-semibold bg-netflix"
          >
            Sign In
          </button>

          <div className=" text-signup">
            New to Netflix?{" "}
            <button
              type="submit"
              className=" text-white hover:underline cursor-pointer"
              onClick={() => setLogin(false)}
            >
              Sign up now
            </button>
            {"."}
          </div>
        </form>
      </main>
    </>
  );
}
