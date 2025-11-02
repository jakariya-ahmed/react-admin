import { X } from "lucide-react";
import { useState } from "react";

export default function GalleryImages() {
  const [gallery, setGallery] = useState([]);

  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files);
    const newImgs = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      id: Math.random().toString(30).substr(1,9),
    }));
    setGallery((prev) => [...prev, ...newImgs]);
  } 

  // Handle remove images
  const handleRemove = (id) => {
    setGallery((prev) => prev.filter((img) => img.id !== id));
  } 


    return (
        <div className="bg-white p-5 shadow-sm rounded-sm border-l-2 border-cyan-900">
            <h2 className="text-xl text-ingigo-900 font-semibold mb-4">Gallery Images <span className="text-indigo-900">*</span></h2>

            {/* Upload Images  */}

      <label className="cursor-pointer flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg bg-indigo-100 trasition-all duration-150">
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
            <p className="text-sm font-medium text-indigo-900"> Click to Upload Images </p>
            <p className="text-xs text-gray-400">PNG, JPG, JPEG, (MAX 5MB)</p>
        </div>
        <input type="file" accept="image/*" multiple className="hidden" onChange={handleGalleryChange}/>
      </label>
      {/* Preview Images  */}
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {gallery.map((img) => (
          <div key={img.id} className="relative group rounded-lg overflow-hidden border border-gray-300">
              <img src={img.preview} alt="preview" className="w-full" />
              {/* remove icon  */}
              <button 
                onClick={() => handleRemove(img.id)}
                className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition cursor-pointer"
              ><X size={16} /></button>
          </div>
        ))}
      </div>

        </div>
    );
}