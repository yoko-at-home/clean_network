import { useRouter } from "next/router";
import { FC } from "react";
import { Menu, ActionIcon } from "@mantine/core";
import { UserIcon } from "src/component/userIcon";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@mantine/core";
import Lottie from "lottie-react";
import TwitterNotification from "./18887-twitter-notification.json";

export const SigninPopover: FC = () => {
  const { data: session } = useSession();
  console.log("session", session);

  return (
    <Menu
      size="lg"
      position="top"
      placement="end"
      transition="pop-top-right"
      control={
        <ActionIcon variant="hover" radius="xl" size={45}>
          <UserIcon />
        </ActionIcon>
      }
    >
      <div className="mx-auto p-0">
        {!session && (
          <Button
            color="indigo"
            variant="outline"
            size="md"
            onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
              e.preventDefault();
              signIn();
            }}
          >
            <Lottie animationData={TwitterNotification} loop />
            &nbsp; Sign in with Twitter
          </Button>
        )}
        {session && (
          <div className="flex justify-between">
            <Button
              color="indigo"
              variant="outline"
              onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign out
            </Button>
            <span
              className="bg-cover bg-center text-xs"
              // style={{ backgroundImage: `url(${session.user.image})` }}
            >
              <small> Signed in as </small>
              <strong>{session.user.email || session.user.name}</strong>
            </span>
          </div>
        )}
      </div>
    </Menu>
  );
};
