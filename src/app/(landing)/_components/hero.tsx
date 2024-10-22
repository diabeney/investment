import Image from "next/image";
import HeroImage from "@/app/assets/shubham-dhage-URCKNCgZ9PA-unsplash.jpg";
import { Button } from "@/shared/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
export default function HeroSection() {
  return (
    <div className=" grid lg:grid-cols-2 place-items-center h-screen lg:max-h-[540px]">
      <section className=" p-6">
        <h1 className="  text-5xl lg:text-6xl font-bold">
          Empowering your <span className=" text-secondary">financial</span>{" "}
          future.
        </h1>
        <p className=" text-lg my-6">
          At Investico Inc., we are dedicated to helping you grow and protect
          your wealth. With personalized investment strategies and a commitment
          to delivering long-term value, we guide you on the path to financial
          success. Whether you're looking to build your portfolio, plan for
          retirement, or explore new opportunities, our expert advisors are here
          to help you achieve your goals and secure your future.
        </p>
        <Button className=" btn text-white">
          Read our story
          <Icon icon="solar:arrow-right-up-bold-duotone" className="ml-3" />
        </Button>
      </section>
      <section className=" h-full w-full">
        <Image src={HeroImage} alt="hero" className=" h-full w-full" />
      </section>
    </div>
  );
}
