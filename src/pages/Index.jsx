import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

const Index = () => {
  const links = [
    { title: "My Website", url: "#" },
    { title: "Instagram", url: "#" },
    { title: "Twitter", url: "#" },
    { title: "YouTube", url: "#" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-8 bg-gray-100">
      <header className="w-full text-center mb-8">
        <h1 className="text-2xl font-bold flex items-center justify-center">
          <Link className="mr-2" />
          Link in Bio
        </h1>
      </header>

      <main className="w-full max-w-md flex-grow flex flex-col items-center">
        <div className="mb-8 text-center">
          <img
            src="/placeholder.svg"
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">John Doe</h2>
          <p className="text-gray-600">Welcome to my link in bio page!</p>
        </div>

        <div className="w-full space-y-4">
          {links.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full text-lg py-6 bg-white hover:bg-gray-100 transition-colors"
            >
              {link.title}
            </Button>
          ))}
        </div>
      </main>

      <footer className="w-full text-center mt-8 text-sm text-gray-500">
        Powered by Link in Bio
      </footer>
    </div>
  );
};

export default Index;