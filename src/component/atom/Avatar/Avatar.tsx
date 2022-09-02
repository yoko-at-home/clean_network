import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Menu, ActionIcon } from "@mantine/core";

export const MyAvatar = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const [content, setContent] = useState();

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/control/protected");
      const json = await res.json();

      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);
  if (typeof window !== "undefined" && loading) return null;
  if (!session) {
    return null;
  }
  return (
    <div className="flex flex-col items-center">
      <div
        className=" h-16 w-16 whitespace-pre-wrap rounded-full bg-cover bg-center"
        style={{ backgroundImage: `url(${session.user.image})` }}
      ></div>
      <div> {session.user.name}</div>
    </div>
  );
};
