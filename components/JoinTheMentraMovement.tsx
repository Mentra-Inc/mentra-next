import { Box, Stack, useTheme } from "@mui/material";
import JoinMentraWaveDivider from "./wave-dividers/JoinMentraWaveDivider";
import Heading from "./Heading";
import CustomButton from "./CustomButton";


export default function JoinTheMentraMovement() {
    const theme = useTheme();

    return (
        <Box
            bgcolor={theme.palette.background.default}
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="flex-end"
            mt={24}
            pt={{ xs: 48, lg: 64 }}
            px={{ xs: 12, lg: 0 }}
        >
            <Stack
                direction={{ xs: 'column', lg: 'row' }}
                justifyContent={{ xs: "center", lg: "space-between" }}
                alignItems="center"
                width="100%"
                px={{ xs: 0, lg: 2 }}
                spacing={8}
            >
                <Stack
                    pl={{ xs: 0, lg: 20 }}
                    textAlign="center"
                >
                    <Heading title="Join the Mentra Movement!"/>

                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        alignItems="center"
                        justifyContent="center"
                        spacing={{ xs: 2, md: 8 }}
                        mt={8}
                    >
                        <CustomButton>Apply Now</CustomButton>
                        <CustomButton>Partner With Us</CustomButton>
                    </Stack>
                </Stack>
                <Stack
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box
                        component="img"
                        src="/join_mentra_movement_img.png"
                        alt="Join Mentra Movement Image"
                        maxWidth={{ md: 500, lg: 642 }}
                        style={{
                            width: "100%",
                            height: "auto"
                        }}
                    />
                </Stack>
            </Stack>
            <JoinMentraWaveDivider />
        </Box>
    );
}