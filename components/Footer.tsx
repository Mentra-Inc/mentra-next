import { Box, Stack, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

type FooterLink = {
    id: string;
    href: string;
    label: string;
    col: number;
    row: number;
    external: boolean;
};

const linksData: FooterLink[] = [
    { id: 'about', href: '/about', label: 'About Us', col: 1, row: 1, external: false },
    { id: 'services', href: '/services', label: 'Services', col: 1, row: 2, external: false },
    { id: 'contact', href: '/contact', label: 'Contact', col: 1, row: 3, external: false },
    { id: 'linkedin', href: 'https://www.linkedin.com', label: 'LinkedIn', col: 3, row: 1, external: true },
    { id: 'instagram', href: 'https://www.instagram.com', label: 'Instagram', col: 3, row: 2, external: true },
    { id: 'facebook', href: 'https://www.facebook.com', label: 'Facebook', col: 3, row: 3, external: true },
];

export default function Footer() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.secondary.main,
                color: '#fff',
                px: 32,
                height: '489px',
                display: 'flex',
                alignItems: 'center',
            }}>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 24
                    }}>
                        <Box
                            component="img"
                            src="/mentra_logo_big.png"
                            alt="Mentra Inc Logo"
                            width={174}
                            height={128}
                        />

                        <Stack justifyContent="space-between" maxWidth={260} gap={16}>
                            <Typography variant="h6" fontSize={22}>
                                Mentra: Turning Knowledge into Action.
                            </Typography>

                            <Stack gap={4} fontSize={18}>
                                <Link href="tel:(123)456-7890" style={{ textDecoration: 'underline', color: 'white' }}>
                                    <Typography>
                                        (123) 456-7890
                                    </Typography>
                                </Link>

                                <Link href="mailto:email@mentra.ca" style={{ textDecoration: 'underline', color: 'white' }}>
                                    <Typography>
                                        email@mentra.ca
                                    </Typography>
                                </Link>
                            </Stack>
                        </Stack>
                        
                        <Stack justifyContent='space-between' ml={52} mr={12} sx={{ opacity: 0.75 }}>
                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(5, 1fr)',
                                    gridTemplateRows: 'repeat(5, 1fr)',
                                    gap: 4
                                }}
                            >
                                {linksData.map(({ id, href, external, col, row, label }: FooterLink) => (
                                    <Link
                                        key={id}
                                        href={href}
                                        target={external ? '_blank' : '_self'}
                                        style={{
                                            gridColumn: col,
                                            gridRow: row,
                                            padding: 2,
                                            color: 'white',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        <Typography>
                                            {label}
                                        </Typography>
                                    </Link>
                                ))}
                            </Box>

                            <Typography color="white" sx={{ gridColumn: 'span 3', gridRowStart: 5 }}>
                                © 2024 Mentra Inc. All rights reserved.
                            </Typography>
                        </Stack>


                    <Link
                        style={{
                            width: 60,
                            height: 60,
                            backgroundColor: 'white',
                            borderRadius: '100%',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        href='#'
                    >
                        <ArrowUpwardIcon sx={{ color: "#86D8FF", fontSize: 30 }} />
                    </Link>
                </Box>
        </Box>
    )
};