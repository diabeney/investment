// import { Icon } from "@iconify/react/dist/iconify.js";
// import Link from "next/link";
// const solutions = [
//   "Planning",
//   "Mentorship",
//   "Optimization",
//   "Management",
//   "Advisory",
// ];


// const company = ["About Us", "What we do", "Careers", "Blog", "Contact Us"];

// const legal = [
//   "Terms of Service",
//   "Privacy Policy",
//   "Business Continuity",
//   "FMSB",
// ];

// const icons = [
//   {
//     label: "Twitter/X",
//     icon: "ri:twitter-x-line",
//     link: "",
//   },
//   {
//     label: "LinkedIn",
//     icon: "simple-icons:linkedin",
//     link: "",
//   },
//   {
//     label: "Instagram",
//     icon: "simple-icons:instagram",
//     link: "",
//   },
//   {
//     label: "Facebook",
//     icon: "simple-icons:facebook",
//     link: "",
//   },
// ];

// export default function Footer() {
//   return (
//     <div className="p-12 bg-black grid gap-12 lg:grid-cols-[30%_auto]">
//       <div className="text-white place-self-center ">
//         <p className=" mb-4 text-xl">.logo</p>
//         <p>
//           At Investico Inc., we are dedicated to helping you grow and protect
//           your wealth. With personalized investment strategies and a commitment
//           to delivering long-term value
//         </p>
//       </div>
//       <div className=" flex flex-col gap-8 lg:flex-row justify-between  text-white">
//         <section>
//           <h3 className=" font-medium text-lg mb-4 text-secondary">
//             Solutions
//           </h3>
//           <ul className="flex flex-col gap-4">
//             {solutions.map((solution) => (
//               <li key={solution}>
//                 <Link href={"/"} className=" hover:opacity-80">
//                   {solution}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </section>
//         <section>
//           <h3 className="font-medium text-lg mb-4 text-secondary">Company</h3>
//           <ul className="flex flex-col gap-4">
//             {company.map((item) => (
//               <li key={item}>
//                 <Link href={""} className=" hover:opacity-80">
//                   {item}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </section>
//         <section>
//           <h3 className="font-medium text-lg mb-4 text-secondary">Legal</h3>
//           <ul className="flex flex-col gap-4">
//             {legal.map((item) => (
//               <li key={item}>
//                 <Link href={"/"} className=" hover:opacity-80">
//                   {item}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </section>
//         <section>
//           <h3 className="font-medium text-lg mb-4 text-secondary">Social</h3>
//           <ul className=" flex flex-col gap-4">
//             {icons.map((icon) => (
//               <li className=" " key={icon.label}>
//                 <Link
//                   href={icon.link}
//                   className="flex hover:opacity-80 items-center gap-4"
//                 >
//                   <Icon icon={icon.icon} />
//                   {icon.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </section>
//       </div>
//       <section className=" border-t text-stone-500 border-t-stone-500 py-3">
//         Copyright &copy; {new Date().getFullYear()}, Investico Inc.
//       </section>
//     </div>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/logo_white.png";

const footerData = {
  company: {
    name: "",
    description:
      "As a global investment manager and fiduciary to our clients, our purpose at BlackRock is to help everyone experience financial well-being. Since 1999, we've been a leading provider of financial technology, and our clients turn to us for the solutions they need when planning for their most important goals.",
  },
  sections: [
    {
      title: "CORPORATE",
      links: [
        { text: "Fraud protection tips", href: "#" },
        { text: "Careers", href: "#" },
        { text: "Newsroom", href: "#" },
        { text: "Investor relations", href: "#" },
      ],
    },
    {
      title: "LEGAL",
      links: [
        { text: "Terms & conditions", href: "#" },
        { text: "Privacy policy", href: "#" },
        { text: "Business continuity", href: "#" },
        { text: "Modern Slavery Statement", href: "#" },
        { text: "Best Ex policy and reports", href: "#" },
        { text: "s172 and Corporate Governance Statements", href: "#" },
        { text: "Financial Markets Standards Board (FMSB)", href: "#" },
      ],
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <div className=" w-32 overflow-hidden ">
            <Image src={Logo} alt={'logo'} width={300} className={'h-full w-full object-cover object-top '}/>
          </div>
          <h2 className="text-4xl font-bold mb-4">{footerData.company.name}</h2>
          <p className="text-sm leading-relaxed">
            {footerData.company.description}
          </p>
        </div>
        <div className="md:w-1/2 md:pl-8 md:border-l border-gray-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {footerData.sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-secondary font-bold mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm hover:underline"
                      >
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
    </footer>
  );
}
