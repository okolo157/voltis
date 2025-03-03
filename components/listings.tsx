"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Listings() {
  const [viewMode, setViewMode] = useState("table");
  const listings = Array(6).fill({
    title: "Nike Sweatshirt one piece (very rare)",
    brand: "Nike",
    condition: "New with Tags",
    price: "£120",
    oldPrice: "£130",
    views: 2096,
    likes: 14,
    uploader: "Jane3555",
    image: "/product.png",
  });

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center pb-4 border-b border-gray-300">
        <h2 className="text-lg font-semibold">Listings</h2>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-md p-2 text-xs w-48"
          />
          <button className="text-gray-600 text-xs">Filter</button>
          <button className="text-gray-600 text-xs">Sort</button>
          <button className="text-gray-600 text-xs">Today ▼</button>
          <button
            onClick={() =>
              setViewMode(viewMode === "table" ? "thumbnail" : "table")
            }
            className="text-gray-600 text-xs border px-3 py-1 rounded-md cursor-pointer"
          >
            {viewMode === "table" ? "Thumbnail View" : "Table View"}
          </button>
        </div>
      </div>

      {viewMode === "table" ? (
        <>
          <div className="grid grid-cols-6 text-gray-500 text-xs font-medium py-2 border-b">
            <span>Title</span>
            <span>Brand</span>
            <span>Condition</span>
            <span>Price</span>
            <span>Views</span>
            <span>Uploaded by</span>
          </div>

          {/* Table Rows */}
          <div className="divide-y">
            {listings.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-6 items-center py-2 text-xs"
              >
                <div className="flex items-center gap-2">
                  <span>{item.title}</span>
                </div>
                <span>{item.brand}</span>
                <span>{item.condition}</span>
                <div>
                  {item.oldPrice && (
                    <span className="line-through text-red-500 mr-1">
                      {item.oldPrice}
                    </span>
                  )}
                  <span>{item.price}</span>
                </div>
                <span>{item.views}</span>
                <div className="flex items-center gap-2">
                  <Image
                    src="/user-icon7.png"
                    width={18}
                    height={18}
                    alt="user"
                  />
                  <span>{item.uploader}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="grid grid-cols-3 gap-4 mt-4">
          {listings.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-3 shadow-md text-xs text-center"
            >
              <Image
                src={item.image}
                width={200}
                height={100}
                alt={item.title}
                className=""
              />
              <h3 className="font-semibold mt-2">{item.title}</h3>
              <p className="text-gray-500">
                {item.brand} - {item.condition}
              </p>
              <div className="mt-2">
                {item.oldPrice && (
                  <span className="line-through text-red-500 mr-1">
                    {item.oldPrice}
                  </span>
                )}
                <span className="font-bold">{item.price}</span>
              </div>
              <p className="text-gray-500 mt-1">
                Views: {item.views} | Likes: {item.likes}
              </p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <Image
                  src="/user-icon7.png"
                  width={18}
                  height={18}
                  alt="user"
                />
                <span>{item.uploader}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
