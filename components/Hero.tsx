import Image from "next/image";
import { Box, Typography, Stack, useTheme } from "@mui/material";
import WaveDivider from "./WaveDivider";
import Heading from "./Heading";

export default function Hero() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: theme.palette.background.default,
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    gap: {
                        xs: theme.spacing(6),
                        lg: theme.spacing(12)
                    },
                    flexDirection: {
                        xs: "column",
                        lg: "row"
                    },
                    py: {
                        xs: theme.spacing(12),
                        lg: 0
                    },
                    px: {
                        xs: theme.spacing(2),
                        lg: 0
                    },
                    alignItems: {
                        xs: "center",
                        lg: "normal"
                    }
                }}
            >
                <Stack>
                    <Image
                        src="/hero_img.png"
                        width={theme.custom.sizes.heroImg.width}
                        height={theme.custom.sizes.heroImg.height}
                        alt="Hero Image"
                    />
                </Stack>

                <Stack
                    spacing={theme.spacing(12)}
                    textAlign={{
                        xs: "center",
                        lg: "left"
                    }}
                >
                    <Stack spacing={theme.spacing(2)}>
                        <Heading title="Empowering Graduates." />
                        <Heading title="Supporting Businesses." />
                        <Heading title="Transforming Careers." />
                    </Stack>

                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: theme.typography.body1.fontSize,
                            fontWeight: 600,
                            color: theme.palette.primary.main,
                            my: theme.spacing(6),
                            maxWidth: theme.custom.sizes.aboutUsText.maxWidth,
                            opacity: theme.typography.body1.opacity
                        }}
                    >
                        From Learning to Earning: Mentra bridges the gap between academic knowledge and real-world success.
                    </Typography>

                    <Stack
                        direction={{
                            xs: "column",
                            sm: "row"
                        }}
                        justifyContent={{
                            xs: "center",
                            lg: "space-between"
                        }}
                        alignItems="center"
                        spacing={theme.spacing(2)}
                    >
                        <button className="btn-custom">Start Your Journey</button>
                        <button className="btn-custom">Build Your MVP Today</button>
                    </Stack>
                </Stack>
            </Box>
            <WaveDivider />
        </Box>
    );
}
