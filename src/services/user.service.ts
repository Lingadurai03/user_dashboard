
export const getUsers = async (signal: AbortSignal) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    signal,
  });
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
};

export const getUserById = async (id: number, signal: AbortSignal) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    { signal }
  );
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
};
