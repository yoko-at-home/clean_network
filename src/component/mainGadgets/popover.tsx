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

  const router = useRouter();
  const signOut = () => {
    router.push("/");
  };

  return (
    <Menu
      size="lg"
      position="top"
      placement="end"
      transition="pop-top-right"
      control={
        <ActionIcon variant="hover" radius="xl" size={30}>
          <UserIcon />
        </ActionIcon>
      }
    >
      <div className="mx-auto">
        {!session && (
          <Button
            color="indigo"
            variant="outline"
            size="md"
            onClick={() => signIn()}
          >
            <Lottie animationData={TwitterNotification} loop />
            &nbsp; Sign in with Twitter
          </Button>
        )}
        {session && (
          <div className="flex justify-end p-5">
            <Button color="indigo" variant="outline" onClick={() => signOut()}>
              Sign out
            </Button>
          </div>
        )}
      </div>
    </Menu>
  );
};
