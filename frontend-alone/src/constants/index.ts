import { LoginDataType } from "../models/auth"
import { Icons } from "../assets/auth"

export const AuthLogin : LoginDataType[] = [
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