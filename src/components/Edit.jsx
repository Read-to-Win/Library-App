import axios from "axios";
import { useNavigate} from "react-router";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Edit = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState ({});
  const fetchBook = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://library-api-k879.onrender.com/books/${params.id}`
      );
      console.log(res.data.data);
      setBook(res.data.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);
  const handleSubmit = async (e) => {
    // to prevent forms from refreshing
    e.preventDefault();

    console.log(formData);

    const payload = {
      image: formData.image ?? book?.image,
      title: formData.title ?? book?.title,
      author: formData.author ?? book?.author,
      description: formData.description ?? book?.description,
    };

    // console.log(e.target);
    try {
      const res = await axios.put(
        `https://library-api-k879.onrender.com/books/${params.id}`,
        payload
      );
      alert(res.data.message);
      navigate("/books");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="p-4 space-y-4 text-emerald-950 bg-emerald-100 rounded-2xl shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="block mb-1">Book Title:</label>
        <input
          type="text"
          name="title"
          className="border px-2 py-1 w-full rounded-2xl border-emerald-950 ease-0.3 hover:p-2"
          placeholder="e.g.The Silent Forest"
          value={formData?.title ?? book?.title}
          onChange={(e)=>setFormData((prev) =>{
            return {...prev, title: e.target.value};
          })}
        />
      </div>
      <div>
        <label className="block mb-1">Author:</label>
        <input
          type="text"
          name="author"
          className="border px-2 py-1 w-full rounded-2xl border-emerald-950 hover:p-2 ease-0.3"
          placeholder="e.g. Ava Thompson"
          value={formData?.author ?? book?.author}
          onChange={(e)=>setFormData((prev) =>{
            return {...prev, author: e.target.value};
          })}
        />
      </div>
      <div>
        <label className="block mb-1">Image:</label>
        <input
          type="img url"
          name="image"
          className="border px-2 py-1 w-full rounded-2xl ease-0.3 border-emerald-950 hover:p-2"
          placeholder="Image URL"
          value={formData?.image ?? book?.image}
          onChange={(e)=>setFormData((prev) =>{
            return {...prev, image: e.target.value};
          })}
        />
      </div>
      <div>
        <label className="block mb-1">Description:</label>
        <textarea
          name="description"
          className="w-full border px-3 py-2 rounded-2xl border-emerald-950 ease-0.3 hover:p-2"
          rows="4"
          required
          placeholder="Give a summary of the book"
          value={formData?.description ?? book?.description}
          onChange={(e)=>setFormData((prev) =>{
            return {...prev, description: e.target.value};
          })}
        />
      </div>
   
      <button
        type="submit"
        className="bg-emerald-950 text-white px-4 py-2 rounded-2xl cursor-pointer"
      >
        Edit Book
      </button>
    </form>
  );
};

export default Edit;
