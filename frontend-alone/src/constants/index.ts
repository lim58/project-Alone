import { AuthDataType } from "../models/auth"
import { HeaderDataType, FooterDataType } from "../models/main"
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

export const HeaderData : HeaderDataType[] = [
    {
        name: "Alone live tips",
        id: "tips",
        text: "끝내주는 자취생활"
    },
    {
        name: "Around Place",
        id: "around",
        text: "주변 편리시설"
    },
]

export const FooterData : FooterDataType[] = [
    {
        name: "service",
        subTitle: "자취생들을 위한 서비스",
        text: "모든 자취생들을 위한"
    },
    {
        name: "role",
        subTitle: "역할",
        text: "Design 임다영 Frontend 임다영 "
    },
    {
        name: "address",
        subTitle: "주소",
        text: "대전광역시 유성구 가정북로 76 대덕소프트웨어마이스터고등학교"
    },
    {
        name: "email",
        subTitle: "문의",
        text: "Dlimda00@dsm.hs.kr"
    },
]