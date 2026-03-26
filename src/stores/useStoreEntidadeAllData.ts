import { create } from 'zustand'

const useStoreEntidadeAllData = create((set: any) => ({
  entidadeData: {},
  setEntidadeData: (pred: any) => set({entidadeData: pred}),
}))

export default useStoreEntidadeAllData