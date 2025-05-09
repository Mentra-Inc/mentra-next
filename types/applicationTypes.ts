export type ProductListItem = { 
    id: string, 
    text: string
};

export type ProductCardProps = {
    id: string;
    cardTitle: string;
    listItems: ProductListItem[];
};

export interface Authority {
    authority: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    authorities: Authority[];
    username: string;
    enabled: boolean;
    accountNonLocked: boolean;
    accountNonExpired: boolean;
    credentialsNonExpired: boolean;
}