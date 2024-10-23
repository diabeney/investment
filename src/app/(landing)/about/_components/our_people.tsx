import Image from "next/image";
import Two from "@/app/assets/two.jpg";

export default function OurPeople() {
  return (
    <div className=" p-4 max-w-screen-2xl mx-auto lg:p-10">
      <span>
        <h3 className=" font-semibold">OUR PEOPLE</h3>
        <span className=" h-1 w-10 bg-secondary block" />
      </span>
      <section className=" grid lg:grid-cols-2 gap-6 mt-8">
        <div className=" h-full">
          <Image
            src={Two}
            alt="our people"
            className=" h-full w-full object-cover object-center"
          />
        </div>
        <div>
          <h3 className=" text-2xl md:text-4xl font-bold">
            Our people are our strongest asset — take that from an asset manager
          </h3>
          <p className=" mt-6">
            We started with 8 people in a room. Today, we have 3,300 people in
            the UK alone. We’re under no illusion – it’s our people who should
            take credit for any success.
          </p>
          <div className=" mt-8">
            <h5 className=" text-xl font-semibold mb-3 mt-5">
              We're investors
            </h5>
            <p>
              Putting to work the hard-earned savings of people and institutions
              around the world in global markets.
            </p>
          </div>
          <div>
            <h5 className=" text-xl font-semibold mb-3 mt-5">
              We're technologists
            </h5>
            <p>
              Constantly innovating to bring convenience, transparency, and
              precision to investing.
            </p>
          </div>
          <div>
            <h5 className=" text-xl font-semibold mb-3 mt-5">
              We're fiduciaries
            </h5>
            <p>
              Putting the interests of our clients before our own by avoiding
              conflicts with investment interests.
            </p>
          </div>
          <div>
            <h5 className=" text-xl font-semibold mb-3 mt-5">
              We're campainers
            </h5>
            <p>
              Speaking out for equity and inclusion of all underrepresented
              groups and working to reduce our environmental footprint.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
