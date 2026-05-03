'use client';

import Link from 'next/link';
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // ===== Email Register =====
  const handleRegister = async e => {
    e.preventDefault();
    setLoading(true);

    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;

    const { error } = await authClient.signUp.email({
      name: fullName,
      email,
      password,
      image,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || 'Registration failed. Try again.');
    } else {
      toast.success('Account created successfully!');
      router.push('/login');
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-12">
      <div className="bg-base-100 rounded-2xl shadow-md w-full max-w-md px-8 py-10">
        {/*  Logo  */}
        <div className="text-center mb-1">
          <h2 className="text-xl font-bold">
            Skill<span className="text-primary">Sphere</span>
          </h2>
          <p className="text-base-content/50 text-sm mt-1">
            Create your account and start learning!
          </p>
        </div>

        {/*  Title  */}
        <h1 className="text-xl font-bold text-center mt-4 mb-6">
          Create an account
        </h1>

        {/*  Form  */}
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          {/* Full Name */}
          <div>
            <label className="text-sm font-semibold mb-1 block">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              required
              className="input input-bordered w-full"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-semibold mb-1 block">
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              required
              className="input input-bordered w-full"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="text-sm font-semibold mb-1 block">
              Photo URL
            </label>
            <input
              type="url"
              name="image"
              placeholder="https://example.com/photo.jpg"
              className="input input-bordered w-full"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-semibold mb-1 block">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Min. 6 characters"
              required
              minLength={6}
              className="input input-bordered w-full"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full mt-1"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        {/*  Login Link  */}
        <p className="text-center text-sm text-base-content/60 mt-5">
          Already have an account?{' '}
          <Link href="/login" className="text-primary font-semibold">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
