import { create } from 'zustand'

const useStoreTransacoes = create((set: any) => ({
  transacoes: [],
  setTransacoes: (trans: any) => set({transacoes: trans}),
}))

export default useStoreTransacoes