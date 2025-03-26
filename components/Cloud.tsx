import { Box, Typography } from "@mui/material";

type CloudProps = {
    children: React.ReactNode;
    rotated: boolean;
}

export default function Cloud({ children, rotated }: CloudProps) {
    return ( 
        <Box
            sx={{
                position: 'relative',
            }}
        >
            <Box
                component="img"
                src={'/pink_cloud.png'}
                alt=""
                sx={{
                    maxWidth: "500px",
                    width: "100%",
                    transform: `rotateY(${rotated ? '180deg' : '0deg'})`
                }}
                draggable={false}
            />
                <Typography variant="body1" 
                    sx={{ 
                        position: 'absolute', 
                        top: '50%', 
                        left: '50%', 
                        transform: 'translateX(-50%) translateY(-50%)',
                        textAlign: 'center',
                        fontSize: { xs: '14px', sm: '16px', md: '18px' },
                        lineHeight: { xs: 1.5, sm: 2, lg: 2.5 },
                    }}
                >
                    {children}
                </Typography>
        </Box> 
    );
}