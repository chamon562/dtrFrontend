import { Backdrop, Button, Fade } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";

import React, { useState } from "react";
import Form from "../Form/Form";

const style = {
  // position: "absolute",
  // top: "50%",
  // left: "50%",
  // transform: "translate(-50%, -50%)",
  // width: 400,
  // bgcolor: "background.paper",
  // border: "2px solid #000",
  // boxShadow: 24,
  // p: 4,
};

const ModalForm = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={handleOpen}>Register</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Box >

          <Form handleClose={handleClose} />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ModalForm;
