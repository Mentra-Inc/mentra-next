import Image from "next/image";
import { Box, Container, Typography, Stack } from "@mui/material";
import WaveDivider from "./WaveDivider";
import { COLORS, SIZES, SPACING, FONT_SIZES } from "@/lib/stylingConstants";

const Hero = () => {
    return (
        <Box sx={{ width: "100%", height: "100vh", backgroundColor: COLORS.BACKGROUND }} id="home">
            <Container maxWidth="xl" sx={{ height: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <Image src="/hero_img.png" alt="Hero Image" width={SIZES.HERO_IMG.WIDTH} height={SIZES.HERO_IMG.HEIGHT} style={{ width: SIZES.HERO_IMG.WIDTH, height: SIZES.HERO_IMG.HEIGHT, margin: "0 10%" }} />

                <Stack spacing={SPACING.SM_SPACING}>
                    <Typography variant="h1" sx={{ fontSize: FONT_SIZES.HEADING, fontWeight: 900, color: COLORS.PRIMARY }}>
                        Empowering Graduates. Supporting Businesses. Transforming Careers.
                    </Typography>

                    <Typography variant="h2" sx={{ fontSize: FONT_SIZES.BODY, fontWeight: 600, color: COLORS.PRIMARY, my: SPACING.SM_SPACING }}>
                        From Learning to Earning: Mentra bridges the gap between academic knowledge and real-world success.
                    </Typography>

                    <Stack direction="row" spacing={SPACING.XS_SPACING}>
                        <button className="btn-custom">Start Your Journey</button>
                        <button className="btn-custom">Build Your MVP Today</button>
                    </Stack>
                </Stack>
            </Container>

            <WaveDivider />
        </Box>
    );
};

export default Hero;
