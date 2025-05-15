import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'POST') return res.status(405).json({ error: "Invalid Method." });

    const { email, password } = await req.body;
    
    try {
        let authResponse = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email?.toString(), password: password?.toString() }),
        });

        if(authResponse.ok) {
            const { token, expiresIn } = await authResponse.json();
            res.setHeader("Set-Cookie", serialize("token", token, {
                httpOnly: true,
                secure: false, // should change to true for production
                sameSite: "strict",
                path: "/",
                maxAge: expiresIn / 1000
            }));

            return res.status(200).json({ message: "Successfully authenticated." });
        } else {
            const { status, error } = await authResponse.json();
            
            return res.status(status).json({ error });
        }
    } catch {
        return res.status(500).json({ error: "Login Failed." });
    }
}