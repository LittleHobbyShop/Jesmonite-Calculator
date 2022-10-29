import Box from "@mui/material/Box";
import ResultDisplay from "./resultDisplay";

interface Obj {
  [key: string]: number;
}

type Props = {
  output: Obj;
};

const ResultOutput = ({ output }: Props) => {
  return (
    <Box>
      {Object.keys(output).map((key) => {
        return <ResultDisplay value={output[key]} text={key} />;
      })}
    </Box>
  );
};

export default ResultOutput;
