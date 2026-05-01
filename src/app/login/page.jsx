'use client';

import Link from 'next/link';
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // ===== Email Login =====
  const handleLogin = async e => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { error } = await authClient.signIn.email({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || 'Login failed. Try again.');
    } else {
      toast.success('Logged in successfully!');
      router.push('/');
    }
  };

  // ===== Google Login =====
  const handleGoogle = async () => {
    const { error } = await authClient.signIn.social({
      provider: 'google',
      callbackURL: '/',
    });

    if (error) {
      toast.error('Google sign-in failed. Try again.');
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-12">
      <div className="bg-base-100 rounded-2xl shadow-md w-full max-w-md px-8 py-10">
        {/* ===== Logo ===== */}
        <div className="text-center mb-1">
          <h2 className="text-xl font-bold">
            Skill<span className="text-primary">Sphere</span>
          </h2>
          <p className="text-base-content/50 text-sm mt-1">
            Welcome back! Sign in to continue.
          </p>
        </div>

        {/* ===== Title ===== */}
        <h1 className="text-xl font-bold text-center mt-4 mb-6">
          Login to your account
        </h1>

        {/* ===== Form ===== */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
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

          {/* Password */}
          <div>
            <label className="text-sm font-semibold mb-1 block">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              required
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
              'Login'
            )}
          </button>
        </form>

        {/* ===== Divider ===== */}
        <div className="divider text-xs text-base-content/40 my-4">
          or continue with
        </div>

        {/* ===== Google Button ===== */}
        <button
          onClick={handleGoogle}
          className="btn btn-outline w-full flex items-center gap-2"
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with Google
        </button>

        {/* ===== Register Link ===== */}
        <p className="text-center text-sm text-base-content/60 mt-5">
          Don't have an account?{' '}
          <Link href="/register" className="text-primary font-semibold">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
