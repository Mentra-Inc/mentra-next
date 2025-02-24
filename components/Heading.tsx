import { Typography, useTheme } from "@mui/material";

type HeadingProps = {
    title: string;
};

export default function Heading({ title }: HeadingProps) {
    const theme = useTheme();

    return (
        <Typography 
            variant="h1"
            sx={{ 
                fontSize: {
                    xs: theme.typography.h2.fontSize,
                    lg: theme.typography.h1.fontSize
                },
                fontWeight: 900,
                color: theme.palette.primary.main, 
                whiteSpace: {
                    md: 'wrap',
                    lg: 'nowrap'
                }
            }}
        >
            {title}
        </Typography>
    );
}