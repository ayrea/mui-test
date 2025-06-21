import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function MyAccordion(): ReactNode {
  // const theme = useTheme();

  return (
    <Accordion variant="outlined" disableGutters>
      <AccordionSummary sx={{ backgroundColor: "green" }}>
        <Box
          display="flex"
          width={"100%"}
          sx={{ backgroundColor: "red", mt: 0, pt: 0 }}
        >
          <Typography mr={1}>Heading</Typography>
          <Typography>Heading</Typography>
          <Box flex={1} />
          <ArrowBackIosNewIcon />
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Stack>
          <Typography>Item1</Typography>
          <Typography>Item2</Typography>
          <Typography>Item3</Typography>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}

export default MyAccordion;
