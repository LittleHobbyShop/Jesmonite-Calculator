import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import { units } from "../resources/materials";
import React from "react";
import Radio from "@mui/material/Radio";

type Props = {
  unit: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const UnitSelect = ({ unit, onChange }: Props) => {
  return (
    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
      value={unit}
      onChange={onChange}
    >
      {units.mass.map(({ symbol }, i) => {
        return (
          <FormControlLabel value={i} control={<Radio />} label={symbol} />
        );
      })}
    </RadioGroup>
  );
};

export default UnitSelect;
