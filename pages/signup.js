import Logo from "../public/logo.png";
import Image from "next/image";
import SignUpWithSocialMedia from "../components/signup/SignUpWithSocialMedia";
import SignUpWithEmail from "../components/signup/SignUpWithEmail";
import Head from "next/head";
import Link from "next/link";

const signup = () => {
  return (
    <section className="lg:text-center">
      <Head>
        <title>Sign Up</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex gap-8 justify-center mt-4">
        <Link href="/">
          <Image className="cursor-pointer" src={Logo} width={40} height={40} />
        </Link>
        <h2 className="pt-2 text-3xl font-bold">DoktorTakvimi</h2>
      </div>
      <hr className="border-1 border-slate-300 w-full mt-4" />
      <div className="mt-8">
        <h2 className="font-bold text-2xl text-zinc-700 ml-4">Register</h2>
      </div>
      <SignUpWithSocialMedia />
      <SignUpWithEmail />
    </section>
  );
};

export default signup;
