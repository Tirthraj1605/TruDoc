import React from "react"

export default function Home() {
  return (
    <main className="home bg-cover bg-center bg-no-repeat bg-white px-10 dark:bg-green-100 md:px-20 lg:px-40">
      <section className="min-h-screen">

        <nav className="py-10 mb-12 flex justify-between dark:text-white">
          <div className=" h-60 w-60 block mt-4 lg:inline-block text-xl lg:mt-0 dark:text-white  font-bold italic hover:text-black px-4 py-2 rounded  mr-2 text-left fixed"><button onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>TD</button></div>
          <div className="text-md text-right font-bold text- lg:flex-grow">

            <div className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded bg-blue-500 hover:bg-teal-600 mr-2"><button onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>Home</button></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded bg-blue-500 hover:bg-teal-600 mr-2"><button onClick={() => { window.scrollTo({ top: 1010, behavior: "smooth" }) }}>True Prescription</button></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded bg-blue-500 hover:bg-teal-600 mr-2"><button onClick={() => { window.scrollTo({ top: 1100, behavior: "smooth" }) }}>About</button></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                <div className="block w-full rounded bg-blue-800 px-12 py-3 text-lg font-medium text-white shadow hover:bg-blue-900 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"><button onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>Get Started</button></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-100 bg-cover rounded-lg">
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
            <form >


              <label className="text-3xl">
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
            <div className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded bg-blue-500 hover:bg-teal-600 mr-2"><button onClick={() => { window.scrollTo({ top: 2020, behavior: "smooth" }) }}>NEXT</button></div><br /><br /><br />
            <br></br><br></br></div>
          </div>
          <div className="bg-blue-100">
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
              Severity<input type="range" min="0" max="10"></input>
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
              Severity<input type="range" min="0" max="10"></input>
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
              Severity<input type="range" min="0" max="10"></input>
            </label>
            <br></br><br></br>
            <input type="Submit" value="Submit" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded bg-blue-500 hover:bg-teal-600 mr-2"></input>
            <br></br><br></br>
            <input type="reset" value="Reset" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded bg-red-500 hover:bg-teal-600 mr-2"></input>
          </form>
          </div>

        
      </section>

    </main>

  );

}