import "./App.css";
import { Input } from "./components";
import { useContext, Suspense, lazy } from "react";
import { UserContext } from "./store/user.store";

// Dynamic import for UserList
const UserList = lazy(() => import("./components/UserList"));

function App() {
  const userCtx = useContext(UserContext);

  if (!userCtx) return null;

  const { searchTerm, setSearchTerm } = userCtx;

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <main className="m-0 mx-auto max-w-[1200px]">
      <section className="max-w-[800px] m-0 mx-auto">
        <Input onChange={inputChangeHandler} value={searchTerm} />
      </section>
      <section className="mt-5">
        <Suspense fallback={<p>Loading users...</p>}>
          <UserList />
        </Suspense>
      </section>
    </main>
  );
}

export default App;
