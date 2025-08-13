import { useState, type PropsWithChildren } from "react";
import { useAsync } from "../hooks/useAsync";
import { getUsers } from "../services";
import { UserContext } from "./user.store";
import type { User } from "../types";


export const UserProvider = ({ children }: PropsWithChildren) => {
  const { data, loading, error } = useAsync<User[]>(getUsers, []);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <UserContext.Provider
      value={{
        users: data ?? [], 
        loading,
        error,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};