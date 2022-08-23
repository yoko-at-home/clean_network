import { Button, NumberInput, Radio, RadioGroup, Slider } from "@mantine/core";

export const RadioButtons = () => {
  return (
    <div className="">
      <RadioGroup color="indigo" className="whitespace-nowrap">
        <Radio value="Show All" label="Show All" />
        <Radio value="Show Friends" label="Show Friends" />
        <Radio value="Show Top" label="Show Top" />
      </RadioGroup>
    </div>
  );
};
export const NumberOfFollowers = () => {
  return (
    <div className="w-[55px] md:ml-3">
      <NumberInput
        defaultValue={50}
        placeholder="number of followers"
        radius="md"
        size="xs"
      />
    </div>
  );
};

export const ZoomSlider = () => {
  return (
    <div className="w-11/12">
      Zoom:
      <Slider
        marks={[
          { value: 20, label: "20%" },
          { value: 50, label: "50%" },
          { value: 80, label: "80%" },
        ]}
      />
    </div>
  );
};
export const SpacingSlider = () => {
  return (
    <div className="w-11/12">
      Spacing:
      <Slider
        marks={[
          { value: 20, label: "20%" },
          { value: 50, label: "50%" },
          { value: 80, label: "80%" },
        ]}
      />
    </div>
  );
};

export const MainButtons = () => {
  return (
    <div className="flex flex-col justify-end sm:w-1/4 sm:flex-row">
      <Button color="indigo" variant="outline" size="xs" className="mr-1 mb-1">
        Upload
      </Button>
      <Button color="indigo" variant="outline" size="xs" className="mr-1 mb-1">
        Advanced
      </Button>
      <Button color="indigo" variant="outline" size="xs">
        Restart
      </Button>
    </div>
  );
};
