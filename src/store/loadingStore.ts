import { create } from 'zustand';
interface LoadingState {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}
export const useLoadingState = create<LoadingState>((set)=>({
    isLoading:false,
    setLoading:(Loading:boolean)=>set({
        isLoading:!Loading,
    })
}))