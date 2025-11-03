export default function BasicForm({product, handleProductChange}) {
    return (
        <>
            <div className="px-2">
                <label htmlFor="" className="block font-medium mb-1 font-semibold text-gray-700">Produdct Title <span className="text-indigo-900">*</span> </label>
                <input type="text" name="title" value={product.title}
                onChange={handleProductChange}
                placeholder="Product Name"
                className="w-full mb-2 placeholder-gray-600 border border-gray-300 rounded-lg px-3 py-2 focus:ring-0 focus:ring-indigo-700 focus:border-1 focus:border-indigo-900 focus:outline-none transition-all duration-150"
                />
            </div>
            <div className="px-2">
                <label
                    htmlFor="shortDesc"
                    className="block font-medium mb-1 font-semibold text-gray-700"
                >
                    Short Description <span className="text-indigo-900">*</span>
                </label>
                <textarea type="number" name="price" value={product.shortDesc}
                onChange={handleProductChange}
                className="w-full mb-2 placeholder-gray-600 border border-gray-300 rounded-lg px-3 py-2 focus:ring-0 focus:ring-indigo-700 focus:border-1 focus:border-indigo-900 focus:outline-none transition-all duration-150"
                >
                    Short Description...
                </textarea>
            </div>
        </>
    );
}