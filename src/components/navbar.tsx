'use client';
export default function Navbar() {
 

    return (
        
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="mx-auto px-4 py-4 flex justify-between items-center bg-white">


            <div className="flex items-center">
                <a href="#" className="text-2xl font-bold text-indigo-400">
                    Search<span className="text-indigo-600">Agent</span>
                </a>
            </div>

            <nav className="hidden md:flex space-x-8 mr-6">
                <a href="#" className="relative nav-link font-medium text-gray-700 hover:text-indigo-600 
                after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-[2px] after:left-0 
                after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full
                ">
                Chat
                </a>
                <a href="https://ceyhunemre.net.tr" className="relative nav-link font-medium text-gray-700 hover:text-indigo-600 
                after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-[2px] after:left-0 
                after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full
                ">
                Developer's Website
                </a>
            </nav>
            <button
                id="mobile-menu-button"
                className="md:hidden text-gray-700 focus:outline-none"
                onClick={() => {
                    const menu = document.getElementById("mobile-menu");
                    if (menu) {
                        menu.classList.toggle("hidden");
                    }
                }}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            
        </div>

            <div id="mobile-menu" className="md:hidden bg-white shadow-lg absolute w-full hidden">
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
                <a href="#" className="py-2 font-medium text-gray-700 hover:text-indigo-600">Chat</a>
                <a href="https://ceyhunemre.net.tr" className="py-2 font-medium text-gray-700 hover:text-indigo-600">Developer's Website</a>
            </div>
            </div>
        </header>
    );

}