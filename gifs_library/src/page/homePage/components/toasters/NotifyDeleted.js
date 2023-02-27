import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifyDeleted = () =>
  toast.success("Successfully deleted from your library", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    theme: "colored",
  });
