const Form = () => {
  return (
    <form className="p-4 space-y-4 text-black">
      <div>
        <label className="block mb-1">Book Title:</label>
        <input type="text" name="title" className="border px-2 py-1 w-full" />
      </div>
      <div>
        <label className="block mb-1">Author:</label>
        <input type="text" name="name" className="border px-2 py-1 w-full" />
      </div>
      <div>
        <label className="block mb-1">Description:</label>
        <textarea
          name="description"
          className="w-full border px-3 py-2 rounded"
          rows="4"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Price:</label>
        <input type="number" name="price" className="border px-2 py-1 w-full" />
      </div>
      <button
        type="submit"
        className="bg-[#AEBCBC] text-white px-4 py-2 rounded cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
