import type { Metadata } from "next";
import Image from "next/image";
import { getRandomItem } from "@/utils/get-random-item";
import quotes from "../../public/data/quotes.json";
import authImages from "../../public/data/auth-images.json";

export const metadata: Metadata = {
  title: "Expense Ease - Authentication",
  description: "Signin or signup into Expense Ease",
};

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const quoteItem = getRandomItem(quotes);
  const imagePath = getRandomItem(authImages);

  return (
    <div className="relative flex-col items-center justify-center h-screen md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative flex items-center justify-center h-full p-10 text-white dark:border-r lg:flex">
        <div
          className="absolute inset-0 bg-zinc-900"
          style={{
            backgroundImage: `url('${imagePath}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-20 flex flex-col items-center text-lg font-medium p-4 bg-black bg-opacity-50 rounded-lg">
          <div className="flex flex-row items-center justify-center gap-x-2">
            <Image
              src="/images/logo.webp"
              alt="Expense Ease logo"
              width={100}
              height={100}
            />
            <span className="mt-2 text-3xl">Expense Ease</span>
          </div>
          <hr className="w-full border-t border-gray-300 my-4" />
          <p className="text-center italic text-xl">{quoteItem?.text}</p>
        </div>
      </div>
      <div className="flex items-center h-full p-4 lg:p-8">{children}</div>
    </div>
  );
}
