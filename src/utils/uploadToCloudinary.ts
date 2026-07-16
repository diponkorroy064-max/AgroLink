import cloudinary from "@/lib/cloudinary";
import streamifier from "streamifier";
  
export async function uploadToCloudinary(file: File, folder: string) {
    const buffer = Buffer.from(await file.arrayBuffer());

    return new Promise<string>((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                folder,
                resource_type: "auto",
            },
            (error, result) => {
                if (error) {
                    console.error("Cloudinary Upload Error:");
                    console.error(error);

                    return reject(error);
                }

                if (!result)
                    return reject(new Error("Upload failed"));

                resolve(result.secure_url);
            }
        );

        streamifier.createReadStream(buffer).pipe(stream);
    });
}
