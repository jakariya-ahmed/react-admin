
import { PlusCircle, X } from "lucide-react";
import { useState } from "react";

export default function SingleImageUpload({ product, handleProductChange }) {
    const [preview, setPreview] = useState(null);

    // Change Image Preview 
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result);
            reader.readAsDataURL(file);
        } 
        
    }

    return (
        <div className="bg-white p-5 shadow-sm rounded-sm border-l-2 border-cyan-900">
            <h2 className="text-xl text-ingigo-900 font-semibold mb-4">Image Upload <span className="text-indigo-900">*</span></h2>
            {/* Upload Area  */}
            <div className="mb-4 relative group border-2 border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center cursor-pointer bg-indigo-50 hover:bg-indigo-100 transition-all duration-150">
            <input type="file" accept="image/*"
                onChange={handleImageChange}
                className="absolute w-full h-full inset-0 opacity-0 cursor-pointer"
            />

            {preview ? (
                <div className="w-full relative group">
                    <img src={preview} alt="Product Preview" className="max-h-48 rounded-md object-cover" />
                    <button onClick={() => setPreview(null)}><X className="absolute -top-3 -right-3 w-4 h-4 rounded-full bg-red-500 cursor-pointer text-white" /> </button>
                </div>
            
            ) : (
                <div className="flex flex-col items-center text-gray-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 mb-2 text-purple-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M3 8.25l7.5 7.5L21 8.25"
                        />
                    </svg>
                    <p className="text-sm font-medium text-indigo-900">
                    Click to upload image
                    </p>
                    <p className="text-xs text-gray-400">PNG, JPG, JPEG (max 5MB)</p>
                </div>
            )}
            
            </div>
            <div className="px-2">
                <label htmlFor="" className="block font-medium mb-1 font-semibold text-gray-700">Category <span className="text-indigo-900">*</span> </label>
                <input type="text" name="category" value={product.category}
                onChange={handleProductChange}
                placeholder="Category Name"
                className="w-full mb-2 border text-gray-500 border-gray-300 rounded-lg px-3 py-2 focus:ring-0 focus:ring-indigo-700 focus:border-1 focus:border-indigo-900 focus:outline-none transition-all duration-150"
                />
            </div>

            <button className="flex items-center gap-1 p-2 px-3 bg-indigo-700 rounded-md text-white w-30"> Add New 
                <PlusCircle className="w-5 h-5"/> 
            </button>
        </div>

    );
}