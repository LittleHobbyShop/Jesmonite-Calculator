import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { materials } from "../resources/materials";
import { Fragment } from "react";

type Props = {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, property: string) => void;
};

const MaterialSelect = ({ value, onChange }: Props): JSX.Element => {
  return (
    <Fragment>
      <FormLabel id="material-buttons-group-label">Material</FormLabel>
      <RadioGroup
        row
        aria-labelledby="material-buttons-group-label"
        name="row-radio-buttons-group"
        value={value}
        onChange={onChange}
      >
        {materials.bases.map(({ name }, i) => {
          return (
            <FormControlLabel value={i} control={<Radio />} label={name} />
          );
        })}
      </RadioGroup>
    </Fragment>
  );
};

export default MaterialSelect;
