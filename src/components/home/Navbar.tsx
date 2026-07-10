"use client";
import Link from "next/link";
import { Menu, X, Leaf } from "lucide-react";
import { useState } from "react";
import Container from "../shared/Container";

const navLinks = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Explore",
        href: "/explore",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Contact",
        href: "/contact",
    },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    // Change this after authentication
    const isLoggedIn = false;

    return (
        <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
            <Container>
                {/* Desktop Navbar */}
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Leaf className="h-8 w-8 text-green-600" />

                        <div>
                            <h1 className="text-2xl font-bold text-green-700">
                                AgroLink
                            </h1>

                            <p className="text-xs text-gray-500">
                                Connecting Farmers with Modern Agriculture
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden items-center gap-8 md:flex">
                        {navLinks.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="font-medium text-gray-700 transition-colors duration-300 hover:text-green-600"
                            >
                                {item.title}
                            </Link>
                        ))}

                        {isLoggedIn && (
                            <>
                                <Link
                                    href="/dashboard"
                                    className="font-medium text-gray-700 hover:text-green-600"
                                >
                                    Dashboard
                                </Link>

                                <Link
                                    href="/resources/add"
                                    className="font-medium text-gray-700 hover:text-green-600"
                                >
                                    Add Resource
                                </Link>
                            </>
                        )}
                    </nav>

                    {/* Desktop Right */}
                    <div className="hidden md:block">
                        {isLoggedIn ? (
                            <button className="rounded-xl bg-red-500 px-5 py-2 text-white transition hover:bg-red-600">
                                Logout
                            </button>
                        ) : (
                            <Link
                                href="/login"
                                className="rounded-xl bg-green-600 px-5 py-2 font-medium text-white transition hover:bg-green-700"
                            >
                                Login
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle Menu"
                    >
                        {open ? (
                            <X className="h-7 w-7" />
                        ) : (
                            <Menu className="h-7 w-7" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="border-t py-5 md:hidden">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="font-medium text-gray-700 hover:text-green-600"
                                >
                                    {item.title}
                                </Link>
                            ))}

                            {isLoggedIn && (
                                <>
                                    <Link
                                        href="/dashboard"
                                        className="font-medium text-gray-700 hover:text-green-600"
                                    >
                                        Dashboard
                                    </Link>

                                    <Link
                                        href="/resources/add"
                                        className="font-medium text-gray-700 hover:text-green-600"
                                    >
                                        Add Resource
                                    </Link>
                                </>
                            )}

                            {isLoggedIn ? (
                                <button className="rounded-xl bg-red-500 py-2 text-white">
                                    Logout
                                </button>
                            ) : (
                                <Link
                                    href="/login"
                                    className="rounded-xl bg-green-600 py-2 text-center text-white"
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </Container>
        </header>
    );
}
