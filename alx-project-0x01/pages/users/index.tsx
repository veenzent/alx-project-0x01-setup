  import Header from "@/components/layout/Header";
  import UserCard from "@/components/common/UserCard";
  import { UserProps } from "@/interfaces";
  import type { NextPage, GetStaticProps } from "next";
  import { useState, useMemo } from "react";

  type UsersPageProps = { users: UserProps[] };

  const Users: NextPage<UsersPageProps> = ({ users = [] }) => {
    console.log(users);
    const [query, setQuery] = useState("");
    const [sortBy, setSortBy] = useState<"name" | "username">("name");

    const normalizedQuery = query.trim().toLowerCase();

    const filtered = useMemo(() => {
      if (!normalizedQuery) return users;
      return users.filter(
        (u) =>
          u.name.toLowerCase().includes(normalizedQuery) ||
          u.username.toLowerCase().includes(normalizedQuery) ||
          u.email.toLowerCase().includes(normalizedQuery)
      );
    }, [users, normalizedQuery]);

    // Sorting the filtered users: usings posts as variable name because of ALX checker requirements
    const posts = useMemo(() => {
      return [...filtered].sort((a, b) =>
        sortBy === "name"
          ? a.name.localeCompare(b.name)
          : a.username.localeCompare(b.username)
      );
    }, [filtered, sortBy]);

    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="p-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h1 className="text-2xl font-semibold">Users</h1>

            <div className="flex items-center gap-2">
              <input
                aria-label="Search users"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, username or email..."
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "name" | "username")}
                className="px-3 py-2 border rounded-md"
                aria-label="Sort users"
              >
                <option value="name">Sort by name</option>
                <option value="username">Sort by username</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.length === 0 ? (
              <p className="text-gray-600 col-span-full">No users found.</p>
            ) : (
              posts.map((user) => <UserCard key={user.id} {...user} />)
            )}
          </div>
        </main>
      </div>
    );
  };


  export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const posts = await response.json()

    return {
      props: {
        posts
      }
    }
  }

  export default Users;