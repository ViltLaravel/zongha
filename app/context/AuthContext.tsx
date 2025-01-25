import React, { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface User {
  token: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  authLoading: boolean;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [authLoading, setAuthLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = await AsyncStorage.getItem("jwtToken");
        if (token) {
          setUser({ token });
        }
      } catch (error) {
        console.error("Error loading token", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = async (token: string) => {
    setAuthLoading(true);
    try {
      await AsyncStorage.setItem("jwtToken", token);
      setUser({ token });
    } catch (error) {
      console.error("Error storing token", error);
    } finally {
      setAuthLoading(false);
    }
  };

  const logout = async () => {
    setAuthLoading(true);
    try {
      await AsyncStorage.removeItem("jwtToken");
      setUser(null);
    } catch (error) {
      console.error("Error removing token", error);
    } finally {
      setAuthLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoading, authLoading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
