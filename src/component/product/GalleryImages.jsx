import { X } from "lucide-react";
import { useState } from "react";

export default function GalleryImages() {
    
    const [gallery, setGallery] = useState([]);

    // Handle Gallery Chnages 
    const handleGalleryChange = (e) => {
        const files = Array.from(e.target.files);
        const newImgs = files.map((file) => ({
             file,
            preview: URL.createObjectURL(file),
            id: Math.random().toString(36).substr(2, 9),
        }));
        setGallery((prev) => [...prev, ...newImgs]);
    }

    // Handle Remove Images
    const handleRemove = (id) => {
        setGallery((prev) => prev.filter((img) => img.id !== id));
    };


    return (
        <div className="bg-white p-5 shadow-sm rounded-sm border-l-2 border-cyan-900">
            <h2 className="text-xl text-ingigo-900 font-semibold mb-4">Gallery Images <span className="text-indigo-900">*</span></h2>

            {/* Upload Images  */}

            <div className="fex items-center justify-center fex-col border-1 border-dashed border-gray-400 bg-indigo-50 hover:bg-indigo-100 transition-all duration-150 rounded-md p-4">
                <div>
                    <input type="file" name="images/*" multiple 
                onChange={handleGalleryChange}
                className="h-full w-full inset-0 opacity-0 cursor-pointer" />
                </div>
                <div>
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
            </div>

            {/* Images Preview  */}
            {gallery.length > 0 && (
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {gallery.map((img) => (
            <div
              key={img.id}
              className="relative group rounded-lg overflow-hidden border border-gray-300"
            >
              <img
                src={img.preview}
                alt="preview"
                className="w-full"
              />
              <button
                onClick={() => handleRemove(img.id)}
                className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>
          ))}
                </div>
            )}

        </div>
    );
}