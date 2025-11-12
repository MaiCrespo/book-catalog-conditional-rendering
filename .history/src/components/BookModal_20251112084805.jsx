import { useState, useEffect } from "react";

export default function BookModal({ mode, book, onSave, onClose }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publisher: "",
    language: "",
    price: "",
    image: "",
    url: "",
  });

  useEffect(() => {
    if (mode === "edit" && book) {
      setFormData({
        title: book.title || "",
        author: book.author || "",
        publisher: book.publisher || "",
        language: book.language || "",
        price: book.price || "",
        image: book.image || "",
        url: book.url || "",
      });
    }
  }, [mode, book]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;
    onSave(formData);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{mode === "add" ? "Add New Book" : "Edit Book"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title *</label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              id="author"
              name="author"
              type="text"
              value={formData.author}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="publisher">Publisher</label>
            <input
              id="publisher"
              name="publisher"
              type="text"
              value={formData.publisher}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="language">Language</label>
            <input
              id="language"
              name="language"
              type="text"
              value={formData.language}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              name="price"
              type="text"
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              id="image"
              name="image"
              type="url"
              value={formData.image}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="url">Details URL</label>
            <input
              id="url"
              name="url"
              type="url"
              value={formData.url}
              onChange={handleChange}
            />
          </div>

          <div className="modal-actions">
            <button type="button" onClick={onClose} className="btn-cancel">
              Cancel
            </button>
            <button type="submit" className="btn-save">
              {mode === "add" ? "Add Book" : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
