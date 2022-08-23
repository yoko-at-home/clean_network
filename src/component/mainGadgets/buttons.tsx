import { Button, Radio, RadioGroup } from "@mantine/core";

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
