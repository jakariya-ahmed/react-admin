import { title } from "framer-motion/client";
import { useState } from "react";
import SingleImageUpload from "./SingleImageUpload";
import { PlusCircle } from "lucide-react";
import GalleryImages from "./GalleryImages";
import BasicForm from "./BasicForm";
import ProductAttributes from "./ProductAttributes";

export default function ProductForm() {

const [product, setProduct] = useState({
    title: '',
    shortDesc: '',
    price: '',
    salePrice: '',
    sku:'',
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
    const {name, value} = e.target;
    setProduct({...product, [name] : value});
}
    return (
        <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-8 mt-4">
            {/* left section  */}
            <div className="w-full lg:w-[70%]">
                <div className="bg-white p-5 shadow-sm rounded-sm border-l-2 border-cyan-900">
                    <h2 className="text-xl text-ingigo-900 font-semibold mb-4">Simple Form</h2>
                    <BasicForm product={product} handleProductChange={handleProductChange} /> 
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-x-2">
                        <div className="px-2">
                        <label htmlFor="" className="block font-medium mb-1 font-semibold text-gray-700">Price <span className="text-indigo-900">*</span> </label>
                        <input type="number" name="price" value={product.price}
                            onChange={handleProductChange}
                            placeholder="Price"
                            className="w-full mb-2 border placeholder-gray-600 border-gray-300 rounded-lg px-3 py-2 focus:ring-0 focus:ring-indigo-700 focus:border-1 focus:border-indigo-900 focus:outline-none transition-all duration-150"
                        />
                        </div>
                        <div className="px-2">
                        <label htmlFor="" className="block font-medium mb-1 font-semibold text-gray-700">Sale Price <span className="text-indigo-900">*</span> </label>
                        <input type="number" name="salePrice" value={product.salePrice}
                            onChange={handleProductChange}
                            placeholder="Sale Price"
                            className="w-full mb-2 border placeholder-gray-600 border-gray-300 rounded-lg px-3 py-2 focus:ring-0 focus:ring-indigo-700 focus:border-1 focus:border-indigo-900 focus:outline-none transition-all duration-150"
                        />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-x-2">
                        <div className="px-2">
                        <label htmlFor="" className="block font-medium mb-1 font-semibold text-gray-700">Stock Qty <span className="text-indigo-900">*</span> </label>
                        <input type="number" name="price" value={product.quantity}
                            onChange={handleProductChange}
                            placeholder="quantity"
                            className="w-full mb-2 border placeholder-gray-600 border-gray-300 rounded-lg px-3 py-2 focus:ring-0 focus:ring-indigo-700 focus:border-1 focus:border-indigo-900 focus:outline-none transition-all duration-150"
                        />
                        </div>
                        <div className="px-2">
                        <label htmlFor="" className="block font-medium mb-1 font-semibold text-gray-700">Weight <span className="text-indigo-900">*</span> </label>
                        <input type="number" name="weight" value={product.weight}
                            onChange={handleProductChange}
                            placeholder="Weight"
                            className="w-full mb-2 border placeholder-gray-600 border-gray-300 rounded-lg px-3 py-2 focus:ring-0 focus:ring-indigo-700 focus:border-1 focus:border-indigo-900 focus:outline-none transition-all duration-150"
                        />
                        </div>
                        <button className="flex items-center gap-1 p-2 px-3 bg-indigo-700 rounded-md text-white w-40"> Create Product 
                            <PlusCircle className="w-5 h-5"/> 
                        </button>
                    </div>
                </div>
                {/* Attributes section  */}
                <ProductAttributes product={product} setProduct={setProduct} handleProductChange={handleProductChange}/>
                

            </div>
            {/* right section  */}
            <div className="w-full lg:w-[30%] space-y-6">
                {/* Single image upload  */}
                <SingleImageUpload product={product} handleProductChange={handleProductChange} /> 
                <div className="bg-white p-5 shadow-sm rounded-sm border-l-2 border-cyan-900">
                    <h2 className="text-xl text-ingigo-900 font-semibold mb-4">Gallery Images <span className="text-indigo-900">*</span></h2>
                    <BasicForm product={product} handleProductChange={handleProductChange} /> 
                    <GalleryImages /> 
                    <button className="w-full flex items-center justify-center gap-1 p-2 px-3 bg-indigo-700 rounded-md text-white w-30"> Add New 
                    <PlusCircle className="w-5 h-5"/> 
                    </button>
                </div>        
            </div>
        </div>
    );
}