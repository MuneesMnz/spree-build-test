const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: "60%",
  // height: "80%",
  color: "red",
  border: "none",
  boxShadow: 24,
  borderRadius: "20px",
  outline: "none",
};

export function getModalStyle(theme, width, height) {
  let modalWidth;
  let modalHeight;
  if (width < 600) {
    modalWidth = "90%";
  } else if (width < 1024) {
    modalWidth = "80%";
  } else {
    modalWidth = "60%";
  }

  if (height > 600) {
    modalHeight = "60%";
  } else {
    modalHeight = "80%";
  }

  return {
    ...modalStyle,
    bgcolor: theme.palette.background.default,
    color: theme.palette.text.primary,
    width: modalWidth,
    height: modalHeight,
  };
}

export const AddButtonIconStyle = {
  borderRadius: "50%",
  width: "70px",
  height: "70px",
  padding: "0px",
};
