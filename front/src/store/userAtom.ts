import { atom, useAtom } from 'jotai'
import { LoginUserInfo } from "@/interfaces/LoginUserInfo";

export const userAtom = atom<LoginUserInfo | null>(null);
