import getAllModelas from "../data/GetModels";
export default function ModelsLayout({ children }: { children: React.ReactNode }) {
    const data = getAllModelas();
    const categories: string[] = data.map((model) => model.category);
    const uniqueCategories = Array.from(new Set(categories));

    return (
        <main className="flex flex-row gap-8 py-12">
            {/* Left Sidebar - Categories */}
            <aside className="w-72 flex-shrink-0">
                <div className="bg-white rounded-lg shadow-md p-8 sticky top-24">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">Categories</h2>
                    <nav className="flex flex-col gap-6">
                        {uniqueCategories.map((category) => (
                            <a 
                                key={category} 
                                href={`/3d-models/${category.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-indigo-50 no-underline"
                            >
                                {category}
                            </a>
                        ))}
                    </nav>
                </div>
            </aside>

            {/* Right Content Area */}
            <div className="flex-1">
                {children}
            </div>
        </main>
    );
}