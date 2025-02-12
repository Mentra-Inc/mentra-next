import { Container, Stack, useMediaQuery, useTheme } from "@mui/material";
import Heading from "./Heading";
import productData from "@/lib/productData";
import ProductCard from "./ProductCard";
import { ProductCardProps } from "@/types/productTypes";
import { COLORS, SPACING } from "@/lib/stylingConstants";

export default function OurProducts() {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Container id="services">
            <Stack spacing={SPACING.SM_SPACING} alignItems='center' textAlign='center'>
                <Heading title="What We Offer" color={COLORS.PRIMARY} />

                <Stack spacing={SPACING.XS_SPACING} direction={ isMobile ? 'column' : 'row'}>
                    {productData.map(({ id, cardTitle, listItems} : ProductCardProps) => (
                        <ProductCard key={id} cardTitle={cardTitle} listItems={listItems} />
                    ))}
                </Stack>

                <button className="btn-custom">
                    Explore our services
                </button>
            </Stack>
        </Container>
    );
}