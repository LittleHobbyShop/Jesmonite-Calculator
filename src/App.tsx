import { useState, useEffect } from "react";
import "./App.css";
import MaterialInput from "./components/materialSelect";
import VolumeInput from "./components/volumeInput";
import Typography from "@mui/material/Typography";
import { materials } from "./resources/materials";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { Paper, styled } from "@mui/material";
import ResultOutput from "./components/resultOutput";

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
      default:
        break;
    }
  };

  useEffect(() => {
    const density: number = materials.bases[material].density;
    const ratio: number = materials.bases[material].ratio;
    const total = mass * density;
    if (total > 0) {
      setOutput({
        powder: mass * density * ratio,
        liquid: mass * density * (1 - ratio),
        total: total,
      });
    } else {
      setOutput({});
    }
  }, [mass, material]);

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

        <Item>
          <MaterialInput
            value={material}
            onChange={(e) => handleChangeValue(e, "material")}
          />
        </Item>
        <Item>
          <VolumeInput setMass={setMass} />
        </Item>

        <Item>
          <ResultOutput output={output} />
        </Item>
      </Stack>
    </div>
  );
};

export default App;
