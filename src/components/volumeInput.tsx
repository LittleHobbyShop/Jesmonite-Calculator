import TextField from "@mui/material/TextField";
import React from "react";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const VolumeInput = ({ onChange }: Props): JSX.Element => {
  return (
    <TextField
      id="standard-basic"
      label="Mould Volume Mass"
      variant="standard"
      type="number"
      inputProps={{ inputMode: "decimal", pattern: "[0-9]+" }}
      onChange={onChange}
    ></TextField>
  );
};

export default VolumeInput;
