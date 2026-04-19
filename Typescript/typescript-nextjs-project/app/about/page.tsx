import Link from "next/link";
export default function AboutPage() {
     return (
        <main>
            <h1>About printforge</h1>
            <div className="flex flex-row gap-30 items-center rounded-lg shadow-lg p-8 mb-12">
                 
           <Link href="./"><img src="/scrimba.png" alt="3D Printing" width={400} height={300} className="rounded-lg" /> </Link>
                <div className="flex flex-col p-8 gap-4">
                    <h3 className="text-2xl font-bold mb-4">Empowering Makers Worldwide</h3>
                    <p>Founded in 2023, PrintForge has quickly become the go-to platform for 3D printing enthusiasts, makers, and professional designers to share and discover amazing STL files for 3D printing.</p>
                    <p>Our mission is to foster a vibrant community where creativity meets technology, enabling anyone to bring their ideas to life through 3D printing.</p>
                </div>
            </div>
           <div className="flex flex-row gap-12 justify-center items-stretch py-16 px-8"> 
                   <div className="flex-1 text-center pr-8"> <h3 className="text-2xl font-bold mb-4">100K+ Models</h3> <p>Access our vast library of community-created 3D models, from practical tools to artistic creations</p> </div>
                   <div className="border-l-2 border-gray-300"></div>
                   <div className="flex-1 text-center px-8"> <h3 className="text-2xl font-bold mb-4">Active Community</h3> <p>Join thousands of makers who share tips, provide feedback, and collaborate on projects.</p> </div>
                   <div className="border-l-2 border-gray-300"></div>
                   <div className="flex-1 text-center pl-8"> <h3 className="text-2xl font-bold mb-4">Free to Use</h3> <p>Most models are free to download, with optional premium features for power users.</p> </div>                 
           </div>
        </main>
     )
}