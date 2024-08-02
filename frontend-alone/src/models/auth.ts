import { ReactElement } from "react"

type AuthBaseType = {
    name: string,
    userId: string,
    password: string
}

export interface AuthDataType {
    name: string
    placeholder: string
    icon: ReactElement
}

export interface InputProps {
    data: AuthDataType
    key: number
}