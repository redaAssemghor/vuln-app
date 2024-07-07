import Image from "next/image";

const Categories = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center py-8 px-4 bg-gray-100 gap-6">
      <Image
        width={100}
        height={100}
        src={"/assets/categories01.webp"}
        alt="Cat Gear"
        className="rounded-lg shadow-md"
      />
      <div className="flex flex-col items-center justify-center gap-4 w-full lg:w-1/2 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          PREPARE YOUR CAT FOR BATTLE WITH STEALTHY WHISKERS
        </h1>
        <p className="text-gray-600">
          At Stealthy Whiskers, we're more than just a store that sells cat
          gear. We're passionate cat owners and military enthusiasts who want to
          help other cat owners train their furry friends to become skilled and
          prepared warriors. Learn more about our story and how we got started
          on our mission to help cats become the best they can be.
        </p>
        <div className="flex gap-4 mt-6">
          <button className="bg-black text-white px-6 py-2 rounded-full tracking-widest">
            Show All
          </button>
          <button className="bg-transparent text-black px-6 py-2 rounded-full shadow-sm tracking-widest">
            Our Story →
          </button>
        </div>
      </div>
      <Image
        width={100}
        height={100}
        src={"/assets/categories02.png"}
        alt="Cat Gear"
        className="rounded-lg shadow-md"
      />
    </section>
  );
};

export default Categories;
