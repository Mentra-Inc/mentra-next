export type ProductListItem = { 
    id: string, 
    text: string
};

export type ProductCardProps = {
    id: string;
    cardTitle: string;
    listItems: ProductListItem[];
};