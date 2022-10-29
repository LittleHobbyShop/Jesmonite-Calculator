import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import UnitSelect from "./unitSelect";
import { units } from "../resources/materials";
import { useState } from "react";

type Props = {
  text: string;
  value: number;
};

const capitalise = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const ResultDisplay = ({ text, value }: Props) => {
  const [unit, setUnit] = useState(0);

  const handleChangeUnit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUnit(parseInt(e.target.value));
  };

  const formatValue = (num: number) => {
    const convert = (num * 1) / units.mass[unit].multiplier;
    if (unit === 1 && num % 1 > 0) {
      return convert.toFixed(3);
    } else {
      return convert.toFixed(0);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h5">
        {`${capitalise(text)} = ${formatValue(value)}${
          units.mass[unit].symbol
        }`}
      </Typography>
      <UnitSelect unit={unit} onChange={handleChangeUnit} />
    </Box>
  );
};

export default ResultDisplay;
