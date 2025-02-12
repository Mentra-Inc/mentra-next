import { FONT_SIZES } from "@/lib/stylingConstants";
import { HeadingProps } from "@/types/headingTypes";
import { Typography, useMediaQuery, useTheme } from "@mui/material";

export default function Heading({ title, color }: HeadingProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isSmallLaptop = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Typography 
            className={`text-[${color}]`} 
            variant="h1"
            sx={{ 
                fontSize: isMobile ? FONT_SIZES.HEADING_SM : FONT_SIZES.HEADING_LG, 
                fontWeight: 900,
                color, 
                whiteSpace: isSmallLaptop ? 'wrap' : 'nowrap'
            }}
        >
            {title}
        </Typography>
    );
}