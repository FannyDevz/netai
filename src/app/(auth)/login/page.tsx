import type { Metadata } from "next";
import LoginForm from "@/components/form/LoginForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login | Netai",
  description:
    "Sign in to Netai. Username. New to Netai? Create an account. Terms · Privacy · Contact Netai Support.",
  colorScheme: "dark light",
  openGraph: {
    images: {
      url: "https://res.cloudinary.com/dvc3vlqzv/image/upload/v1699806780/logo_rjnbfj.png",
    },
    url: "https://netai.vercel.app",
    type: "website",
    title: "Login | Netai",
    description:
      "Sign in to Netai. Username. New to Netai? Create an account. Terms · Privacy · Contact Netai Support.",
  },
};

const LoginPage = () => {
  return (
    <>
      <h1 className="text-xl">Sign in to Netai</h1>
      <LoginForm />
      <p>
        New to Netai?{" "}
        <Link href="/register" className="text-blue-600 hover:underline">
          Create an account
        </Link>
        .
      </p>
    </>
  );
};

export default LoginPage;
