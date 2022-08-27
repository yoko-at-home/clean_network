import { NumberInput, Radio, RadioGroup } from "@mantine/core";
import { InputHTMLAttributes, useState } from "react";

export const ShowFollowerControl = () => {
  const [value, setValue] = useState("Show All");
  const [checkboxState, setCheckboxState] = useState(0);
  const [option, setOption] = useState("Show All");
  const [number, setNumber] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleOnChange0 = () => {
    setCheckboxState(0);
    setOption("Show All");
  };
  const handleOnChange1 = () => {
    setCheckboxState(1);
    setOption("Show Friends");
  };
  const handleOnChange2 = () => {
    setCheckboxState(2);
    setOption("Show Top");
    setDisabled(false);
  };
  const handleOnChangeNumber: InputHTMLAttributes<HTMLInputElement>["onChange"] =
    (event) => {
      setNumber(event.currentTarget.value);
    };

  return (
    <>
      <div>
        <RadioGroup
          color="indigo"
          className="whitespace-nowrap"
          value={value}
          onChange={setValue}
        >
          <Radio
            label="Show All"
            value="Show All"
            onChange={handleOnChange0}
            checked={checkboxState === 0}
          />
          <Radio
            label="Show Friends"
            value="Show Friends"
            onChange={handleOnChange1}
            checked={checkboxState === 1}
          />
          <Radio
            label="Show Top"
            value="Show Top"
            onChange={handleOnChange2}
            checked={checkboxState === 2}
          />
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
