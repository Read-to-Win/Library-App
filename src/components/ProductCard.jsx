const ProductCard = () => {
 
 const books = [
  {
    imageUrl: 'https://picsum.photos/id/1005/200/300',
    title: 'The Silent Forest',
    author: 'Ava Thompson'
  },
  {
    imageUrl: 'https://picsum.photos/id/1015/200/300',
    title: 'Echoes of the Past',
    author: 'James Carter'
  },
  {
    imageUrl: 'https://picsum.photos/id/1025/200/300',
    title: 'Beneath the Crimson Sky',
    author: 'Isla Grant'
  },
  // ...rest of the 20 items
];
    return (
    <div className="w-70">
      <div className="h-screen">
        <img src="https://picsum.photos/id/1005/200/300" className="w-70" />
        <p>Book Title: This an image of a man</p>
        <p>Book Author: Precious Henry</p>
        <p>Price: $5.00</p>
        <section className="flex flex-row gap-x-[40px] p-2">
          <button className="bg-[#396665] rounded-[10px] cursor-pointer pt-[5px] pb-[5px] px-[10px] pl-[10px] ">
            Edit Book
          </button>
          <button className="bg-[#396665] rounded-[10px] cursor-pointer pt-[5px] pb-[5px] px-[10px] pl-[10px] ">
            Delete Book
          </button>
        </section>
      </div>
{/* 
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {books.map((book, index) => (
        <div key={index} className="bg-white rounded-2xl shadow p-4 text-center">
          <img
            src={book.imageUrl}
            alt={book.title}
            className="w-full h-auto rounded-lg mb-2"
          />
          <h3 className="text-lg font-semibold">{book.title}</h3>
          <p className="text-sm text-gray-600">{book.author}</p>
        </div>
      ))}
    </div> */}

    </div>
  );
};

export default ProductCard;
