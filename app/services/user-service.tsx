import { BASE_API_URL } from "@env";

export function signIn({ formData }: { formData: FormData }) {
  return fetch(`${BASE_API_URL}`, {
    method: "POST",
    body: formData,
  });
}
