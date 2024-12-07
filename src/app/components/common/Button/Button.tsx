"use client";

import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
    type: "button" | "submit" | "reset";
    onClick?: () => void;
    variant?: "primary" | "outline";
    size?: "lg" | "md" | "sm";
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    disabled?: boolean;
    children: React.ReactNode;
    isLoading?: boolean;
}

const Button = ({ type, onClick, children, variant = "primary", size = "md", icon, iconPosition = "left", disabled, isLoading }: ButtonProps) => {
    const variantClass = styles[variant];
    const sizeClass = styles[size];
    return (
        <button type={type} onClick={onClick} className={`${styles["btn"]} ${sizeClass} ${variantClass}`} disabled={disabled || isLoading}>
            {isLoading ? (
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color="currentColor" fill="currentColor" className={styles["animate-spin"]}>
                        <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25" />
                        <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" />
                    </svg>
                    Processing...
                </>
            ) : (
                <>
                    {iconPosition === "left" && <span className={styles.icon}>{icon}</span>}
                    {children}
                    {iconPosition === "right" && <span className={styles.icon}>{icon}</span>}
                </>
            )}
        </button>
    );
};

export default Button;
