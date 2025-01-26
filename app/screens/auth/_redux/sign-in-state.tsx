import { TextField } from "../../../../models/input-text";

export interface SignInState {
  email: TextField<string>;
  password: TextField<string>;
}
