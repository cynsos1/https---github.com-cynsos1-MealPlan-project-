import Navbar from "./components/Navbar.jsx";
import AppRoutes from "./routes.jsx";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <AppRoutes />
      </main>
      <footer className="footer">Made with ❤️ — MealMate</footer>
    </div>
  );
}
