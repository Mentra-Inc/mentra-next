import { Typography, useTheme } from "@mui/material";

type SubtitleProps = {
    children: React.ReactNode;
};

export default function Subtitle({ children }: SubtitleProps) {
    const theme = useTheme();
    
    return (
        <Typography
            variant="h6"
            sx={{
                fontWeight: "bold",
                color: theme.palette.primary.main,
                opacity: 0.8
            }}
        >
            { children }
        </Typography>
    );
}