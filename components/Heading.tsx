import { FONT_SIZES } from "@/lib/stylingConstants";
import { HeadingProps } from "@/types/headingTypes";
import { Typography, useTheme } from "@mui/material";

export default function Heading({ title }: HeadingProps) {
    const theme = useTheme();

    return (
        <Typography 
            variant="h1"
            sx={{ 
                fontSize: {
                    xs: FONT_SIZES.HEADING_SM,
                    lg: FONT_SIZES.HEADING_LG
                },
                fontWeight: 900,
                color: theme.palette.primary.main, 
                whiteSpace: {
                    'md': 'wrap',
                    'lg': 'nowrap'
                }
            }}
        >
            {title}
        </Typography>
    );
}