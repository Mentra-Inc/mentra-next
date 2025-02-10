import { Box } from "@mui/material";
import Heading from "./Heading";
import { Button } from '@nextui-org/button';
import productData from "@/lib/productData";
import ProductCard from "./ProductCard";
import { ProductCardProps } from "@/types/productTypes";

function OurProducts() {
    return (
        <Box sx={{ height: 742, width: 1180, mx: "auto", mt: 4 }} id="services">
            <Box sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
                <Heading title="What We Offer" color="#0D378B" />

                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", my: 8 }}>
                    {productData.map(({ id, cardTitle, listItems} : ProductCardProps) => (
                        <ProductCard key={id} cardTitle={cardTitle} listItems={listItems} />
                    ))}
                </Box>

                <Button className="btn-custom">
                    Explore our services
                </Button>
            </Box>
        </Box>
    );
}

export default OurProducts;