import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Contact } from "@/components/contact";

export default function contactPage() {
  return (
    <div className="min-h-screen flex flex-col relative selection:bg-sky-500 selection:text-white">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}
