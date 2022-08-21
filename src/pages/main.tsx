import type { NextPage } from "next";
import { SwiperCards } from "src/component/modal/swiper";
import { Layout } from "src/layout";

const Main: NextPage = () => {
  return (
    <Layout>
      <div>
        Main page
        <SwiperCards />
      </div>
    </Layout>
  );
};

export default Main;
