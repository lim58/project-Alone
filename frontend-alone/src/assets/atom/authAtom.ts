import { atom } from "recoil"

export const loginInputAtom = atom({
    key: "loginInputAtom",
    default: {
        userId: "",
        password: ""
    }
})
