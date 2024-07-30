import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";

const Index = () => {
  const links = [
    { title: "Hack the Planet", url: "#" },
    { title: "Cybersecurity Blog", url: "#" },
    { title: "Encrypted Chat", url: "#" },
    { title: "Dark Web Forum", url: "#" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-8 bg-black text-green-400">
      <header className="w-full text-center mb-8">
        <h1 className="text-2xl font-bold flex items-center justify-center glitch">
          <Terminal className="mr-2" />
          H4ck3r L1nks
        </h1>
      </header>

      <main className="w-full max-w-md flex-grow flex flex-col items-center">
        <div className="mb-8 text-center">
          <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-green-900 flex items-center justify-center">
            <Terminal size={48} />
          </div>
          <h2 className="text-xl font-semibold mb-2 glitch">Anon1337</h2>
          <p className="text-green-600">Welcome to my digital playground</p>
        </div>

        <div className="w-full space-y-4">
          {links.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full text-lg py-6 bg-green-900 hover:bg-green-800 text-green-400 border-green-600 transition-colors"
            >
              {link.title}
            </Button>
          ))}
        </div>
      </main>

      <footer className="w-full text-center mt-8 text-sm text-green-600">
        Encrypted with 256-bit AES
      </footer>
    </div>
  );
};

export default Index;