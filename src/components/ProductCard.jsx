import Link from "next/link";

export default function ProductCard({ plant }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 border">
      <img
        src={plant.image}
        alt={plant.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <span className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full mb-3">
          {plant.category}
        </span>

        <h2 className="text-xl font-bold mb-2">{plant.title}</h2>

        <p className="text-gray-600 line-clamp-2 mb-4">
          {plant.shortDescription}
        </p>

        <div className="flex items-center justify-between">
          <p className="text-green-600 font-bold text-xl">৳ {plant.price}</p>

          <Link
            href={`/items/${plant._id}`}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
