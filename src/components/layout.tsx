import Image from "next/image";
import { Lato } from "next/font/google";
import Link from "next/link";
import Head from "next/head";
import { type ReactNode } from "react";
const lato = Lato({ subsets: ["latin"], weight: "400" });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      className={
        lato.className + " grid grid-rows-[auto_1fr_auto] min-h-screen"
      }
    >
      <Head>
        <title>Resume checker</title>
      </Head>
      <header className="flex border-b-gray-800 border-b-solid border-b-2 p-4">
        <Link href="/" className="text-xl flex gap-2">
          <Image
            className="invert dark:invert-0"
            src="/images/logo-white.svg"
            alt="Icon."
            width={20}
            height={20}
          />{" "}
          Resume Checker
        </Link>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center py-6 px-2 justify-center">
        {children}
      </main>
      <footer className="border-t-2 border-t-gray-800 p-4 flex items-center justify-center gap-4">
        <Link
          href="https://jobs.ashbyhq.com/Silver?utm_source=Pedw1mQEZd"
          className="text-sm text-indigo-400 cursor-pointer hover:text-indigo-300"
        >
          Open Jobs
        </Link>
        <Link
          href="https://ready.silver.dev/"
          className="text-sm text-indigo-400 cursor-pointer hover:text-indigo-300"
        >
          Interview Ready
        </Link>
      </footer>
    </div>
  );
}
