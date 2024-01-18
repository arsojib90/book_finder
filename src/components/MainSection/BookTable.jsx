/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosHeart } from "react-icons/io";
import BookData from "./bookDatabase";
export default function BookTable({ searchTerm, sortOption }) {
  const [favorites, setFavorites] = useState([]);
  const handleFavoriteClick = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favoriteId) => favoriteId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const filteredBooks = BookData.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortOption === "name_asc") {
      return a.title.localeCompare(b.title);
    } else if (sortOption === "name_desc") {
      return b.title.localeCompare(a.title);
    } else if (sortOption === "year_asc") {
      return a.year - b.year;
    } else if (sortOption === "year_desc") {
      return b.year - a.year;
    } else {
      return 0; // No sorting
    }
  });

  return (
    <div className="container  mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {sortedBooks.map((book) => (
        <div key={book.id} className="space-y-3">
          <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
            <img
              className="max-w-[144px] max-h-[170px]"
              src={book.image}
              alt="book name"
            />
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-bold lg:text-xl">{book.title}</h4>
            <p className="text-xs lg:text-sm">
              By : <span>{book.author}</span>
            </p>
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold lg:text-xl">${book.price}</h4>
              {/* stars */}
              <div className="flex items-center space-x-1">
                {book.star}
                <span className="text-xs lg:text-sm">
                  ({book.totalStar} Star)
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 text-xs lg:text-sm">
              <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                ></svg>
                Add to Cart
              </button>
              <button
                className={`flex min-w-[132px] items-center justify-center gap-1 rounded-md ${
                  favorites.includes(book.id)
                    ? "bg-red-500"
                    : "bg-[#1C4436]/[14%] text-[#3D3938] hover:bg-[#1C4336]/[24%]"
                } py-1.5 text-white transition-all lg:py-1.5`}
                onClick={() => handleFavoriteClick(book.id)}
              >
                <IoIosHeart />
                Favourite
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
