import Link from "next/link";
import Image from "next/image";

import { Logo } from "@/app/assets/images/Images";

const Header = () => {
    return (
        <header>
            <Link href="/">
                <Image src={Logo} alt="Logo" priority />
            </Link>
        </header>
    );
};

export default Header;
