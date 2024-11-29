import { NavLinks } from "@/shared/constants/nav_link";
import Link from "next/link";
import { Button } from "@/shared/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/app/assets/logo_dark.png";
export default function MobileNavbar({
  isMenuOpen,
  closeMenuHandler,
}: {
  isMenuOpen: boolean;
  closeMenuHandler: () => void;
}) {
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === "#") return false;
    if (pathname === "/" && href === "/") return true;
    return (
      pathname.startsWith(href) &&
      (pathname === href || pathname[href.length] === "/")
    );
  };
  return (
    <header
      className={` ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full "
      } fixed top-0 transition-all duration-300 bg-black text-white w-full h-screen   z-[100] md:hidden`}
    >
      <button
        onClick={closeMenuHandler}
        className=" w-fit absolute top-6 bg-secondary p-2 rounded-full right-6"
      >
        <Icon icon="material-symbols-light:close" className=" text-black" />
      </button>
      <nav className=" flex flex-col mt-10 p-4 gap-12">
        <div className=" w-40 h-18 mx-auto overflow-hidden ">
          <Image src={Logo} alt={'logo'} width={300} className={'h-full w-full object-cover object-top '}/>
        </div>
        <ul className=" flex gap-6 flex-col font-semibold">
          {NavLinks.map((link) => {
            return (
                <li key={link.label}>
                  <Link
                      onClick={() => closeMenuHandler()}
                      href={link.href}
                      className={` ${
                          isActive(link.href) ? "text-secondary font-bold" : ""
                      } flex items-center gap-3 text-lg`}
                  >
                    <Icon icon={link.icon}/>
                    {link.label}
                  </Link>
                </li>
            );
          })}
        </ul>
        <div className=" flex gap-3 items-center">
          <Link href={'/contact'} className=" px-6 py-2 bg-secondary text-black font-semibold">
            Contact Us
          </Link>
          {/*<Icon*/}
          {/*    icon={"solar:user-circle-bold"}*/}
          {/*    className=" h-8 w-8 text-stone-200 "*/}
          {/*/>*/}
          {/*<Icon*/}
          {/*    icon={"solar:map-point-bold"}*/}
          {/*    className=" h-8 w-8 text-stone-200 "*/}
          {/*/>*/}
        </div>
      </nav>
    </header>
  );
}
