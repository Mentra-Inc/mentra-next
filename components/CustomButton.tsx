import { Button } from "@mui/material";
import { ReactNode } from "react";

type CustomButtonProps = {
  children: ReactNode;
  width?: string | number;
};

export default function CustomButton({ children, width = "290px" }: Readonly<CustomButtonProps>) {
  return (
    <Button
      variant="contained"
      sx={{
        maxWidth: width,
        width: "100%",
        maxHeight: "58px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textTransform: "none",
        fontWeight: 700,
        fontFamily: "Roboto, sans-serif",
        p: 5,
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