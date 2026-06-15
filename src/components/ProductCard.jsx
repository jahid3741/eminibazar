import Link from "next/link";

export default function ProductCard({ plant }) {
  return (
    <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <img
        src={plant.image}
        alt={plant.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-bold">{plant.title}</h3>

        <p className="text-gray-600 mt-2">{plant.shortDescription}</p>

        <p className="font-semibold mt-2">৳ {plant.price}</p>

        <Link
          href={`/items/${plant.id}`}
          className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
