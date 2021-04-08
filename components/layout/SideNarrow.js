import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const SideNarrowItem = ({ href, children }) => {
  const router = useRouter();

  let className = children.props.className || "";

  if (router.pathname === href) {
    className = `bg-gray-900 text-white flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};

const SideNarrow = () => (
  <nav
    aria-label="Sidebar"
    className="hidden md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto">
    <div className="relative w-20 flex flex-col p-3 space-y-3">
      <SideNarrowItem href="/">
        <a className="text-gray-400 hover:bg-gray-700 flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg">
          <span className="sr-only">Flagged</span>
          {/*  Heroicon name: outline/flag  */}
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
            />
          </svg>
        </a>
      </SideNarrowItem>

      <SideNarrowItem href="/user/profile">
        <a className="text-gray-400 hover:bg-gray-700 flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg">
          <span className="sr-only">Customers</span>
          {/*  Heroicon name: outline/user-circle  */}
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </a>
      </SideNarrowItem>
    </div>
  </nav>
);

export default SideNarrow;
