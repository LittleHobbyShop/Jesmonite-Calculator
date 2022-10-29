import { useState, useEffect } from "react";
import "./App.css";
import FormControl from "@mui/material/FormControl";
import MaterialInput from "./components/materialInput";
import VolumeInput from "./components/volumeInput";
import UnitSelect from "./components/unitSelect";
import Typography from "@mui/material/Typography";
import { materials, units } from "./resources/materials";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

interface Obj {
  [key: string]: number;
}

const App = () => {
  const [material, setMaterial] = useState(0);
  const [mass, setMass] = useState(0);
  const [unit, setunit] = useState(0);
  const [output, setOutput] = useState<Obj>({});

  const handleChangeMaterial = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaterial(parseInt(e.target.value));
  };

  const handleChangeMass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMass(parseInt(e.target.value));
  };

  const handleChangeunit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setunit(parseInt(e.target.value));
  };

  useEffect(() => {
    const density: number = materials.bases[material].density;
    const ratio: number = materials.bases[material].ratio;
    const total = Math.round(mass * density);
    if (total > 0) {
      setOutput({
        powder: Math.round(mass * density * ratio),
        liquid: Math.round(mass * density * (1 - ratio)),
        total: total,
      });
    } else {
      setOutput({});
    }
  }, [mass, material]);

  const capitalise = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="App">
      <Stack
        spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <FormControl>
          <MaterialInput value={material} onChange={handleChangeMaterial} />
          <VolumeInput onChange={handleChangeMass} />
          <UnitSelect unit={unit} onChange={handleChangeunit} />
        </FormControl>
        {Object.keys(output).map((key) => {
          console.log(key);
          return (
            <Typography variant="h4">
              {capitalise(key)} = {output[key].toString()}
              {units.mass[unit].symbol}
            </Typography>
          );
        })}
      </Stack>
    </div>
  );
};

export default App;
