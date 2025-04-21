import Footer from "../../footer/Footer.jsx";
import Header from "../../header/Header.jsx";
// import SwiperImage from "../../component/ImgMove.tsx";
import "./Central.css";
// import SlideImg from '../../component/Slideimg.jsx'

import centralCafeImg1 from "../../img/centralCafe1.jpg";
import centralCafeImg2 from "../../img/centralCafe2.jpg";
import centralCafeImg3 from "../../img/centralCafe3.jpg";
import centralCafeImg4 from "../../img/centralCafe4.jpg";
// import { images_1, images_2, images_3, images_4 } from "../../component/centerimgs.jsx";


export default function Central() {
    return (
        <div className="central-cafe">
            {/* <Header /> */}
            {/* <img src="src\img\중부.png" alt="이미지" className="background"/> */}
            
                
                <div className="central-part1">
                    <a href="https://naver.me/5Q3mYIGJ" target="_blank" rel="noopener noreferrer">
                        <img src={centralCafeImg1} alt="이내 무목 이미지"/>
                    </a>
                    <div className="part-1-detail">
                    <p>이내 무목</p>
                    <p>인공폭포가 이쁘고, 인테리어가 독특한 곳</p>
                    <p>#폭포</p>
                    </div>
                </div>

                <div className="central-part2">
                    <a href="https://naver.me/xJiRmdcK" target="_blank" rel="noopener noreferrer">
                        <img src={centralCafeImg2} alt="카페 뱅커 이미지" />
                        
                    </a>
                    <div className="part-2-detail">
                    <p>뱅커</p>
                        <p>쿠키와 빵 종류가 다양하고, 넓음</p>
                        <p>#크로플</p>
                    </div>
                    
                </div>

            
            
            <div className="central-part3">
                
                
                <a href="https://naver.me/xeAOhY3e" target="_blank" rel="noopener noreferrer">
                    <img src={centralCafeImg3} alt="카페 이디야커피 이미지" />
                    
                </a>
                <div className="part-3-detail">
                <p>이디야커피 부산지오플레이스점</p>
                <p>사장님이 친절하고, 분위기가 조용함</p>
                <p>#공부하기 좋은 카페</p>
                </div>
            </div>

            <div className="central-part4">
                
                <a href="https://naver.me/Gcts7ekh" target="_blank" rel="noopener noreferrer">
                    <img src={centralCafeImg4} alt="카페 오프커스 이미지" />
                    
                </a>
                <div className="part-4-detail">
                <p>오프커스</p>
                <p>서면에서 보기 드문 대형 카페</p>
                <p>#커피가 맛있음 #서면 대형 카페</p>
                </div>
                
            </div>
        
            

            {/* <Footer /> */}
        </div>
    );
}