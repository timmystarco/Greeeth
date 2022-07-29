import * as React from "react";

function SvgComponent(props) {
  return (
    <>
      <svg
        xmlSpace="preserve"
        width="40"
        height="35"
        viewBox="0 0 108 94"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // width={100}
        // height={100}
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          imageRendering: "optimizeQuality",
          fillRule: "evenodd",
          clipRule: "evenodd",
        }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        <g>
          <metadata />

          <path
            d="M0 85.0423V85.4346C1.31968 85.3871 2.04491 84.8521 2.97226 84.6499C4.37516 84.3527 4.42272 84.6499 6.12285 84.0911L9.20211 83.4373C12.8639 82.7477 14.8613 82.391 18.749 81.8441C21.9709 81.3804 28.9855 80.893 32.5046 80.6077C34.7992 80.4293 37.1413 80.251 39.5429 80.0964C50.4808 79.4425 57.1625 79.3474 68.148 80.2272C69.218 80.3104 70.6328 80.4769 71.6671 80.4888L82.1413 81.2259C84.4122 81.5112 86.4809 81.856 88.7279 82.0819C89.7979 82.1889 90.8917 82.3672 91.9736 82.498C93.1506 82.6407 94.2919 82.7596 95.3857 82.9022C97.6209 83.1995 106.003 85.4941 108 85.2325V84.8639C107.738 84.424 101.461 81.8917 100.129 81.6539C99.3091 81.5112 97.8824 81.321 97.3118 80.9287C97.3593 80.572 97.5258 80.5244 97.7398 80.3223C98.144 79.93 98.5839 78.8005 98.9762 78.2299C100.07 76.6486 102.353 71.3223 102.959 69.2417L103.993 65.8415C105.277 61.2523 105.598 59.7305 105.61 54.535C105.61 53.8098 105.694 53.0845 105.694 52.3236C105.694 51.5627 105.622 50.8494 105.622 50.1123C105.598 48.9234 105.432 47.2827 105.254 46.2008C104.374 40.8388 103.542 37.391 101.52 32.5046C100.629 30.3646 99.7252 28.5812 98.679 26.7028C96.646 23.0172 93.2457 18.4756 90.2853 15.5152C88.4663 13.6724 86.5878 12.0079 84.5192 10.4386C82.8666 9.20211 82.2602 8.84544 80.6671 7.75165C80.2153 7.44254 79.7398 7.20476 79.288 6.93131C74.461 4.10172 69.1942 1.90225 63.642 0.915456C61.3593 0.511229 58.7318 0.011889 56.1044 0H51.2893C45.7371 0.0356671 39.1506 1.78336 34.0026 3.95905C32.4452 4.62484 29.1281 6.32497 27.6539 7.25231C27.428 7.39498 27.1308 7.59709 26.9049 7.72787C26.6196 7.89432 26.4888 8.03699 26.1915 8.21532C24.7886 9.07133 22.0304 11.1876 20.7583 12.3408C14.7305 17.786 10.0225 23.8613 6.53897 31.6605C5.08851 34.9062 3.66182 38.7464 2.9247 42.3487C2.65125 43.716 2.00925 49.6367 2.00925 50.9921C1.98547 52.6209 1.99736 53.9287 2.11625 55.5456C2.29458 58.2682 2.97226 61.2761 3.34082 63.9868C3.6856 66.4954 4.99339 68.9207 5.77807 71.1559C6.65786 73.6764 6.63408 73.9974 7.94188 76.2087C8.20343 76.6724 8.50066 77.2431 8.76222 77.8018C9.34478 79.0502 10.7358 80.0608 10.1295 80.7384C9.8679 81.0238 7.19287 81.8798 6.59841 82.0343C5.30251 82.3791 1.74769 83.6037 0.61823 84.4835L0 85.0423ZM30.7332 64.7952L30.0436 64.9736C30.5429 66.2219 31.7794 65.6631 33.1585 65.7464L33.0753 66.3408C33.6698 66.1744 33.432 65.8534 34.5258 65.9485C35.1559 66.0079 35.6552 66.2457 36.2972 66.2576L35.9524 64.7834C35.893 64.6169 35.9406 64.7001 35.8692 64.5456C35.7979 64.4029 35.7979 64.4029 35.7266 64.3197C34.9657 64.4386 35.2034 64.9855 34.2285 64.9022L33.8719 64.2127C33.86 64.1889 33.8362 64.1532 33.8243 64.1295C33.5152 64.1295 30.8996 64.0343 30.8758 64.2127L30.7332 64.7952ZM36.642 64.7715C36.9036 64.8666 37.177 64.9379 37.3316 65.1757C37.4624 65.354 37.4386 65.3778 37.4742 65.5205L37.605 65.9247C37.605 65.9485 37.6169 65.9841 37.6407 66.0079C37.7001 65.996 40.1731 65.5324 40.1849 65.5324C41.1361 65.14 40.7081 64.07 41.5522 63.8322C42.0277 64.1889 42.1942 65.0449 42.5033 65.6394C43.0264 65.6631 43.0026 65.5205 43.395 65.3897C43.9419 65.2114 43.8943 65.4373 44.4055 65.4254C44.4412 65.0211 44.1083 64.1532 43.9419 63.7966C40.6011 63.642 42.6341 62.1678 42.7768 60.7292C41.8375 60.8362 41.2312 62.358 39.6262 62.5244C39.0436 62.5958 39.1149 62.5244 38.7939 62.9287C38.1519 63.7252 37.4029 63.9392 36.9987 64.2365C36.4874 64.605 36.8085 64.2127 36.642 64.7715ZM35.4174 93.21H37.2365L37.2602 86.8375C38.3778 86.683 41.1004 86.9921 41.897 86.7305V84.9234C41.1004 84.7807 39.1506 84.8877 38.2351 84.8877C36.8679 84.8877 36.1783 84.8758 35.6077 85.9458C35.1915 86.7186 35.3223 91.9974 35.4174 93.21ZM76.2563 93.1744V91.3435L73.0581 91.2959V86.8494L76.2087 86.8137L76.2563 84.9234C75.2576 84.7807 73.9736 85.1017 73.1176 84.8164C72.8798 84.0674 73.2246 82.9617 72.9987 82.1295L71.2391 82.1176C71.1202 82.712 71.1915 89.0489 71.1915 90.1902C71.1915 91.498 71.2272 92.5205 72.3091 93.0555C72.8203 93.317 75.5667 93.3052 76.2563 93.1744ZM77.3025 93.21L79.2048 93.2219V86.8137L83.675 86.8018L83.7345 93.1863L85.6129 93.2219C85.6129 91.8428 85.8151 86.9445 85.4346 86.0528C84.9828 85.0066 84.1625 84.8877 82.9141 84.8877C81.7133 84.8877 80.4055 84.9353 79.2166 84.8758L79.2048 82.1413H77.3263L77.3025 93.21ZM51.0515 93.1744L51.0634 91.3435L44.5958 91.2959L44.6196 90.0476L51.0277 90.0238C51.0872 89.3104 51.1229 86.897 50.9564 86.3025C50.6235 85.1255 49.6962 84.8877 48.6856 84.8877C47.4491 84.8758 46.2008 84.8758 44.9643 84.8877C42.0872 84.8996 42.7649 87.6697 42.7649 90.1902C42.7649 93.7094 43.9419 93.2219 47.2708 93.2219C48.2576 93.2219 50.1717 93.3289 51.0515 93.1744ZM49.1374 88.0383L49.1493 86.8256L44.6433 86.8018C44.4174 88.395 44.6552 88.074 46.1651 88.074C46.9617 88.074 48.424 88.1572 49.1374 88.0383ZM69.7886 93.2219V91.3078H63.3329L63.3567 90.0357L69.7767 90.0238C69.8362 89.2034 69.8838 87.0277 69.6935 86.362C69.3963 85.3038 68.6235 84.8758 67.4584 84.8877C66.21 84.8877 64.9736 84.8877 63.7371 84.8877C60.8243 84.8877 61.4782 87.5865 61.4782 90.1902C61.4782 91.4861 61.4782 92.3897 62.4531 92.9841C63.2378 93.4597 68.469 93.2457 69.7886 93.2219ZM63.3448 88.0383L67.8388 88.074L67.8507 86.8137L63.3805 86.8018L63.3448 88.0383ZM60.4082 93.1982L60.4201 91.3197L53.9881 91.3078V90.0594L60.3606 90.0357C60.4795 89.5363 60.4676 86.9326 60.3606 86.4214C60.1229 85.3871 59.3263 84.8877 58.1136 84.8877C56.8771 84.8877 55.6407 84.8877 54.4042 84.8877C51.4676 84.8877 52.1096 87.3725 52.1096 90.0951C52.1096 91.3435 52.0026 92.3065 53.0489 92.9604C53.8573 93.4597 55.5099 93.2219 56.6156 93.2219C57.745 93.2219 59.3263 93.317 60.4082 93.1982ZM53.9762 88.0145C54.428 88.1572 57.8283 88.1096 58.4822 88.0502V86.8137H53.9881L53.9762 88.0145ZM33.9075 87.3844L29.7701 87.3487L29.7345 89.2867L31.9934 89.2985L32.0053 91.284L25.716 91.3078V84.8164H31.9696L32.0053 85.7081H33.9432C33.9194 84.6143 33.9313 82.9379 31.9221 82.8785C30.9115 82.8547 25.5852 82.6882 24.8362 83.1162C24.3131 83.4254 23.9445 83.8653 23.8494 84.6024C23.7662 85.1968 23.7305 91.1413 23.897 91.7715C24.0634 92.4016 24.5509 92.9485 25.074 93.1149C25.7635 93.3408 28.926 93.2219 29.9128 93.2219C31.6486 93.2219 33.0872 93.4597 33.7411 92.1162C34.0621 91.4742 33.9908 88.3355 33.9075 87.3844ZM13.7437 80.1915L14.6354 80.0845C14.6592 79.5614 14.1717 79.0859 13.9577 78.7292C13.6843 78.3131 13.4822 77.9564 13.1849 77.4927C12.6499 76.6367 12.1744 75.7569 11.6869 74.889C11.4491 74.4491 11.2589 73.9855 11.033 73.5218C10.7952 73.0462 10.5812 72.6063 10.3672 72.107C7.56143 65.5799 6.12285 58.6962 6.20608 51.5152C6.27741 45.4161 7.79921 38.5086 10.2959 32.9802C11.1995 30.9828 11.4254 30.745 12.4003 28.8904C13.2563 27.2497 14.4095 25.4782 15.6222 23.8732C17.3342 21.6143 17.465 21.3646 19.3554 19.3672C22.066 16.5376 24.9075 14.0885 28.3672 11.9128C29.9485 10.926 31.9934 9.71334 33.7054 9C35.6671 8.19155 37.498 7.32365 39.6262 6.70542C47.4135 4.41083 53.3223 3.99472 61.5258 5.06473C66.1268 5.67107 72.7015 8.14399 76.7556 10.3672C80.9524 12.6618 85.3989 16.0978 88.3593 19.3554C90.2616 21.4478 90.2972 21.3884 92.1162 23.8256C98.358 32.2074 102.234 43.5614 101.39 55.5456C100.985 61.4663 100.332 63.7252 98.5482 69.1704C98.0845 70.5852 96.6697 73.6288 96.004 74.8534C95.3976 75.9472 93.2695 79.3593 93.0911 80.3104C94.5178 80.144 96.111 76.7556 96.753 75.4954C98.0964 72.8679 99.6182 69.5628 100.415 66.6618C100.712 65.568 100.974 64.3435 101.306 63.2972C101.948 61.2642 102.186 58.1374 102.4 55.9855C103.018 49.7318 101.592 39.6856 99.0951 34.2166C98.0608 31.9458 97.5971 30.745 96.3963 28.498C94.4941 24.9789 91.8071 21.3408 89.3461 18.7609C85.5654 14.79 80.1083 10.5218 74.8534 8.1321C74.354 7.90621 74.0092 7.7041 73.4029 7.46631C72.8917 7.2642 72.4993 7.0502 71.9881 6.81242C71.0489 6.3963 69.86 6.05152 68.9089 5.68296C67.8745 5.26684 66.6856 5.07662 65.6275 4.73184C64.1176 4.24439 60.2417 3.60238 58.4227 3.50727C49.1255 3.00793 41.7424 4.01849 33.5152 7.75165C32.1123 8.39366 29.354 9.99868 28.1176 10.7596C13.1374 20.0449 4.22061 37.2365 5.25495 55.1295C5.54029 60.1229 6.65786 64.8904 8.08454 69.0396C9.02378 71.7622 9.46367 72.3448 10.6407 74.9009C11.2114 76.1374 13.0423 79.181 13.7437 80.1915ZM7.2642 52.3236C7.2642 55.0225 7.3712 58.5297 8.06077 61.1215C8.73844 63.6539 8.83355 65.2114 9.83223 67.9934C10.7477 70.5495 11.9009 73.0581 13.1017 75.4835C13.3276 75.9472 13.6605 76.3514 13.9221 76.8388C14.3857 77.6948 15.0753 78.753 15.5746 79.6209C16.8349 79.6803 18.6063 78.5984 19.7001 78.0872C20.3303 77.7781 21.2576 77.6116 21.8877 77.4333C23.4571 76.9934 25.4069 78.6103 26.4769 77.5165C27.7133 76.2563 31.934 75.2338 32.9802 75.3527L33.0159 76.1374C33.4676 76.0304 33.6698 75.6499 33.9551 75.3527C34.4425 74.8771 34.6328 75.1268 35.1797 75.2933C36.0951 75.5548 39.0436 73.7239 39.9828 73.1532C41.5522 72.214 40.6962 73.498 42.6103 73.0462L44.8098 72.5945C45.7371 72.4399 45.2616 72.6539 45.4874 72.7966C46.0225 73.1176 47.889 72.5945 48.4122 72.4756C48.6618 72.4161 49.6367 72.1783 49.7675 72.2021C50.1717 72.2734 50.3263 72.8679 50.8375 72.749C50.9207 72.7252 51.8956 72.1665 51.9789 72.0832C52.2642 71.8098 52.4544 71.2867 52.3355 70.7517C52.1334 69.8124 51.6816 69.0634 51.3369 68.2668C50.9564 67.4108 50.4333 66.8045 50.0885 65.9841C49.2563 63.963 49.5416 62.8098 47.1876 61.7754C46.391 61.4306 45.4756 61.0502 44.5839 60.8481C41.9207 60.2536 43.4544 59.5046 39.6024 61.7279C39.2457 61.9419 38.7345 62.0964 38.3302 62.2748C37.3672 62.679 37.6645 62.2629 37.0343 61.9775C36.3567 62.2748 35.9524 62.7622 35.0489 63.0951C34.6803 63.2378 32.9326 63.7728 32.6235 63.7609C32.4571 63.5826 32.2668 63.2021 32.0172 63.1189C31.3514 63.1546 31.0185 63.6063 30.4716 63.6182C30.4716 63.1783 30.8877 62.6077 30.9472 61.93C30.1506 62.1678 30.1268 63.3567 29.2351 62.2391C28.5694 61.3831 28.5931 61.3355 28.3197 60.1347C28.0462 60.325 27.9987 60.4201 27.9036 60.86C27.8441 61.181 27.8441 61.5258 27.6896 61.7517C27.4518 62.0132 26.6314 61.7279 26.3461 61.6922C25.609 61.5971 25.6684 61.5971 25.3831 60.967C24.86 59.8256 26.0013 59.7305 26.1678 58.5773C25.4069 58.6486 25.1929 58.8388 24.6698 59.0528C24.1347 59.2787 23.8018 58.9102 23.3144 58.7081C23.469 58.3276 23.2906 58.6724 23.4927 58.4703C23.7186 58.2444 23.8137 58.4941 23.8494 57.9947C22.8507 58.0304 22.4465 58.4227 22.5535 56.8177C24.0277 56.2708 24.6698 56.568 25.3355 55.07C25.5495 54.5588 25.9181 54.1427 26.3104 53.7384C26.9643 53.0489 26.7147 53.1083 27.8679 52.9775C30.2457 52.716 32.2074 51.0396 32.9921 51.4439C33.3844 51.6579 33.8956 52.2642 34.4306 52.3593C34.7635 52.1929 34.9657 51.9194 35.2985 51.6816C37.0343 50.4333 39.6737 50.362 41.6354 51.1229C42.5627 51.4914 43.6565 51.1585 44.5007 50.8613C44.3699 50.5403 43.9062 50.1242 43.4544 50.1123C43.0026 50.1004 42.8124 50.5522 42.2536 50.6354C41.4571 49.9577 41.6592 49.5535 40.3989 49.3633C39.8402 49.2682 39.5905 49.1968 39.1506 49.0304C37.2365 48.2576 38.4254 48.424 36.4518 49.9339C34.3118 51.5509 34.5376 51.3725 33.4201 49.6724C32.0172 49.6248 31.8388 51.4201 28.7239 50.3857C28.7358 49.5773 30.2457 48.9472 30.3527 48.2576C29.247 48.3884 28.2602 49.2325 26.3223 49.2682C26.5244 48.5548 27.4518 48.424 27.7966 47.8058C27.9749 47.4967 27.8679 46.9379 27.7847 46.605C27.7252 46.4029 27.6658 46.3078 27.6301 46.0819C27.3804 44.786 28.5337 45.5469 29.2114 44.9049C29.5324 44.5958 29.782 44.2629 30.1863 43.8824C30.2933 43.0264 30.0674 42.3606 30.2457 41.4571C30.531 40.0542 31.0542 40.7556 31.2444 39.852C30.5548 39.8877 30.317 40.1017 29.8058 40.2087C29.6037 39.7926 29.6513 39.1625 29.6394 38.6156C29.1638 38.7226 29.1995 38.8771 28.8785 39.2338C28.07 40.1374 28.3316 39.9947 29.1044 40.7794C29.4135 41.1004 29.7345 41.2193 29.8771 41.683C29.4016 42.2061 27.5112 42.9789 26.9287 43.0502C26.7979 42.7768 25.395 40.4941 25.1929 40.3989C24.7768 40.5892 24.325 41.5878 23.79 41.7781L22.4465 39.5667C22.6724 39.21 23.148 39.1744 23.2906 38.7701C22.9221 38.3778 22.0423 38.1519 22.0066 37.5575C22.8864 37.1295 25.4188 36.7252 25.609 36.4518C25.3712 35.7028 23.6711 36.214 22.9815 36.1902L22.8507 35.9524C22.6605 35.5482 22.2919 34.0621 22.3038 33.6698L23.6235 33.6935C23.5284 32.9683 23.1242 32.7781 23.1242 32.1836L25.3236 32.2787C25.2285 31.8864 25.3355 32.0766 25.0145 31.8032C24.6103 31.4584 23.9445 31.1968 23.8732 30.6262C25.609 30.0555 26.2629 30.8996 27.7015 30.9234L27.4518 29.7107C28.5575 29.8415 28.8666 30.5073 31.4346 30.1268C32.4333 29.9723 34.8943 29.0092 35.9049 28.5812C36.0713 28.5099 36.2021 28.4624 36.4042 28.3791C36.7252 28.2365 36.7015 28.3078 36.856 28.0225C36.1664 28.0225 35.5958 28.1295 35.0132 28.2959C32.9564 28.8904 33.5033 28.0106 31.4584 28.4148C31.0066 28.498 29.8653 28.6407 29.4373 28.5931C29.5443 27.642 31.1136 27.3329 31.8983 26.9881C31.8983 26.6909 31.3871 25.5733 31.1017 25.5733L29.782 25.9062C29.9009 26.3937 30.0317 26.1797 30.1149 26.7266C29.2232 27.0832 26.8098 26.8454 26.2272 26.1083C26.3461 25.6328 27.2972 25.0978 27.2378 24.7054C26.9643 24.2417 26.2629 23.9921 26.1321 23.6948C26.8336 23.3025 29.5443 24.1942 30.3646 24.1704L30.0912 22.4346L33.4914 22.4822C32.4095 21.4003 32.5165 22.6011 32.5641 19.926C33.2655 19.9379 34.6328 20.2232 35.0845 20.1162C35.4412 20.033 35.7028 19.8666 36.2259 19.8309C37.6882 19.712 37.1176 20.461 38.2589 19.1889C38.5205 18.9036 38.9604 18.7609 39.0793 18.5469C38.3421 18.4875 37.7358 18.5112 37.0819 18.3567C36.5469 18.2259 35.8573 18 35.5839 17.572C35.7028 17.4412 35.5839 17.5244 35.7741 17.4174C36.2378 17.1321 38.4135 16.7041 38.9841 16.5733C39.8402 16.395 39.5667 16.6446 40.1493 16.8943C40.4822 16.7517 40.7675 16.4663 40.827 16.0621C40.3038 15.5865 38.6394 15.5152 39.1744 14.6592C39.6024 14.2074 42.9432 14.7781 43.5614 14.8256C44.0845 14.8613 44.6433 14.8018 45.1664 14.8494C45.7371 14.8851 50.79 15.0277 50.7305 15.6579C50.7067 15.8481 50.2431 15.8956 50.0647 16.0383C49.8388 16.1929 49.9815 16.0621 49.8388 16.2642C49.8626 16.2761 49.9102 16.2642 49.9221 16.2999C49.9696 16.4069 51.7173 16.4544 51.9313 16.5258C51.9194 17.1083 51.2536 17.6077 51.2536 18.1783C51.5509 18.3686 52.502 18.8322 52.9775 18.856C52.9775 17.9168 52.5852 17.5482 52.5258 16.5971C52.8705 16.4901 53.1678 16.4188 53.5007 16.2642C54.4518 15.8362 54.8203 16.0264 54.1427 15.0277C53.9524 14.7543 53.7503 14.4214 53.7384 14.1004C54.7847 14.0885 56.0211 14.6235 57.1149 14.7662C57.5192 14.8137 60.8838 15.0753 60.8838 15.0872C61.0621 15.2774 60.9075 14.9802 60.9908 15.2893C61.2999 16.6209 60.6935 16.3355 63.2378 16.2048C64.3435 16.1453 64.0819 16.6209 64.8428 16.9419C65.1995 16.7517 65.4491 16.4188 65.7464 16.1215L68.6948 17.6314C68.9683 17.7979 69.6222 18.4518 69.8719 18.7609C70.2642 19.2721 70.0264 20.1638 70.0859 20.8534C71.3937 20.8771 72.8679 19.7477 74.4729 20.2946C74.5443 21.317 73.284 22.5416 73.2127 23.148L75.4122 22.9221C75.1982 23.362 74.6631 23.576 74.5324 24.0515C74.996 24.2299 75.6262 24.432 76.0898 24.6103C76.4108 24.7411 77.4333 24.967 77.5641 25.2999C77.0528 25.5495 75.1744 25.9181 75.0436 26.3104C75.7332 26.5244 76.4941 26.4293 77.3025 26.786C77.9802 27.0832 78.5509 27.6182 78.5271 28.4505C77.2906 29.1281 76.8388 28.2721 74.675 28.3316L74.8058 27.4161C73.4623 27.7133 74.1519 28.5099 72.749 26.5244C72.4518 26.1083 72.1189 25.4544 71.6552 25.288C71.7266 26.0608 71.9643 27.0357 71.9643 27.8203C71.9762 28.3197 71.1083 29.5443 70.7635 29.5324C70.3712 29.5205 69.3963 28.4742 69.2061 28.0462C69.0396 27.6658 69.2061 27.5945 68.8613 27.4756L68.7186 28.5694C68.6473 28.8071 68.3382 28.7477 68.0647 28.7596C67.7794 28.7834 67.4703 28.7715 67.1849 28.7834C66.9828 28.4861 66.7094 28.2721 66.5429 27.8917C65.996 27.8203 65.2233 27.8679 64.8547 28.1295C64.2959 28.5218 64.2602 28.7596 63.642 28.9855C63.1902 28.7596 62.0727 27.2259 61.7279 27.2497C61.5614 27.3329 60.6341 28.0225 60.5746 28.1176C60.6103 28.391 61.2048 29.1757 61.5258 29.1757C62.0608 29.1876 62.358 28.498 63.107 28.9617C63.3329 29.0925 63.3805 29.2827 63.6896 29.2351C63.9987 29.1995 64.1057 29.0687 64.6407 29.0449C65.4373 29.0092 65.9247 29.1519 66.5073 29.3659C66.4597 30.0317 66.1982 30.0198 66.1506 30.6143C67.1493 30.531 68.2787 30.0555 69.4082 30.3646L69.4201 31.7794C71.7741 31.7913 72.5588 30.4359 73.2721 30.3052C73.6526 30.6262 74.0687 31.4108 74.2827 31.8745C75.9234 32.041 74.9723 31.1493 78.3369 32.4808C78.7411 32.6473 79.2404 32.7424 79.5495 33.0396C79.4544 33.4082 79.4425 33.4439 79.1929 33.6816C78.8481 33.5509 78.8956 33.4914 78.646 33.2893C78.4439 33.111 78.3369 33.0634 78.0872 33.1347C77.6948 33.2417 77.2074 33.539 76.8507 33.6935L77.1598 33.8956C77.1717 33.8956 77.5046 34.0026 77.5284 34.0026C77.6116 34.7041 77.255 35.1797 77.2668 35.8573C77.2906 36.5469 77.1836 35.3937 77.2906 36.0238C77.3738 36.4637 78.8956 36.5707 80.0013 37.0581C80.4769 37.2602 80.3699 37.2246 80.6433 37.6407C81.2378 38.5561 82.2602 39.531 81.4993 41.0647C80.5482 41.0172 80.4174 39.7569 79.502 39.5548C79.5733 40.7794 79.8824 41.8256 79.8587 43.2285C78.6816 43.2761 77.4095 43.1453 76.4584 42.7768C76.4941 42.4082 76.6367 42.5509 76.9458 42.2299C76.9934 42.1942 77.148 42.0159 77.1836 41.9802C77.576 41.5284 77.4571 41.1242 76.9934 40.6724C76.6962 40.3871 74.2589 39.745 73.9141 39.7094L74.1876 41.4452C72.5469 42.4201 72.8322 43.1929 70.4782 42.8838C69.4676 42.753 68.2312 42.5746 67.2682 42.1466C66.9591 42.004 66.745 41.8494 66.4003 41.8375C66.1268 43.8349 66.9353 42.3844 70.1572 43.9894C70.5258 44.1797 70.6684 44.1321 70.7279 44.5839C70.9538 46.1889 69.0159 45.0119 68.5522 44.7147L68.3501 45.321C67.9577 45.321 67.5892 45.214 67.2206 45.3567C67.1968 45.3567 67.173 45.3805 67.1493 45.3923C67.6486 45.8441 68.683 45.8441 69.5628 45.8085C70.5139 45.7609 71.4531 45.5469 72.2734 45.963L72.3567 45.7847C72.642 45.1189 72.8441 45.321 73.605 45.3805C75.2457 45.535 77.1361 45.5231 78.3725 46.5931C78.2893 47.2827 77.4452 47.5918 77.2431 48.21C77.897 48.638 79.3712 48.317 79.9775 46.9974C81.6539 46.9974 83.9604 46.6645 84.4003 48.21C84.1982 48.5192 83.4967 48.9472 83.461 49.2563L85.3752 49.1612C85.3038 49.4584 84.3884 50.7424 84.0198 50.7305C83.461 50.7067 81.6896 48.3527 79.0264 49.0066C79.0145 49.5178 79.3593 49.4108 79.9062 49.6962C80.7266 50.1361 82.6882 50.5522 83.2589 51.218C83.1044 51.5746 82.9498 51.539 82.5575 51.7054C82.3554 51.7886 82.1176 51.8838 82.0938 52.1334C82.7952 52.2285 84.7094 52.7754 85.2919 53.0489C85.2801 54.0713 85.2563 54.0594 84.5192 54.428C84.1149 54.6301 83.6869 55.284 83.7107 55.8428C84.0317 56.033 84.6618 56.0925 84.7807 56.4373C84.4003 56.5799 83.8296 56.4491 83.4016 56.4848C82.0462 56.568 83.2351 58.3038 82.1413 58.6843C81.7609 58.8151 81.4399 58.9221 81.0951 59.041C80.6196 59.2074 80.7266 59.3857 80.1678 59.3857C79.6209 58.4941 80.0964 57.7213 78.4914 57.9353C78.1585 58.4465 78.2536 59.148 77.9564 59.7543C77.6116 60.4557 76.9221 60.218 76.4108 59.8375C75.531 59.1717 75.7213 59.7781 75.3052 58.6248C75.1268 58.1136 74.6275 57.6856 74.033 57.6975C73.9974 58.4227 74.6988 58.1968 74.2708 59.2312C74.0211 59.8256 73.819 60.1704 73.5812 60.7649C73.3791 61.2999 72.7609 61.4663 72.0713 61.4901C70.9181 61.5258 71.2985 60.9194 70.9538 60.3725C70.7754 60.1823 70.2642 60.1942 70.0264 60.0634C70.1334 59.3501 70.6209 59.6116 70.7754 58.934C69.539 58.4465 69.0277 58.7913 67.7794 58.6367L68.3382 56.247L69.1823 56.3778C68.8375 54.5112 67.5654 56.4491 66.6618 56.354C66.1744 56.2946 66.2219 55.9141 65.5799 56.0687C65.0568 56.1876 65.1876 56.4016 64.3791 56.4016C64.2127 56.1757 63.5588 55.5575 63.3329 55.3554C62.0845 54.2497 60.0753 56.5205 59.9207 57.9472C60.9313 57.6262 61.4782 56.4373 62.1321 56.033C63.0476 56.1162 64.3672 57.4478 64.5931 58.3514C64.5812 58.5773 64.3197 58.7437 64.177 58.8864C63.9987 59.0647 63.8679 59.1955 63.6896 59.3501C63.749 60.1466 64.3435 60.3369 64.284 61.0145C63.5112 61.0264 62.7979 60.5746 62.3342 60.1466C61.6328 59.5165 60.8481 60.1823 59.9207 60.0753C59.3738 59.2312 59.0885 59.041 57.7688 59.1123C56.1638 61.8349 55.3791 60.5984 55.3078 64.8785C55.284 66.7807 55.4029 70.9894 56.0211 72.3923C56.6156 72.3923 57.0911 72.321 57.6262 72.4993C58.3752 72.7609 58.3395 72.4756 58.9221 72.2497C59.1598 72.5469 59.2787 73.0819 59.4214 73.4505C59.7067 73.4148 60.2061 73.07 60.6816 72.9511C61.9538 72.6063 61.2048 72.642 61.8349 72.2734L62.1083 72.749C62.1915 73.0225 62.1915 73.1057 62.2867 73.3672L63.9868 73.1532C63.9868 73.5218 63.9155 73.6645 64.0343 73.9022C64.7358 73.5694 64.391 72.9273 65.5918 72.7609C65.9485 72.7133 66.5905 72.5707 66.8639 72.5707C67.4227 72.5469 67.4227 72.7371 68.0291 72.8441C69.432 73.07 68.5997 73.7596 69.6816 73.9379C70.609 74.0925 70.8705 74.6275 71.4769 74.2233C71.7503 74.0568 71.3937 74.2114 71.7622 74.0449C72.7847 74.4848 72.107 74.6156 73.6764 74.5918C75.0555 74.568 74.8534 74.7464 75.8877 74.9128C76.1255 74.5086 75.8164 74.675 76.1849 74.4135C76.7199 74.675 76.6962 75.1268 77.3857 75.1982C78.218 75.2933 78.6697 75.6737 78.9908 75.6737C79.2048 75.2457 79.1929 75.1506 79.6565 75.0436L79.8111 75.8045C80.3342 75.6975 80.5007 75.0436 81.107 75.0436L81.3923 76.3514C81.9392 76.4703 81.8917 76.2682 82.3078 76.3038C82.712 76.3276 82.6764 76.5178 83.1281 76.6367C84.1506 76.8864 84.317 76.3514 84.9353 76.2206C85.1136 76.6367 85.1968 77.041 85.3276 77.5284C85.934 77.469 86.3263 76.9102 86.9089 76.8507L86.8851 78.3725C87.4082 78.111 87.3844 77.3501 87.7292 77.2787C88.1215 77.1955 90.2972 78.5746 90.856 79.0145L91.3197 79.3712C91.5456 79.5733 91.4742 79.5852 91.7477 79.7279C92.1995 79.395 94.4465 75.7332 94.8983 74.8771C95.8256 73.07 96.6579 71.2867 97.4663 69.3131C98.9881 65.5443 100.058 60.0753 100.403 56.1162C100.867 50.9207 100.225 45.8917 99.2497 41.3738C98.786 39.2576 98.0132 37.1651 97.3236 35.1559C96.9789 34.1334 96.5628 33.4439 96.0991 32.3857C95.9089 31.9458 95.6354 31.5892 95.4214 31.0898C94.6248 29.2351 93.4122 27.6182 92.4016 25.93C91.4029 24.2536 89.1915 21.852 87.9075 20.3184C85.4584 17.3818 81.1308 14.1717 77.897 12.1506L73.9974 10.0343C70.0502 8.09643 65.9841 6.97886 61.6684 6.09908C61.1215 5.98019 60.4795 5.93263 59.9445 5.82563C57.8996 5.40951 55.605 5.44518 53.5007 5.44518C51.5152 5.44518 50.0053 5.65918 48.1863 5.80185C46.5218 5.94452 42.4676 6.72919 40.9458 7.32365C40.3038 7.57332 39.4122 7.73976 38.7345 8.01321L34.5614 9.66579C33.8719 9.90357 33.325 10.2959 32.6116 10.6288C32.2668 10.7952 31.9815 10.926 31.6605 11.1044L28.9141 12.7569C25.9419 14.7543 23.3025 16.7754 20.8415 19.2483C18.3686 21.745 16.3118 24.3606 14.4095 27.3804C14.0528 27.963 13.7081 28.6288 13.3395 29.2114C12.638 30.3052 11.8653 31.7794 11.354 33.0277C11.0449 33.7886 10.7715 34.3593 10.4861 35.0845C9.98679 36.3091 9.321 38.1044 9.01189 39.4122C8.90489 39.8758 8.85733 40.1493 8.73844 40.5773C8.22721 42.4795 7.71598 44.5482 7.54954 46.7001C7.39498 48.6499 7.2642 50.2668 7.2642 52.3236Z"
            style={{
              fill: props.color,
            }}
          />
        </g>
      </svg>
      <span
        style={{
          color: props.color,
        }}
        className="ml-1 text-3xl  font-bold"
      >
        Greeeth
      </span>
    </>
  );
}

export default SvgComponent;
