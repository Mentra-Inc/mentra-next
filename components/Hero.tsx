import { Box, Typography, Stack, useTheme } from "@mui/material";
import WaveDivider from "./WaveDivider";
import Heading from "./Heading";
import CustomButton from "./CustomButton";

export default function Hero() {
    const theme = useTheme();

    return (
        <Box
            minHeight="100vh"
            bgcolor={theme.palette.background.default}
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                display="flex"
                gap={{ xs: 6, lg: 12 }}
                flexDirection={{ xs: "column", lg: "row" }}
                py={{ xs: 12, lg: 0 }}
                px={{ xs: 2, lg: 0 }}
                alignItems={{ xs: "center", lg: "normal" }}
            >
                <Box
                    component="img"
                    src="/hero_img.png"
                    alt="Hero Image"
                    width={494}
                    height={442}
                    style={{
                        width: "100%",
                        height: "auto"
                    }}
                />

                <Stack spacing={12} textAlign={{ xs: "center", lg: "left" }}>
                    <Stack spacing={2}>
                        <Heading title="Empowering Graduates." />
                        <Heading title="Supporting Businesses." />
                        <Heading title="Transforming Careers." />
                    </Stack>

                    <Typography
                        variant="h2"
                        fontSize="1.2em"
                        fontWeight={600}
                        color={theme.palette.primary.main}
                        my={6}
                        maxWidth={630}
                        sx={{ opacity: 0.8 }}
                    >
                        From Learning to Earning: Mentra bridges the gap between academic knowledge and real-world success.
                    </Typography>

                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        justifyContent={{ xs: "center", lg: "space-between" }}
                        alignItems="center"
                        spacing={2}
                    >
                        <CustomButton>Start Your Journey</CustomButton>
                        <CustomButton>Build Your MVP Today</CustomButton>
                    </Stack>
                </Stack>
            </Box>
            <WaveDivider />
        </Box>
    );
}