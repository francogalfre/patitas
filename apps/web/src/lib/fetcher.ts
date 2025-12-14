const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export async function fetcher<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${API_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      credentials: "include",
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error("❌ Error response:", errorData);

      throw new Error(
        errorData?.message || errorData?.error || `Error ${response.status}`
      );
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("❌ Fetch error:", error);
    throw error;
  }
}
