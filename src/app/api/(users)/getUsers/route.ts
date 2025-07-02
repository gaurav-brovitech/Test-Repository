import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        name: "Gaurav Jawalkar",
        planet: "Earth"
    },
    {
        id: 2,
        name: "Sanket Jawalkar",
        planet: "Earth"
    },
    {
        id: 3,
        name: "Jay Jawalkar",
        planet: "Earth"
    },
    {
        id: 4,
        name: "Shubham Jawalkar",
        planet: "Earth"
    },
    {
        id: 5,
        name: "Shreenath Jawalkar",
        planet: "Earth"
    }
]

export async function GET(_: NextRequest) {
    try {
        if (data?.length === 0) {
            return NextResponse.json({ data: "No users found" }, { status: 404 })
        }

        return NextResponse.json({ data: data, message: "Users fetched successfully" }, { status: 200 })
    } catch (error) {
        console.error("Error in GET /api/users:", error);
        return NextResponse.json({ error: "Failed to get the useres from the database" }, { status: 500 })
    }
}