import { PlusCircle, PlusIcon, X } from "lucide-react";
import BasicForm from "./BasicForm";
// Default Attributes 
const defaultAttr = () => ({
    id: Date.now().toString() + Math.random().toString(36).slice(2, 7),
    price: '',
    salePrice: '',
    size: '',
    color: '',
    sku: '',
});



export default function ProductAttributes ({ product, setProduct, handleProductChange}) {
    /**  Add Attributes */ 
        // show default one attribute 
    const attributes = product.attributes?.length?product.attributes : [defaultAttr()];

    const addAttr = () => {
        const newAttr = defaultAttr();
        setProduct({ ...product, attributes: [...attributes, newAttr]});
    }
    // Remove Attributes  
    const removeAttr = (id) => {
        if (attributes.length <= 1) return; // prevent removing the default one
        setProduct({...product, attributes: attributes.filter((a) => a.id !== id)});
    }
    
    // Update attrs 
    const updateAttr = (id, field, value) => {
        const updated = attributes.map((a) => 
            a.id === id ? {...a, [field] : value } : a 
        );
        setProduct({...product, attributes: updated});
    } 


    return (
        <>
            <div className="mt-6 bg-white p-5 shadow-sm rounded-sm border-l-2 border-cyan-900">
                <div className="flex justify-between items-center gap-4 mb-4">
                    <h2 className="text-xl text-ingigo-900 font-semibold mb-4">Product Attributes </h2>
                    <button
                    type="button"
                    onClick={addAttr}
                    className="cursor-pointer flex items-center gap-x-1 hover:text-indigo-900 border-b border-transparent hover:border-indigo-900 transition-all duration-150"
                    >
                    <span className="text-gray-600">Add New</span>
                    <PlusIcon className="w-5 h-5" />
                    </button>
                </div>
                {/* Attributes  */}
                 <div className="space-y-4">
                    <BasicForm product={product} handleProductChange={handleProductChange}/>
                    {attributes.map((attr, i) => (
                    <div 
                    key={attr.id}
                    className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-x-2 border border-gray-300 rounded p-3">
                        <div className="px-2">
                            <label className="block font-medium mb-1 text-gray-700">
                                Price <span className="text-indigo-900">*</span>
                            </label>
                            <input
                            type="number"
                            value={attr.price}
                            onChange={(e) => updateAttr(attr.id, 'price', e.target.value)}
                            placeholder="price"
                            className="w-full border placeholder-gray-600 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-0 focus:border-indigo-900 transition-all duration-150"
                            />
                        </div>
                        <div className="px-2">
                            <label className="block font-medium mb-1 text-gray-700">
                                Sale Price <span className="text-indigo-900">*</span>
                            </label>
                            <input
                            type="number"
                            value={attr.salePrice}
                            onChange={(e) => updateAttr(attr.id, 'salePrice', e.target.value)}
                            placeholder="salePrice"
                            className="w-full border placeholder-gray-600 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-0 focus:border-indigo-900 transition-all duration-150"
                            />
                        </div>
                        <div className="px-2">
                            <label className="block font-medium mb-1 text-gray-700">Size</label>
                            <select
                                value={attr.size}
                                onChange={(e) => updateAttr(attr.id, 'size', e.target.value)}
                                className="w-full border text-gray-600 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-0 focus:border-indigo-900 transition-all duration-150"
                            >
                                <option value="">Select Size</option>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        </div>
                        <div className="flex ">
                            <div className="px-2">
                                <label className="block mb-1 text-sm font-medium text-gray-700">
                                Color
                                </label>
                                <input
                                    type="color"
                                    value={attr.color}
                                    onChange={(e) => updateAttr(attr.id, 'color', e.target.value)}
                                    className="w-12 h-10 placeholder-gray-600 border border-gray-300 rounded-lg cursor-pointer focus:outline-none transition-all duration-150"
                                />
                            </div>
                            <div className="px-2">
                                <label className="block font-medium mb-1 text-gray-700">SKU</label>
                                <input
                                type="text"
                                value={attr.sku}
                                onChange={(e) => updateAttr(attr.id, 'sku', e.target.value)}
                                placeholder="SKU"
                                className="w-full border placeholder-gray-600 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-0 focus:border-indigo-900 transition-all duration-150"
                                />
                            </div>
                        </div>
                    {/* Hide remove button if only one row */}
                        {attributes.length > 1 && (
                            <div className="absolute -top-3 -right-3 ">
                            <button
                                type="button"
                                onClick={() => removeAttr(attr.id)}
                                className="inline-flex items-center gap-2 p-1 rounded-full text-red-600 border border-red-100 hover:bg-red-50 cursor-pointer text-sm transition-all"
                            >
                                <X className="w-4 h-4" />
                            </button>
                            </div>
                        )}
                    </div>
                    ))}
                    
                </div>

                <button className="mt-6 flex items-center justify-center gap-1 p-2 px-3 bg-indigo-700 rounded-md text-white w-30"> Add New 
                    <PlusCircle className="w-5 h-5"/> 
                    </button>

            </div>
        </>
    );
}