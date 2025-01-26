import { SignInState } from "./sign-in-state";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SignInSchemaType } from "../../../../schemas/account";
import { ErrorType } from "../../../../models/input-text";

export const initialState: SignInState = {
  email: {},
  password: {
    obscure: true,
  },
};

export const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    emailChanged: (state: SignInState, action: PayloadAction<string>) => {
      return { ...state, email: { value: action.payload } };
    },
    passwordChanged: (state: SignInState, action: PayloadAction<string>) => {
      return { ...state, password: { value: action.payload } };
    },
    passwordEyeToggled(state: SignInState) {
      return {
        ...state,
        password: {
          ...state.password,
          obscure: !state.password.obscure,
        },
      };
    },
    errorFieldsSet: (
      state: SignInState,
      action: PayloadAction<{
        [K in keyof SignInSchemaType]?: string;
      }>
    ) => {
      let emailErrorType = ErrorType.NONE;
      let passwordErrorType = ErrorType.NONE;

      if (action.payload.email) {
        emailErrorType = ErrorType.SERVER;
      }

      if (action.payload.password) {
        passwordErrorType = ErrorType.SERVER;
      }

      return {
        ...state,
        email: {
          errorText: action.payload.email ?? "",
          errorType: emailErrorType,
        },
        password: {
          errorText: action.payload.password ?? "",
          errorType: passwordErrorType,
        },
      };
    },
  },
});

export const {
  errorFieldsSet,
  emailChanged,
  passwordChanged,
  passwordEyeToggled,
} = signInSlice.actions;

export default signInSlice.reducer;
