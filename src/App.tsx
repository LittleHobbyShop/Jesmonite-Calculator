import { useState } from "react";
import "./App.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import materials from "./resources/materials";

const App = () => {
  const [material, setMaterial] = useState(0);
  const [mass, setMass] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaterial(parseInt(event.target.value));
  };

  return (
    <div className="App">
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Material</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={material}
          onChange={handleChange}
        >
          {materials.bases.map(({ name }, i) => {
            return (
              <FormControlLabel value={i} control={<Radio />} label={name} />
            );
          })}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default App;
