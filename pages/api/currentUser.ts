import { parse } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const cookies = parse(req.headers.cookie || "");
    const token = cookies.token;

    if(!token) return res.status(401).json({ error: "Not Authenticated."});

    const authResponse = await fetch('http://localhost:8080/users/me', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if(authResponse.ok) {
        const user = await authResponse.json();
        return res.status(200).json(user);
    }

    return res.status(401).json({ error: "Not Authenticated."});
}