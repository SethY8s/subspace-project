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
    <header className="fixed top-0 z-50 h-20 w-full border-b border-gray-900/10">
      <nav
        className="lg:px-98 mx-auto flex text-gray-600 max-w-[1600px] items-center justify-between p-6"
        aria-label="Global"
      >
        <div className="flex items-center gap-x-12">
          <Link
            href={"/"}
            className="-m-1.5 flex flex-row place-items-center p-1.5"
          >
            <h2 className="ml-1 text-lg font-semibold">Subspace Project</h2>
          </Link>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link
              href={"https://github.com/SethY8s"}
              className="text-md leading-6"
            >
              My Github
            </Link>
            <Link
              href={"https://github.com/SethY8s/subspace-project#readme"}
              className="text-md leading-6"
            >
              Read Me
            </Link>
          </div>
        </div>
        <div className="flex lg:hidden">
          {mobileMenuOpen ? null : (
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
              onClick={() => setMobileMenuOpen(true)}
            >
              <MdMenu className="h-6 w-6" aria-hidden="true" />
            </button>
          )}
        </div>
      </nav>
      {/* mobile section */}
      <Dialog
        as="nav"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gradient-to-t from-gray-900 to-gray-200 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href={"/"}
              className="-m-1.5 flex flex-row place-items-center p-1.5"
            ></Link>
            <button
              type="button"
              className="-m-2.5 color-gray-600 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <MdClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 text-gray-600 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href={"https://github.com/SethY8s"}
                  className="-mx-3 mt-6 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                >
                  My Github
                </Link>
                <Link
                  href={"https://github.com/SethY8s/subspace-project#readme"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                >
                  Read Me
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
