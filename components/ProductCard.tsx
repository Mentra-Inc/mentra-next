import { Card, CardContent, Typography } from "@mui/material";

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

export default ProductCard;