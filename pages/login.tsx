import { Box, Button, Typography, Link } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { LockOutlined } from "@mui/icons-material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FormInput from "@/components/FormInput";
import ErrorCard from "@/components/ErrorCard";

export default function Login() {
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

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
                {error && <ErrorCard error={error} />}
                <Box
                    sx={{
                        maxWidth: "300px",
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
                                <Typography mt={3} color="white">Don't have an account? <Link href="/register" color="#8DC5E7">Register Here</Link></Typography>
                        </Box>
                </Box>
        </Box>
    );
}