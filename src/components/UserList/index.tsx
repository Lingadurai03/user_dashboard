import { useContext } from "react";
import { UserContext } from "../../store";
import UserCard from "../UserCard";

const UserList = () => {
  const userCtx = useContext(UserContext);

  if (!userCtx) return null;

  const { users, loading, error, searchTerm } = userCtx;

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
  if (!loading && users.length > 0 && filteredUsers.length === 0) {
    return <p className="text-gray-400">No matching users found.</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filteredUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
