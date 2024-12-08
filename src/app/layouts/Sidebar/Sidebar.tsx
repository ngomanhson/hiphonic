"use client";

import Menu, { MenuItem } from "@/app/layouts/Sidebar/Menu";
import styles from "./Sidebar.module.css";
import { Button } from "@/app/components/common";
import { PlusIcon, InboxIcon, SentIcon, StarIcon, FileTextIcon, AlertCircleIcon, TrashIcon } from "@/app/assets/icons";
import DirectMessage from "@/app/components/DirectMessage/DirectMessage";

const Sidebar = () => {
    const menuData = [
        {
            title: "Inbox",
            to: "/",
            icon: <InboxIcon />,
            notices: 231,
        },
        {
            title: "Sent Mail",
            to: "/about",
            icon: <SentIcon />,
        },
        {
            title: "Favorites",
            to: "/contact",
            icon: <StarIcon />,
        },
        {
            title: "Drafs",
            to: "/drafs",
            icon: <FileTextIcon />,
        },
        {
            title: "Spam",
            to: "/spam",
            icon: <AlertCircleIcon />,
        },
        {
            title: "Trash",
            to: "/trash",
            icon: <TrashIcon />,
        },
    ];

    return (
        <div className={`${styles.sidebar} ${styles.active}`}>
            <div style={{ margin: 24 }}>
                <Button type="button" variant="primary" icon={<PlusIcon />}>
                    New Message
                </Button>
            </div>

            <Menu>
                {menuData.map((item, index) => (
                    <MenuItem key={index} {...item} />
                ))}
            </Menu>

            <DirectMessage />
        </div>
    );
};

export default Sidebar;
