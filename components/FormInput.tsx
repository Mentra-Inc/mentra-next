import { Box, Input } from "@mui/material";
import { ReactElement } from "react";

type FormInputProps = { 
    icon: ReactElement, 
    type: string, 
    placeholder: string, 
    name: string 
};

export default function FormInput({ icon, type, placeholder, name } : FormInputProps) {
    return (
        <Box
            sx={{
                border: "2px solid white",
                borderRadius: "8px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                p: 1.5,
                maxWidth: "100%",
                boxSizing: "border-box",
                mb: 3
            }}
        >
            {icon}
            <Input sx={{ color: "white", width: "100%", fontSize: "18px" }} name={name} type={type} placeholder={placeholder} disableUnderline autoComplete="off" />
        </Box>
    );
}