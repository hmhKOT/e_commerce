import { Outlet, Link } from "react-router-dom";
import ThemeToggle from "../../../shared/components/ThemeToggle";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
export default function WebLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
