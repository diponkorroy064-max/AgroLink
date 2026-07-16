import { NextResponse } from "next/server";
import { headers } from "next/headers";

import { auth } from "@/lib/auth";
import { uploadToCloudinary } from "@/utils/uploadToCloudinary";

export async function POST(req: Request) {
    try {
        // -------------------------
        // Check Login
        // -------------------------

        const session = await auth.api.getSession({
            headers: await headers(),
        });

        if (!session) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Unauthorized",
                },
                {
                    status: 401,
                }
            );
        }

        // -------------------------
        // Read FormData
        // -------------------------
        const formData = await req.formData();

        const title = formData.get("title") as string;
        const category = formData.get("category") as string;
        const resourceType = formData.get("resourceType") as string;
        const location = formData.get("location") as string;
        const tags = formData.get("tags") as string;
        const description = formData.get("description") as string;
        const content = formData.get("content") as string;
        const youtubeLink = formData.get("youtubeLink") as string;

        const image = formData.get("image") as File;
        const pdf = formData.get("pdf") as File | null;

        if (!image) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Image is required",
                },
                {
                    status: 400,
                }
            );
        }

        // -------------------------
        // Upload Image
        // -------------------------
        const imageUrl = await uploadToCloudinary(
            image,
            "agrolink/resources/images"
        );

        // -------------------------
        // Upload PDF (Optional)
        // -------------------------
        let pdfUrl = "";

        if (pdf && pdf.size > 0) {
            pdfUrl = await uploadToCloudinary(
                pdf,
                "agrolink/resources/pdfs"
            );
        }

        // -------------------------
        // Response
        // -------------------------
        const response = await fetch(
            `${process.env.SERVER_URL}/api/resources`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    category,
                    resourceType,
                    location,
                    tags,
                    description,
                    content,
                    youtubeLink,
                    imageUrl,
                    pdfUrl,
                    author: session.user.name,
                    authorId: session.user.id,
                    authorEmail: session.user.email,
                    authorRole: session.user.role,
                }),
            }
        );

        const result = await response.json();
        // console.log('formData from addResource page', formData);
        return NextResponse.json(result);

    } catch (error) {

        console.error(error);

        return NextResponse.json(
            {
                success: false,
                message: "Internal Server Error",
            },
            {
                status: 500,
            }
        );
    }
}
