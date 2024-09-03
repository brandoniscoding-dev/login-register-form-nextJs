"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { GoogleButton } from "./GoogleButton";
import { OrDivider } from "./OrDivider";
import { ConfirmPasswordField } from "./ConfirmPasswordField";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
      className="flex flex-col items-center p-6 space-y-6 max-w-md mx-auto bg-white rounded-lg shadow-lg"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
        className="text-3xl font-bold"
      >
        Login
      </motion.h1>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <GoogleButton />
      </motion.div>

      <OrDivider />

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4, ease: "easeInOut" }}
        className="w-full"
      >
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="hover:border-blue-500 focus:border-blue-500"
        />
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4, ease: "easeInOut" }}
        className="w-full"
      >
        <ConfirmPasswordField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full"
      >
        <Button
          onClick={handleLogin}
          className="w-full bg-green-500 hover:bg-green-600 transition-colors"
        >
          Login
        </Button>
      </motion.div>

      <p className="text-sm text-gray-500">
        Don’t have an account?{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Register
        </a>
      </p>
    </motion.div>
  );
};

