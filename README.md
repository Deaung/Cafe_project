# caferecommend

## 마무리작업중 20250421
```jsx

const [hoverRegion, setHoverRegion] = useState(null);


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
