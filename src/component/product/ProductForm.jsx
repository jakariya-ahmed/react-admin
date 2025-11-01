import { title } from "framer-motion/client";
import { useState } from "react";

export default function ProductForm() {

const [product, setProduct] = useState({
    title: '',
    shortDesc: '',
    price: '',
    salePrice: '',
    quantity: '',
    weight: '',
    category: '',
    brand: '',
    tags: '',
    image: null,
    gallery: [],
    attributes: [],

});


// handle input change
const handleProductChange = (e) => {
    const [name, value] = e.target;
    setProduct({...product, [name] : value});
}
    return (
        <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-5 mt-4">
            {/* left section  */}
            <div className="w-full lg:w-[70%]">
                <div className="bg-white p-5 shadow-sm rounded-sm border-l-2 border-cyan-900">
                    <h2 className="text-xl text-ingigo-900 font-semibold mb-4">Simple Form</h2>
                    <div className="px-2">
                        <label htmlFor="" className="block font-medium mb-1 font-semibold text-gray-700">Produdct Title <span className="text-indigo-900">*</span> </label>
                        <input type="text" name="title" value={product.title}
                        onChange={handleProductChange}
                        placeholder="Product Name"
                        className="w-full mb-2 border border-gray-300 rounded-lg px-3 py-2 focus:ring-0 focus:ring-indigo-700 focus:border-1 focus:border-indigo-900 focus:outline-none transition-all duration-150"
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
                        className="w-full mb-2 border border-gray-300 rounded-lg px-3 py-2 focus:ring-0 focus:ring-indigo-700 focus:border-1 focus:border-indigo-900 focus:outline-none transition-all duration-150"
                        >

                        </textarea>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-x-2">
                        <div className="px-2">
                        <label htmlFor="" className="block font-medium mb-1 font-semibold text-gray-700">Price <span className="text-indigo-900">*</span> </label>
                        <input type="number" name="price" value={product.price}
                            onChange={handleProductChange}
                            placeholder="Price"
                            className="w-full mb-2 border border-gray-300 rounded-lg px-3 py-2 focus:ring-0 focus:ring-indigo-700 focus:border-1 focus:border-indigo-900 focus:outline-none transition-all duration-150"
                        />
                        </div>
                        <div className="px-2">
                        <label htmlFor="" className="block font-medium mb-1 font-semibold text-gray-700">Sale Price <span className="text-indigo-900">*</span> </label>
                        <input type="number" name="salePrice" value={product.salePrice}
                            onChange={handleProductChange}
                            placeholder="Sale Price"
                            className="w-full mb-2 border border-gray-300 rounded-lg px-3 py-2 focus:ring-0 focus:ring-indigo-700 focus:border-1 focus:border-indigo-900 focus:outline-none transition-all duration-150"
                        />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-x-2">
                        <div className="px-2">
                        <label htmlFor="" className="block font-medium mb-1 font-semibold text-gray-700">Stock Qty <span className="text-indigo-900">*</span> </label>
                        <input type="number" name="price" value={product.quantity}
                            onChange={handleProductChange}
                            placeholder="quantity"
                            className="w-full mb-2 border border-gray-300 rounded-lg px-3 py-2 focus:ring-0 focus:ring-indigo-700 focus:border-1 focus:border-indigo-900 focus:outline-none transition-all duration-150"
                        />
                        </div>
                        <div className="px-2">
                        <label htmlFor="" className="block font-medium mb-1 font-semibold text-gray-700">Weight <span className="text-indigo-900">*</span> </label>
                        <input type="number" name="weight" value={product.weight}
                            onChange={handleProductChange}
                            placeholder="Weight"
                            className="w-full mb-2 border border-gray-300 rounded-lg px-3 py-2 focus:ring-0 focus:ring-indigo-700 focus:border-1 focus:border-indigo-900 focus:outline-none transition-all duration-150"
                        />
                        </div>
                    </div>
                </div>
            </div>
            {/* right section  */}
            <div className="w-full lg:w-[30%]">
                {/* Single image upload  */}
                <div className="bg-white p-5 shadow-sm rounded-sm border-l-2 border-cyan-900">
                    <h2 className="text-xl text-ingigo-900 font-semibold mb-4">Image Upload </h2>
                    
                </div>
            </div>
        </div>
    );
}