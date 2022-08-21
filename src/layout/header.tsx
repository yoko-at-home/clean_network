/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { CSSProperties } from "react";
import { Navigation, NavMobile } from "src/layout/navigation";
import { Text } from "@mantine/core";
import { UserIcon } from "src/component/userIcon";

type Props = {
  inView: boolean;
  className?: CSSProperties;
};

export const HeaderPart = ({ inView }: Props) => {
  return (
    <div className="sticky top-0 z-50 items-center">
      <div
        className={`lg:px-46 flex justify-between py-5 px-4 leading-6 ${
          inView ? `` : "top-[0] flex bg-slate-50/60"
        }`}
      >
        <NavMobile />
        <Text size="lg" weight={700}>
          <Link href="/">
            <span className="bg-gradient-to-r from-green-600 to-violet-900 bg-clip-text font-mono text-xl tracking-widest text-transparent">
              グラフ管理アプリ
            </span>
          </Link>
        </Text>
        <div className="flex leading-6">
          <div className="hidden sm:block">
            <Navigation />
          </div>
          <Link href="/user">
            <a className="mr-2 whitespace-nowrap bg-gradient-to-r from-green-600 to-violet-900 bg-clip-text font-mono text-lg font-semibold tracking-widest text-transparent">
              <UserIcon />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
