import type { NextPage } from "next";
import {
  MainButtons,
  ZoomSlider,
  SpacingSlider,
  ShowFollowerControl,
} from "src/component/mainGadgets";
import { Layout } from "src/layout";

const Main: NextPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 p-3">
        <div className="flex items-start justify-between">
          <div className="grid grid-cols-2 items-end">
            <ShowFollowerControl />
            <ZoomSlider />
            <SpacingSlider />
          </div>
          <MainButtons />
        </div>
      </div>
    </Layout>
  );
};

export default Main;
