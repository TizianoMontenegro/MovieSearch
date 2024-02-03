import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HomeComponent = () => {
  return (
    <article className="max-container relative min-h-[calc(100vh-48px)] overflow-hidden">
      <section className="flex flex-col items-center mt-40">
        <h1 className="text-8xl max-sm:text-4xl mb-4 font-bold">LampMovie</h1>
        <p className="text-xl text-center">Hello There!, In This Page You Could Find The Most Popular Movies To Enjoy.</p>
        <p className="text-lg my-4 text-center">Click on the button of here below</p>
        <Link href="/movies">
          <Button className="text-xl">Let's Go</Button>
        </Link>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-[700px] max-lg:w-[500px] max-md:w-[300px] absolute -top-10 max-md:top-9 max-lg:top-40 max-sm:top-3/4 -z-20">
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop offset="0%" stopColor="rgba(255, 68, 255, 1)"></stop>
            <stop offset="100%" stopColor="rgba(0, 170, 255, 1)"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient)"
          strokeWidth="0"
          d="M24.5-32.1c5.3 7.4 6.3 16.9 7.2 26 1 9 1.9 17.5-1.6 23.5-3.4 5.9-11.3 9.2-19.1 11.4C3.3 31-4.4 32-11.4 30c-6.9-2-13.3-7.1-18.6-13.9-5.4-6.8-9.8-15.3-9.9-24.6-.1-9.2 4.2-19.1 11.6-26 7.3-7 17.8-11 27.9-10.4 10 .5 19.6 5.5 24.9 12.8z"
          transform="translate(50 50)"
          style={{
            WebkitTransition: "all 0.3s ease 0s",
            transition: "all 0.3s ease 0s",
          }}
        ></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-[600px] max-lg:w-[400px] absolute right-12 max-xl:-right-8 max-md:-right-16 -bottom-10 -z-20 -rotate-90">
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop offset="0%" stopColor="rgba(0, 170, 255, 1)"></stop>
            <stop offset="100%" stopColor="rgba(255, 68, 255, 1)"></stop>
          </linearGradient>
        </defs>
        <path
          fill="none"
          d="M20 11.4c-6.2 10.8-31.6 10.4-38.1-.6S-12.3-21.7.4-21.5C13.1-21.3 26.1.7 20 11.4z"
          transform="translate(50 50)"
          style={{
            WebkitTransition: "all 0.3s ease 0s",
            transition: "all 0.3s ease 0s",
          }}
          stroke="url(#sw-gradient)"
        ></path>
      </svg>
    </article>
  )
}
