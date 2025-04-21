// 페이지 이동
import { useNavigate } from "react-router-dom";

import PageMove from "../component/PageMovie.jsx";
import { useState } from "react";

import centralPoint from "../img/center-point.png";
import eastPoint from "../img/east-point.png";
import southernPoint from "../img/south-point.png";
import westPoint from "../img/west-point.png";


import "./Home.css";

export default function Home() {
    const navigate = useNavigate();
    const [hoverRegion, setHoverRegion] = useState(null);
        
    return(
        // 페이지 전체
        <div className="home-container">

            <div className="home-body">
                <div className="buttons">
                <button className="central-btn" onClick={() => PageMove(navigate, "central")}>중부권</button>
                <button className="eastern-btn" onClick={() => PageMove(navigate, "eastern")}>동부권</button>
                <button className="southern-btn" onClick={() => PageMove(navigate, "southern")}>남부권</button>
                <button className="western-btn" onClick={() => PageMove(navigate, "western")}>서부권</button>
                </div>
                {/* 지도 이미지 */}
                    <svg viewBox="0 0 953 700" className="busan-svg-map" xmlns="http://www.w3.org/2000/svg">
                    {/* 부산 지도 이미지 */}
                    <image href="src\img\busan-1.png" x="0" y="0" width="953" height="700" />
                    {/* 중부권 */}
                    <polygon 
                        points="450,228,450,248,440,260,444,272,456,298,454,320,468,338,471,347,453,379,406,398,399,413,403,466,397,488,413,505,423,494,440,484,476,483,517,455,532,449,546,427,566,415,566,362,584,334,599,320,605,300,619,293,619,279,609,268,591,260,583,248,586,235,590,226,593,218,594,210,592,198,586,190,579,183,571,175,563,172,537,186,514,196,478,199"
                        fill="transparent"
                        stroke="transparent"
                        strokeWidth="2"
                        className="region region-central"
                        onMouseEnter={() => setHoverRegion("central")}
                        onMouseLeave={() => setHoverRegion(null)}
                        onClick={() => PageMove(navigate, "central")}
                    />
                    {/* 동부권 */}
                    <polygon 
                        points="593,73,605,69,614,67,633,67,644,77,664,87,679,88,688,84,695,80,703,76,708,63,712,53,708,44,701,39,705,27,719,28,728,32,738,43,744,44,759,41,778,37,800,31,808,29,826,31,831,35,838,47,841,53,853,63,857,69,855,80,862,95,855,107,862,118,873,127,886,134,890,139,890,150,893,156,883,160,866,158,854,146,847,152,837,155,825,158,825,207,812,217,822,225,808,246,792,250,787,255,782,266,783,274,792,267,800,262,804,271,803,282,803,298,802,306,794,316,787,321,788,329,790,340,788,345,774,338,768,346,760,360,772,369,776,385,760,391,750,407,733,412,712,420,711,447,695,455,685,460,676,466,661,460,646,463,638,471,625,471,614,466,605,460,600,447,592,435,569,416,566,361,581,346,588,329,602,317,605,300,621,292,616,275,592,262,582,247,585,233,594,219,593,203,581,186,565,174,570,150,584,138,590,119,592,103,602,88,593,81" 
                        fill="transparent"
                        stroke="transparent"
                        strokeWidth="2"
                        className="region region-eastern"
                        onMouseEnter={() => setHoverRegion("eastern")}
                        onMouseLeave={() => setHoverRegion(null)}
                        onClick={() => PageMove(navigate, "eastern")}
                    />
                    {/* 서부권 */}
                    <polygon 
                        points="448,228,450,248,442,257,439,269,446,280,455,292,458,305,454,315,454,323,468,336,471,349,464,359,454,375,446,381,430,387,411,396,400,406,399,416,398,431,400,452,400,474,396,489,380,498,371,513,367,530,377,539,388,550,391,558,389,565,389,574,399,578,403,588,402,598,394,606,387,614,385,598,376,594,369,598,365,608,369,617,376,628,377,636,377,652,377,664,371,668,360,664,356,652,348,649,337,654,335,676,320,681,302,652,298,557,290,553,281,590,273,597,258,590,268,543,249,561,245,584,229,590,220,592,210,589,201,563,214,526,199,526,189,543,189,581,183,597,169,601,158,588,151,601,137,601,122,600,110,593,88,586,75,578,71,566,75,554,107,549,110,538,100,529,95,515,91,505,68,502,47,491,31,458,41,447,58,444,74,450,82,455,112,448,123,436,155,436,166,442,185,442,190,435,183,424,177,426,177,392,159,372,171,359,187,349,209,348,220,329,230,328,241,332,246,344,274,331,301,335,341,325,379,305,387,284,395,269,403,260,400,240,411,234,428,229"
                        fill="transparent"
                        stroke="transparent"
                        strokeWidth="2"
                        className="region region-western"
                        onMouseEnter={() => setHoverRegion("western")}
                        onMouseLeave={() => setHoverRegion(null)}     
                        onClick={() => PageMove(navigate, "western")}
                    />
                    {/* 남부권 */}
                    <polygon 
                        points="565,415,544,426,535,445,521,452,505,461,484,480,460,480,441,482,425,492,416,508,397,489,381,496,371,517,369,534,390,552,392,571,402,580,402,599,385,615,390,636,397,643,411,636,406,618,420,608,423,580,432,597,479,622,484,636,498,646,514,660,528,662,537,660,542,643,521,620,521,601,507,585,474,552,465,536,477,527,486,529,488,541,502,550,526,543,533,548,535,562,547,566,558,562,570,569,584,569,593,562,593,550,598,536,589,506,568,492,577,480,582,466,598,464,600,445,591,431,577,422"
                        fill="transparent"
                        stroke="transparent"
                        strokeWidth="2"
                        className="region region-southern"
                        onMouseEnter={() => setHoverRegion("southern")}
                        onMouseLeave={() => setHoverRegion(null)}
                        onClick={() => PageMove(navigate, "southern")}
                    />
                    </svg>

                    {hoverRegion === "central" && (
                        <div className="region-preview-center">
                            <img src={centralPoint} alt="중부권 미리보기" />
                        </div>
                        )}
                    {hoverRegion === "eastern" && (
                        <div className="region-preview-eastern">
                            <img src={eastPoint} alt="동부권 미리보기" />
                        </div>
                        )}
                    {hoverRegion === "western" && (
                        <div className="region-preview-western">
                            <img src={westPoint} alt="서부권 미리보기" />
                        </div>
                        )}
                    {hoverRegion === "southern" && (
                        <div className="region-preview-southern">
                            <img src={southernPoint} alt="남부권 미리보기" />
                        </div>
                        )}

                    </div>
        </div>
    );
}