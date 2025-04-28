import { create } from 'zustand'
import { TUser } from './user'

type UserStore = {
  user: TUser | null
  setUser: (user: TUser) => void
}

export const useUserStore = create<UserStore>((set, get) => ({
  user: null,
  setUser: user => set({ ...get(), user }),
}))
