import { FONT_SIZES, SIZES, SPACING } from "@/lib/stylingConstants";
import { ProductCardProps, ProductListItem } from "@/types/productTypes";
import { Card, CardContent, Typography } from "@mui/material";

function ProductCard({ cardTitle, listItems } : Omit<ProductCardProps, 'id'>) {
    return (
        <Card sx={{ maxWidth: SIZES.PRODUCT_CARD.MAX_WIDTH, bgcolor: "#1D5AD5", p: SPACING.SM_SPACING }}>
            <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: SPACING.XS_SPACING }}>
                <Typography variant="body1" sx={{ fontWeight: "bold", color: "white", textAlign: "center", fontSize: FONT_SIZES.SUBHEADING }}>
                    {cardTitle}
                </Typography>

                <ul style={{ listStyleType: "disc", color: "white" }}>
                    {listItems.map(({ id, text } : ProductListItem) => (
                        <li key={id}>
                            <Typography variant="body1" sx={{ color: "white", textAlign: "center", fontSize: FONT_SIZES.BODY, lineHeight: SPACING.TEXT_LINE_HEIGHT }}>
                                {text}
                            </Typography>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}

export default ProductCard;