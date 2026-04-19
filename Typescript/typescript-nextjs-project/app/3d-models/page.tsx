import { JSX } from "react/jsx-dev-runtime";
import getModels from "../data/GetModels";
import Image from "next/image";

export default function ModelsPage() : JSX.Element {
    const models = getModels();
    return (
        <div>
            <h1 className="text-4xl font-bold mb-12 text-gray-900">3D Models</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {models.map((model) => (
                    <div key={model.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                        {/* Image Container */}
                        <div className="relative h-64 bg-gray-200 overflow-hidden">
                            <Image 
                                src="/scrimba.png" 
                                alt={model.name}
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        
                        {/* Content Container */}
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-2">{model.name}</h2>
                            <p className="text-gray-600 mb-4">{model.description}</p>
                            
                            {/* Category Badge */}
                            <div className="flex items-center justify-between">
                                <span className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                                    {model.category}
                                </span>
                                
                                {/* Like Button */}
                                <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors">
                                    <span className="text-xl">♥</span>
                                    <span className="text-sm font-medium">1789</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}