import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import Heading from "./Heading";
import { COLORS, FONT_SIZES, SIZES, SPACING } from "@/lib/stylingConstants";

function AboutUs() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box id="about-us"
            sx={{ 
                mt: SPACING.XL_SPACING,
                mb: SPACING.MD_SPACING,
                mx: 'auto', px: SPACING.SM_SPACING, 
                display: 'flex', 
                justifyContent: 'center' 
            }}
        >
            <Stack 
                direction={isSmallScreen ? "column-reverse" : "row"} 
                spacing={SPACING.SM_SPACING} 
                alignItems="center"
            >
                <Stack 
                    spacing={SPACING.SM_SPACING} 
                    textAlign={isSmallScreen ? "center" : "left"}
                >
                    <Heading title="Turning Education Into Action" color={COLORS.PRIMARY} />

                    <Typography 
                        variant="body1" 
                        sx={{ 
                            lineHeight: SPACING.TEXT_LINE_HEIGHT, 
                            fontSize: FONT_SIZES.BODY, 
                            maxWidth: isSmallScreen ? '100%' : SIZES.ABOUT_US_TEXT.MAX_WIDTH 
                        }}
                    >
                        At Mentra, we bridge the gap between learning and earning. By providing mentorship, 
                        real-world experience, and affordable MVP development services, we empower graduates 
                        and support businesses in their growth journey.
                    </Typography>

                    <Typography 
                        variant="h6" 
                        sx={{ 
                            fontWeight: "bold", 
                            color: COLORS.PRIMARY, 
                            opacity: COLORS.TEXT_OPACITY
                        }}
                    >
                        From Learning to Earning: Where Careers and Ideas Take Shape.
                    </Typography>
                </Stack>

                <Stack>
                    <Image
                        src="/about_us_img.png"
                        alt="About Us Image"
                        width={SIZES.ABOUT_US_IMG.WIDTH} // have to define a starting size, but the image is still responsive because of Stack.
                        height={SIZES.ABOUT_US_IMG.HEIGHT}
                    />
                </Stack>
            </Stack>
        </Box>
    );
}

export default AboutUs;
