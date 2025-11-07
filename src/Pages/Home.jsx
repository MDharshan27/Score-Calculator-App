import { useState } from "react";
import MarksGrid from "../Components/MarksGrid";
import ResultCard from "../Components/ResultCard";
import HeroIllustration from "../assets/hero-illustration.svg"; 

function Home() {
  const [name, setName] = useState("");
  const [marks, setMarks] = useState(Array(9).fill(""));

  const handleChange = (index, value) => {
    const updated = [...marks];
    updated[index] = value;
    setMarks(updated);
  };

  const allFilled = marks.every((val) => val !== "");
  const total = allFilled ? marks.reduce((sum, val) => sum + Number(val), 0) : 0;
  const average = allFilled ? total / marks.length : 0;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-10 bg-gradient-to-r from-purple-400 to-blue-400">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Fast & Easy Marks Calculator
          </h1>
          <p className="text-white text-base md:text-lg">
            Calculate total and average marks in seconds with real-time results and a clean, minimal interface.
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img 
            src={HeroIllustration} 
            alt="Illustration" 
            className="w-3/4 md:w-2/3 max-w-sm" 
          />
        </div>
      </section>

      {/* Calculator Section */}
      <section className="px-6 py-12 flex justify-center">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            Marks Calculator
          </h2>

          {/* Name Input */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full mb-6 p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-100 outline-none text-center"
          />

          {/* Marks Grid */}
          <MarksGrid marks={marks} handleChange={handleChange} />

          {/* Result */}
          <div className="mt-6 text-center">
            {allFilled ? (
              <ResultCard name={name} total={total} average={average} />
            ) : (
              <p className="text-gray-500 italic">
                Enter all 9 marks to see your result
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
