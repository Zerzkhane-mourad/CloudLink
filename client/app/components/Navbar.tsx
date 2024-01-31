import Link from "next/link"
import { NAV_LINKS } from "@/app/constants"

const Navbar = () => {
    return (
        <nav className="max-container padding-container relative z-30 py-3">
            <ul className="h-full gap-12  nav">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="reguler-16 text-gray-50 flexCenter cursor-pointer  transition-all hover:font-bold">
                        {link.label}
                    </Link>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar