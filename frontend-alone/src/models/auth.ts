import { ReactElement } from "react"

type AuthBaseType = {
    name: string,
    userId: string,
    password: string
}

export interface LoginDataType {
    name: string
    placeholder: string
    icon: ReactElement
}