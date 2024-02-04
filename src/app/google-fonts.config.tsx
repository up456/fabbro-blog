import { Diphylleia, Noto_Serif_KR } from "next/font/google";

// 1. "next/font/google"에서 사용할 Font를 가져와서 설정합니다.
const diphylleia = Diphylleia({
  subsets: ["latin"],
  display: "auto",
  weight: ["400"],
  variable: "--font-diphylleia",
});

const notoSerifKr = Noto_Serif_KR({
  subsets: ["latin"],
  display: "auto",
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-noto-serif-kr",
});

/// 2. 아래에서 설정한 Font를 등록합니다.
/// 3. 그리고 google-fonts.config.tsx파일에서 fontFamily를 추가합니다.
const registerFontArray = [diphylleia, notoSerifKr];

const googleFonts = registerFontArray.map((font) => font.variable).join(" ");

export default googleFonts;
