import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import Heading from "./Heading";
import { COLORS, FONT_SIZES, SIZES, SPACING } from "@/lib/stylingConstants";

function AboutUs() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box sx={{ my: SPACING.SECTION_MARGIN_Y, mx: 'auto', px: SPACING.SM_SPACING, display: 'flex', 'justifyContent': 'center' }} id="about-us">
            <Stack 
                direction={isSmallScreen ? "column-reverse" : "row"} 
                spacing={SPACING.SM_SPACING} 
                alignItems="center"
            >
                <Stack spacing={SPACING.SM_SPACING} textAlign={isSmallScreen ? "center" : "left"}>
                    <Heading title="Turning Education Into Action" color="#0D378B" />

                    <Typography 
                        variant="body1" 
                        sx={{ lineHeight: SPACING.TEXT_LINE_HEIGHT, fontSize: FONT_SIZES.BODY, maxWidth: isSmallScreen ? '100%' : SIZES.ABOUT_US_TEXT.MAX_WIDTH }}
                    >
                        At Mentra, we bridge the gap between learning and earning. By providing mentorship, 
                        real-world experience, and affordable MVP development services, we empower graduates 
                        and support businesses in their growth journey.
                    </Typography>

                    <Typography 
                        variant="h6" 
                        sx={{ fontWeight: "bold", color: "#0D378B", opacity: COLORS.TEXT_OPACITY }}
                    >
                        From Learning to Earning: Where Careers and Ideas Take Shape.
                    </Typography>
                </Stack>

                <Stack>
                    <Image
                        src="/about_us_img.png"
                        alt="profile"
                        width={SIZES.ABOUT_US_IMG.WIDTH} // have to define a starting size, but the image is still responsive because of Stack.
                        height={SIZES.ABOUT_US_IMG.HEIGHT}
                    />
                </Stack>
            </Stack>
        </Box>
    );
}

export default AboutUs;
