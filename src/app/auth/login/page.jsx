import LoginBanner from "@/components/auth/LoginBanner";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
    return (
        <main className="container mx-auto min-h-screen lg:grid lg:grid-cols-2">
            <LoginBanner />
            <LoginForm />
        </main>
    );
}
