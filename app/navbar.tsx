"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { MdClose, MdMenu } from "react-icons/md";

export /**
 * Simple Navbar/header allowing easy access
 *
 * @return {*}
 */
const Navbar = () => {
  // hamburger menu open/closed state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 h-20 w-full border-b border-gray-900/10 bg-white">
      <nav
        className="lg:px-98 mx-auto flex max-w-[1600px] items-center justify-between p-6"
        aria-label="Global"
      >
        <div className="flex items-center gap-x-12">
          <Link
            href={"/"}
            className="-m-1.5 flex flex-row place-items-center p-1.5"
          >
            <h2 className="ml-1 text-lg bg-black font-semibold">
              Subspace Project
            </h2>
          </Link>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link
              href={"https://github.com/SethY8s"}
              className="text-md leading-6 text-gray-900"
            >
              My Github
            </Link>
            <Link
              href={"https://github.com/SethY8s/subspace-project#readme"}
              className="text-md leading-6 text-gray-900"
            >
              Read Me
            </Link>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <MdMenu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex">
          <button className="bg-black">Button</button>
        </div>
      </nav>
      <Dialog
        as="nav"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href={"/"}
              className="-m-1.5 flex flex-row place-items-center p-1.5"
            >
              {/* <MaetIcon size={10} /> */}
              <button className="bg-black">button</button>
              <h2 className="ml-1 text-lg font-semibold">Subspace Project</h2>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <MdClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href={"https://github.com/SethY8s"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  My Github
                </Link>
                <Link
                  href={"https://github.com/SethY8s/subspace-project#readme"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Read Me
                </Link>
              </div>
              <div className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                {/* <ProfileButton /> */}
                <button>button</button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
