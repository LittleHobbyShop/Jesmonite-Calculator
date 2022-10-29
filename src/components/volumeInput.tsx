import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { units } from "../resources/materials";
import UnitSelect from "./unitSelect";

type Props = {
  setMass: React.Dispatch<React.SetStateAction<number>>;
};

const VolumeInput = ({ setMass }: Props): JSX.Element => {
  const [unit, setUnit] = useState(0);
  const [value, setValue] = useState(0);

  const handleChangeUnit = (e: React.ChangeEvent<HTMLInputElement>) => {
    //const multiplier: number = units.mass[parseInt(e.target.value)].multiplier
    setUnit(parseInt(e.target.value));
  };

  const handleChangeMass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value));
  };

  useEffect(() => {
    const multiplier: number = units.mass[unit].multiplier;
    setMass(value * multiplier);
  }, [unit, value]);

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <TextField
        id="standard-basic"
        label="Mould Volume Mass"
        variant="standard"
        type="number"
        inputProps={{ inputMode: "decimal", pattern: "[0-9]+" }}
        onChange={handleChangeMass}
      ></TextField>
      <UnitSelect unit={unit} onChange={handleChangeUnit} />
    </Box>
  );
};

export default VolumeInput;
