import type { NextPage } from "next";
import { UserIcon } from "src/component/userIcon";
import { Layout } from "src/layout";

const User: NextPage = () => {
  return (
    <Layout>
      <div className="flex justify-around pt-6">
        <div>user page</div>
        <UserIcon />
      </div>
    </Layout>
  );
};

export default User;
