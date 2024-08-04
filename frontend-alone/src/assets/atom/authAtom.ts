import { atom } from "recoil"

export const loginInputAtom = atom({
    key: "loginInputAtom",
    default: {
        userId: "",
        password: ""
    }
})

export const signUpInputAtom = atom({
    key: "signUpInputData",
    default: {
        name: "",
        userId: "",
        password: "",
        passwordCheck: ""
    }
})