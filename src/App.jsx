import { useState } from "react";
import "./App.css";
import Desktop from "./components/Desktop";

const getDate = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}/${month}/${year}`;
}

function App() {
  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <>
      <div className="bg-[url('/img/bg-colors.webp')]  bg-cover w-full h-full relative">
        <svg className="bg-colors fixed w-full h-full p-6" xmlns="http://www.w3.org/2000/svg" width="1881" height="1040" viewBox="0 0 1881 1040" fill="none" preserveAspectRatio="none">
          <path d="M0.5 19.9998C0.5 8.95408 9.45431 -0.000228882 20.5 -0.000228882H86.8594C90.861 -0.000228882 94.7705 1.20011 98.0826 3.4456L117.417 16.5539C120.73 18.7994 124.639 19.9998 128.641 19.9998H874.444C878.393 19.9998 882.253 18.831 885.538 16.6408L905.462 3.35876C908.747 1.16853 912.607 -0.000228882 916.556 -0.000228882H1860.5C1871.55 -0.000228882 1880.5 8.95408 1880.5 19.9998V1020C1880.5 1031.05 1871.55 1040 1860.5 1040H1050.5H870.5H20.5C9.4543 1040 0.5 1031.05 0.5 1020V898.112C0.5 892.324 3.00817 886.819 7.37643 883.02L28.1236 864.979C32.4918 861.181 35 855.676 35 849.887V558.112C35 552.324 32.4918 546.819 28.1236 543.02L7.37643 524.979C3.00817 521.181 0.5 515.676 0.5 509.887V19.9998Z" fill="#05080D" fill-opacity="0" />
          <path d="M1879.5 19.9998V1020C1879.5 1030.49 1870.99 1039 1860.5 1039H1050.5H870.5H20.5C10.0066 1039 1.5 1030.49 1.5 1020V898.112C1.5 892.613 3.88276 887.383 8.0326 883.775L28.7798 865.734C33.3664 861.745 36 855.965 36 849.887V558.112C36 552.034 33.3664 546.254 28.7798 542.266L8.03261 524.225C3.88276 520.616 1.5 515.386 1.5 509.887V19.9998C1.5 9.50637 10.0066 0.999771 20.5 0.999771H86.8594C90.6609 0.999771 94.3749 2.14009 97.5214 4.27331L116.856 17.3817C120.334 19.7394 124.439 20.9998 128.641 20.9998H874.444C878.59 20.9998 882.644 19.7726 886.093 17.4728L906.016 4.19081C909.137 2.11009 912.804 0.999771 916.556 0.999771H1860.5C1870.99 0.999771 1879.5 9.50636 1879.5 19.9998Z" stroke="white" stroke-opacity="0.15" stroke-width="2" />
        </svg>
        <svg className="bg-logo absolute w-[50%] h-[50%] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]" width="2490" height="1501" viewBox="0 0 2490 1501" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.02">
          <g filter="url(#filter0_d_323_179)">
          <path d="M1539.19 545.575H1709.02C1820.6 545.575 1862.92 585.149 1862.92 690.681V785.219C1862.92 890.75 1820.6 930.325 1709.02 930.325H1539.19C1428.16 930.325 1385.29 890.75 1385.29 785.219V690.681C1385.29 585.149 1428.16 545.575 1539.19 545.575ZM1469.38 696.727V779.173C1469.38 836.885 1485.87 853.924 1542.48 853.924H1705.73C1762.34 853.924 1778.83 836.885 1778.83 779.173V696.727C1778.83 639.014 1762.34 621.975 1705.73 621.975H1542.48C1485.87 621.975 1469.38 639.014 1469.38 696.727ZM2021.96 545.575H2313.28C2321.52 545.575 2325.37 549.422 2325.37 557.667V609.883C2325.37 618.128 2321.52 621.975 2313.28 621.975H2037.9C2017.02 621.975 2008.77 633.518 2008.77 652.755V671.443C2008.77 691.78 2018.12 702.223 2037.35 702.223H2243.47C2306.68 702.223 2339.66 736.301 2339.66 796.762V840.733C2339.66 894.048 2308.88 930.325 2242.37 930.325H1937.87C1929.62 930.325 1925.23 926.477 1925.23 918.233V866.017C1925.23 857.772 1929.62 853.924 1937.87 853.924H2226.43C2247.32 853.924 2255.56 842.382 2255.56 823.144V800.609C2255.56 780.272 2246.22 769.829 2226.98 769.829H2020.87C1957.66 769.829 1924.68 735.751 1924.68 675.291V635.167C1924.68 581.851 1955.46 545.575 2021.96 545.575Z" fill="#E9FFF6"/>
          </g>
          <g filter="url(#filter1_d_323_179)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M750.797 1350.59C1082.06 1350.59 1350.59 1082.06 1350.59 750.797C1350.59 419.538 1082.06 151 750.797 151C419.538 151 151 419.538 151 750.797C151 1082.06 419.538 1350.59 750.797 1350.59ZM698.364 545.575H456.521C345.493 545.575 302.621 585.149 302.621 690.681V785.219C302.621 890.751 345.493 930.325 456.521 930.325H698.364C706.608 930.325 711.005 926.477 711.005 918.233V866.017C711.005 857.772 706.608 853.924 698.364 853.924H458.17C401.007 853.924 385.067 836.886 385.067 779.173V769.829H695.615C703.86 769.829 707.707 765.982 707.707 757.737V714.315C707.707 706.071 703.86 702.223 695.615 702.223H385.067V696.727C385.067 639.014 401.007 621.975 458.17 621.975H698.364C706.608 621.975 711.005 618.128 711.005 609.883V557.667C711.005 549.422 706.608 545.575 698.364 545.575ZM844.903 545.575H785.542C777.297 545.575 772.9 549.422 772.9 557.667V785.219C772.9 890.751 815.772 930.325 926.8 930.325H1152.7C1160.95 930.325 1164.8 926.477 1164.8 918.233V864.368C1164.8 856.123 1160.95 852.276 1152.7 852.276H930.098C873.485 852.276 856.995 835.237 856.995 776.975V557.667C856.995 549.422 853.148 545.575 844.903 545.575ZM1286.15 545.575H1226.78C1218.54 545.575 1214.14 549.422 1214.14 557.667V918.233C1214.14 926.477 1218.54 930.325 1226.78 930.325H1286.15C1294.39 930.325 1298.24 926.477 1298.24 918.233V557.667C1298.24 549.422 1294.39 545.575 1286.15 545.575Z" fill="#E9FFF6"/>
          </g>
          </g>
          <defs>
          <filter id="filter0_d_323_179" x="1235.18" y="395.466" width="1254.59" height="684.967" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="75.0542"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.455351 0 0 0 0 0.549167 0 0 0 0 0.537909 0 0 0 1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_323_179"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_323_179" result="shape"/>
          </filter>
          <filter id="filter1_d_323_179" x="0.891525" y="0.891525" width="1499.81" height="1499.81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="75.0542"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.455351 0 0 0 0 0.549167 0 0 0 0 0.537909 0 0 0 1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_323_179"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_323_179" result="shape"/>
          </filter>
          </defs>
        </svg>
        <div className="frame-top-infos absolute flex items-center gap-[1.8vw] left-[9vw] top-[1.5%] text-[1em] font-medium text-blue h-[1.2em]">
          <p className="drop-shadow-sm">{currentDate}</p>
          <p className="drop-shadow-sm">Disk 12.5% full</p>
          <p className="drop-shadow-sm">Battery 100%</p>
          <p className="drop-shadow-sm">ETH: SFR bdm-450321</p>
          <div className="flex gap-[.5vw] items-center">
            <svg className="h-[1em] w-auto inline-block drop-shadow-md" width="81" height="39" viewBox="0 0 81 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.9308 1.66683H66.6865C76.4012 1.66683 82.0895 12.6079 76.5092 20.5599L68.5559 31.8933C66.3095 35.0945 62.644 37.0002 58.7333 37.0002H13.9776C4.26288 37.0002 -1.42547 26.0591 4.15491 18.1071L12.1081 6.77371C14.3546 3.57252 18.02 1.66683 21.9308 1.66683Z" fill="#E9FFF6" stroke="#B7FFF2" stroke-width="2.66667"/>
            </svg>
            <svg className="h-[1em] w-auto inline-block" width="81" height="39" viewBox="0 0 81 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.4414 6.77371C14.6878 3.57252 18.3533 1.66683 22.2641 1.66683H67.0197C76.7344 1.66683 82.4228 12.6079 76.8424 20.5599L68.8892 31.8933C66.6427 35.0945 62.9773 37.0002 59.0665 37.0002H14.3109C4.59614 37.0002 -1.09222 26.0591 4.48816 18.1071L12.4414 6.77371Z" stroke="#B7FFF2" stroke-width="2.66667"/>
            </svg>
            <svg className="h-[1em] w-auto inline-block" width="81" height="39" viewBox="0 0 81 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.4414 6.77371C14.6878 3.57252 18.3533 1.66683 22.2641 1.66683H67.0197C76.7344 1.66683 82.4228 12.6079 76.8424 20.5599L68.8892 31.8933C66.6427 35.0945 62.9773 37.0002 59.0665 37.0002H14.3109C4.59614 37.0002 -1.09222 26.0591 4.48816 18.1071L12.4414 6.77371Z" stroke="#B7FFF2" stroke-width="2.66667"/>
            </svg>
            <svg className="h-[1em] w-auto inline-block" width="81" height="39" viewBox="0 0 81 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.4414 6.77371C14.6878 3.57252 18.3533 1.66683 22.2641 1.66683H67.0197C76.7344 1.66683 82.4228 12.6079 76.8424 20.5599L68.8892 31.8933C66.6427 35.0945 62.9773 37.0002 59.0665 37.0002H14.3109C4.59614 37.0002 -1.09222 26.0591 4.48816 18.1071L12.4414 6.77371Z" stroke="#B7FFF2" stroke-width="2.66667"/>
            </svg>
          </div>
        </div>
        <div className="frame-left-levels absolute left-[.4vw] bottom-[18.7%] flex flex-col gap-[.7em]">
            <div className="round-level-2 flex flex-col gap-[.2em] justify-center items-center">
              <div className="round-level bg-white/3 border border-blue/30 rounded-full h-[2vw] w-[2vw] overflow-hidden relative">
                <svg className="w-full h-full animate-spin-slow-2 absolute top-0 left-0" width="107" height="107" viewBox="0 0 107 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M106.667 53.3333C106.667 62.8506 104.12 72.1945 99.2907 80.3956C94.4615 88.5966 87.5257 95.356 79.203 99.9724L53.3333 53.3333H106.667Z" fill="#FF7152"/>
                  <g filter="url(#filter0_d_432_126)">
                  <path d="M106.667 53.3333C106.667 65.9635 102.184 78.1839 94.0176 87.8186L53.3333 53.3333H106.667Z" fill="white" fill-opacity="0.5" shape-rendering="crispEdges"/>
                  </g>
                  <defs>
                  <filter id="filter0_d_432_126" x="37.334" y="37.333" width="85.332" height="66.4854" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="8"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.415686 0 0 0 0 0.286275 0 0 0 0.4 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_432_126"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_432_126" result="shape"/>
                  </filter>
                  </defs>
                </svg>
              </div>   
              <p className="text-blue tracking-[.2em] font-semibold drop-shadow-sm text-xs">HQ</p>
            </div>
            <div className="round-level-2 flex flex-col gap-[.2em] justify-center items-center">
              <div className="round-level bg-white/3 border border-blue/30 rounded-full h-[2vw] w-[2vw] overflow-hidden relative">
                <svg className="w-full h-full animate-spin-slow absolute top-0 left-0" width="107" height="107" viewBox="0 0 107 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M106.667 53.3333C106.667 62.8506 104.12 72.1945 99.2907 80.3956C94.4615 88.5966 87.5257 95.356 79.203 99.9724L53.3333 53.3333H106.667Z" fill="#FFD949"/>
                  <g filter="url(#filter0_d_432_126)">
                  <path d="M106.667 53.3333C106.667 65.9635 102.184 78.1839 94.0176 87.8186L53.3333 53.3333H106.667Z" fill="white" fill-opacity="0.5" shape-rendering="crispEdges"/>
                  </g>
                  <defs>
                  <filter id="filter0_d_432_126" x="37.334" y="37.333" width="85.332" height="66.4854" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="8"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.85098 0 0 0 0 0.286275 0 0 0 0.4 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_432_126"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_432_126" result="shape"/>
                  </filter>
                  </defs>
                </svg>
              </div>   
              <p className="text-blue tracking-[.2em] font-semibold drop-shadow-sm text-xs">DF</p>
            </div>
          <div className="tube-levels flex flex-col gap-[.2em] justify-center items-center">
          <div className="flex gap-[.2vw]">
            <div className="level bg-white/3 border border-blue/30 rounded-full h-[8vw] w-[1vw] overflow-hidden relative">
              <div className="level-liquid animate-levels bg-yellow absolute bottom-0 left-0 w-full h-[70%] drop-shadow-yel"></div>
            </div>
            <div className="level bg-white/3 border border-blue/30 rounded-full h-[8vw] w-[1vw] overflow-hidden relative">
              <div className="level-liquid animate-levels-2 bg-yellow absolute bottom-0 left-0 w-full h-[40%] drop-shadow-yel"></div>
            </div>
          </div>
          <p className="text-blue tracking-[.2em] font-semibold drop-shadow-sm text-xs">MR</p>
          </div>
        </div>
      </div>
      <Desktop />
    </>
  );
}

export default App;
