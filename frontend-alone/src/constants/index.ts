import { AuthDataType } from "../models/auth"
import { Icons } from "../assets/auth"

export const AuthLogin : AuthDataType[] = [
    {
        name: "userId",
        placeholder: "아이디를 입력해주세요",
        icon: Icons.UserIdIcon
    },
    {
        name: "password",
        placeholder: "비밀번호를 입력해주세요",
        icon: Icons.UserPwIcon
    },
]

export const AuthSignUp : AuthDataType[] = [
    {
        name: "name",
        placeholder: "이름을 입력해주세요",
        icon: Icons.UserNameIcon
    },
    {
        name: "userId",
        placeholder: "아이디를 입력해주세요",
        icon: Icons.UserIdIcon
    },
    {
        name: "password",
        placeholder: "비밀번호를 입력해주세요",
        icon: Icons.UserPwIcon
    },
    {
        name: "passwordCheck",
        placeholder: "비밀번호를 재입력해주세요",
        icon: Icons.UserPwIcon
    },
]