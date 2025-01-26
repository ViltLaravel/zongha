import { BASE_API_URL } from "@env";

export async function signIn(formData: { [key: string]: string }) {
  try {
    const response = await fetch(`${BASE_API_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return await response.json();
  } catch (error) {
    console.error("Sign-in error:", error);
    throw error;
  }
}
