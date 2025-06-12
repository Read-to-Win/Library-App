import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const BookDetails = () => {
  //   const location = useLocation();

  //   const navigate = useNavigate();
  //   const { image, author, id, title } = location.state || {};
  // extract the id from the route params
  const params = useParams();
  console.log(params);
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
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
  return (
    <div className="min-h-screen bg-emerald-100 flex items-center justify-center p-4">
      {/* <button
        onClick={() => navigate(-1)}
        className="text-blue-500 hover:underline text-sm mr-5"
      >
        &larr; Back
      </button> */}
      {loading ? (
        <p>Loading....</p>
      ) : (
        <div className="bg-white max-w-4xl w-full rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">{book.title}</h2>
            <p className="text-gray-600 text-lg">by {book.author}</p>
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
              veritatis corporis alias fugiat suscipit omnis earum officiis,
              nihil, cupiditate, quaerat exercitationem! Nihil at cumque id,
              quia saepe, architecto atque quaerat laboriosam cum provident
              eligendi fugiat labore accusantium ipsam unde beatae, iste tempora
              quos corporis perspiciatis doloremque. Beatae hic harum eius.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
