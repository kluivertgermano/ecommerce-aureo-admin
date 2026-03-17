import { create } from 'zustand'

const useStorePeridos = create((set: any) => ({
  periodos: [],
  setPeriodos: (pred: any) => set({periodos: pred}),
}))

export default useStorePeridos