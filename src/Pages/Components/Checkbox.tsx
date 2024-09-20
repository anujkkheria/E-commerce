import React from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
interface ICheckBox {
  label: string;
  value: boolean;
  onChange: () => void;
}
const CheckBox: React.FC<ICheckBox> = (props) => {
  const { label, value, onChange } = props;
  return (
    <FormControlLabel
      control={<Checkbox checked={value} />}
      label={label}
      onChange={onChange}
    />
  );
};

export default CheckBox;
