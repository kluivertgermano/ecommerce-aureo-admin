import { create } from 'zustand'

const useStoreReferencias = create((set: any) => ({
  referencias: [],
  setReferencias: (refs: any) => set({referencias: refs}),
}))

export default useStoreReferencias