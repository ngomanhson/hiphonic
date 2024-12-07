"use client";

import Link from "next/link";
import React from "react";
import styles from "./Menu.module.css";
import { usePathname } from "next/navigation";

interface MenuItem {
    title: string;
    to: string;
    icon: React.ReactNode;
    notices?: number;
}

const MenuItem = ({ title, to, icon, notices }: MenuItem) => {
    const pathname = usePathname();
    const isActive = pathname === to;
    return (
        <li>
            <Link href={to} className={`${styles["menu-item"]} ${isActive ? styles["menu-item__active"] : ""}`}>
                <span className={styles["menu-item__content"]}>
                    {icon} {title}
                </span>

                {notices && <span className={styles["menu-item__badge"]}>{notices}</span>}
            </Link>
        </li>
    );
};

export default MenuItem;
