import { Box, Card, CardContent, Stack, Typography, useTheme } from "@mui/material";
import { cardCount, marqueeDuration, StoryCardProps } from "./RealStories";

export default function StoryCard({ cardIndex, name, role, message } : StoryCardProps) {
    const theme = useTheme();
    return (
        <Card 
            sx={{ 
                border: `2px solid ${theme.palette.secondary.main}`,
                borderRadius: '40px',
                width: '342px', // absolute lengths are needed for the marquee to work (it's still responsive)
                height: '390px',
                position: 'absolute',
                left: `calc(342px * ${cardCount})`,
                animationName: 'scroll-left',
                animationDuration: `${marqueeDuration}s`,
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
                animationDelay: `calc(${marqueeDuration}s / ${cardCount} * (${cardCount} - ${cardIndex}) * -1)`
            }}
        >
            <CardContent sx={{ height: '100%', p: 0 }}>
                <Box
                    sx={{
                        backgroundColor: theme.palette.secondary.main,
                        height: '65%',
                        py: 4,
                        px: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4
                    }}>
                        <Box
                            component="img"
                            src="/quote_icon.png"
                            alt="Quote Icon"
                            sx={{ width: "60px" }}
                        />

                    <Typography variant="body1" sx={{ color: 'white', lineHeight: '30px' }}>
                        { message }
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '25%',
                        px: 6
                    }}>
                    <Stack>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: theme.palette.secondary.main }}>
                            { name }
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            { role }
                        </Typography>
                    </Stack>
                </Box>
            </CardContent>
        </Card>
    );
}