import React from "react"

export default function Home() {
  return (
    <main className="home bg-cover bg-center bg-repeat bg-white px-10 dark:bg-green-100 md:px-20 lg:px-40">
      <section className="min-h-screen">

        <nav className="py-10 mb-12 flex justify-between dark:text-white">
          <div className="animate-bounce h-40 w-40 block mt-4 lg:inline-block text-xl lg:mt-0 dark:text-white  font-bold italic hover:text-black px-4 py-2 rounded  mr-2 text-left fixed"><button onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>👆</button></div>
          <div className="text-md text-right font-bold text- lg:flex-grow">

            <div className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded bg-blue-500 hover:bg-teal-600 mr-2"><button onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>Home</button></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded bg-blue-500 hover:bg-teal-600 mr-2"><button onClick={() => { window.scrollTo({ top: 1010, behavior: "smooth" }) }}>True Prescription</button></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* <div className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded bg-blue-500 hover:bg-teal-600 mr-2"><button onClick={() => { window.scrollTo({ top: 1100, behavior: "smooth" }) }}>About</button></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
            <div className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded bg-blue-500 hover:bg-teal-600 mr-2"><button onClick={() => { window.scrollTo({ top: 5000, behavior: "smooth" }) }}>Contact</button></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>


        </nav>
        <div className=" relative bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

          <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6  lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="w-full text-center sm:text-left flex justify-center flex-wrap">
              <div className="my-5 text-center w-full bg-green-100 p-4 rounded-lg  m-4">
                <span className=" font-bold text-teal-500 text-5xl sm:text-8xl">
                  Tru
                </span>
                &nbsp;&nbsp;
                <span className="text-blue-900 font-semibold text-5xl sm:text-8xl">
                  Doc
                </span>
              </div>
              <p className="text-3xl mt-8 font-semibold text-center sm:text-5xl">
                Get Recommended
                <span className="block font-bold text-teal-500">By Professionals</span>
              </p>
              <div className="mt-8 px-4 sm:px-20 text-md text-center w-full sm:text-xl sm:leading-relaxed font-semibold">
                Stay ahead of the game with our personalized medical test recommendations
                <br />
                Your health, Your choices
              </div>
              <div className="mt-8 flex flex-wrap text-center ">
                <div className="block w-full rounded bg-blue-800 px-12 py-3 text-lg font-medium text-white shadow hover:bg-blue-900 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"><button onClick={() => { window.scrollTo({ top: 1010, behavior: "smooth" }) }}>Get Started</button></div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" text-center w-full bg-green-100 p-4 rounded-lg p-10  m-4">
            <span className=" font-bold text-teal-500 text-5xl sm:text-4xl">
              Fill
            </span>&nbsp;&nbsp;
            <span className=" font-bold text-black font-italic text-5xl sm:text-4xl">in your</span>
            &nbsp;&nbsp;
            <span className="font-bold text-blue-900 font-semibold text-5xl sm:text-4xl">
              Details
            </span>

          </div>

          <div className="bg-color-black text-center ">

            <br /><br /><br />
            <form className="bg-blue-100 bg-cover rounded-lg">

              <br/><br/>
              <label className="text-3xl mt-10 pt-10">
                <input type="text" placeholder="First Name" />
              </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label className="text-3xl">
                <input type="text" placeholder="Last Name" />
              </label><br /><br /><br />
              <label className="text-3xl">
                <input type="date" placeholder="DOB"></input>
              </label><br /><br /><br />
              <label className="text-3xl">
                <input type="radio" name="gender" value="M"></input>Male
                <br></br>
                <input type="radio" name="gender" value="F"></input>Female
              </label><br /><br /><br />
              <label className="text-3xl">
                <input type="email" placeholder="Email" />
              </label><br></br><br></br><br />
              <label className="text-3xl">
                <input type="text" placeholder="Family Medical History" />
              </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label className="text-3xl">
                <input type="text" placeholder="Patient Medical History" />
              </label><br /><br /><br />

            </form><br></br>
            <div className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded bg-blue-500 hover:bg-teal-600 mr-2"><button onClick={() => { window.scrollTo({ top: 1800, behavior: "smooth" }) }}>NEXT</button></div><br /><br /><br />
            <br></br><br></br></div>
          </div>
          <div className="bg-blue-100">
          <div className=" text-center w-full bg-green-100 p-4 rounded-lg p-10  m-4">
            <span className=" font-bold text-teal-500 text-5xl sm:text-4xl">
              Select
            </span>&nbsp;&nbsp;
            <span className=" font-bold text-black font-italic text-5xl sm:text-4xl">your</span>
            &nbsp;&nbsp;
            <span className="font-bold text-blue-900 font-semibold text-5xl sm:text-4xl">
              Symptoms
            </span>

          </div>
          <form>
            <label className="text-3xl">
              <select name="symp1">
                <option>Fever</option>
                <option>Rash</option>
                <option>Headache</option>
                <option>Weight Gain</option>
                <option>Cough</option>
                <option>High Fever</option>
                <option>Nausea</option>
              </select>&nbsp;&nbsp;<br/><br/>
              <input type="range" min="0" max="10"></input>
            </label>
            <br></br><br></br>
            <label className="text-3xl">
              <select name="symp1">
                <option>Rash</option>
                <option>Fever</option>
                <option>Headache</option>
                <option>Weight Gain</option>
                <option>Cough</option>
                <option>High Fever</option>
                <option>Nausea</option>
              </select>&nbsp;&nbsp;<br/><br/>
              <input type="range" min="0" max="10"></input>
            </label >
            <br></br><br></br>
            <label className="text-3xl">
              <select name="symp1">
                <option>Headache</option>
                <option>Rash</option>
                <option>Fever</option>
                <option>Weight Gain</option>
                <option>Cough</option>
                <option>High Fever</option>
                <option>Nausea</option>
              </select>&nbsp;&nbsp;<br/><br/>
              <input type="range" min="0" max="10"></input>
            </label>
            <br></br><br></br>
            <a href="http://localhost:8501/"><input type="Submit" value="Submit" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded bg-blue-500 hover:bg-teal-600 mr-2"></input></a>
            <br></br><br></br>
            <input type="reset" value="Reset" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded bg-red-500 hover:bg-teal-600 mr-2"></input>
          </form>
          </div><br /><br /><br /><br />

          <h3 className="animate-pulse text-7xl dark:text-black-600 font-bold text-center">CONTACT US</h3>
          <div className="max-w-screen-xl px-4 py-14 pb-8 mx-auto lg:pb-16">
            <div className="flex  my-5 md:flex-row flex-col justify-around items-center">
              <div className="flex rounded-lg bg-orange-100 dark:bg-blue-600 p-4 mx-2 flex-wrap justify-evenly w-full md:w-[30rem]">
                
                <div className="flex w-full">
                  <a href="https://anubhavmendhiratta@gmail.com/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30.000001" height="30" width="30" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 3.460938 6.5625 L 26.539062 6.5625 L 26.539062 24.707031 L 3.460938 24.707031 Z M 3.460938 6.5625 " clip-rule="nonzero" /></clipPath></defs><g clip-path="url(#id1)"><path fill="rgb(6.269836%, 5.879211%, 5.099487%)" d="M 24.230469 11.101562 L 15 16.769531 L 5.769531 11.101562 L 5.769531 8.832031 L 15 14.503906 L 24.230469 8.832031 Z M 24.230469 6.5625 L 5.769531 6.5625 C 4.492188 6.5625 3.472656 7.578125 3.472656 8.832031 L 3.460938 22.441406 C 3.460938 23.695312 4.492188 24.707031 5.769531 24.707031 L 24.230469 24.707031 C 25.507812 24.707031 26.539062 23.695312 26.539062 22.441406 L 26.539062 8.832031 C 26.539062 7.578125 25.507812 6.5625 24.230469 6.5625 " fill-opacity="1" fill-rule="nonzero" /></g></svg></a>

                  <span className="text-md mx-2 font-semibold text-gray-700 dark:text-gray-300">
                    trudoc@gmail.com
                  </span>
                </div><br /><br />
                <div className="flex w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16"> <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" /> <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /> </svg>
                  <span className="text-md mx-2 font-semibold text-gray-700 dark:text-gray-300">
                    &nbsp;+91-9955191792
                  </span>
                </div>
                <div className="pt-9">
                  <div className="mb-9 flex text-gray-900 w-full justify-center ">
                    <a href="https://www.instagram.com/anubhav.mendhiratta143/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                      </svg>
                    </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="https://www.linkedin.com/in/anubhav-mendhiratta/" className="mr-9">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </a>
                    <a href="https://www.github.com/anubhav1433" className="mr-9">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a href="https://twitter.com/anubhavm143" >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" /> </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        
      </section>

    </main>

  );

}