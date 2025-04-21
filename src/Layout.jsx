import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="app-layout">
            <Header />
                <main>
                    <Outlet /> {/* 여기에 각 페이지(Home, Central...)가 렌더됨 */}
                </main>
            <Footer />
        </div>
    );
}