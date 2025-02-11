import { Box, Container, Stack, useMediaQuery, useTheme } from "@mui/material";
import Heading from "./Heading";
import { Button } from '@nextui-org/button';
import productData from "@/lib/productData";
import ProductCard from "./ProductCard";
import { ProductCardProps } from "@/types/productTypes";
import { SPACING } from "@/lib/stylingConstants";

function OurProducts() {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Container id="services">
            <Stack spacing={SPACING.SM_SPACING} alignItems='center' textAlign='center'>
                <Heading title="What We Offer" color="#0D378B" />

                <Stack spacing={SPACING.XS_SPACING} direction={ isMobile ? 'column' : 'row'}>
                    {productData.map(({ id, cardTitle, listItems} : ProductCardProps) => (
                        <ProductCard key={id} cardTitle={cardTitle} listItems={listItems} />
                    ))}
                </Stack>

                <Button className="btn-custom">
                    Explore our services
                </Button>
            </Stack>
        </Container>
    );
}

export default OurProducts;