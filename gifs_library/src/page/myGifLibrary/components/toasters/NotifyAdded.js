import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifyAdded = () =>
  toast.success("Successfully added to your library", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    theme: "colored",
  });
