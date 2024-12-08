import Link from "next/link";
import Image from "next/image";

import styles from "./Header.module.css";
import { Logo } from "@/app/assets/images/Images";
import { Button } from "@/app/components/common";
import { PlusIcon, SearchIcon, BellIcon } from "@/app/assets/icons";
import HeaderActions from "./HeaderActions";

const Header = () => {
    return (
        <header className={styles["header"]}>
            <Link href="/" className={styles["logo"]}>
                <Image src={Logo} alt="Logo" priority />
            </Link>

            <div className={styles["header-inner"]}>
                <h3 className={styles["title"]}>Inbox</h3>
                <div className={styles["wrap-menu"]}>
                    <Button icon={<PlusIcon />} iconPosition="left">
                        New Message
                    </Button>
                    <Button variant="secondary" size="icon-child">
                        <SearchIcon />
                    </Button>

                    <Button variant="secondary" size="icon-child">
                        <BellIcon />
                    </Button>

                    <HeaderActions />
                </div>
            </div>
        </header>
    );
};

export default Header;
