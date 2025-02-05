import Squares from "./blocks/Backgrounds/Squares/Squares";
import BlurText from "./blocks/TextAnimations/BlurText/BlurText";
import RotatingText from "./blocks/TextAnimations/RotatingText/RotatingText";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="relative w-screen h-screen bg-black">
      {/* Background squares */}
      <div className="absolute inset-0 ">
        <Squares speed={0.5} squareSize={90} direction="diagonal" borderColor="#252e33" hoverFillColor="#222" />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center h-full gap-4 z-50 ">
        <img src="/IMG_5sw456.JPG" alt="profile" className="w-44 h-44 rounded-full border-4 border-white shadow-lg object-cover z-10" />
        <div className="text-center flex flex-row group mt-4">
          <BlurText text="Hallo! I'm Ahmad Nur Ain" delay={200} animateBy="words" direction="bottom" threshold={0.9} className="text-white lg:text-4xl md:text-3xl font-bold z-50 text-2xl" />
          <span className="inline-block w-0 lg:text-3xl md:text-2xl text-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 ">👋</span>
        </div>
        <div className="flex items-center space-x-3 lg:text-xl md:text-xl text-lg font-bold  mb-6 mt-5 z-10">
          {/* Teks Statis */}
          <span className="text-white font-semibold">🚀 Passionate in:</span>

          {/* Teks Berputar */}
          <RotatingText
            texts={["Frontend Development", "Full Stack Development", "Tech Enthusiast"]}
            mainClassName="px-2 sm:px-2 md:px-3 border-2 border-cyan-500 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
        <div className="flex items-center justify-center  ">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-lg text-white max-w-sm">
            <p className="flex items-center gap-2 lg:text-lg md:text-lg text-sm font-medium">
              📍 <span>Based in: Indonesia</span>
            </p>
            <p className="flex items-center gap-2 lg:text-lg md:text-lg text-sm font-medium mt-2">
              🎓 <span>Studying: Universitas Majalengka</span>
            </p>
          </div>
        </div>

        <div className="flex gap-8 justify-center mt-4 z-10">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/ahmad-nur-ain-4a6152253" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-600 text-4xl hover:text-blue-800 transition duration-300 hover:scale-105" />
          </a>

          {/* GitHub */}
          <a href="https://github.com/ahmadnurain" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-300 text-4xl hover:text-white transition duration-300 hover:scale-105" />
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/amdain54/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-500 text-4xl hover:text-pink-700 transition duration-300 hover:scale-105" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
