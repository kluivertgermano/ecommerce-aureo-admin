import { create } from 'zustand'

const useStoreEntidade = create((set: any) => ({
  entidade: "",
  setEntidade: (pred: any) => set({entidade: pred}),
}))

export default useStoreEntidade