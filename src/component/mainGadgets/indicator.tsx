import { NumberInput, Radio, RadioGroup } from "@mantine/core";
import { InputHTMLAttributes, useState } from "react";

export const ShowFollowerControl = () => {
  const [value, setValue] = useState("Show All");
  const disabled = value === "Show Top" ? false : true;

  return (
    <>
      <div>
        <RadioGroup
          color="indigo"
          className="whitespace-nowrap"
          value={value}
          onChange={setValue}
        >
          <Radio label="Show All" value="Show All" />
          <Radio label="Show Friends" value="Show Friends" />
          <Radio label="Show Top" value="Show Top" />
        </RadioGroup>
      </div>
      <div className="w-[55px] md:ml-3">
        <NumberInput
          defaultValue={50}
          placeholder="number of followers"
          radius="md"
          size="xs"
          disabled={disabled}
          required
        />
      </div>
    </>
  );
};;;
