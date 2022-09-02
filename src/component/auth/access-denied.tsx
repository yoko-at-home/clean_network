import { signIn, useSession } from "next-auth/react";

export const AccessDenied = () => {
  const handleOnClick = () => {
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      e.preventDefault();
      signIn();
    };
  };
  return (
    <div className="text-lg">
      <a className="" href="/api/auth/signin" onClick={handleOnClick}>
        To view the contents of this page, click here.
      </a>
    </div>
  );
};
