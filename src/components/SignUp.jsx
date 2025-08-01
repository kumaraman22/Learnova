import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedCircles from '../components/AnimatedCircles';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement sign up logic, e.g., call API
    alert("Signed up: " + name);
    // Optionally navigate("/login")
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <AnimatedCircles />
      <div className="relative z-10 bg-white/90 rounded-2xl shadow-2xl px-6 py-10 md:px-12 w-full max-w-md mx-2">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-brightGreen">
          Create Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1 font-medium" htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brightGreen"
              value={name}
              onChange={e=>setName(e.target.value)}
              autoComplete="name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brightGreen"
              value={email}
              onChange={e=>setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brightGreen"
              value={password}
              onChange={e=>setPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-brightGreen text-white font-semibold rounded-lg shadow hover:bg-green-600 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-brightGreen font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
