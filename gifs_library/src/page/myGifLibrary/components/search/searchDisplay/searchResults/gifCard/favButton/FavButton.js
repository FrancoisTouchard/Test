import { Button } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { ThemeProvider } from "styled-components";
import AddIcon from "@mui/icons-material/Add";

// color theme for buttons
const theme = {
  palette: {
    primary: {
      main: lightBlue,
    },
  },
};

export const FavButton = ({ handleOpenModal }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        onClick={(e) => {
          e.preventDefault();
          handleOpenModal();
        }}
        style={{ width: "5%", alignSelf: "center", marginTop: "2%" }}
      >
        <AddIcon />
      </Button>
    </ThemeProvider>
  );
};
