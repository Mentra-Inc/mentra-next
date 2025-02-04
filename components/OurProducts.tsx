import { Box, Typography, Card, CardContent } from "@mui/material";
import Heading from "./Heading";
import { Button, ButtonGroup } from '@nextui-org/button';

function OurProducts() {
    return (
        <Box sx={{ height: 742, width: 1180, mx: "auto", mt: 4 }} id="services">
            <Box sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
                <Heading title="What We Offer" color="#0D378B" />

                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", my: 8 }}>
                    <ProductCard 
                        cardTitle="Mentorship & Real-World Training Program" 
                        listItems={[
                            "Hands-on experience working on real projects commissioned by investor clients.",
                            "Personalized one-on-one mentorship to prepare graduates for industry demands."
                        ]}
                    />

                    <ProductCard 
                        cardTitle="Affordable MVP Development for Businesses" 
                        listItems={[
                            "Cost-effective or free website development tailored to your startup's needs.",
                            "Collaborate with skilled graduates eager to bring your ideas to life."
                        ]}
                    />
                </Box>

                <Button className="btn-custom">
                    Explore our services
                </Button>
            </Box>
        </Box>
    );
}

function ProductCard({ cardTitle, listItems }: { cardTitle: string, listItems: string[] }) {
    return (
        <Card sx={{ width: 575, borderRadius: 2, bgcolor: "#1D5AD5", p: 6 }}>
            <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                <Typography variant="body1" sx={{ fontWeight: "bold", color: "white", textAlign: "center", fontSize: "1.5em" }}>
                    {cardTitle}
                </Typography>

                <ul style={{ listStyleType: "disc", paddingLeft: 20, color: "white" }}>
                    {listItems.map((item, index) => (
                        <li key={index}>
                            <Typography variant="body1" sx={{ color: "white", textAlign: "center", fontSize: "1.2em", lineHeight: "2.5em" }}>
                                {item}
                            </Typography>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}

export default OurProducts;