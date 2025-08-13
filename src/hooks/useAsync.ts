import { useState, useEffect } from "react";

export function useAsync<T>(
  asyncFunction: (signal: AbortSignal) => Promise<T>,
  dependencies: any[] = []
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError("");

    asyncFunction(controller.signal)
      .then((result) => setData(result))
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message || "Something went wrong");
        }
      })
      .finally(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, dependencies);

  return { data, loading, error };
}
