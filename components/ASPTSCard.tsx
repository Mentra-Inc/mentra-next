import { Box, Typography, Paper, ListItemText, ListItem, List, Stack } from "@mui/material";
import CustomButton from "./CustomButton";
import { StepsCardProps, StepItem } from "./SimplePathToSucess";

export default function ASPTSCard({ cardTitle, buttonText, steps, cardImage }: StepsCardProps) {
    return (
        <Paper
          elevation={3}
          sx={{
            borderRadius: "20px",
            backgroundColor: "#FFFFFF52", // white with opacity
            padding: 6,
            maxWidth: "600px",
            width: "100%",
            height: { lg: "240px", md: "600px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", lg: "row" },
            py: { lg: 20, xs: 15 },
            gap: 8
          }}
        >
          <Stack maxWidth={{ lg: 280, sm: "100%" }} textAlign={{ lg: 'left', xs: 'center' }}>
            <Typography variant="h6" fontWeight="bold" px={4}>
              {cardTitle}
            </Typography>

            <List sx={{ display: "flex", flexDirection: 'column' }}>
                {steps.map((step: StepItem, index: number) => (
                    <ListItem 
                        key={step.id}
                        sx={{ textAlign: { lg: 'left', xs: 'center' } }} 
                        disablePadding
                    >
                        <ListItemText primary={`${index + 1}. ${step.text}`} />
                    </ListItem>
                ))}
            </List>
          </Stack>
    
          <Box 
            sx={{ 
                maxWidth: { lg: "225px", sm: "100%" },
                display: "flex",
                flexDirection: "column",
                alignItems: 'center',
                justifyContent: 'center'
            }}
          >
            <Box
                component="img"
                src={`/${cardImage}`}
                alt="A Simple Path to Success Image"
                sx={{
                    maxWidth: "300px",
                    width: "100%",
                    marginBottom: 5
                }}
            />
            <CustomButton width="100%">{buttonText}</CustomButton>
          </Box>
        </Paper>
    );
}