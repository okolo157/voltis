import Image from "next/image";
import React from "react";

export default function UserManagement() {
  const users = [
    {
      username: "ByeWind",
      dateJoined: "Jun 24, 2025",
      listings: 15,
      listingsLifetime: 947,
      totalMade: "£942.00",
      shopValue: "£500",
      bgColor: "bg-[#EDEEFC]",
    },
    {
      username: "Natali Craig",
      dateJoined: "Mar 10, 2025",
      listings: 25,
      listingsLifetime: 47,
      totalMade: "£881.00",
      shopValue: "£1025",
      bgColor: "bg-[#E6F1FD]",
    },
    {
      username: "Drew Cano",
      dateJoined: "Nov 10, 2025",
      listings: 35,
      listingsLifetime: 102,
      totalMade: "£409.00",
      shopValue: "£750",
      bgColor: "bg-[#EDEEFC]",
    },
    {
      username: "Orlando Diggs",
      dateJoined: "Dec 20, 2025",
      listings: 50,
      listingsLifetime: 1222,
      totalMade: "£953.00",
      shopValue: "£4766",
      bgColor: "bg-[#E6F1FD]",
    },
    {
      username: "Andi Lane",
      dateJoined: "Jul 25, 2025",
      listings: 40,
      listingsLifetime: 400,
      totalMade: "£9070.00",
      shopValue: "£907",
      bgColor: "bg-[#EDEEFC]",
    },
  ];

  return (
    <div className="flex flex-col items-center p-6">
      {/* Header */}
      <div className="flex justify-between w-full max-w-4xl mb-4">
        <p className="text-lg font-semibold">User Management</p>
        <Image
          src="/dropdown-icon.svg"
          alt="dropdown icon"
          width={40}
          height={40}
        />
      </div>

      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-[40px_1fr_1fr_1fr_1fr_1fr] text-left text-[12px] text-neutral-600 font-light pb-3 border-b border-gray-300">
          <span></span>
          <span>Username</span>
          <span>Date Joined</span>
          <span>Listings</span>
          <span>Total Made</span>
          <span>Shop Value</span>
        </div>

        <div className="space-y-2 mt-4 text-sm">
          {users.map((user, index) => (
            <div
              key={index}
              className={`grid grid-cols-[40px_1fr_1fr_1fr_1fr_1fr] items-center gap-4 p-3 rounded-lg ${user.bgColor}`}
            >
              {/* SVG Icon */}
              <Image
                src="/tableicon.svg"
                width={20}
                height={20}
                alt="table icon"
              />

              {/* User Info */}
              <span>{user.username}</span>
              <span>{user.dateJoined}</span>
              <span>{user.listings}</span>
              <span>{user.totalMade}</span>
              <span>{user.shopValue}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
