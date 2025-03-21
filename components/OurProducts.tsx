import { Container, Stack } from "@mui/material";
import Heading from "./Heading";
import ProductCard from "./ProductCard";
import CustomButton from "./CustomButton";

const productData = [
    {
        id: 'mentorship',
        cardTitle: "Mentorship & Real-World Training Program",
        listItems: [
            { id: "mentorship-1", text: "Hands-on experience working on real projects commissioned by investor clients." },
            { id: "mentorship-2", text: "Personalized one-on-one mentorship to prepare graduates for industry demands." },
        ],
    },
    {
        id: 'affordable-mvp',
        cardTitle: "Affordable MVP Development for Businesses",
        listItems: [
            { id: "affordable-1", text: "Cost-effective or free website development tailored to your startup's needs." },
            { id: "affordable-2", text: "Collaborate with skilled graduates eager to bring your ideas to life." },
        ],
    },
];

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