import { NumberInput, Radio, RadioGroup } from "@mantine/core";
import { useState } from "react";

export const ShowFollowerControl = () => {
  const [value, setValue] = useState("Show All");
  // const [disabled, setDisabled] = useState(false);
  // if (value === "Show Top") return setDisabled(false);
  return (
    <>
      <div className="">
        <RadioGroup
          color="indigo"
          className="whitespace-nowrap"
          value={value}
          onChange={setValue}
        >
          <Radio value="Show All" label="Show All" />
          <Radio value="Show Friends" label="Show Friends" />
          <Radio value="Show Top" label="Show Top" />
        </RadioGroup>
      </div>
      <div className="w-[55px] md:ml-3">
        <NumberInput
          defaultValue={50}
          placeholder="number of followers"
          radius="md"
          size="xs"
          disabled
        />
      </div>
    </>
  );
};
