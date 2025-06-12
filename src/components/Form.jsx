const Form = () => {
  return (
    <form className="p-4 space-y-4 text-emerald-950 bg-emerald-100 rounded-2xl shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
      <div>
        <label className="block mb-1">Book Title:</label>
        <input
          type="text"
          name="title"
          className="border px-2 py-1 w-full rounded-2xl border-emerald-950 ease-0.3 hover:p-2"
          placeholder="e.g.The Silent Forest"
        />
      </div>
      <div>
        <label className="block mb-1">Author:</label>
        <input
          type="text"
          name="name"
          className="border px-2 py-1 w-full rounded-2xl border-emerald-950 hover:p-2 ease-0.3"
          placeholder="e.g. Ava Thompson"
        />
      </div>
      <div>
        <label className="block mb-1">Image URL:</label>
        <input type="text" name="name" className="border px-2 py-1 w-full rounded-2xl ease-0.3 border-emerald-950 hover:p-2" />
      </div>
      <div>
        <label className="block mb-1">Description:</label>
        <textarea
          name="description"
          className="w-full border px-3 py-2 rounded-2xl border-emerald-950 ease-0.3 hover:p-2"
          rows="4"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Price:</label>
        <input type="number" name="price" className="border px-2 py-1 w-full rounded-2xl ease-0.3 border-emerald-950 hover:p-2" />
      </div>
      <button
        type="submit"
        className="bg-emerald-950 text-white px-4 py-2 rounded-2xl cursor-pointer"
      >
        Add Book
      </button>
    </form>
  );
};

export default Form;
