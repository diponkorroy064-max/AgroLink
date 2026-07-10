export interface RegisterFormData {
    name: string;
    email: string;
    photoURL?: string;
    role: "farmer" | "student" | "expert" | "business";
    password: string;
    confirmPassword: string;
    terms: boolean;
}


export interface LoginFormData {
    email: string;
    password: string;
}

