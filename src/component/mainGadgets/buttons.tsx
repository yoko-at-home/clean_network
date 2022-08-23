import { Button } from "@mantine/core";

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
