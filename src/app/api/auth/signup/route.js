import Admin from "@/database/models/admin";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import connectDB from "@/database/dbConfig";

export async function POST(req) {
    try {
        await connectDB();
        const reqBody = await req.json()
        const { name, email, password } = reqBody;
        console.log(reqBody);

        //check if user exists
        const user = await Admin.findOne({ email });
        if (user) {
            return NextResponse.json({ error: "A user already exists with the email" }, { status: 409 })
        }

        console.log("Creating Admin");

        const admin = await Admin.create({
            email,
            password,
        });

        return NextResponse.json({ message: "Admin created successfully" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}