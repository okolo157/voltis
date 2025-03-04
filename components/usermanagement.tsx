import Image from "next/image";
import React, { useEffect, useState } from "react";

interface User {
  id: string;
  username: string;
  email: string;
  dateJoined: string;
  activeListings: number;
  totalListings: number;
  totalSales: number;
  totalShopValue: number;
  thumbnailUrl: string;
}

interface GraphQLResponse {
  data: {
    userAdminStats: User[];
  };
}

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    console.log("Stored token:", storedToken);
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (!token) {
      return;
    }

    async function fetchUsers() {
      try {
        const response = await fetch("/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            query:
              "{ userAdminStats { id username thumbnailUrl dateJoined activeListings totalListings totalSales totalShopValue } }",
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data: GraphQLResponse = await response.json();
        setUsers(data.data.userAdminStats);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, [token]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); 
    const year = String(date.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col items-center p-4 sm:p-6">
      {/* Header */}
      <div className="flex justify-between w-full max-w-4xl mb-4">
        <p className="text-lg font-semibold">User Management</p>
        <Image
          src="/dropdown-icon.svg"
          alt="dropdown icon"
          width={40}
          height={40}
          className="w-6 h-6 sm:w-10 sm:h-10"
        />
      </div>

      <div className="w-full max-w-4xl overflow-x-auto">
        <div className="grid grid-cols-[40px_1fr_1fr_1fr_1fr_1fr] text-left text-[12px] text-neutral-600 font-light pb-3 border-b border-gray-300 min-w-[600px]">
          <span></span>
          <span>Username</span>
          <span>Date Joined</span>
          <span>Listings</span>
          <span>Total Made</span>
          <span>Shop Value</span>
        </div>

        <div className="space-y-2 mt-4 text-sm min-w-[600px]">
          {users.map((user, index) => (
            <div
              key={user.id}
              className={`grid grid-cols-[40px_1fr_1fr_1fr_1fr_1fr] items-center gap-4 p-3 rounded-lg ${
                index % 2 === 0 ? "bg-[#EDEEFC]" : "bg-[#E6F1FD]"
              }`}
            >
              <Image
                src={user.thumbnailUrl}
                width={20}
                height={20}
                alt="user"
                className="w-5 h-5 rounded-full"
                loading="lazy"
              />
              <span>{user.username}</span>
              <span>{formatDate(user.dateJoined)}</span>
              <span>{user.activeListings}</span>
              <span>{user.totalSales}</span>
              <span>{user.totalShopValue}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
