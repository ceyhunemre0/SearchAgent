export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="text-2xl font-bold">Search
                            <span className="text-indigo-400">Bot</span>
                        </a>
                        <p className="mt-2 text-gray-400">
                            SerpApi, OpenAI ve LangChain kullanılarak geliştirilmiş yapay zeka asistanı.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300">Chat</a>
                        <a href="https://ceyhunemre.net.tr" className="text-gray-400 hover:text-white transition duration-300">Developer's Website</a>
                    </div>
                </div>
                <hr className="border-gray-800 my-8" />
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">© 2025 Tüm Hakları Saklıdır.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="https://www.instagram.com/only_emree/" className="text-gray-400 hover:text-white transition duration-300" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ceyhun-emre-top-85212b311" className="text-gray-400 hover:text-white transition duration-300" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.github.com/ceyhunemre0" className="text-gray-400 hover:text-white transition duration-300" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}