import React from "react";

const BookCard = ({ image, name, genre, author }) => {
  return (
    <div className="border rounded-xl shadow-lg p-5 max-w-xs bg-white transition-transform transform hover:scale-105 hover:shadow-xl">
      <img
        src={image}
        alt={name}
        className="w-full h-52 object-cover rounded-lg"
      />
      <h2 className="text-xl font-bold mt-3">{name}</h2>
      <p className="text-md text-gray-700 font-medium">Genre: {genre}</p>
      <p className="text-md text-gray-700 font-medium">Author: {author}</p>
    </div>
  );
};

export default BookCard;
