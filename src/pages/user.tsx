/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import type { NextPage } from "next";
import { Layout } from "src/layout";
import { AccessDenied } from "src/component/auth";
import { ModalComponent } from "src/component/modal";
import { MyAvatar } from "src/component/atom/Avatar";

const User: NextPage = () => {
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
  }, [session, content]);

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading) return null;

  // If session exists, display content
  return (
    <Layout>
      {!session ? (
        <AccessDenied />
      ) : (
        <div>
          <div className="mt-3 flex flex-col place-items-center">
            <div className="mb-1">{content}</div>
            <MyAvatar />
          </div>
          <ModalComponent />
        </div>
      )}
    </Layout>
  );
};
export default User;
