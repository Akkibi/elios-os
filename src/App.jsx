import { useState } from "react";
import "./App.css";
import Desktop from "./components/Desktop";
function App() {
  return (
    <>
      <div className="bg-[url('/img/bg-colors.webp')]  bg-cover ">
        <svg className="fixed w-full h-full p-6" xmlns="http://www.w3.org/2000/svg" width="1881" height="1040" viewBox="0 0 1881 1040" fill="none" preserveAspectRatio="none">
          <path d="M0.5 19.9998C0.5 8.95408 9.45431 -0.000228882 20.5 -0.000228882H86.8594C90.861 -0.000228882 94.7705 1.20011 98.0826 3.4456L117.417 16.5539C120.73 18.7994 124.639 19.9998 128.641 19.9998H874.444C878.393 19.9998 882.253 18.831 885.538 16.6408L905.462 3.35876C908.747 1.16853 912.607 -0.000228882 916.556 -0.000228882H1860.5C1871.55 -0.000228882 1880.5 8.95408 1880.5 19.9998V1020C1880.5 1031.05 1871.55 1040 1860.5 1040H1050.5H870.5H20.5C9.4543 1040 0.5 1031.05 0.5 1020V898.112C0.5 892.324 3.00817 886.819 7.37643 883.02L28.1236 864.979C32.4918 861.181 35 855.676 35 849.887V558.112C35 552.324 32.4918 546.819 28.1236 543.02L7.37643 524.979C3.00817 521.181 0.5 515.676 0.5 509.887V19.9998Z" fill="#05080D" fill-opacity="0.6" />
          <path d="M1879.5 19.9998V1020C1879.5 1030.49 1870.99 1039 1860.5 1039H1050.5H870.5H20.5C10.0066 1039 1.5 1030.49 1.5 1020V898.112C1.5 892.613 3.88276 887.383 8.0326 883.775L28.7798 865.734C33.3664 861.745 36 855.965 36 849.887V558.112C36 552.034 33.3664 546.254 28.7798 542.266L8.03261 524.225C3.88276 520.616 1.5 515.386 1.5 509.887V19.9998C1.5 9.50637 10.0066 0.999771 20.5 0.999771H86.8594C90.6609 0.999771 94.3749 2.14009 97.5214 4.27331L116.856 17.3817C120.334 19.7394 124.439 20.9998 128.641 20.9998H874.444C878.59 20.9998 882.644 19.7726 886.093 17.4728L906.016 4.19081C909.137 2.11009 912.804 0.999771 916.556 0.999771H1860.5C1870.99 0.999771 1879.5 9.50636 1879.5 19.9998Z" stroke="white" stroke-opacity="0.15" stroke-width="2" />
        </svg>
      </div>

      <Desktop />
    </>
  );
}

export default App;
