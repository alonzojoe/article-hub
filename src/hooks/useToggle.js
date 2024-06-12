import { useState } from "react";

const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (newValue) => {
    setValue((current) =>
      typeof newValue === "boolean" ? newValue : !current
    );
  };

  return [value, toggleValue];
};

export default useToggle;
