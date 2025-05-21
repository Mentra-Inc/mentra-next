import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'POST') return res.status(405).json({ error: "Invalid Method." });

    const { email, password, name, role } = await req.body;

    try {
        let authResponse = await fetch('http://localhost:8080/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                email: email?.toString(), 
                password: password?.toString(), 
                name: name?.toString(), 
                role: role?.toString()
            }),
        });

        if(authResponse.ok) {
            return res.status(200).json({ message: "Successfully registered." });
        } else {
            const { status, error } = await authResponse.json();
            
            return res.status(status).json({ error });
        }
    } catch {
        return res.status(500).json({ error: "Registration Failed." });
    }   
}