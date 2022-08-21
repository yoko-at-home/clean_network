import type { NextPage } from "next";
import { ModalComponent } from "src/component/modal";
import { Layout } from "src/layout";

const User: NextPage = () => {
  return (
    <Layout>
      <ModalComponent />
    </Layout>
  );
};

export default User;
