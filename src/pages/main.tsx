import { Button, NumberInput, Radio, RadioGroup, Slider } from "@mantine/core";
import type { NextPage } from "next";
import { Layout } from "src/layout";

const Main: NextPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 p-3">
        <div className="flex justify-between">
          <div className="flex h-20 w-1/2 flex-col">
            <RadioGroup color="indigo" className="flex justify-between">
              <Radio value="react" label="Show Top" />
              <Radio value="svelte" label="Friends only" />
              <Radio value="ng" label="Show All Friends" />
            </RadioGroup>
            <div className="ml-6 mt-3 w-[80px]">
              <NumberInput
                defaultValue={50}
                placeholder="number of people"
                radius="xs"
                size="xs"
              />
            </div>
            <div className="mb-1 w-1/2">
              Zoom:
              <Slider
                marks={[
                  { value: 20, label: "20%" },
                  { value: 50, label: "50%" },
                  { value: 80, label: "80%" },
                ]}
              />
            </div>
            <div className="mb-1 w-1/2">
              Spacing:
              <Slider
                marks={[
                  { value: 20, label: "20%" },
                  { value: 50, label: "50%" },
                  { value: 80, label: "80%" },
                ]}
              />
            </div>
          </div>
          <div className="flex w-1/4 flex-col justify-end sm:flex-row">
            <Button
              color="indigo"
              variant="outline"
              size="xs"
              className="mr-1 mb-1"
            >
              Upload
            </Button>
            <Button
              color="indigo"
              variant="outline"
              size="xs"
              className="mr-1 mb-1"
            >
              Advanced
            </Button>
            <Button color="indigo" variant="outline" size="xs">
              Restart
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Main;
