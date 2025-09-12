import { Outlet, Link } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div>
      <nav className="flex gap-4 bg-gray-100 p-4">
        <Link to="/">Home</Link>
        <Link to="/product/1">Product</Link>
        <Link to="/admin">Dashboard</Link>
      </nav>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
