import { create } from 'zustand'

interface ModalState {
  isModalOpen: boolean
  openedModal: "DOWNLOADS" | "ORDERS" | null
  toggleModal: (modal : "DOWNLOADS" | "ORDERS" | null) => void
}

const useModalStore = create<ModalState>()((set, get) => ({
    isModalOpen: get()?.isModalOpen ?? false,
    openedModal: get()?.openedModal ?? null,
    toggleModal: (modal) => set((state) => ({
        isModalOpen: !state.isModalOpen,
        openedModal: state.openedModal === modal ? null : modal
    })),
}))

export default useModalStore;