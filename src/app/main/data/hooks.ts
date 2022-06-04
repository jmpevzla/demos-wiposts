import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppRootState, AppDispatch } from './appStoreImpl'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector