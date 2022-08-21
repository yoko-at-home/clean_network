import type { NextPage } from "next";
import { ModalComponent } from "src/component/modal";
import { Layout } from "src/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div>
        <ModalComponent />
      </div>
    </Layout>
  );
};

export default Home;
