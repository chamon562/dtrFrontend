import React,{useState} from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Alert } from "@mui/material";
// const Alert = forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

export default function SnackBar() {
  const [open, setOpen] = useState(false);

  const handleClick = (newState) => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2}>
      <Button onClick={handleClick}>SnackBar</Button>
      <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} severity="success" open={open} autoHideDuration={5000} onClose={handleClose} message="Successful">
        <Alert variant="filled" onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Success! User has been created!
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
  <Alert severity="info">This is an information message!</Alert> */}
      {/* <Alert severity="success">This is a success message!</Alert>  */}
    </Stack>
  );
}
