import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="mx-5 mt-5 flex justify-between items-center">
      <Logo />
      <Navbar />
    </header>
  )
}
