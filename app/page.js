import Navbar from "@/components/navbar";
import Landing from "@/pages/landing";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Landing />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
