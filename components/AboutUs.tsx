import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Heading from "./Heading";

function AboutUs() {
    return (
        <Box sx={{ maxWidth: 1265, mx: "auto", mt: 24, height: 500 }}>
            <Heading title="Turning Education Into Action" color="#0D378B" />
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box sx={{ maxWidth: 560 }}>
                    <Typography variant="body1" sx={{ mt: 2, mb: 3, lineHeight: 3, fontSize: "1.2em" }}>
                        At Mentra, we bridge the gap between learning and earning. By providing mentorship, 
                        real-world experience, and affordable MVP development services, we empower graduates 
                        and support businesses in their growth journey.
                    </Typography>
                    
                    <Typography variant="body1" sx={{ fontWeight: "bold", color: "#0D378B", opacity: 0.8 }}>
                        From Learning to Earning: Where Careers and Ideas Take Shape.
                    </Typography>
                </Box>
                <Box sx={{ position: "relative", top: -40 }}>
                    <Image src="/about_us_img.png" width={458} height={371} alt="About Us Image" />
                </Box>
            </Box>
        </Box>
    );
}

export default AboutUs;
