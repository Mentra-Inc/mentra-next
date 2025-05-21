import { Box, Typography } from "@mui/material";
import WarningIcon from '@mui/icons-material/Warning';

export default function ErrorCard({ error }: { error: string }) {
    return (
        <Box
                sx={{
                    maxWidth: "400px",
                    height: "50px",
                    width: "100%",
                    px: 2,
                    backgroundColor: "#FFBABA",
                    borderLeft: "8px solid #FF5252",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    boxSizing: 'border-box',
                    mb: 3
                }}>
                <WarningIcon sx={{ color: "#FF5252", mr: 2 }} />
                <Typography color="#FF5252" fontWeight="bold" >{error}</Typography>
        </Box>
    )
}
