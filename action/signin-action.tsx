import { signIn } from "../app/services/user-service";
import camelize from "camelize";

export async function signInUser(formData: FormData) {
  try {
    const result = await signIn({
      formData: formData,
    });
    if (result.ok) {
      let response = await result.json();
      return camelize(response);
    }
  } catch (e) {
    console.log(`There is an error: ${e}`);
  }
}
