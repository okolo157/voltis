"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Mainsection from "@/components/mainsection";
import Usermanagement from "@/components/usermanagement";
import Listings from "@/components/listings";

export default function Dashboard() {
  const router = useRouter();
  const [activeComponent, setActiveComponent] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    userMgmt: false,
    listings: false,
    flagged: false,
    account: false,
    corporate: false,
    blog: false,
    social: false,
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      router.push("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  // Toggle section expansion
  interface ExpandedSections {
    userMgmt: boolean;
    listings: boolean;
    flagged: boolean;
    account: boolean;
    corporate: boolean;
    blog: boolean;
    social: boolean;
  }

  const toggleSection = (section: keyof ExpandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  interface HandleComponentChangeProps {
    component: string;
  }

  const handleComponentChange = ({ component }: HandleComponentChangeProps) => {
    setActiveComponent(component);
    setMobileMenuOpen(false);
  };

  // Render active component based on state
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "overview":
        return <Mainsection />;
      case "userMgmt":
        return <Usermanagement />;
      case "listings":
        return <Listings />;
      default:
        return <Mainsection />;
    }
  };

  if (!isAuthenticated) {
    return null; 
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-white text-black">
      <div className="md:hidden flex justify-between items-center p-4 border-b border-gray-300">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="company logo" width={30} height={30} />
          <span>Prelura</span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <aside
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        } md:block w-full md:w-[212px] md:h-full p-4 gap-2 border-r border-gray-300 flex flex-col justify-between items-center bg-white z-10 ${
          mobileMenuOpen ? "fixed top-0 left-0 h-full overflow-y-auto" : ""
        }`}
      >
        {mobileMenuOpen && (
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="md:hidden self-end p-2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        <div className="w-full">
          <div className="flex flex-col items-start justify-start gap-2 pb-[12px]">
            <div className="flex gap-2 p-2">
              <Image
                src="/profile-avatar.svg"
                alt="profile avatar"
                width={24}
                height={24}
                className="rounded-full"
              />
              <p>Prelura</p>
            </div>
            <div className="flex gap-2 p-2">
              <p className="opacity-40">Favourites</p>
              <p className="opacity-20">Recents</p>
            </div>
            <p className="flex gap-2 p-2">
              <Image
                src="/bullet.svg"
                alt="bullet point"
                width={16}
                height={16}
              />{" "}
              Overview
            </p>
            <p className="flex gap-2 p-2">
              <Image
                src="/bullet.svg"
                alt="bullet point"
                width={16}
                height={16}
              />{" "}
              Listings
            </p>
          </div>

          <div className="flex flex-col gap-2 pb-[12px]">
            <p className="opacity-40">Dashboards</p>
            <div
              className={`rounded-xl p-2 gap-1 flex items-center cursor-pointer ${
                activeComponent === "overview"
                  ? "bg-gray-200"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => handleComponentChange({ component: "overview" })}
            >
              <Image
                src="/overview.svg"
                alt="overview icon"
                width={20}
                height={20}
              />
              <p className="text-[14px]">Overview</p>
            </div>
            <div>
              <div
                className="p-2 gap-1 flex items-center cursor-pointer hover:bg-gray-100 rounded-lg"
                onClick={() => toggleSection("userMgmt")}
              >
                <Image
                  src={`${
                    expandedSections.userMgmt
                      ? "/caret-right.svg"
                      : "/caret-right.svg"
                  }`}
                  alt="caret icon"
                  width={20}
                  height={20}
                />
                <div className="gap-2 flex">
                  <Image
                    src="/shopping-bag.svg"
                    width={20}
                    height={20}
                    alt="shopping-bag icon"
                  />
                  <p className="text-[14px]">User Mgmt</p>
                </div>
              </div>
              {expandedSections.userMgmt && (
                <div
                  className={`ml-10 p-2 text-[14px] cursor-pointer hover:bg-gray-100 rounded-lg ${
                    activeComponent === "userMgmt" ? "bg-gray-200" : ""
                  }`}
                  onClick={() =>
                    handleComponentChange({ component: "userMgmt" })
                  }
                >
                  User Management
                </div>
              )}
            </div>
            <div>
              <div
                className="p-2 gap-1 flex items-center cursor-pointer hover:bg-gray-100 rounded-lg"
                onClick={() => toggleSection("listings")}
              >
                <Image
                  src={`${
                    expandedSections.listings
                      ? "/caret-right.svg"
                      : "/caret-right.svg"
                  }`}
                  alt="caret icon"
                  width={20}
                  height={20}
                />
                <div className="gap-2 flex">
                  <Image
                    src="/file.svg"
                    width={20}
                    height={20}
                    alt="file icon"
                  />
                  <p className="text-[14px]">Listings</p>
                </div>
              </div>
              {expandedSections.listings && (
                <div
                  className={`ml-10 p-2 text-[14px] cursor-pointer hover:bg-gray-100 rounded-lg ${
                    activeComponent === "listings" ? "bg-gray-200" : ""
                  }`}
                  onClick={() =>
                    handleComponentChange({ component: "listings" })
                  }
                >
                  All Listings
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2 pb-[12px]">
            <p className="opacity-40">Reports</p>
            <div>
              <div
                className="p-2 gap-1 flex items-center cursor-pointer hover:bg-gray-100 rounded-lg"
                onClick={() => toggleSection("flagged")}
              >
                <Image
                  src={`${
                    expandedSections.flagged
                      ? "/caret-down.svg"
                      : "/caret-right.svg"
                  }`}
                  alt="caret icon"
                  width={20}
                  height={20}
                />
                <div className="gap-2 flex">
                  <Image
                    src="/flagged.svg"
                    width={20}
                    height={20}
                    alt="flagged icon"
                  />
                  <p className="text-[14px]">Flagged</p>
                </div>
              </div>
            </div>
            {expandedSections.flagged && (
              <div className="flex flex-col text-sm w-fit ml-14 text-left mb-3">
                <div className="p-2 gap-1 flex cursor-pointer hover:bg-gray-100 rounded-lg">
                  <p className="text-[14px]">Listings</p>
                </div>
                <div className="p-2 gap-1 flex cursor-pointer hover:bg-gray-100 rounded-lg">
                  <p className="text-[14px]">Users</p>
                </div>
                <div className="p-2 gap-1 flex cursor-pointer hover:bg-gray-100 rounded-lg">
                  <p className="text-[14px]">Messages</p>
                </div>
              </div>
            )}

            {[
              {
                id: "account" as keyof ExpandedSections,
                icon: "/account.svg",
                label: "Account",
              },
              {
                id: "corporate" as keyof ExpandedSections,
                icon: "/corporate.svg",
                label: "Corporate",
              },
              {
                id: "blog" as keyof ExpandedSections,
                icon: "/blog.svg",
                label: "Blog",
              },
              {
                id: "social" as keyof ExpandedSections,
                icon: "/social.svg",
                label: "Social",
              },
            ].map((item) => (
              <div key={item.id}>
                <div
                  className="p-2 gap-1 flex items-center cursor-pointer hover:bg-gray-100 rounded-lg"
                  onClick={() => toggleSection(item.id)}
                >
                  <Image
                    src={`${
                      expandedSections[item.id]
                        ? "/caret-down.svg"
                        : "/caret-right.svg"
                    }`}
                    alt="caret icon"
                    width={20}
                    height={20}
                  />
                  <div className="gap-2 flex">
                    <Image
                      src={item.icon}
                      width={20}
                      height={20}
                      alt={`${item.label} icon`}
                    />
                    <p className="text-[14px]">{item.label}</p>
                  </div>
                </div>
                {expandedSections[item.id] && (
                  <div className="ml-10 p-2 text-[14px] cursor-pointer hover:bg-gray-100 rounded-lg">
                    {item.label} Settings
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </aside>

      <main className="flex-1 p-4 flex flex-col gap-7 overflow-y-auto">
        {renderActiveComponent()}
      </main>

      <aside className="hidden lg:block w-[280px] h-screen p-4 gap-4 border-l border-gray-300 overflow-y-auto">
        <div className="flex flex-col gap-2">
          <p className="py-[8px] px-[4px]">Notifications</p>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <Image src="/bug.svg" alt="bug icon" width={24} height={24} />
              <div className="flex flex-col">
                <p className="text-sm">You just fixed a bug</p>
                <p className="text-[12px] text-black opacity-40">Just now</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Image src="/user.svg" alt="user icon" width={24} height={24} />
              <div className="flex flex-col">
                <p className="text-sm">New user registered</p>
                <p className="text-[12px] text-black opacity-40">
                  59 minutes ago
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Image src="/bug.svg" alt="bug icon" width={24} height={24} />
              <div className="flex flex-col">
                <p className="text-sm">You just fixed a bug</p>
                <p className="text-[12px] text-black opacity-40">
                  12 hours ago
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                src="/broadcast.svg"
                alt="broadcast icon"
                width={24}
                height={24}
              />
              <div>
                <p className="text-sm">Andi Lane subscribed to you</p>
                <p className="text-[12px] text-black opacity-40">
                  Today, 11:59am
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 my-4">
          <p className="py-[8px] px-[4px]">Activities</p>
          <div className="flex flex-col gap-2">
            {[
              {
                src: "/icon-1.svg",
                text: "Changed the style.",
                time: "Just now",
              },
              {
                src: "/icon-2.svg",
                text: "Released a new version.",
                time: "59 minutes ago",
              },
              {
                src: "/icon-3.svg",
                text: "Submitted a bug.",
                time: "12 hours ago",
              },
              {
                src: "/icon-4.svg",
                text: "Modified A data in Page X.",
                time: "Today, 11:59am",
              },
              {
                src: "/icon-5.svg",
                text: "Deleted A page in Project X.",
                time: "Feb 2, 2025",
              },
            ].map((activity, index, arr) => (
              <div key={index} className="flex flex-col">
                <div className="flex gap-2 items-start">
                  <Image src={activity.src} alt="icon" width={24} height={24} />
                  <div className="flex flex-col">
                    <p className="text-sm">{activity.text}</p>
                    <p className="text-[12px] text-black opacity-40">
                      {activity.time}
                    </p>
                  </div>
                </div>
                {index !== arr.length - 1 && (
                  <div className="w-[1px] bg-gray-300 self-start ml-3 h-[12px]"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contacts */}
        <div className="flex flex-col gap-2">
          <p className="py-[8px] px-[4px]">Contacts</p>
          <div className="flex flex-col gap-2">
            {[
              { src: "/natali.svg", name: "Natali Craig", rounded: true },
              { src: "/drew.svg", name: "Drew Cano", rounded: false },
              { src: "/andi.svg", name: "Andi Lane", rounded: false },
              { src: "/koray.svg", name: "Koray Okumus", rounded: false },
              { src: "/kate.svg", name: "Kate Morrison", rounded: true },
              { src: "/melody.svg", name: "Melody Macy", rounded: false },
            ].map((contact, index) => (
              <div
                key={index}
                className="flex gap-2 items-center px-2 cursor-pointer hover:bg-gray-100 rounded-lg"
              >
                <Image
                  src={contact.src}
                  alt={`${contact.name} icon`}
                  width={24}
                  height={24}
                  className={contact.rounded ? "rounded-full" : ""}
                />
                <p className="text-sm p-2">{contact.name}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
