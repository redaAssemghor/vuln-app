import Categories from "./components/Categories";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="h-full">
      <Header />
      <Hero />
      <Categories />
    </main>
  );
}
