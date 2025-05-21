import { parse, serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== "GET") return res.status(405).json({ error: "Invalid Method." });

    const cookies = parse(req.headers.cookie || "");
    const token = cookies.token;

    if(!token) return res.status(401).json({ error: "Not Authenticated."});

    res.setHeader("Set-Cookie", serialize("token", "", {
        httpOnly: true,
        secure: false, // should change to true for production
        sameSite: "strict",
        path: "/",
        maxAge: 0
    }));

    return res.status(200).json({ message: "Logged out successfully." });
}