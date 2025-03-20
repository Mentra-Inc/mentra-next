import { Box, Stack } from "@mui/material";
import Heading from "./Heading";
import Cloud from "./Cloud";
import Subtitle from "./Subtitle";

export default function WhyChooseMentra() {
    return (
        <Box
            sx={{
                mt: 20,
                py: 12,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 16,
                px: 10,
                textAlign: 'center'
            }}
        >
            <Heading title="Why Choose Mentra?" />

            <Stack
                direction={{ xs: 'column', lg: 'row' }}
                justifyContent="center"
                alignItems="center"
            >
                <Cloud rotated={false}>Move from learning to earning with hands-on experience and expert mentorship.</Cloud>
                <Box
                    component="img"
                    src="/why_choose_mentra_img.png"
                    alt=""
                    sx={{
                        maxWidth: "445px",
                        width: "100%",
                        mx: { xs: 0, lg: -20 },
                        mb: { xs: 8, lg: 0 },
                        zIndex: '1',
                        order: { xs: -1, lg: 0 }
                    }}
                />
                <Cloud rotated={true}>Partner with Mentra to bring your ideas to life while supporting the next generation of industry-ready professionals.</Cloud>
            </Stack>

            <Subtitle>From Learning to Earning, Mentra is with you every step of the way.</Subtitle>
        </Box>
    );
}