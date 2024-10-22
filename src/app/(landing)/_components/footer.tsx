import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
const solutions = [
  "Planning",
  "Mentorship",
  "Optimization",
  "Management",
  "Advisory",
];

const company = ["About Us", "What we do", "Careers", "Blog", "Contact Us"];

const legal = [
  "Terms of Service",
  "Privacy Policy",
  "Business Continuity",
  "FMSB",
];

const icons = [
  {
    label: "Twitter/X",
    icon: "ri:twitter-x-line",
    link: "",
  },
  {
    label: "LinkedIn",
    icon: "simple-icons:linkedin",
    link: "",
  },
  {
    label: "Instagram",
    icon: "simple-icons:instagram",
    link: "",
  },
  {
    label: "Facebook",
    icon: "simple-icons:facebook",
    link: "",
  },
];

export default function Footer() {
  return (
    <div className="p-12 bg-black grid gap-12 lg:grid-cols-[30%_auto]">
      <div className="text-white place-self-center ">
        <p className=" mb-4 text-xl">.logo</p>
        <p>
          At Investico Inc., we are dedicated to helping you grow and protect
          your wealth. With personalized investment strategies and a commitment
          to delivering long-term value
        </p>
      </div>
      <div className=" flex flex-col gap-8 lg:flex-row justify-between  text-white">
        <section>
          <h3 className=" font-medium text-lg mb-4 text-secondary">
            Solutions
          </h3>
          <ul className="flex flex-col gap-4">
            {solutions.map((solution) => (
              <li key={solution}>
                <Link href={"/"} className=" hover:opacity-80">
                  {solution}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="font-medium text-lg mb-4 text-secondary">Company</h3>
          <ul className="flex flex-col gap-4">
            {company.map((item) => (
              <li key={item}>
                <Link href={""} className=" hover:opacity-80">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="font-medium text-lg mb-4 text-secondary">Legal</h3>
          <ul className="flex flex-col gap-4">
            {legal.map((item) => (
              <li key={item}>
                <Link href={"/"} className=" hover:opacity-80">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="font-medium text-lg mb-4 text-secondary">Social</h3>
          <ul className=" flex flex-col gap-4">
            {icons.map((icon) => (
              <li className=" " key={icon.label}>
                <Link
                  href={icon.link}
                  className="flex hover:opacity-80 items-center gap-4"
                >
                  <Icon icon={icon.icon} />
                  {icon.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <section className=" border-t text-stone-500 border-t-stone-500 py-3">
        Copyright &copy; {new Date().getFullYear()}, Investico Inc.
      </section>
    </div>
  );
}
