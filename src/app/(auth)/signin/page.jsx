"use client";

import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
    Button,
    FieldError,
    Form,
    Input,
    InputGroup,
    Label,
    TextField,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState, Suspense } from "react";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

// Import your auth client (uncomment when ready)
// import { authClient } from "@/lib/auth-client";

function LoginForm() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const callbackUrl = searchParams.get("callbackUrl") || "/";
    const [isVisible, setIsVisible] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            // Mock success
            const error = null; 

            if (error) {
                toast.error(error.message || "Invalid credentials", { position: "top-center", autoClose: 3000 });
                return;
            }

            toast.success("Login successful!", { position: "top-center", autoClose: 2000 });
            router.push(callbackUrl);
        } catch (err) {
            toast.error("An unexpected error occurred.", { position: "top-center", autoClose: 3000 });
        }
    };

    const handleGoogle = async () => {
        try {
            console.log("Google Auth Triggered");
        } catch (err) {
            toast.error("Google login failed.");
        }
    };

    return (
        <div className="w-full max-w-md mx-auto">
            {/* Header Section */}
            <div className="mb-8 text-center">
                <h2 className="text-4xl font-bold bg-gradient-to-b from-[#006b5f] to-[#14b8a6] bg-clip-text text-transparent mb-2 drop-shadow-sm">
                    DocAppoint
                </h2>
                <h1 className="text-xl font-semibold text-gray-800 drop-shadow-sm">Welcome back</h1>
                <p className="text-gray-700 text-sm mt-1 font-medium">
                    Please enter your credentials to access your account.
                </p>
            </div>

            {/* Form Section */}
            <Form className="flex flex-col gap-5" render={(props) => <form {...props} />} onSubmit={onSubmit}>
                {/* Email Field */}
                <div>
                    <TextField isRequired name="email" type="email" validate={(value) => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) ? "Please enter a valid email address" : null}>
                        <Label className="text-gray-800 font-semibold text-sm mb-1 block">Email Address</Label>
                        <Input placeholder="name@example.com" className="bg-white/30 border border-white/40 focus-within:border-[#006b5f] focus-within:bg-white/50 transition-all placeholder:text-gray-600 text-gray-800 backdrop-blur-sm" />
                        <FieldError />
                    </TextField>
                </div>

                {/* Password Field */}
                <div>
                    <TextField isRequired className="w-full" name="password">
                        <div className="flex justify-between items-center mb-1">
                            <Label className="text-gray-800 font-semibold text-sm">Password</Label>
                            <Link href="/forgot-password" className="text-xs font-bold text-[#006b5f] hover:text-[#14b8a6] transition-colors underline decoration-transparent hover:decoration-current">Forgot password?</Link>
                        </div>
                        <InputGroup className="rounded-xl bg-white/30 border border-white/40 focus-within:border-[#006b5f] focus-within:bg-white/50 transition-all backdrop-blur-sm">
                            <InputGroup.Input placeholder="••••••••" className="w-full placeholder:text-gray-600 text-gray-800 bg-transparent" type={isVisible ? "text" : "password"} />
                            <InputGroup.Suffix className="pr-2">
                                <Button isIconOnly aria-label={isVisible ? "Hide password" : "Show password"} size="sm" variant="ghost" onPress={() => setIsVisible(!isVisible)} className="text-[#006b5f] hover:bg-white/50">
                                    {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                                </Button>
                            </InputGroup.Suffix>
                        </InputGroup>
                        <FieldError />
                    </TextField>
                </div>

                {/* Login Button */}
                <div className="pt-2">
                    <Button type="submit" className="w-full rounded-xl bg-gradient-to-r from-[#006b5f] to-[#14b8a6] text-white font-bold shadow-lg hover:shadow-teal-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-white/10">
                        <Check className="mr-2 size-5" /> Login
                    </Button>
                </div>
            </Form>

            {/* Divider */}
            <div className="my-6">
                <div className="flex items-center w-full">
                    <hr className="flex-grow border-t border-gray-400/30" />
                    <span className="px-4 text-xs font-bold text-gray-600 uppercase tracking-wider">Or continue with</span>
                    <hr className="flex-grow border-t border-gray-400/30" />
                </div>
            </div>

            {/* Google Button */}
            <div>
                <Button onClick={handleGoogle} className="w-full rounded-xl border border-gray-300/50 bg-white/30 hover:bg-white/50 text-gray-800 font-medium hover:border-teal-300 transition-all backdrop-blur-sm" variant="bordered">
                    <Icon icon="devicon:google" className="text-lg mr-2" /> Sign in with Google
                </Button>
            </div>

            {/* Footer Link */}
            <div className="text-center mt-6 text-sm">
                <span className="text-gray-700 font-medium">New to DocAppoint? </span>
                <Link href="/signup" className="font-bold text-[#006b5f] hover:text-[#14b8a6] transition-colors ml-1 underline decoration-transparent hover:decoration-current">Register</Link>
            </div>
        </div>
    );
}

// Main Page Component
const LoginPage = () => {
    return (
        // 1. Page Background (Clean Neutral)
        <main className="min-h-screen w-full flex items-center justify-center p-4 md:p-8  relative overflow-hidden">
            
            {/* Optional: Subtle ambient background blobs for depth behind the glass card */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#14b8a6]/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#006b5f]/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            {/* 2. THE MASTER GLASS CARD (Contains Both Image and Form) */}
            <div className="relative w-full max-w-6xl min-h-[600px] md:h-[700px] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-[40px] overflow-hidden flex flex-col md:flex-row">
                
                {/* LEFT SIDE: Hero Image & Content */}
                <section className="hidden md:flex md:w-1/2 relative items-end justify-start p-12 overflow-hidden group">
                    
                    {/* The Heart Image */}
                    <Image
                        src="/heart.png" 
                        alt="Medical Heart Illustration"
                        fill
                        className="object-cover z-0 transition-transform duration-700 group-hover:scale-105"
                        priority
                    />

                    {/* Gradient Overlay (Only on the image side) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#006b5f]/90 via-[#006b5f]/40 to-transparent z-10"></div>

                    {/* Text Content on Top of Image */}
                    <div className="relative z-20 text-white max-w-md">
                        <h1 className="font-sans text-4xl font-bold mb-4 leading-tight drop-shadow-md">
                            Precision healthcare for a modern world.
                        </h1>
                        <p className="font-sans text-base opacity-90 leading-relaxed mb-6 drop-shadow-sm">
                            Seamlessly manage your medical journey with DocAppoint's intuitive platform designed for both patients and providers.
                        </p>
                        
                        {/* HIPAA Badge */}
                        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/30 px-4 py-3 rounded-xl shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                                <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.352-.272-2.636-.759-3.828a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium text-sm tracking-wide">HIPAA Compliant</span>
                        </div>
                    </div>
                </section>

                {/* RIGHT SIDE: Transparent Form Area */}
                <section className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 relative bg-white/5">
                    {/* Subtle separator line between image and form on desktop */}
                    <div className="hidden md:block absolute left-0 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                    
                    <Suspense fallback={<div className="animate-pulse space-y-4 w-full max-w-md"><div className="h-12 bg-white/20 rounded-xl"></div><div className="h-12 bg-white/20 rounded-xl"></div></div>}>
                        <LoginForm />
                    </Suspense>
                </section>

            </div>
        </main>
    );
};

export default LoginPage;