"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  interface LoginFormElements extends HTMLFormControlsCollection {
    username: HTMLInputElement;
    password: HTMLInputElement;
    "captcha-text": HTMLInputElement;
  }

  interface LoginFormElement extends HTMLFormElement {
    readonly elements: LoginFormElements;
  }

  const handleSubmit = (event: React.FormEvent<LoginFormElement>) => {
    event.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="h-[1024px] w-[1440px] bg-[#E3AAE7] flex flex-col items-center justify-center">
      <div>
        <h2 className="text-[14px] font-semibold mb-4 text-black text-left">
          Admin Login
        </h2>
        <form
          className="w-[335px] bg-white shadow-xl rounded-[8px] p-7 text-black"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-sm mb-2 font-semibold text-black"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-2 bg-[#D9D9D966] rounded-md focus:outline-none focus:ring-2 focus:ring-[#AB28B2]"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm mb-2 font-semibold text-black"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 bg-[#D9D9D966] rounded-md focus:outline-none focus:ring-2 focus:ring-[#AB28B2]"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm mb-2 font-semibold text-black"
              htmlFor="captcha"
            >
              Captcha
            </label>
            <Image src="/captcha.svg" alt="captcha" width={300} height={100} />
          </div>
          <div className="mb-9">
            <label
              className="block text-sm mb-2 font-semibold text-black"
              htmlFor="captcha-text"
            >
              Enter Text
            </label>
            <input
              type="text"
              id="captcha-text"
              className="w-full p-2 bg-[#D9D9D966] rounded-md focus:outline-none focus:ring-2 focus:ring-[#AB28B2]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#AB28B2] ease-in-out text-white p-3 rounded-lg hover:bg-[#702b74] transition cursor-pointer"
          >
            Login
          </button>
          <div className="text-center mt-4">
            <a href="#" className="text-[#AB28B2] hover:underline text-[10px]">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
