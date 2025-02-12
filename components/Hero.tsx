import Image from "next/image";
import { Box, Typography, Stack, useMediaQuery, useTheme } from "@mui/material";
import WaveDivider from "./WaveDivider";
import { COLORS, SIZES, SPACING, FONT_SIZES } from "@/lib/stylingConstants";
import Heading from "./Heading";

const Hero = () => {
    const theme = useTheme();
    const isSmallLaptop = useMediaQuery(theme.breakpoints.down('lg'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ 
            minHeight: '100vh', 
            backgroundColor: COLORS.BACKGROUND, 
            position: 'relative', 
            display: "flex", 
            justifyContent: 'center', 
            alignItems: 'center' 
        }} id="home">
            <Box sx={{ 
                display: 'flex', 
                gap: isSmallLaptop ? SPACING.SM_SPACING : SPACING.MD_SPACING, 
                flexDirection: isSmallLaptop ? 'column' : 'row', 
                py: isSmallLaptop ? SPACING.MD_SPACING : 0,
                px: isSmallLaptop ? SPACING.XS_SPACING : 0,
                alignItems: isSmallLaptop ? 'center' : 'normal'
            }}>
                <Stack>
                    <Image
                        src='/hero_img.png'
                        width={SIZES.HERO_IMG.WIDTH}
                        height={SIZES.HERO_IMG.HEIGHT}
                        alt="Hero Image"
                    />
                </Stack>

                <Stack 
                    spacing={SPACING.MD_SPACING} 
                    textAlign={isSmallLaptop ? 'center' : 'left'}
                >
                    <Stack spacing={SPACING.XS_SPACING}>
                        <Heading title='Empowering Graduates.' color={COLORS.PRIMARY} />
                        <Heading title='Supporting Businesses.' color={COLORS.PRIMARY} />
                        <Heading title='Transforming Careers.' color={COLORS.PRIMARY} />
                    </Stack>

                    <Typography 
                        variant="h2" 
                        sx={{ 
                            fontSize: FONT_SIZES.BODY, 
                            fontWeight: 600, 
                            color: COLORS.PRIMARY, 
                            my: SPACING.SM_SPACING, 
                            maxWidth: SIZES.ABOUT_US_TEXT.MAX_WIDTH ,
                            opacity: COLORS.TEXT_OPACITY
                        }}
                    >
                        From Learning to Earning: Mentra bridges the gap between academic knowledge and real-world success.
                    </Typography>

                    <Stack 
                        direction={isMobile ? 'column' : 'row'} 
                        justifyContent={isSmallLaptop ? 'center' : 'flex-start'} 
                        alignItems='center' 
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
};



export default Hero;
