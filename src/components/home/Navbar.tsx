"use client";
import Link from "next/link";
import { Menu, X, Leaf } from "lucide-react";
import { useState } from "react";
import Container from "../shared/Container";
import { usePathname } from "next/navigation";
import { authClient, useSession } from "@/lib/auth-client";
// import { Avatar } from "@heroui/react";


const navLinks = [
    { title: "Home", href: "/" },
    { title: "Explore", href: "/explore" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const isDashboardActive = pathname.startsWith("/dashboard");

    const { data, isPending } = useSession();
    // console.log("User session:", data);
    // console.log('is pending from navbar', isPending)
    const user = data?.user;
    // console.log("User info:", user);
    // const isLoggedIn = !!data;

    return (
        <header className="sticky top-0 z-600 border-b bg-white shadow-sm">
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
                        {navLinks.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className={`font-medium transition-colors duration-300 hover:text-green-600 ${isActive ? "text-green-600" : "text-gray-700"}`}>
                                    {item.title}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop Right */}
                    <div className="hidden md:block">
                        {isPending &&
                            <div className="rounded-xl bg-gray-300 px-5 py-2 text-white">
                                Loading...
                            </div>
                        }

                        {
                            user ? (
                                <div className="flex items-center gap-4">
                                    <Link
                                        href="/dashboard"
                                        className={`font-medium transition-colors duration-300 ${isDashboardActive ? "text-green-600" : "text-gray-700 hover:text-green-600"}`}>
                                        Dashboard
                                    </Link>

                                    <p className="font-medium text-gray-900">{user?.name || "User"}</p>

                                    {/* <Avatar>
                                    <Avatar.Image alt="John Doe" src={user?.photoURL ||  user?.image} />
                                    <Avatar.Fallback>JD</Avatar.Fallback>
                                </Avatar> */}

                                    <button
                                        onClick={async () => await authClient.signOut()}
                                        className="cursor-pointer rounded-xl bg-red-500 px-5 py-2 text-white transition hover:bg-red-600">
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <Link
                                    href="/auth/login"
                                    className="rounded-xl bg-green-600 px-5 py-2 font-medium text-white transition hover:bg-green-700">
                                    Login
                                </Link>
                            )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden cursor-pointer"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle Menu">
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
                            {navLinks.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className={`font-medium transition-colors duration-300 hover:text-green-600 ${isActive ? "text-green-600" : "text-gray-700"}`}>
                                        {item.title}
                                    </Link>
                                )
                            })}

                            {user && (
                                <>
                                    <Link
                                        href="/dashboard"
                                        className={`font-medium transition-colors duration-300 ${isDashboardActive ? "text-green-600" : "text-gray-700 hover:text-green-600"}`}>
                                        Dashboard
                                    </Link>
                                </>
                            )}

                            {user ? (
                                <button
                                    className="cursor-pointer rounded-xl bg-red-500 py-2 text-white"
                                    onClick={async () => await authClient.signOut()}>
                                    Logout
                                </button>
                            ) : (
                                <Link
                                    href="/login"
                                    className="rounded-xl bg-green-600 py-2 text-center text-white">
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

