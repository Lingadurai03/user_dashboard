import { useState } from "react";
import Modal from "../modal";
import type { User } from "../../types";

type UserCardProps = {
  user: User;
};

const UserCard = ({ user }: UserCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        className="bg-white rounded-xl p-5 shadow-inner hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
      >
        <h2 className="text-xl mb-2 font-semibold text-gray-800">{user.name}</h2>
        <p className="text-gray-500 mt-1  text-sm">{user.email}</p>
        <p className="text-gray-600 mt-1 font-medium text-sm">{user.company.name}</p>

        <button
          onClick={() => setIsOpen(true)}
          className="mt-4 px-4 py-1 bg-teal-700 hover:bg-teal-600 text-white rounded-lg transition-colors"
        >
          View Details
        </button>
      </div>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
       <div className="flex flex-col gap-3">
         <h2 className="text-2xl font-bold text-gray-800 mb-4">{user.name}</h2>
        <p className="text-gray-500">
          <span className="font-semibold">Username:</span> {user.username}
        </p>
        <div className="text-gray-500">
          <h3 className="font-semibold">Address:</h3>
          <p className="ml-3">{user.address.street}</p>
          <p className="ml-3">{user.address.suite}</p>
          <p className="ml-3">{user.address.city}</p>
          <p className="ml-3">{user.address.zipcode}</p>
        </div>
        <p className="text-gray-500">
          <span className="font-semibold">Phone:</span> {user.phone}
        </p>
        <p className="text-gray-500">
          <span className="font-semibold">Website:</span>{" "}
          <a
            href={`http://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {user.website}
          </a>
        </p>
       </div>
      </Modal>
    </>
  );
};

export default UserCard;
