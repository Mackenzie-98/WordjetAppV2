"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth, AuthStatus, User } from "@/lib/auth";

export function useAuth() {
  const router = useRouter();
  const [status, setStatus] = useState<AuthStatus>(AuthStatus.LOADING);
  const [user, setUser] = useState<User | null>(null);

  // Verificar el estado de autenticación al cargar
  useEffect(() => {
    const checkAuth = () => {
      if (auth.isAuthenticated()) {
        setUser(auth.getUser());
        setStatus(AuthStatus.AUTHENTICATED);
      } else {
        setUser(null);
        setStatus(AuthStatus.UNAUTHENTICATED);
      }
    };

    checkAuth();
  }, []);

  // Función para iniciar sesión
  const login = async (redirectUrl: string = "/") => {
    try {
      setStatus(AuthStatus.LOADING);
      const user = await auth.loginWithGoogle();
      setUser(user);
      setStatus(AuthStatus.AUTHENTICATED);
      
      // Usar la URL de redirección proporcionada
      router.push(redirectUrl);
      
      return user;
    } catch (error) {
      setStatus(AuthStatus.UNAUTHENTICATED);
      console.error("Error al iniciar sesión:", error);
      throw error;
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    auth.logout();
    setUser(null);
    setStatus(AuthStatus.UNAUTHENTICATED);
    router.push("/");
  };

  return {
    user,
    status,
    isLoading: status === AuthStatus.LOADING,
    isAuthenticated: status === AuthStatus.AUTHENTICATED,
    login,
    logout,
  };
}
