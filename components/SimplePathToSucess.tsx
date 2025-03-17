import { Box, Stack, Typography, useTheme } from "@mui/material";
import ASPTSCard from "./ASPTSCard";

export type StepItem = {
    id: string;
    text: string;
};

export type StepsCardProps = {
    id: string;
    cardTitle: string;
    buttonText: string;
    steps: StepItem[];
    cardImage: string;
};

export const stepsData: StepsCardProps[] = [
    {
        id: "graduates",
        cardTitle: "Steps for Graduates",
        buttonText: "Join the Program",
        steps: [
            { id: "graduate-1", text: "Join our mentorship program." },
            { id: "graduate-2", text: "Work on real-world projects with guidance from industry experts." },
            { id: "graduate-3", text: "Transition into your career with confidence and practical skills." },
        ],
        cardImage: "ASPTS_img-1.png"
    },
    {
        id: "businesses",
        cardTitle: "Steps for Businesses",
        buttonText: "Submit Your MVP Idea",
        steps: [
            { id: "business-1", text: "Share your MVP idea or project requirements." },
            { id: "business-2", text: "Collaborate with our talented graduates for affordable development." },
            { id: "business-3", text: "Receive a fully functional MVP to kickstart your business." },
        ],
        cardImage: "ASPTS_img-2.png"
    },
];

export default function SimplePathToSuccess() {
    const theme = useTheme();
    return (
        <Box
            sx={{
                mt: 32,
                py: 12,
                backgroundColor: theme.palette.background.default,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 12,
                px: 10
            }}>
            <Typography 
                variant="h1"
                fontSize={{ xs: "2.5em", lg: "3em" }}
                fontWeight={900}
                color="white"
                whiteSpace={{ md: "wrap", lg: "nowrap" }}
                textAlign="center"
            >
                A Simple Path to Success
            </Typography>

            <Stack
                direction={{ md: 'row', xs: 'column' }}
                spacing={4}
                justifyContent="center"
                alignItems="center"
                width="100%"
            >
                {stepsData.map((step) => (
                    <ASPTSCard key={step.id} {...step} />
                ))}
            </Stack>
        </Box>
    );
}
