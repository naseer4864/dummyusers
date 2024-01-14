

import Link from "next/link";
import Image from "next/image";
import getUsers from "./libs/getUsers";

export default async function Home() {
  const users = await getUsers();

  return (
    <div className="max-w-6xl m-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {users.map((user) => (
        <Link key={user.id} href={`users/${user.id}`} className="p-5 shadow-lg shadow-gray-200 rounded border border-gray-300">
          <div className="w-full">
            <Image
              src="https://i.ibb.co/Z618VWX/cu2-thumb-up-man-3-close-up.webp"
              width={500} 
              height={300}
              alt="person"
              priority
            />
          </div>
          <p className="text-center p-4">{user.name}</p>
        </Link>
      ))}
    </div>
  );
}

