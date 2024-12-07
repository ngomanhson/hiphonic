import React from "react";
import styles from "./Menu.module.css";

interface MenuProps {
    children: React.ReactNode;
}

const Menu = ({ children }: MenuProps) => {
    return <ul className={styles.menu}>{children}</ul>;
};

export default Menu;
