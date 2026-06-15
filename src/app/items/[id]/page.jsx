import Link from "next/link";
import { plants } from "@/data/plants";

export default async function DetailsPage({ params }) {
  const { id } = await params;

  const plant = plants.find((item) => item.id === id);

  if (!plant) {
    return <h1 className="text-center text-3xl mt-10">Plant Not Found</h1>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <img
        src={plant.image}
        alt={plant.title}
        className="w-full h-[450px] object-cover rounded-xl"
      />

      <h1 className="text-4xl font-bold mt-6">{plant.title}</h1>

      <p className="mt-4 text-lg">{plant.fullDescription}</p>

      <div className="mt-6 space-y-2">
        <p>
          <strong>Category:</strong> {plant.category}
        </p>

        <p>
          <strong>Price:</strong> ৳{plant.price}
        </p>
      </div>

      <Link
        href="/items"
        className="inline-block mt-8 bg-green-600 text-white px-5 py-3 rounded-lg"
      >
        Back To Plants
      </Link>
    </div>
  );
}
