"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthContext } from "./auth-provider";
import { AuthStatus } from "@/lib/auth";

export function ProtectRoute({ children }: { children: React.ReactNode }) {
  const { status } = useAuthContext();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Si no está autenticado y ha terminado de cargar, redirigir a login
    if (status === AuthStatus.UNAUTHENTICATED) {
      // Codificar la ruta actual para redireccionar de vuelta después del login
      const returnUrl = encodeURIComponent(pathname);
      router.push(`/login?redirect=${returnUrl}`);
    }
  }, [status, router, pathname]);

  // Mostrar los hijos solo si está autenticado
  if (status === AuthStatus.AUTHENTICATED) {
    return <>{children}</>;
  }

  // Mientras se carga, no mostrar nada
  return null;
}
