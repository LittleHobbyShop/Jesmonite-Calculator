import { useState, useEffect } from "react";
import "./App.css";
//import FormControl from "@mui/material/FormControl";
import MaterialInput from "./components/materialSelect";
import VolumeInput from "./components/volumeInput";
import UnitSelect from "./components/unitSelect";
import Typography from "@mui/material/Typography";
import { materials, units } from "./resources/materials";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { Paper, styled } from "@mui/material";

interface Obj {
  [key: string]: number;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.primary,
}));

const App = () => {
  const [material, setMaterial] = useState(0);
  const [mass, setMass] = useState(0);
  const [unit, setUnit] = useState(0);
  const [output, setOutput] = useState<Obj>({});

  const handleChangeValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    property: string
  ) => {
    console.log(property, e.target.value);
    switch (property) {
      case "material":
        setMaterial(parseInt(e.target.value));
        break;
      case "mass":
        setMass(parseInt(e.target.value));
        break;
      case "unit":
        setUnit(parseInt(e.target.value));
        break;
      default:
        break;
    }
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
        sx={{ maxWidth: 600, alignItems: "left" }}
      >
        <Item>
          <Typography variant="h4">Jesmonite Calculator</Typography>
        </Item>
        {/* <FormControl> */}
        <Item>
          <MaterialInput
            value={material}
            onChange={(e) => handleChangeValue(e, "material")}
          />
        </Item>
        <Item>
          <VolumeInput onChange={(e) => handleChangeValue(e, "mass")} />
        </Item>
        <Item>
          <UnitSelect
            unit={unit}
            onChange={(e) => handleChangeValue(e, "unit")}
          />
        </Item>
        {/* </FormControl> */}
        <Item>
          {Object.keys(output).map((key) => {
            return (
              <Typography variant="h5" key={`output-${key}`}>
                {capitalise(key)} = {output[key].toString()}
                {units.mass[unit].symbol}
              </Typography>
            );
          })}
        </Item>
      </Stack>
    </div>
  );
};

export default App;
