export function ProductCard({ product }) {
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(product.price);
    
    return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="aspect-w-3 aspect-h-4 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-gray-900">
          <a href="#">
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </a>
        </h3>
        <p className="text-sm text-gray-500">{product.description.substring(0, 60)}...</p>
        <div className="flex flex-1 flex-col justify-end">
          <p className="text-base font-medium text-gray-900">{formattedPrice}</p>
        </div>
      </div>
    </div>
  );
};