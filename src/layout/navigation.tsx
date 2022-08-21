import Link from "next/link";
import { useState } from "react";
import { Burger } from "@mantine/core";

const items = [
  { href: "/", label: "Home" },
  // { href: "/user", label: "User" },
  { href: "/main", label: "Main" },
];
export const Navigation = () => {
  return (
    <div className="flex leading-6">
      {items.map(({ href, label }) => {
        return (
          <Link key={href} href={href}>
            <a className="mr-2 whitespace-nowrap bg-gradient-to-r from-green-600 to-violet-900 bg-clip-text font-mono text-lg font-semibold tracking-widest text-transparent">
              {label}
            </a>
          </Link>
        );
      })}
    </div>
  );
};
export const NavMobile = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <div className="text-white sm:hidden">
      <Burger
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        title={title}
      />
      <div
        className={`duration-0 fixed top-0  right-0 z-10 h-full w-full transform overflow-auto bg-[#177805]/90 px-6 pt-6 ${
          opened ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          title={title}
          color="#fff"
        />
        <div className="mt-6 flex flex-col">
          {items.map(({ href, label }) => {
            return (
              <Link key={href} href={href}>
                <a className="whitespace-nowrap text-2xl font-semibold leading-relaxed">
                  {label}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
