"use client";

import { authClient } from "@/lib/auth-client";
import { Eye, EyeSlash, Lock, Person } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";
import { CgMail } from "react-icons/cg";
import { FiLink } from "react-icons/fi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

// Password Validation Item
const ValidationItem = ({ isValid, text }) => (
  <div className="flex items-center gap-2">
    <div
      className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all duration-200 ${isValid
          ? "bg-teal-500 border-teal-500 text-white"
          : "border-gray-300 bg-transparent"
        }`}
    >
      {isValid && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-2.5 h-2.5"
        >
          <path
            fillRule="evenodd"
            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>

    <span
      className={`text-sm transition-colors duration-200 ${isValid ? "text-teal-600 font-medium" : "text-gray-500"
        }`}
    >
      {text}
    </span>
  </div>
);

const RightSide = () => {
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");

  // Password Validation
  const hasMinLength = passwordValue.length >= 6;
  const hasNumber = /\d/.test(passwordValue);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue);
  const hasUppercase = /[A-Z]/.test(passwordValue);
  const hasLowercase = /[a-z]/.test(passwordValue);

  const isPasswordValid =
    hasMinLength &&
    hasNumber &&
    hasSpecialChar &&
    hasUppercase &&
    hasLowercase;

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const image = formData.get("photoUrl");
    const password = formData.get("password");

    // Final Password Check
    if (!isPasswordValid) {
      toast.error("Please meet all password requirements.", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    try {
      const { data, error } = await authClient.signUp.email({
        email,
        password,
        name,
        image,
      });
      if (error) {
        throw new Error(error.message || "Signup failed");
      }

      toast.success("Welcome! Account created successfully 🎉", {
        position: "top-center",
        autoClose: 3000,
      });
      // signout the user  for login
      await authClient.signOut();
      router.push("/signin");
    } catch (err) {
      console.error(err);

      toast.error(err.message || "Something went wrong", {
        position: "top-center",
        autoClose: 3000,
      });

    }

  };

  const handleGoogle = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
      });
    } catch (error) {
      console.error("Google Auth Error:", error);
      toast.error(error.message || "Google Auth Error", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="w-full flex items-center justify-center min-h-[calc(100vh-80px)]  p-4">
      <div></div>
      <div className="w-full max-w-[480px]  border border-gray-100 shadow-2xl rounded-3xl p-8 sm:p-10">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2 text-sm">
            Join our healthcare community today.
          </p>
        </div>

        <Form onSubmit={onSubmit} className="flex flex-col gap-5">

          {/* Full Name */}
          <TextField isRequired name="name">
            <Label className="text-gray-700 font-medium text-sm mb-1 block">
              Full Name
            </Label>

            <InputGroup className="rounded-xl border border-gray-200 bg-gray-50 focus-within:bg-white focus-within:border-teal-500 focus-within:ring-4 focus-within:ring-teal-500/10 transition-all duration-200">
              <InputGroup.Prefix className="pl-3 text-gray-400">
                <Person className="size-5" />
              </InputGroup.Prefix>

              <InputGroup.Input
                name="name"
                placeholder="Dr. John Doe"
                className="w-full bg-transparent h-11 text-gray-900 placeholder:text-gray-400"
              />
            </InputGroup>

            <FieldError />
          </TextField>

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label className="text-gray-700 font-medium text-sm mb-1 block">
              Email Address
            </Label>

            <InputGroup className="rounded-xl border border-gray-200 bg-gray-50 focus-within:bg-white focus-within:border-teal-500 focus-within:ring-4 focus-within:ring-teal-500/10 transition-all duration-200">
              <InputGroup.Prefix className="pl-3 text-gray-400">
                <CgMail className="size-5" />
              </InputGroup.Prefix>

              <InputGroup.Input
                name="email"
                placeholder="name@example.com"
                className="w-full bg-transparent h-11 text-gray-900 placeholder:text-gray-400"
              />
            </InputGroup>

            <FieldError />
          </TextField>

          {/* Photo URL */}
          <TextField
            isRequired
            name="photoUrl"
            validate={(value) => {
              try {
                new URL(value);
                return null;
              } catch {
                return "Please enter a valid image URL";
              }
            }}
          >
            <Label className="text-gray-700 font-medium text-sm mb-1 block">
              Profile Photo URL
            </Label>

            <InputGroup className="rounded-xl border border-gray-200 bg-gray-50 focus-within:bg-white focus-within:border-teal-500 focus-within:ring-4 focus-within:ring-teal-500/10 transition-all duration-200">
              <InputGroup.Prefix className="pl-3 text-gray-400">
                <FiLink className="size-5" />
              </InputGroup.Prefix>

              <InputGroup.Input
                name="photoUrl"
                placeholder="https://image-link.com/photo.jpg"
                className="w-full bg-transparent h-11 text-gray-900 placeholder:text-gray-400"
              />
            </InputGroup>

            <FieldError />
          </TextField>

          {/* Password */}
          <TextField isRequired name="password">
            <Label className="text-gray-700 font-medium text-sm mb-1 block">
              Password
            </Label>

            <InputGroup className="rounded-xl border border-gray-200 bg-gray-50 focus-within:bg-white focus-within:border-teal-500 focus-within:ring-4 focus-within:ring-teal-500/10 transition-all duration-200">
              <InputGroup.Prefix className="pl-3 text-gray-400">
                <Lock className="size-5" />
              </InputGroup.Prefix>

              <InputGroup.Input
                name="password"
                placeholder="••••••••"
                type={isVisible ? "text" : "password"}
                className="w-full bg-transparent h-11 text-gray-900 placeholder:text-gray-400"
                onChange={(e) => setPasswordValue(e.target.value)}
              />

              <InputGroup.Suffix className="pr-2">
                <Button
                  isIconOnly
                  type="button"
                  size="sm"
                  variant="light"
                  aria-label={
                    isVisible ? "Hide password" : "Show password"
                  }
                  onPress={() => setIsVisible(!isVisible)}
                  className="text-gray-400 hover:text-teal-600"
                >
                  {isVisible ? (
                    <EyeSlash className="size-5" />
                  ) : (
                    <Eye className="size-5" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>

            {/* Validation List */}
            <div className="mt-3 space-y-2 bg-gray-50/50 p-3 rounded-lg border border-gray-100">
              <ValidationItem
                isValid={hasMinLength}
                text="6+ characters"
              />

              <ValidationItem
                isValid={hasNumber}
                text="At least one number"
              />

              <ValidationItem
                isValid={hasUppercase}
                text="One uppercase letter"
              />

              <ValidationItem
                isValid={hasLowercase}
                text="One lowercase letter"
              />

              <ValidationItem
                isValid={hasSpecialChar}
                text="One special character (!@#$)"
              />
            </div>

            <FieldError />
          </TextField>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              isDisabled={!isPasswordValid}
              className=" bg-linear-to-r from-[#006b5f] to-[#14b8a6] text-white w-full rounded-full "
            >
              Create Account
            </Button>
          </div>
        </Form>

        {/* Divider */}
        <div className="my-8 flex items-center w-full">
          <hr className="flex-grow border-t border-gray-200" />

          <span className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Or
          </span>

          <hr className="flex-grow border-t border-gray-200" />
        </div>

        {/* Google Sign Up */}
        <Button
          onClick={handleGoogle}
          variant="bordered"
          className="w-full rounded-xl border border-gray-200 bg-white text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition-colors h-12 shadow-sm"
        >
          <Icon icon="devicon:google" className="text-lg mr-2" />
          Sign up with Google
        </Button>

        {/* Login Link */}
        <div className="text-center mt-8 text-sm">
          <span className="text-gray-500">
            Already have an account?
          </span>

          <Link
            href="/signin"
            className="font-semibold text-teal-600 hover:text-teal-700 transition-colors ml-1"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightSide;