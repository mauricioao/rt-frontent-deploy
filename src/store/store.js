import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      token: "",
      updateToken: (newToken) => set({ token: newToken }),
      headers: [],
      setHeaders: (newHeaders) => set({ headers: newHeaders }),
      users: [],
      setUsers: (newUsers) => set({ users: newUsers }),
      errors: [],
      setErrors: (newErrors) => set({ errors: newErrors }),
    }),
  {
    name: 'store',
  }))

export default useStore