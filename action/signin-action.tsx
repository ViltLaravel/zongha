import { signIn } from "../app/services/user-service";
import camelize from "camelize";

export async function signInUser({
  email,
  password,
}: {
  email?: string;
  password?: string;
}) {
  const credentials = {
    email: email ?? "",
    password: password ?? "",
  };
  try {
    const result = await signIn(credentials);
    if (result) {
      return camelize(result);
    }
  } catch (e) {
    console.log("Something went wrong!");
    return {
      success: false,
    };
  }
}
