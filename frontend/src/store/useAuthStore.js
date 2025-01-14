import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";

export const userAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingUp: false,
  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");

      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in checkAuth", error.message);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
}));
