import Link from "next/link";
import Image from "next/image";

import styles from "./Header.module.css";
import { Logo } from "@/app/assets/images/Images";

const Header = () => {
    return (
        <header className={styles["header"]}>
            <Link href="/">
                <Image src={Logo} alt="Logo" priority />
            </Link>
        </header>
    );
};

export default Header;
