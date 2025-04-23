// 어느 페이지든 상단에 위치
import { useNavigate } from "react-router-dom";


import PageMove from "../component/PageMovie.jsx";

import "./Header.css";

export default function Header() {
    const navigate = useNavigate();

    return(
        <div className="header">
            {/* 클릭 시 루트로 복귀 */}
            <button onClick={() => PageMove(navigate, "/")}><img src="src\img\KakaoTalk_20250423_114705813.png" alt="coffee icon" className="icon" />
            카페기행</button>
        </div>
    );
}