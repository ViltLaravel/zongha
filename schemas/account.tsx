import z from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email address is required" })
    .email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(8, "The password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          "Password must have at least one special character, one digit and one uppercase and lowercase letter.",
      }
    ),
});

export const forgotPasswordSchema = z.object({
  email: z
    .string({
      required_error: "The email address is required",
    })
    .min(1)
    .email({ message: "Invalid email address." }),
});

export const resetPasswordSchema = z
  .object({
    password: z.string().min(8, "New Password must be at least 8 characters"),
    password_confirmation: z
      .string()
      .min(8, "Confirm Password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "New password and confirm password does not match",
    path: ["password"],
  });

export const verifyOtpSchema = z.object({
  otp_code: z.string().min(1, "OTP code is required"),
});

export type SignInSchemaType = z.infer<typeof signInSchema>;
export type ResetPasswordSchemaType = z.infer<typeof resetPasswordSchema>;
export type ForgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>;
export type VerifyOtpCodeSchemaType = z.infer<typeof verifyOtpSchema>;
