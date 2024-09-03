"use client";

import React, { useState } from "react";
import GoogleButton from "./googleButton";
import { Input } from "../ui/input";
import PasswordInput from "./passwordInput";
import { Button } from "../ui/button";
import OrDivider from "./orDivider";
import { motion } from "framer-motion";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    // Handle registration logic
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
        Register
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
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="hover:border-blue-500 focus:border-blue-500"
        />
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4, ease: "easeInOut" }}
        className="w-full"
      >
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="hover:border-blue-500 focus:border-blue-500"
        />
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.4, ease: "easeInOut" }}
        className="w-full"
      >
        <PasswordInput
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full"
      >
        <Button
          onClick={handleRegister}
          className="w-full bg-green-500 hover:bg-green-600 transition-colors"
        >
          Submit
        </Button>
      </motion.div>

      <p className="text-sm text-gray-500">
        By signing up, you agree to our{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Privacy Policy
        </a>
        .
      </p>

      <p className="text-sm text-gray-500">
        Already registered?{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Login
        </a>
      </p>
    </motion.div>
  );
};

export default Register;
