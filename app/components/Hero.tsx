import { motion } from "framer-motion";
import { ImagesSlider } from "./ui/images-slider";

const images = [
  "/assets/hero03.webp",
  "/assets/hero04.webp",
  "/assets/hero05.webp",
];
const Hero = () => {
  return (
    <main className="h-screen">
      <ImagesSlider images={images}>
        <div className="z-50 flex flex-col items-center justify-center">
          <h1 className="text-white lg:text-6xl text-2xl">
            GEAR FOR MODERN FELINE WARRIORS
          </h1>

          <button className="px-4 py-2 tracking-widest backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>Shop Now →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </div>
      </ImagesSlider>
    </main>
  );
};

export default Hero;
