// src/components/Footer.jsx

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-base-200 mt-auto">
      {/* ===== MAIN FOOTER ===== */}
      <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* ===== Brand Section ===== */}
        <div>
          <h2 className="text-2xl font-bold mb-3">
            Skill<span className="text-primary">Sphere</span>
          </h2>
          <p className="text-base-content/70 text-sm leading-relaxed mb-4">
            Empowering learners with expert-led courses in tech, design, and
            marketing. Learn at your own pace, anytime, anywhere.
          </p>
          <div className="flex gap-3 mt-2">
            <a
              href="#"
              className="btn btn-ghost btn-circle btn-sm text-primary hover:bg-primary hover:text-white"
            >
              <FaFacebook size={16} />
            </a>
            <a
              href="#"
              className="btn btn-ghost btn-circle btn-sm text-primary hover:bg-primary hover:text-white"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="#"
              className="btn btn-ghost btn-circle btn-sm text-primary hover:bg-primary hover:text-white"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="#"
              className="btn btn-ghost btn-circle btn-sm text-primary hover:bg-primary hover:text-white"
            >
              <FaYoutube size={16} />
            </a>
          </div>
        </div>

        {/* ===== Quick Links ===== */}
        <div>
          <p className="text-base-content font-semibold text-sm uppercase tracking-wider mb-4">
            Quick Links
          </p>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/"
                className="link link-hover text-sm text-base-content/70"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="link link-hover text-sm text-base-content/70"
              >
                All Courses
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="link link-hover text-sm text-base-content/70"
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="link link-hover text-sm text-base-content/70"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className="link link-hover text-sm text-base-content/70"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>

        {/* ===== Contact ===== */}
        <div>
          <p className="text-base-content font-semibold text-sm uppercase tracking-wider mb-4">
            Contact
          </p>
          <ul className="flex flex-col gap-3 text-sm text-base-content/70">
            <li>📧 hello@skillsphere.com</li>
            <li>📞 +1 800 SKILL</li>
            <li>📍 Dhaka, Bangladesh</li>
          </ul>

          <p className="text-base-content font-semibold text-sm uppercase tracking-wider mb-3 mt-6">
            Legal
          </p>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/terms"
                className="link link-hover text-sm text-base-content/70"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="link link-hover text-sm text-base-content/70"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="border-t border-base-300">
        <div className="max-w-7xl mx-auto px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-sm text-base-content/60">
            © {new Date().getFullYear()} SkillSphere. All rights reserved.
          </p>
          <p className="text-sm text-base-content/60">
            Made with ❤️ for learners everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
