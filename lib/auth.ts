import { cookies, storage } from "./utils";

// Interfaz de usuario
export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  initials?: string;
  credits: number;
}

// Estados de autenticación
export enum AuthStatus {
  LOADING = "loading",
  AUTHENTICATED = "authenticated",
  UNAUTHENTICATED = "unauthenticated",
}

// Funciones para manejar autenticación simulada
export const auth = {
  // Verificar si hay un token de autenticación
  isAuthenticated: (): boolean => {
    return !!cookies.get("authToken");
  },

  // Obtener usuario actual (simulado)
  getUser: (): User | null => {
    if (!auth.isAuthenticated()) return null;

    // Obtener datos del localStorage (simulado)
    const userInitials = storage.get("userInitials", "JD");
    const userCredits = Number(storage.get("userCredits", 5000));

    // Crear usuario simulado
    return {
      id: "user-1",
      name: "John Doe",
      email: "john.doe@example.com",
      initials: userInitials,
      credits: userCredits,
    };
  },

  // Iniciar sesión con Google (simulado)
  loginWithGoogle: async (): Promise<User> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simular establecer un token de autenticación
        cookies.set("authToken", "google-demo-token", { maxAge: 3600 });

        // Almacenar iniciales aleatorias para el avatar
        const randomInitial = 'JD';
        storage.set("userInitials", randomInitial);

        // Establecer créditos predeterminados
        storage.set("userCredits", 5000);

        // Devolver un usuario simulado
        resolve({
          id: "user-1",
          name: "John Doe",
          email: "john.doe@example.com",
          initials: randomInitial,
          credits: 5000,
        });
      }, 1500);
    });
  },

  // Cerrar sesión
  logout: (): void => {
    cookies.remove("authToken");
  },
};
