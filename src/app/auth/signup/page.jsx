import RegisterBanner from "@/components/auth/RegisterBanner";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
    return (
        <main className="container mx-auto min-h-screen lg:grid lg:grid-cols-2">
            <RegisterBanner />
            <RegisterForm />
        </main>
    );
}
