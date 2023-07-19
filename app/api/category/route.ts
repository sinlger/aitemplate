import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req:Request) {
    const data = await prisma.category.findMany()
    return NextResponse.json(data)
 }
export async function POST(req:Request) {

 }
