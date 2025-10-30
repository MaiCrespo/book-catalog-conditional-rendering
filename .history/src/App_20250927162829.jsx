import "./App.css";
import data from "../data/books.json";
import Book from "./components/book.jsx";
import AddCard from "./components/AddCard";

export default function App() {
  const books = Array.isArray(data) ? data : data?.books ?? [];

  return (
    <div className="app">
      <header className="header">
        <h1>Mai's Book Catalog</h1>
      </header>

      <main className="content">
        <div className="grid-wrapper">
          <aside className="add-col">
            <AddCard onClick={() => alert("Add new book")} />
          </aside>

          <section className="grid-books">
            {books.map((b) => (
              <Book key={b.isbn13 ?? b.title} book={b} />
            ))}
          </section>
        </div>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Mai Crespo</p>
      </footer>
    </div>
  );
}
