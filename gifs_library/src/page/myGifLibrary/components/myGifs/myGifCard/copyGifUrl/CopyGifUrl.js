import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";
// import React, { useState } from "react";

// color theme for buttons
const theme = createTheme({
  palette: {
    secondary: red,
  },
});

export const CopyGifUrl = ({ gif }) => {
  //   const [copiedUrl, setCopiedUrl] = useState(false);
  const handleCopy = () => {
    const gifUrl = gif.url;
    console.log(gifUrl);
    // NOT FUNCTIONAL
    // navigator.clipboard.writeText(gifUrl).then(
    //   () => {
    //     setCopiedUrl(true);
    //   },
    //   () => {
    //     console.log("failed to copy");
    //   }
    // );
    // window.alert("copied !");
  };
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        onClick={handleCopy}
        style={{
          maxWidth: "30px",
          maxHeight: "30px",
          minWidth: "30px",
          minHeight: "30px",
        }}
        color="secondary"
      >
        <ContentCopyIcon />
      </Button>
    </ThemeProvider>
  );
};
