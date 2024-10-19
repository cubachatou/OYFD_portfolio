import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo.svg";

const aboutLinks = [
  { href: "/blog", label: "Blog" },
  { href: "mailto:alexeyyakuba@gmail.com", label: "Contact", target: "_blank", rel: "noopener" },
  { href: "https://www.linkedin.com/in/oleksiiyakuba/", label: "Linkedin", target: "_blank", rel: "noopener" },
];
const blogLinks = [
  { href: "/", label: "About" },
  { href: "mailto:alexeyyakuba@gmail.com", label: "Contact", target: "_blank", rel: "noopener" },
  { href: "https://www.linkedin.com/in/oleksiiyakuba/", label: "Linkedin", target: "_blank", rel: "noopener" },
];

export default function Header({ classes, currentPage }: { classes?: string, currentPage?: string }) {

  return (
    <header className={`z-10 flex items-start justify-between px-8 py-4 ${classes}`}>
      { currentPage === 'about' && <span className="uppercase text-sm">Oleksii Yakuba</span> }
      { currentPage === 'blog' && <Image className="aspect-[76/20.65]" src={logo} alt="logo" width={108} height={29.35} quality={100} /> }

      <nav>
        <ul className='flex items-center gap-6'>
          {currentPage === 'about' && aboutLinks.map(({ href, label, target, rel }) => (
            <li key={`${href}${label}`}>
              <Link href={href} target
              ={target} rel={rel}>{label}</Link>
            </li>
          ))}
          {currentPage === 'blog' && blogLinks.map(({ href, label, target, rel }) => (
            <li key={`${href}${label}`}>
              <Link href={href} target
              ={target} rel={rel}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}