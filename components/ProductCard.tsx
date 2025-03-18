import { ProductCardProps, ProductListItem } from "./OurProducts";
import { Card, CardContent, Typography, useTheme } from "@mui/material";

export default function ProductCard({ cardTitle, listItems } : Omit<ProductCardProps, 'id'>) {
    const theme = useTheme();

    return (
        <Card 
            sx={{ 
                maxWidth: 575,
                backgroundColor: theme.palette.secondary.main,
                p: 6,
                my: 2
            }}
        >
            <CardContent 
                sx={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    gap: 2
                }}
            >
                <Typography 
                    variant="body1" 
                    sx={{ 
                        fontWeight: "bold", 
                        color: "white", 
                        textAlign: "center", 
                        fontSize: "1.5em"
                    }}
                >
                    {cardTitle}
                </Typography>

                <ul style={{ listStyleType: "disc", color: "white" }}>
                    {listItems.map(({ id, text } : ProductListItem) => (
                        <li key={id}>
                            <Typography 
                                variant="body1" 
                                sx={{ 
                                    color: "white", 
                                    textAlign: "center", 
                                    fontSize: "1.2em",
                                    lineHeight: 3
                                }}
                            >
                                {text}
                            </Typography>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}