import { Box, Stack, Typography, useTheme } from "@mui/material";
import Heading from "./Heading";
import Subtitle from "./Subtitle";

export default function AboutUs() {
    const theme = useTheme();

    return (
        <Box
            id="about-us"
            sx={{
                my: 32,
                mx: "auto",
                px: 6,
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Stack
                direction={{ xs: "column-reverse", lg: "row" }}
                spacing={6}
                alignItems="center"
            >
                <Stack
                    spacing={6}
                    textAlign={{ xs: "center", lg: "left" }}
                >
                    <Heading title="Turning Education Into Action" />

                    <Typography
                        variant="body1"
                        sx={{
                            lineHeight: { xs: 2.5, sm: 3 },
                            fontSize: "1.2em",
                            maxWidth: { xs: "100%", lg: 630 },
                        }}
                    >
                        At Mentra, we bridge the gap between learning and earning. By providing mentorship, 
                        real-world experience, and affordable MVP development services, we empower graduates 
                        and support businesses in their growth journey.
                    </Typography>

                    <Subtitle>From Learning to Earning: Where Careers and Ideas Take Shape.</Subtitle>
                </Stack>

                <Box
                    component="img"
                    src="/about_us_img.png"
                    alt="About Us Image"
                    width={458}
                    height={371}
                    sx={{
                        width: "100%",
                        maxWidth: 458,
                        height: "auto",
                    }}
                />
            </Stack>
        </Box>
    );
}
