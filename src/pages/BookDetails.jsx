import { useLocation } from 'react-router-dom';

const BookDetails = () => {
  const location = useLocation();
  const { imageUrl, author, id, title } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-4xl w-full rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600 text-lg">by {author}</p>
          <p className="text-gray-700 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            veritatis corporis alias fugiat suscipit omnis earum officiis, nihil,
            cupiditate, quaerat exercitationem! Nihil at cumque id, quia saepe,
            architecto atque quaerat laboriosam cum provident eligendi fugiat
            labore accusantium ipsam unde beatae, iste tempora quos corporis
            perspiciatis doloremque. Beatae hic harum eius.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
