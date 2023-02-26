import { TextField, Typography, Button, Modal, Box } from "@mui/material";
import { ThemeProvider } from "styled-components";
import { lightBlue } from "@mui/material/colors";
import { useAddGif } from "./useAddGif";
// import { ToastContainer, toast } from "react-toastify";

// style for modal
const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// color theme for buttons
const theme = {
  palette: {
    primary: {
      main: lightBlue,
    },
  },
};

// const notifyAdded = () =>
//   toast.success("🦄 Wow so easy!", {
//     position: "top-right",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: false,
//     draggable: true,
//     progress: undefined,
//     theme: "colored",
//   });

const AddGif = ({
  data,
  openModal,
  setOpenModal,
  addGifToGifList,
  notifyAdded,
}) => {
  const { onClick, setCategory, handleCloseModal } = useAddGif(
    data,
    setOpenModal,
    addGifToGifList,
    notifyAdded
  );

  return (
    <div className="gifAndFavContainer">
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      /> */}
      <ThemeProvider theme={theme}>
        <Modal open={openModal} onClose={handleCloseModal}>
          <Box
            sx={styleModal}
            style={{ backgroundColor: "white", height: "auto" }}
          >
            <div style={{ backgroundColor: "#f2f2f2", padding: "10%" }}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                style={{ fontFamily: "Bukhari Script" }}
              >
                Add this gif to your library ?
              </Typography>
              <TextField
                id="categoryInput"
                name="category"
                label="Add a category (optional)"
                placeholder="ex: Funny Animals"
                variant="outlined"
                onChange={(e) => setCategory(e.target.value.toUpperCase())}
                sx={{ mt: 2, width: "400px" }}
              />
              <Button
                sx={{ mt: 3, ml: 3 }}
                variant="contained"
                onClick={onClick}
              >
                Save
              </Button>
            </div>
          </Box>
        </Modal>
      </ThemeProvider>
    </div>
  );
};

export default AddGif;
