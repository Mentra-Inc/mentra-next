import { Button, useTheme } from "@mui/material";
import { ReactNode } from "react";

type CustomButtonProps = {
  children: ReactNode;
}

function CustomButton({ children }: Readonly<CustomButtonProps>) {
  const theme = useTheme(); // Access the theme

  return (
    <Button
      variant="contained"
      sx={{
        maxWidth: theme.custom.button.maxWidth,
        maxHeight: theme.custom.button.maxHeight,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textTransform: "none",
        fontWeight: 700,
        fontFamily: "Roboto, sans-serif",
        px: theme.custom.button.paddingX,
        py: theme.custom.button.paddingY,
        borderRadius: theme.custom.button.borderRadius,
        backgroundColor: theme.custom.colors.customButtonBg,
        color: "white",
        boxShadow: theme.custom.button.boxShadow,
        "&:hover": {
          backgroundColor: theme.custom.colors.customButtonHover,
        },
      }}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
