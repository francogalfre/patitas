"use client";

import { useContext, createContext } from "react";
import { useSession } from "@/lib/auth-client";

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const { data } = useSession();

	return (
		<AuthContext.Provider value={data?.session}>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => useContext(AuthContext);
