import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-base-200 mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-8">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h2 className="text-2xl font-bold mb-3">
            Skill<span className="text-primary">Sphere</span>
          </h2>
          <p className="text-base-content/70 text-sm leading-relaxed mb-4 max-w-sm">
            Empowering learners with expert-led courses in tech, design, and
            marketing. Learn at your own pace, anytime, anywhere.
          </p>
          <div className="flex gap-3 mt-2">
            <a
              href="https://www.facebook.com/jobayer.hosen.juba"
              className="btn btn-ghost btn-circle btn-sm text-primary hover:bg-primary hover:text-white"
            >
              <FaFacebook size={16} />
            </a>
            <a
              href="https://github.com/JOBAYER07-dev"
              className="btn btn-ghost btn-circle btn-sm text-primary hover:bg-primary hover:text-white"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/jobayer-dev/"
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

        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
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

        <div className="flex flex-col items-center sm:items-start text-center sm:text-left sm:col-span-2 md:col-span-1">
          <p className="text-base-content font-semibold text-sm uppercase tracking-wider mb-4">
            Contact
          </p>
          <ul className="flex flex-col gap-3 text-sm text-base-content/70 items-center sm:items-start">
            <li className="flex items-center gap-2">
              📧 jobayerhosen045@gmail.com
            </li>
            <li className="flex items-center gap-2">📞 01861961550</li>
            <li className="flex items-center gap-2">📍 Dhaka, Bangladesh</li>
          </ul>

          <p className="text-base-content font-semibold text-sm uppercase tracking-wider mb-3 mt-8">
            Legal
          </p>
          <ul className="flex flex-col gap-2 items-center sm:items-start">
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

      <div className="border-t border-base-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
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
