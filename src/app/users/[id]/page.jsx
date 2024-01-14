import getUser from "@/app/libs/getUser";
import Image from "next/image";

export default async function UserPage({ params: { id } }) {
  const userData = await getUser({ id });

  return (
    <div className="max-w-6xl mx-auto my-10 sm:flex justify-center gap-10">
      <div className="w-full">
        <Image
          src="https://i.ibb.co/Z618VWX/cu2-thumb-up-man-3-close-up.webp"
          width={500}
          height={300}
          alt="person"
          priority
        />
      </div>
      <div className=" w-full p-5 sm:flex-col">
        <h3 className="text-xl font-bold mb-3">Name: {userData.name}</h3>
        <p className="mb-2">Username: {userData.username}</p>
        <p className="mb-2">Email: {userData.email}</p>
        <div className="mb-2">
          <h4 className="font-bold">Address:</h4>
          <p>{userData.address.street}, {userData.address.suite}</p>
          <p>{userData.address.city}, {userData.address.zipcode}</p>
          <p>Geo: {userData.address.geo.lat}, {userData.address.geo.lng}</p>
        </div>
      </div>
    </div>
  );
}
