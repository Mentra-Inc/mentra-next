import { Container, Stack } from "@mui/material";
import Heading from "./Heading";
import productData from "@/lib/productData";
import ProductCard from "./ProductCard";
import CustomButton from "./CustomButton";

export type ProductListItem = { 
    id: string, 
    text: string
};

export type ProductCardProps = {
    id: string;
    cardTitle: string;
    listItems: ProductListItem[];
};

export default function OurProducts() {
    return (
        <Container id="services">
            <Stack spacing={6} alignItems="center" textAlign="center">
                <Heading title="What We Offer" />

                <Stack 
                    spacing={4} 
                    direction={{ sm: 'column', md: 'row' }}
                    >
                    {productData.map(({ id, cardTitle, listItems }: ProductCardProps) => (
                        <ProductCard key={id} cardTitle={cardTitle} listItems={listItems} />
                    ))}
                </Stack>

                <CustomButton>
                    Explore Our Services
                </CustomButton>
            </Stack>
        </Container>
    );
}