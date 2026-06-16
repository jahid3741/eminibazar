async function getProduct(id) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function ProductDetails({ params }) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[500px] object-cover rounded-xl"
        />

        <div>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
            {product.category}
          </span>

          <h1 className="text-4xl font-bold mt-4">{product.title}</h1>

          <p className="text-green-600 text-3xl font-bold mt-4">
            ৳ {product.price}
          </p>

          <p className="mt-4 text-gray-600">{product.shortDescription}</p>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-3">Description</h2>

            <p className="text-gray-700 leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          <a
            href="/items"
            className="inline-block mt-8 bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Back to Plants
          </a>
        </div>
      </div>
    </div>
  );
}
