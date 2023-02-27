import { Button } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// color theme for buttons
const theme = createTheme({
  palette: {
    primary: lightBlue,
  },
});

export const AddButton = ({ handleOpenModal }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        onClick={(e) => {
          e.preventDefault();
          handleOpenModal();
        }}
        style={{
          width: "5%",
          alignSelf: "center",
          marginTop: "2%",
          color: "white",
        }}
      >
        <AddIcon />
      </Button>
    </ThemeProvider>
  );
};
