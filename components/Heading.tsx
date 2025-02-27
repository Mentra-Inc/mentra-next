import { Typography, useTheme } from "@mui/material";

type HeadingProps = {
    title: string;
};

export default function Heading({ title }: HeadingProps) {
    const theme = useTheme();

    return (
        <Typography 
            variant="h1"
            fontSize={{ xs: "2.5em", lg: "3em" }}
            fontWeight={900}
            color={theme.palette.primary.main}
            whiteSpace={{ md: "wrap", lg: "nowrap" }}
        >
            {title}
        </Typography>
    );
}