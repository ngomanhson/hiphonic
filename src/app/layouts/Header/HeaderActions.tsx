"use client";

import Image from "next/image";
import { User3 } from "@/app/assets/images/Images";
import { ChevronDownIcon } from "@/app/assets/icons";
import styles from "./Header.module.css";
import Link from "next/link";
import { useState } from "react";

const HeaderActions = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <div className={styles["header-actions"]}>
            <div className={styles["action-wrapper"]} onClick={() => setShowMenu(!showMenu)}>
                <Image src={User3} alt="Logo" width={48} height={48} />

                <div className={`${styles["wrap-menu"]} ${showMenu ? styles["header-actions__show"] : ""}`}>
                    <ChevronDownIcon />
                </div>
            </div>

            {showMenu && (
                <ul className={styles["action-list"]}>
                    <li className={styles["action-item"]}>
                        <Link href="/">Personal Information</Link>
                    </li>
                    <li className={styles["action-item"]}>
                        <Link href="/">Support </Link>
                    </li>
                    <li className={styles["action-item"]}>
                        <Link href="/">Dark mode </Link>
                    </li>
                    <li className={styles["action-item"]}>
                        <Link href="/">Logout </Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default HeaderActions;
