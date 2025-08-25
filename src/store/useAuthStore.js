import { create } from "zustand";
import { persist } from "zustand/middleware";

async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,

      login: async (mock_user_email, mock_user_secret) => {
        const storedUser = get().user;
        if (!storedUser) throw new Error("Benutzer nicht gefunden");

        const hashedInput = await hashPassword(mock_user_secret);

        if (storedUser.mock_user_email === mock_user_email &&
            storedUser.mock_user_hash === hashedInput) {
            set({ isAuthenticated: true });
          return true;
        }
        throw new Error("Ungoeltige Zugangsdaten");
      },

      register: async (mock_user_email, mock_user_secret, repeat_secret) => {
        if (mock_user_secret !== repeat_secret) {
          throw new Error("Passwuerter stimmen nicht oeberein!");
        }

        const hashedPassword = await hashPassword(mock_user_secret);

        set({
          user: { mock_user_email, mock_user_hash: hashedPassword },
          isAuthenticated: true,
        });
        return true;
      },

      logout: () => {
        set({ isAuthenticated: false });
      },
    }),
    {
      name: "store-auth",
      partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated })
    }
  )
);
