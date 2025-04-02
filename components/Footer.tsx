import { Box, Stack, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

type FooterLink = {
    id: string;
    href: string;
    label: string;
    col: { lg: number, xl: number };
    row: { lg: number, xl: number };
    external: boolean;
};

const linksData: FooterLink[] = [
    { id: 'about', href: '/#about-us', label: 'About Us', col: { lg: 1, xl: 1 }, row: { lg: 1, xl: 1 }, external: false },
    { id: 'services', href: '/#services', label: 'Services', col: { lg: 2, xl: 1 }, row: { lg: 1, xl: 2 }, external: false },
    { id: 'contact', href: '/#contact', label: 'Contact', col: { lg: 3, xl: 1 }, row: { lg: 1, xl: 3 }, external: false },
    { id: 'linkedin', href: 'https://www.linkedin.com', label: 'LinkedIn', col: { lg: 1, xl: 3 }, row: { lg: 2, xl: 1 }, external: true },
    { id: 'instagram', href: 'https://www.instagram.com', label: 'Instagram', col: { lg: 2, xl: 3 }, row: { lg: 2, xl: 2 }, external: true },
    { id: 'facebook', href: 'https://www.facebook.com', label: 'Facebook', col: { lg: 3, xl: 3 }, row: { lg: 2, xl: 3 }, external: true },
];

export default function Footer() {
    const theme = useTheme();

    const GoUpButton = () => (
        <Link
            style={{
                width: 60,
                height: 60,
                backgroundColor: 'white',
                borderRadius: '100%',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',  
            }}
            href='#'
        >
            <ArrowUpwardIcon sx={{ color: "#86D8FF", fontSize: 30 }} />
        </Link>
    );

    const MentraLogo = () => (
        <Box
            component="img"
            src="/mentra_logo_big.png"
            alt="Mentra Inc Logo"
            width={174}
            height={128}
        />
    );

    return (
        <Box
            id="contact"
            sx={{
                backgroundColor: theme.palette.secondary.main,
                color: '#fff',
                px: { xs: 4, lg: 16, xl: 32 },
                py: { xs: 10, md: 20 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <Box sx={{ display: { xs: 'block', md: 'none' }}}>
                    <MentraLogo />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: { xs: 'center', sm: 'flex-end', md: 'normal' },
                        width: '100%',
                        textAlign: { xs: 'center', md: 'left' },
                        gap: { xs: 8, sm: 0 }
                    }}>
                        <Box sx={{ display: { xs: 'none', md: 'block' }}}>
                            <MentraLogo />
                        </Box>

                        <Stack justifyContent="space-between" maxWidth={260} gap={{ xs: 4, md: 16 }}>
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
                        
                        <Stack justifyContent='space-between' mr={{ xs: 0, md: 12 }} sx={{ opacity: 0.75 }}>
                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                    gridTemplateRows: 'repeat(3, 1fr)',
                                    gap: 4
                                }}
                            >
                                {linksData.map(({ id, href, external, col, row, label }: FooterLink) => (
                                    <Typography
                                        key={id}
                                        sx={{
                                            gridColumn: { lg: col.lg, xl: col.xl },
                                            gridRow: { lg: row.lg, xl: row.xl }
                                        }}
                                    >
                                        <Link
                                            href={href}
                                            target={external ? '_blank' : '_self'}
                                            style={{
                                                color: 'white',
                                                textDecoration: 'none',
                                            }}
                                        >
                                            {label}
                                        </Link>
                                    </Typography>
                                ))}
                            </Box>

                            <Typography color="white">
                                © 2024 Mentra Inc. All rights reserved.
                            </Typography>
                        </Stack>


                        <Box sx={{ display: { xs: 'none', md: 'block' }}}>
                            <GoUpButton />
                        </Box>
                </Box>
                <Box sx={{ display: { xs: 'block', md: 'none' }}} mt={8}>
                    <GoUpButton />
                </Box>
        </Box>
    )
};