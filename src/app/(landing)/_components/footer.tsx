import { TwitterIcon, LinkedinIcon, InstagramIcon } from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/logo_dark.png";

const footerData = {
  company: {
    name: "",
    description:
      "As a global investment manager and fiduciary to our clients, our purpose at Blackcrest is to help everyone experience financial well-being. Since inception, we've been a leading provider of financial technology, and our clients turn to us for the solutions they need when planning for their most important goals.",
  },
  sections: [
    {
      title: "CORPORATE",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Careers", href: "#" },
      ],
    },
    {
      title: "LEGAL",
      links: [
        { text: "Terms & conditions", href: "#" },
        { text: "Privacy policy", href: "#" },
      ],
    },
    {
      title: "CONTACT US",
      links: [
        {
          text: "Email: info@blackcrest.com",
          href: "mailto:info@blackcrest.com",
        },
        { text: "Phone: +44 1234 567 890", href: "tel:+441234567890" },
        {
          text: "BlackCrest HQ, 123 Finance Avenue, London, UK",
          href: "/",
        },
      ],
    },
  ],
};

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <div className=" w-52 h-20 overflow-hidden ">
            <Image src={Logo} alt={"logo"} width={300} className={"h-full w-full object-cover object-top "} />
          </div>
          <h2 className="text-4xl font-bold mb-4">{footerData.company.name}</h2>
          <p className="leading-relaxed">{footerData.company.description}</p>
        </div>
        <div className="md:w-1/2 md:pl-8 md:border-l border-stone-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {footerData.sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-secondary font-bold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href} className="text-sm hover:underline">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="border-t-accent/20 text-white/90 p-6 flex flex-col lg:flex-row border-t mt-10 mx-auto justify-between">
        <section className=" inline-flex flex-col lg:flex-row text-center items-center gap-4">
          <p className=" mx-auto text-[.8rem] ">&copy; {date} BlackCrest. All rights reserved.</p>
          {/* <ul className="flex gap-4 text-[.8rem]">
            <li className="hover:text-secondary">
              <Link href="/">Terms of Use</Link>
            </li>
            <li className="hover:text-secondary">
              <Link href="/">Privacy Policy</Link>
            </li>
          </ul> */}
        </section>
        <section>
          <div className="flex justify-center py-6 gap-4">
            <a href="" target="_blank" rel="noopener noreferrer">
              <InstagramIcon size={16} className="hover:text-secondary transition-all duration-300 cursor-pointer hover:-translate-y-1" />
            </a>
            <Link href="" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon size={16} className="hover:text-secondary transition-all duration-300 cursor-pointer hover:-translate-y-1" />
            </Link>
            <a href="" target="_blank" rel="noopener noreferrer">
              <TwitterIcon size={16} className="hover:text-secondary transition-all duration-300 cursor-pointer hover:-translate-y-1" />
            </a>
          </div>
        </section>
      </section>
    </footer>
  );
}
