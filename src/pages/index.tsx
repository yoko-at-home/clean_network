import type { NextPage } from "next";
import { SwiperCards } from "src/component/modal/";
import { Layout } from "src/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div>
        <SwiperCards />
      </div>
    </Layout>
  );
};

export default Home;
