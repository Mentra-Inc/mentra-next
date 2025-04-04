import { ArrowDownward } from "@mui/icons-material";
import { ProductCardProps, ProductListItem } from "./OurProducts";
import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function ProductCard({ cardTitle, listItems } : Omit<ProductCardProps, 'id'>) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Card 
            sx={{ 
                maxWidth: 575,
                backgroundColor: theme.palette.secondary.main,
                py: 6,
                px: { xs: 0, md: 6 },
                my: 2
            }}
        >
            <CardContent 
                sx={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    gap: 2
                }}
            >
                <Typography 
                    variant="body1" 
                    sx={{ 
                        fontWeight: "bold", 
                        color: "white", 
                        textAlign: "center", 
                        fontSize: "1.5em"
                    }}
                >
                    {cardTitle}
                </Typography>

                { isMobile ? 
                    <Stack mt={2} gap={4}>
                        {listItems.map(({ id, text, title } : ProductListItem) => (
                            <Accordion 
                                sx={{ 
                                    backgroundColor: theme.palette.secondary.main, 
                                    color: 'white', border: '1px solid', 
                                    borderRadius: '8px !important' // forced to use !important MUI's disableGutters doesn't allow me to override the border radius for some reason.
                            }}>
                                <AccordionSummary
                                    expandIcon={<ArrowDownward sx={{ color: 'white' }} />}
                                    aria-controls={`${id}-controls`}
                                    id={id}
                                    sx={{ borderRadius: '8px' }}
                                >
                                    <Typography component="span" fontWeight="bold" >{title}</Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Typography mx={3} mb={3}>
                                        {text}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Stack> 
                    : <ul style={{ listStyleType: "disc", color: "white" }}>
                        {listItems.map(({ id, text } : ProductListItem) => (
                            <li key={id}>
                                <Typography 
                                    variant="body1" 
                                    sx={{ 
                                        color: "white", 
                                        textAlign: "center", 
                                        fontSize: "1.2em",
                                        lineHeight: 3
                                    }}
                                >
                                    {text}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                }
            </CardContent>
        </Card>
    );
}