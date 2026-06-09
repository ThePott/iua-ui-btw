import { create } from "zustand"

type GlobalStoreState = {
    isBodyScrollable: boolean
    setIsBodyScrollable: (isBodyScrollable: boolean) => void
}

const useGlobalStore = create<GlobalStoreState>()((set) => ({
    isBodyScrollable: true,
    setIsBodyScrollable: (isBodyScrollable) => set({ isBodyScrollable }),
}))

export default useGlobalStore
