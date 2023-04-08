import React from "react"

export default function Navbar() {
    return(
        <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between dark:text-white">

            <div className="text-md text-center font-bold text-teal-600 lg:flex-grow">

              <div className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-900 mr-2"><button onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>Home</button></div>
              <div className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-900 mr-2"><button onClick={() => { window.scrollTo({ top: 850, behavior: "smooth" }) }}>About</button></div>
              <div className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-900 mr-2"><button onClick={() => { window.scrollTo({ top: 1700, behavior: "smooth" }) }}>Skills</button></div>
              <div className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-900 mr-2"><button onClick={() => { window.scrollTo({ top: 2400, behavior: "smooth" }) }}>Experience</button></div>
              <div className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-900 mr-2"><button onClick={() => { window.scrollTo({ top: 2400, behavior: "smooth" }) }}>Projects</button></div>
              <div className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-900 mr-2"><button onClick={() => { window.scrollTo({ top: 5000, behavior: "smooth" }) }}>Contact</button></div>
            </div>
            <h1 className="font-burtons text-xl"></h1>
            <ul className="flex items-center">

              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          </section>
          </main>

    );

}