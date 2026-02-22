import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";

// Zod schema for validation
const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

export default function Login() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data) => {
    const savedData = JSON.parse(localStorage.getItem("userDataReg"));

    if (!savedData) {
      setLoginError("No registered user found. Please register first.");
      return;
    }

    if (data.email === savedData.email && data.password === savedData.password) {
      setLoginError("");
      localStorage.setItem(
        "userDataReg",
        JSON.stringify({ ...savedData, login: true,reg:localStorage.getItem("userConfigeration") })
      );
      reset();
      navigate(localStorage.getItem("userConfigeration"));
    } else {
      setLoginError("Email or password is incorrect");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 transition-colors duration-500 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg dark:shadow-black/40 transition-colors duration-500">
        {/* Login Error */}
        {loginError && (
          <p className="text-red-500 text-sm sm:text-base mt-1 text-center">
            {loginError}
          </p>
        )}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter your email"
              className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 text-base sm:text-lg ${
                errors.email
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 dark:border-gray-700 focus:ring-blue-500"
              } dark:bg-gray-800 dark:text-white`}
            />
            {errors.email && (
              <span className="text-red-500 text-sm sm:text-base mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              {...register("password")}
              placeholder="Enter your password"
              className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 text-base sm:text-lg ${
                errors.password
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 dark:border-gray-700 focus:ring-blue-500"
              } dark:bg-gray-800 dark:text-white`}
            />
            {errors.password && (
              <span className="text-red-500 text-sm sm:text-base mt-1">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 w-full py-2 sm:py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-xl hover:bg-blue-500 dark:hover:bg-blue-600 transition shadow-lg shadow-blue-600/40 dark:shadow-blue-500/40 text-base sm:text-lg"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
