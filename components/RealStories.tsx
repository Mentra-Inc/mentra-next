import { Box, Stack } from "@mui/material";
import Heading from "./Heading";
import StoryCard from "./StoryCard";

export type StoryCardProps = {
    id: string;
    cardIndex: number;
    name: string;
    role: string;
    message: string;
};

// Placeholders for now
const testimonials: Omit<StoryCardProps, 'cardIndex'>[] = [
    { id: "1a2b3c", name: "John Doe", role: "Graduate", message: "Mentra helped me bridge the gap between my academic knowledge and industry expectations. I landed my dream job!" },
    { id: "2b3c4d", name: "Jane Smith", role: "Graduate", message: "Thanks to Mentra, I successfully transitioned into the tech industry!" },
    { id: "3c4d5e", name: "Alice Johnson", role: "Graduate", message: "Mentra provided me with the right resources and mentorship to excel in my career." },
    { id: "4d5e6f", name: "Michael Brown", role: "Graduate", message: "The support and networking opportunities through Mentra were invaluable!" },
    { id: "5e6f7g", name: "Emily White", role: "Graduate", message: "I found the perfect job thanks to Mentra's guidance!" },
    { id: "6f7g8h", name: "Daniel Green", role: "Graduate", message: "Mentra helped me polish my resume and interview skills." },
    { id: "7g8h9i", name: "Sophia Lee", role: "Graduate", message: "I gained the confidence I needed to enter the workforce!" },
    { id: "8h9i0j", name: "Chris Martin", role: "Graduate", message: "The mentorship at Mentra was top-notch!" },
    { id: "9i0j1k", name: "Olivia Wilson", role: "Graduate", message: "I landed my dream job with the help of Mentra!" },
    { id: "0j1k2l", name: "James Anderson", role: "Graduate", message: "Mentra's industry connections opened doors I never thought possible!" }
];


export default function RealStories() {
    return (
        <Box
            sx={{
                mt: 32,
                py: 12,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 24,
            }}
        >
            <Box
                sx={{
                    textAlign: 'center'
                }}
            >
                <Heading title="Real Stories, Real Impact" />
            </Box>
            

            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                    position: 'relative',
                    height: '400px', // absolute lengths are needed for the marquee to work (it's still responsive)
                    width: '100%',
                    overflow: 'hidden',
                    
                }}
            >
                {testimonials.map((storyCard: Omit<StoryCardProps, 'cardIndex'>, index: number) => {
                    return (
                        <StoryCard key={storyCard.id} cardIndex={index + 1} {...storyCard} />
                    );
                })}
            </Stack>
        </Box>
    );
};