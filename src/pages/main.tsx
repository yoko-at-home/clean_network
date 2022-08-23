import { Button, NumberInput, Radio, RadioGroup, Slider } from "@mantine/core";
import type { NextPage } from "next";
import {
  RadioButtons,
  NumberOfFollowers,
  MainButtons,
  ZoomSlider,
  SpacingSlider,
} from "src/component/mainGadgets";
import { Layout } from "src/layout";

const Main: NextPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 p-3">
        <div className="flex items-start justify-between">
          <div className="grid grid-cols-2 items-end">
            <RadioButtons />
            <NumberOfFollowers />
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
