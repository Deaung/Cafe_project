# caferecommend

## 마무리작업중 20250421
```jsx

<<<<<<< HEAD
const [hoverRegion, setHoverRegion] = useState(null);

=======
- 지도 이미지는 ai로 하려 했는데 안나와서 직접 그릴려고합니다
- 강아지 있는 카페 사진슬라이드 기능 이용해서 사진 띄웠습니다
- 네이버 지도 a태그로 원래 이미지에 링크 걸어두신거는 카페 제목을 a태그 안에 넣어서 링크로 이동하게끔 했습니다.( 깜봉<-- 여기에 링크 걸었습니다.)
- 해당 부분 다른 카페는 안했으니 처음보여드렸던것 처럼 강아지 이미지 따로 빼서 할지 이게 나은지 말씀해주세요

## 메인 화면 관련

- 홈 화면 지도 지금 외곽선 나누거나 하는게 잘 안되서 일단 직접 선 그어 봤습니다
- 일단 구역별로 나눠두기는 했는데 하고 보니까 약간 어색한것 같아 의견 여쭤보려 합니다.

## 디테일 화면 배경 관련

- 디테일 화면 배경에 지도를 잘라서 넣기로 했던것 같은데 자르는것 보다 원상태 그대로 넣고 제목 넣는게 더 보기 좋을 것 같습니다.
- 자르고 나니까 약간 볼품없어서요...
- 자른 사진 이미지 폴더에 넣어뒀습니다
>>>>>>> 9090cdea9551f75e8f610adfb911eb73d4568e29

<polygon 
  className="region region-central"
  onClick={() => PageMove(navigate, "central")}
  onMouseEnter={() => setHoverRegion("central")}
  onMouseLeave={() => setHoverRegion(null)}
/>

<polygon 
  className="region region-eastern"
  onClick={() => PageMove(navigate, "eastern")}
  onMouseEnter={() => setHoverRegion("eastern")}
  onMouseLeave={() => setHoverRegion(null)}
/>
```

```jsx
{hoverRegion === "central" && (
  <div className="region-preview">
    <img src="/img/center-point.png" alt="중부권 미리보기" />
  </div>
)}
{hoverRegion === "eastern" && (
  <div className="region-preview">
    <img src="/img/east-point.png" alt="동부권 미리보기" />
  </div>
)}
{hoverRegion === "western" && (
  <div className="region-preview">
    <img src="/img/west-point.png" alt="서부권 미리보기" />
  </div>
)}
{hoverRegion === "southern" && (
  <div className="region-preview">
    <img src="/img/south-point.png" alt="남부권 미리보기" />
  </div>
)}
```

```css
.region-preview {
  position: absolute;
  top: 50px;
  left: 980px; /* SVG 오른쪽 바깥 */
  z-index: 10;
  background: white;
  padding: 6px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  width: 200px;
}
```
```jsx
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="app-layout">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
```

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Western from "./pages/Western";
// 다른 페이지들 import...

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="western" element={<Western />} />
                    {/* 다른 지역도 추가 */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
```
각각 header/footer 지우기
