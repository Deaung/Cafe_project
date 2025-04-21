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

        <div className="home-container">

            <div className="home-body">
                <div className="buttons">
                <button className="central-btn" onClick={() => PageMove(navigate, "central")}>중부권</button>
                <button className="eastern-btn" onClick={() => PageMove(navigate, "eastern")}>동부권</button>
                <button className="southern-btn" onClick={() => PageMove(navigate, "southern")}>남부권</button>
                <button className="western-btn" onClick={() => PageMove(navigate, "western")}>서부권</button>
                </div>
                    <svg viewBox="0 0 953 700" className="busan-svg-map" xmlns="http://www.w3.org/2000/svg">
                    <image href="src\img\busan-1.png" x="0" y="0" width="953" height="700" />

                    <polygon 
                        points="451,229 481,201 566,174 593,195 576,246 585,261 603,265 618,285 592,321 578,323 577,340 564,360 569,414 561,418 541,422 536,441 535,452 516,452 503,469 480,476 459,482 443,479 418,504 401,484 412,460 400,428 411,398 450,380 475,334 456,322 459,303 438,263"
                        fill="transparent"
                        stroke="#f00"
                        strokeWidth="2"
                        className="region region-central"
                        onMouseEnter={() => setHoverRegion("central")}
                        onMouseLeave={() => setHoverRegion(null)}
                        onClick={() => PageMove(navigate, "central")}
                    />

                    <polygon 
                        points="600,460 593,434 572,412 565,359 579,347 581,324 598,321 612,301 619,285 603,264 583,255 588,226 593,198 562,170 585,130 602,91 593,72 632,68 676,89 706,74 713,48 701,34 705,27 725,28 737,42 826,28 850,60 858,71 860,92 858,114 890,134 893,155 855,150 828,157 825,206 821,248 793,347 773,382 742,413 707,449 674,468 631,471"
                        fill="transparent"
                        stroke="#00f"
                        strokeWidth="2"
                        className="region region-eastern"
                        onMouseEnter={() => setHoverRegion("eastern")}
                        onMouseLeave={() => setHoverRegion(null)}
                        onClick={() => PageMove(navigate, "eastern")}
                    />

                    <polygon 
                        points="446,229 400,236 400,258 380,300 300,333 276,329 244,339 238,330 219,326 205,345 186,349 161,371 171,389 174,419 185,441 127,431 80,450 33,446 33,468 45,490 80,508 99,541 56,559 86,585 154,604 182,598 233,586 270,596 318,674 355,671 382,668 385,611 402,597 366,533 383,490 399,486 401,453 393,429 406,395 446,376 472,341 449,325 455,303 432,264 448,240"
                        fill="transparent"
                        stroke="#0a0"
                        strokeWidth="2"
                        className="region region-western"
                        onMouseEnter={() => setHoverRegion("western")}
                        onMouseLeave={() => setHoverRegion(null)}     
                        onClick={() => PageMove(navigate, "western")}
                    />

                    <polygon 
                        points="567,411 592,434 600,459 569,491 587,512 599,539 581,568 543,568 501,546 476,533 476,564 504,580 526,620 543,644 536,666 501,646 481,639 460,616 427,594 415,635 397,645 387,613 402,602 399,573 386,543 369,532 376,519 385,491 401,487 416,510 436,490 454,481 477,482 505,470 519,455 539,456 543,431"
                        fill="transparent"
                        stroke="#fa0"
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