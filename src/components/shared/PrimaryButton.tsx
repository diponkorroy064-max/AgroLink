import Link from "next/link";
import { ReactNode } from "react";

interface PrimaryButtonProps {
    href: string;
    children: ReactNode;
    variant?: "primary" | "outline" | "secondary";
    className?: string;
}

const PrimaryButton = ({
    href,
    children,
    variant = "primary",
    className = "",
}: PrimaryButtonProps) => {
    const baseStyles =
        "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm md:text-base font-semibold transition-all duration-300";

    const variants = {
        primary:
            "bg-green-600 text-white hover:bg-green-700 hover:shadow-lg",

        primaryLight:
            "bg-green-100 text-green-700 hover:bg-green-200 hover:text-green-800",

        outline:
            "border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white",

        secondary:
            "bg-amber-500 text-white hover:bg-amber-600 hover:shadow-lg",

        ghost:
            "bg-transparent text-green-700 hover:bg-green-100 hover:text-green-800",
    };

    return (
        <Link
            href={href}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </Link>
    );
};

export default PrimaryButton;
