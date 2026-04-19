import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12"> 
       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         <div>
           <h1 className="text-5xl font-bold text-gray-900 mb-4">Discover what's possible with 3D printing</h1>
           <p className="text-xl text-gray-600 mb-8 leading-relaxed">Join our community of creators and explore a vast library of user-submitted models!</p>
           <button className="px-8 py-4 bg-blue-500 text-white rounded-lg font-bold text-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">Browse Models</button>
         </div>
         
           <div className="flex justify-center">
            <Link href="/">
             <Image src="/scrimba.png" alt="3D Printing" width={600} height={400} className="rounded-lg shadow-2xl" />
              </Link>
           </div>
        
       </div>
    </main>
  );
}
