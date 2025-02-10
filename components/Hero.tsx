import Image from 'next/image'
import { Box, Container, Typography, Stack } from "@mui/material";
import WaveDivider from './WaveDivider';


const Hero = () => {
  return (
    <Box sx={{ width: "100%", height: "100vh", backgroundColor: "#98c4fc" }} id="home">
      <Container maxWidth="xl" sx={{ height: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <Image
          src="/hero_img.png"
          alt="Hero Image"
          width={494}
          height={442}
          style={{ width: "494px", height: "442px", margin: "0 10%" }}
        />

        <Stack spacing={4}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "50px",
              fontWeight: 900,
              color: "#0D378B",
            }}
          >
            Empowering Graduates. Supporting Businesses. Transforming Careers.
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: "24px",
              fontWeight: "600",
              color: "#0D378B",
              my: 4,
            }}
          >
            From Learning to Earning: Mentra bridges the gap between academic
            knowledge and real-world success.
          </Typography>

          <Stack direction="row" spacing={2}>
            <button className="btn-custom">Start Your Journey</button>
            <button className="btn-custom">Build Your MVP Today</button>
          </Stack>
        </Stack>
      </Container>

      <WaveDivider />
    </Box>
  );
}



export default Hero
