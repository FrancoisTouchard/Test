import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lightBlue } from "@mui/material/colors";
// import React, { useState } from "react";

// color theme for button
const theme1 = createTheme({
  palette: {
    primary: lightBlue,
  },
});

export const CopyGifUrl = ({ gif }) => {
  //   const [copiedUrl, setCopiedUrl] = useState(false);
  const handleCopy = () => {
    const gifUrl = gif.url;
    // console.log(gifUrl);
    window.confirm("GIF URL : " + gifUrl);
    // NOT FUNCTIONAL, WORK IN PROGRESS
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
    <ThemeProvider theme={theme1}>
      <Button
        variant="contained"
        onClick={handleCopy}
        style={{
          maxWidth: "30px",
          maxHeight: "30px",
          minWidth: "30px",
          minHeight: "30px",
          color: "white",
        }}
        color="primary"
      >
        <ContentCopyIcon />
      </Button>
    </ThemeProvider>
  );
};
