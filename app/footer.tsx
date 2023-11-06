import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export /**
 * Easy to use prebuilt footer
 *
 */
const Footer = () => (
  <footer className="w-full">
    <div className="pb-2 overflow-hidden px-6 lg:px-8">
      <nav
        className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
        aria-label="Footer"
      >
        <div className="pb-6 text-center sm:px-3">
          <Link
            href="https://github.com/SethY8s/subspace-project#readme"
            className="text-sm leading-6 text-gray-600 hover:text-gray-900"
          >
            Read Me
          </Link>
        </div>
      </nav>
      <div className="mt-10 flex justify-center space-x-10">
        <Link
          href="https://www.linkedin.com/in/seth-yates-9ba83b238/"
          className="text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">LinkedIn</span>
          <FaLinkedinIn className="h-6 w-6" aria-hidden="true" />
        </Link>

        <Link
          href="https://github.com/SethY8s"
          className="text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Github</span>
          <FaGithub className="h-6 w-6" aria-hidden="true" />
        </Link>
      </div>
      <p className="mt-10 text-center text-xs leading-5 text-gray-500">
        Created and Maintained by<b className="ml-1">Seth Yates</b>
      </p>
    </div>
  </footer>
);
