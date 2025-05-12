import { Box, Input, Button, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { LockOutlined } from "@mui/icons-material";
import { ReactElement, useState } from "react";
import { useRouter } from "next/navigation";
import WarningIcon from '@mui/icons-material/Warning';

export default function Login() {
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const FormInput = ({ icon, type, placeholder, name }: { icon: ReactElement, type: string, placeholder: string, name: string }) => {
        return (
            <Box
                sx={{
                    border: "2px solid white",
                    borderRadius: "8px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    p: 1.5,
                    maxWidth: "100%",
                    boxSizing: "border-box",
                    mb: 3
                }}
            >
                {icon}
                <Input sx={{ color: "white", width: "100%", fontSize: "18px" }} name={name} type={type} placeholder={placeholder} disableUnderline autoComplete="off" />
            </Box>
        );
    };

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get('user-email');
        const password = formData.get('user-password');

        let res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        
        if(res.ok) {
            router.push('/');
        } else {
            const err = await res.json();
            setError(err.error || "Login Failed.");
        }
    };

    return (
        <Box
            sx={{
                backgroundImage: `url("/auth_background.jpg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
                {error && <Box
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
                }
                <Box
                    sx={{
                        maxHeight: "425px",
                        maxWidth: "300px",
                        height: "100%",
                        width: "100%",
                        border: { md: "2px solid white", xs: 'none'} ,
                        borderRadius: "30px",
                        padding: { md: 6, xs: 0 }
                    }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                height: "100%",
                                width: "100%"
                            }}>
                                <Box
                                    component="img"
                                    src="/mentra_logo_big.png"
                                    alt="Mentra Inc Logo"
                                    width={120}
                                    mb={6}
                                />
                                <form onSubmit={handleLogin}>
                                    <FormInput icon={<PersonIcon sx={{ color: "white", mr: 2 }} />} name="user-email" type="email" placeholder="EMAIL ADDRESS" />
                                    <FormInput icon={<LockOutlined sx={{ color: "white", mr: 2 }} />} name="user-password" type="password" placeholder="PASSWORD" />

                                    <Button
                                        sx={{
                                            width: "100%",
                                            backgroundColor: "white",
                                            p: 1.5,
                                            color: "black",
                                            fontWeight: "bold",
                                            fontSize: 17,
                                            mt: 3
                                        }}
                                        type="submit"
                                    >
                                        LOGIN
                                    </Button>
                                </form>
                        </Box>
                </Box>
        </Box>
    );
}