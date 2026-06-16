import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(request, context) {
  try {
    const { id } = await context.params;

    const client = await clientPromise;

    const db = client.db("eminibazar");

    const product = await db.collection("products").findOne({
      _id: new ObjectId(id),
    });

    return Response.json(product);
  } catch (error) {
    return Response.json(
      {
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}

export async function PUT(request, context) {
  try {
    const { id } = await context.params;

    const body = await request.json();

    const client = await clientPromise;

    const db = client.db("eminibazar");

    const result = await db.collection("products").updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: body,
      },
    );

    return Response.json(result);
  } catch (error) {
    return Response.json(
      {
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}

export async function DELETE(request, context) {
  try {
    const { id } = await context.params;

    const client = await clientPromise;

    const db = client.db("eminibazar");

    const result = await db.collection("products").deleteOne({
      _id: new ObjectId(id),
    });

    return Response.json(result);
  } catch (error) {
    return Response.json(
      {
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
