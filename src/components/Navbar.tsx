export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-[#1a1a1a] fixed w-full z-50">
      <div className="flex items-center">
        <img src="/logo.png" alt="MBC Lab Logo" className="h-8 w-auto"/>
      </div>
      <div className="space-x-8 pr-8">
        <a href="#home" className="text-[#faf9f6] hover:text-[#e11212]">Home</a>
        <a href="#about" className="text-[#faf9f6] hover:text-[#e11212]">About Us</a>
        <a href="#visi" className="text-[#faf9f6] hover:text-[#e11212]">Vision</a>
        <a href="#divisi" className="text-[#faf9f6] hover:text-[#e11212]">Division</a>
        <a href="#kontak" className="text-[#faf9f6] hover:text-[#e11212]">Kontak</a>
        <a href="#developer" className="text-[#faf9f6] hover:text-[#e11212]">Developer</a>
      </div>
    </nav>
  );
}
