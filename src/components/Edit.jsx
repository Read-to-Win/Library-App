import { useState } from "react";

const Edit = ({ book }) => {
  const [formData, setFormData] = useState(book);

  const handleFormValueChange = (name, value) => {
    setFormData((prev) => {
      prev[name] = value;
      return prev;
    });
  };

  return (
    <form className="p-4 space-y-4 text-black">
      <div>
        <label className="block mb-1">Book Title:</label>
        <input
          type="text"
          name="title"
          className="border px-2 py-1 w-full"
          placeholder="e.g.The Silent Forest"
          value={formData?.title}
          onChange={(e) => handleFormValueChange("title", e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-1">Author:</label>
        <input
          type="text"
          name="name"
          className="border px-2 py-1 w-full"
          placeholder="e.g. Ava Thompson"
          value={formData?.author}
          onChange={(e) => handleFormValueChange("author", e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-1">Image URL:</label>
        <input
          type="text"
          name="name"
          className="border px-2 py-1 w-full"
          value={formData?.imageUrl}
        />
      </div>
      <div>
        <label className="block mb-1">Description:</label>
        <textarea
          name="description"
          className="w-full border px-3 py-2 rounded"
          rows="4"
          required
          value={formData?.description}
        />
      </div>
      <div>
        <label className="block mb-1">Price:</label>
        <input
          name="price"
          className="border px-2 py-1 w-full"
          value={formData?.price}
        />
      </div>
      <button
        type="submit"
        className="bg-[#AEBCBC] text-white px-4 py-2 rounded cursor-pointer"
      >
        Edit Book
      </button>
    </form>
  );
};

export default Edit;
