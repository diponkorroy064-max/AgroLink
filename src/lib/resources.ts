import clientPromise from "./mongodb";

export async function resourceCollection() {
    const client = await clientPromise;

    return client
        .db(process.env.DATABASE_NAME)
        .collection("resources");
}
