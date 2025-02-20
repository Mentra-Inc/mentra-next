import Image from "next/image";
import { Box, Typography, Stack, useTheme } from "@mui/material";
import WaveDivider from "./WaveDivider";
import { SIZES, SPACING, FONT_SIZES, TEXT } from "@/lib/stylingConstants";
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
                        xs: SPACING.SM_SPACING,
                        lg: SPACING.MD_SPACING
                    },
                    flexDirection: {
                        xs: "column",
                        lg: "row"
                    },
                    py: {
                        xs: SPACING.MD_SPACING,
                        lg: 0
                    },
                    px: {
                        xs: SPACING.XS_SPACING,
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
                        width={SIZES.HERO_IMG.WIDTH}
                        height={SIZES.HERO_IMG.HEIGHT}
                        alt="Hero Image"
                    />
                </Stack>

                <Stack
                    spacing={SPACING.MD_SPACING}
                    textAlign={{
                        xs: "center",
                        lg: "left"
                    }}
                >
                    <Stack spacing={SPACING.XS_SPACING}>
                        <Heading title="Empowering Graduates." />
                        <Heading title="Supporting Businesses." />
                        <Heading title="Transforming Careers." />
                    </Stack>

                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: FONT_SIZES.BODY,
                            fontWeight: 600,
                            color: theme.palette.primary.main,
                            my: SPACING.SM_SPACING,
                            maxWidth: SIZES.ABOUT_US_TEXT.MAX_WIDTH,
                            opacity: TEXT.TEXT_OPACITY
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
                        spacing={SPACING.XS_SPACING}
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