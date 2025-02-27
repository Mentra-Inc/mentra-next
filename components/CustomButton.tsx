import { Button } from "@mui/material";
import { ReactNode } from "react";

type CustomButtonProps = {
  children: ReactNode;
};

function CustomButton({ children }: Readonly<CustomButtonProps>) {
  return (
    <Button
      variant="contained"
      sx={{
        maxWidth: "290px",
        maxHeight: "58px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textTransform: "none",
        fontWeight: 700,
        fontFamily: "Roboto, sans-serif",
        px: "50px",
        py: "20px",
        borderRadius: "50px",
        backgroundColor: "#ff93b4",
        color: "white",
        boxShadow: "0px 10px 15px rgba(46,46,50,0.18)",
        "&:hover": {
          backgroundColor: "#FF9F0A",
        },
      }}
    >
      {children}
    </Button>
  );
}

export default CustomButton;