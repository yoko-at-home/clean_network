import { NumberInput } from "@mantine/core";

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
