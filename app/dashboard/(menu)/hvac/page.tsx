"use client";
import React, { useState } from "react";
import { Group } from "antd/lib/radio";
import { Button, Card, Switch } from "antd";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import AirConditionerSVG from "@/components/AirConditionerSVG";

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const options = [
  { label: "Room 1", value: "Room1" },
  { label: "Room 2", value: "Room2" },
  { label: "Room 3", value: "Room3" },
  { label: "Room 4", value: "Room4" },
];

const HVAC = () => {
  const [hotCold, setHotCold] = useState(false);
  const [count, setCount] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [temperature, setTemperature] = useState(0);

  const switchHotCold = () => {
    setHotCold(!hotCold);
  };

  const handleIncrement = (
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    setter((prevValue) => prevValue + 1);
  };

  const handleDecrement = (
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    setter((prevValue) => prevValue - 1);
  };

  return (
    <div className="grid grid-cols-4 gap-6 p-4">
      <div className="flex flex-col  gap-3 col-span-2 row-span-2">
        <div className="flex flex-col items-stretch gap-4">
          <Group
            block
            options={options}
            defaultValue="Room1"
            optionType="button"
          />
        </div>
        <div className="flex-1">
          <Card
            className="rounded-none"
            title="Humidity Setpoint"
            extra={<span>...</span>}
          >
            <div className="grid grid-cols-3 grid-rows-3 gap-4 h-full bg-[#F3F7FA]">
              <div className="bg-[#F3F7FA] col-span-2 row-span-2 flex items-center justify-center text-white font-bold text-xl">
                <AirConditionerSVG />
                <div className="bg-blue-700 font-normal rounded-full p-3 absolute top-28 left-32">
                  On
                </div>
                <div className="absolute top-[150px] flex flex-col text-black justify-center items-center">
                  <span className="font-normal">Temperature</span>
                  <span className="font-bold">35.0 C</span>
                </div>
              </div>
              <div className="bg-[#F3F7FA] flex flex-col items-center justify-center  font-bold text-lg text-black">
                <div className="flex items-center">
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 32 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.717 19.1127L30.707 19.0859C30.6684 18.8276 27.3961 11.4995 17.2217 0.602137C17.1865 0.551818 17.1496 0.506531 17.1093 0.461248C16.8442 0.169399 16.4699 0.00167718 16.0756 0.00167718V0C15.7031 0.00335435 15.3457 0.154312 15.0855 0.420999C11.1622 4.35425 7.66181 8.68665 4.64136 13.3476C2.44307 16.7693 1.49329 18.9666 1.45299 19.0606L1.43286 19.1109V19.1126C0.803594 20.753 0.494805 22.4973 0.519979 24.2553C0.573677 28.264 2.35244 32.1199 5.34942 35.181C8.31965 38.2001 12.0871 40 16.0557 40H16.1849C24.2581 39.8692 31.4301 32.3346 31.6316 24.3008L31.6299 24.3025C31.6601 22.5296 31.3514 20.7682 30.717 19.1127ZM27.3122 27.8966C25.9697 31.3619 23.1606 34.2786 19.8043 35.7028V35.7012C19.5156 35.8303 19.1884 35.837 18.8947 35.7213C18.6027 35.6055 18.3678 35.3774 18.2453 35.0873C18.1211 34.7988 18.1211 34.4717 18.2403 34.1798C18.3611 33.8897 18.5944 33.6582 18.8847 33.5408C21.6703 32.36 24.0028 29.9346 25.1206 27.0463H25.1223C25.3639 26.4526 26.0368 26.1607 26.6359 26.3939C27.235 26.6254 27.5354 27.2945 27.3122 27.8966Z"
                      fill="#40A9FF"
                    />
                  </svg>
                  <span className="ml-1">Humidity</span>
                </div>
                <span className="font-normal">70%</span>
              </div>
              <div className="bg-[#F3F7FA] flex flex-col items-center justify-center text-black font-bold text-lg">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                  >
                    <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                      <path
                        d="M 87.217 36.719 c 0 -11.915 -9.693 -21.609 -21.608 -21.609 c -2.623 0 -5.139 0.471 -7.467 1.331 C 51.635 7.165 45.798 0.405 45.738 0.337 c -0.38 -0.439 -1.132 -0.439 -1.512 0 c -1.263 1.457 -30.934 35.951 -30.934 57.964 c 0 17.484 14.223 31.707 31.706 31.707 s 31.706 -14.223 31.706 -31.707 c 0 -0.885 -0.063 -1.858 -0.184 -2.942 C 82.914 51.602 87.217 44.655 87.217 36.719 z M 74.614 56.365 c 0.061 0.699 0.091 1.339 0.091 1.936 c 0 16.38 -13.326 29.707 -29.706 29.707 S 15.293 74.681 15.293 58.301 c 0 -19.365 24.989 -50.144 29.69 -55.762 c 1.746 2.08 6.287 7.617 11.276 14.7 c -0.402 0.194 -0.795 0.403 -1.182 0.621 c -0.144 0.08 -0.285 0.163 -0.426 0.245 c -0.218 0.129 -0.433 0.263 -0.646 0.399 c -3.728 2.366 -6.597 5.782 -8.287 9.772 c -0.023 0.053 -0.044 0.108 -0.066 0.161 c -0.198 0.477 -0.378 0.962 -0.541 1.454 c -0.055 0.164 -0.112 0.328 -0.163 0.494 c -0.064 0.211 -0.123 0.424 -0.181 0.638 c -0.066 0.242 -0.127 0.486 -0.185 0.731 c -0.04 0.173 -0.084 0.344 -0.12 0.518 c -0.087 0.413 -0.162 0.829 -0.224 1.25 c -0.018 0.119 -0.03 0.24 -0.046 0.36 c -0.046 0.347 -0.083 0.697 -0.112 1.049 c -0.011 0.133 -0.022 0.266 -0.03 0.4 c -0.029 0.459 -0.049 0.921 -0.049 1.388 c 0 11.915 9.694 21.609 21.609 21.609 c 0.385 0 0.768 -0.011 1.148 -0.031 c 0.063 -0.003 0.126 -0.011 0.19 -0.014 c 0.321 -0.02 0.641 -0.044 0.958 -0.078 c 0.065 -0.007 0.13 -0.017 0.195 -0.025 c 0.315 -0.036 0.629 -0.077 0.94 -0.127 c 0.073 -0.012 0.146 -0.027 0.218 -0.039 c 0.299 -0.051 0.597 -0.106 0.891 -0.17 c 0.094 -0.02 0.186 -0.043 0.28 -0.065 c 0.268 -0.061 0.534 -0.125 0.798 -0.197 c 0.122 -0.033 0.244 -0.069 0.365 -0.104 c 0.226 -0.065 0.452 -0.133 0.675 -0.205 c 0.156 -0.05 0.31 -0.104 0.464 -0.157 c 0.179 -0.063 0.357 -0.127 0.534 -0.194 c 0.189 -0.072 0.378 -0.146 0.565 -0.223 c 0.131 -0.054 0.261 -0.11 0.391 -0.167 C 74.352 56.476 74.485 56.425 74.614 56.365 z"
                        fill="black"
                      />
                      <path
                        d="M 65.608 24.717 c 0.984 0 1.962 0.119 2.909 0.355 c 0.534 0.135 1.078 -0.193 1.212 -0.729 c 0.133 -0.536 -0.193 -1.078 -0.73 -1.212 c -1.104 -0.275 -2.245 -0.414 -3.391 -0.414 c -7.721 0 -14.003 6.281 -14.003 14.003 c 0 3.547 1.34 6.937 3.774 9.545 c 0.197 0.211 0.464 0.317 0.732 0.317 c 0.244 0 0.489 -0.089 0.683 -0.269 c 0.403 -0.378 0.425 -1.01 0.049 -1.414 c -2.087 -2.236 -3.237 -5.141 -3.237 -8.18 C 53.606 30.101 58.99 24.717 65.608 24.717 z"
                        fill="black"
                      />
                      <path
                        d="M 74.094 26.818 l -5.82 5.685 c -0.773 -0.491 -1.684 -0.785 -2.666 -0.785 c -2.757 0 -5.001 2.244 -5.001 5.001 s 2.244 5.001 5.001 5.001 c 2.757 0 5.001 -2.244 5.001 -5.001 c 0 -1.052 -0.33 -2.026 -0.887 -2.833 l 5.771 -5.637 c 0.395 -0.386 0.402 -1.019 0.017 -1.414 C 75.124 26.439 74.492 26.433 74.094 26.818 z M 65.608 39.72 c -1.655 0 -3.001 -1.346 -3.001 -3.001 s 1.346 -3.001 3.001 -3.001 c 1.655 0 3.001 1.346 3.001 3.001 S 67.263 39.72 65.608 39.72 z"
                        fill="black"
                      />
                    </g>
                  </svg>
                  <span className="ml-1">Pressure</span>
                </div>
                <span className="font-normal">1004 mbar</span>
              </div>
              <div className="bg-[#E6ECFA] flex flex-col gap-4 items-center justify-center text-black font-bold text-lg">
                <span>AC Operation</span>
                <div className="flex items-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 20C20 17.2424 20.9776 14.8867 22.9327 12.9327C24.8867 10.9776 27.2424 10 30 10C32.7576 10 35.1139 10.9776 37.0691 12.9327C39.023 14.8867 40 17.2424 40 20H20ZM10 30C7.24242 30 4.88667 29.0224 2.93273 27.0673C0.977576 25.1133 0 22.7576 0 20H20C20 22.7576 19.0224 25.1133 17.0673 27.0673C15.1133 29.0224 12.7576 30 10 30ZM20 20C17.2424 20 14.8867 19.0224 12.9327 17.0673C10.9776 15.1133 10 12.7576 10 10C10 7.24242 10.9776 4.88606 12.9327 2.93091C14.8867 0.97697 17.2424 0 20 0V20ZM20 40V20C22.7576 20 25.1133 20.9776 27.0673 22.9327C29.0224 24.8867 30 27.2424 30 30C30 32.7576 29.0224 35.1133 27.0673 37.0673C25.1133 39.0224 22.7576 40 20 40Z"
                      fill="#40A9FF"
                    />
                  </svg>
                  <span className="ml-4 font-normal">Heat</span>
                </div>
              </div>
              <div className="bg-[#E6ECFA] flex flex-col gap-4 items-center justify-center text-black font-bold text-lg">
                <span>Ionization</span>
                <div className="flex items-center">
                  <svg
                    width="32"
                    height="40"
                    viewBox="0 0 32 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.717 19.1127L30.707 19.0859C30.6684 18.8276 27.3961 11.4995 17.2217 0.602137C17.1865 0.551818 17.1496 0.506531 17.1093 0.461248C16.8442 0.169399 16.4699 0.00167718 16.0756 0.00167718V0C15.7031 0.00335435 15.3457 0.154312 15.0855 0.420999C11.1622 4.35425 7.66181 8.68665 4.64136 13.3476C2.44307 16.7693 1.49329 18.9666 1.45299 19.0606L1.43286 19.1109V19.1126C0.803594 20.753 0.494805 22.4973 0.519979 24.2553C0.573677 28.264 2.35244 32.1199 5.34942 35.181C8.31965 38.2001 12.0871 40 16.0557 40H16.1849C24.2581 39.8692 31.4301 32.3346 31.6316 24.3008L31.6299 24.3025C31.6601 22.5296 31.3514 20.7682 30.717 19.1127ZM27.3122 27.8966C25.9697 31.3619 23.1606 34.2786 19.8043 35.7028V35.7012C19.5156 35.8303 19.1884 35.837 18.8947 35.7213C18.6027 35.6055 18.3678 35.3774 18.2453 35.0873C18.1211 34.7988 18.1211 34.4717 18.2403 34.1798C18.3611 33.8897 18.5944 33.6582 18.8847 33.5408C21.6703 32.36 24.0028 29.9346 25.1206 27.0463H25.1223C25.3639 26.4526 26.0368 26.1607 26.6359 26.3939C27.235 26.6254 27.5354 27.2945 27.3122 27.8966Z"
                      fill="#40A9FF"
                    />
                  </svg>
                  <span className="ml-4 font-normal">On</span>
                </div>
              </div>
              <div className="bg-[#E6ECFA] flex flex-col gap-4 items-center justify-center text-black font-bold text-lg">
                <span>AC Mode</span>
                <div className="flex items-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 20C20 17.2424 20.9776 14.8867 22.9327 12.9327C24.8867 10.9776 27.2424 10 30 10C32.7576 10 35.1139 10.9776 37.0691 12.9327C39.023 14.8867 40 17.2424 40 20H20ZM10 30C7.24242 30 4.88667 29.0224 2.93273 27.0673C0.977576 25.1133 0 22.7576 0 20H20C20 22.7576 19.0224 25.1133 17.0673 27.0673C15.1133 29.0224 12.7576 30 10 30ZM20 20C17.2424 20 14.8867 19.0224 12.9327 17.0673C10.9776 15.1133 10 12.7576 10 10C10 7.24242 10.9776 4.88606 12.9327 2.93091C14.8867 0.97697 17.2424 0 20 0V20ZM20 40V20C22.7576 20 25.1133 20.9776 27.0673 22.9327C29.0224 24.8867 30 27.2424 30 30C30 32.7576 29.0224 35.1133 27.0673 37.0673C25.1133 39.0224 22.7576 40 20 40Z"
                      fill="#40A9FF"
                    />
                  </svg>
                  <span className="ml-4 font-normal">1</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="h-[250px]">
        <Card
          className="h-full rounded-none"
          title="Humidity Setpoint"
          extra={<span>...</span>}
        >
          <div className="flex justify-center items-center h-full mt-7">
            <svg
              width="44"
              height="40"
              viewBox="0 0 44 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.717 19.1127L30.707 19.0859C30.6684 18.8276 27.3961 11.4995 17.2217 0.602137C17.1865 0.551818 17.1496 0.506531 17.1093 0.461248C16.8442 0.169399 16.4699 0.00167718 16.0756 0.00167718V0C15.7031 0.00335435 15.3457 0.154312 15.0855 0.420999C11.1622 4.35425 7.66181 8.68665 4.64136 13.3476C2.44307 16.7693 1.49329 18.9666 1.45299 19.0606L1.43286 19.1109V19.1126C0.803594 20.753 0.494805 22.4973 0.519979 24.2553C0.573677 28.264 2.35244 32.1199 5.34942 35.181C8.31965 38.2001 12.0871 40 16.0557 40H16.1849C24.2581 39.8692 31.4301 32.3346 31.6316 24.3008L31.6299 24.3025C31.6601 22.5296 31.3514 20.7682 30.717 19.1127ZM27.3122 27.8966C25.9697 31.3619 23.1606 34.2786 19.8043 35.7028V35.7012C19.5156 35.8303 19.1884 35.837 18.8947 35.7213C18.6027 35.6055 18.3678 35.3774 18.2453 35.0873C18.1211 34.7988 18.1211 34.4717 18.2403 34.1798C18.3611 33.8897 18.5944 33.6582 18.8847 33.5408C21.6703 32.36 24.0028 29.9346 25.1206 27.0463H25.1223C25.3639 26.4526 26.0368 26.1607 26.6359 26.3939C27.235 26.6254 27.5354 27.2945 27.3122 27.8966Z"
                fill="#40A9FF"
              />
              <path
                d="M42.868 13.5508C42.8664 13.5441 42.8647 13.5391 42.8613 13.5324C42.8345 13.3596 40.653 8.47379 33.8683 1.20431H33.87C33.8465 1.17244 33.8213 1.14057 33.7928 1.11206H33.7945C33.6166 0.917493 33.3665 0.806789 33.1048 0.805115C32.8564 0.805115 32.6181 0.905754 32.4452 1.08187C30.2956 3.23884 28.3356 5.57538 26.5835 8.06452C27.9058 9.82568 28.9462 11.3352 29.7349 12.5546C30.8928 14.3359 31.6547 15.6978 32.091 16.5264C32.5977 17.4892 32.8226 18.0074 32.93 18.3194L32.9317 18.3177C33.6616 20.2416 34.0174 22.2862 33.9805 24.3407L33.9821 24.3625C33.9553 25.4058 33.8294 26.4457 33.6096 27.4655C38.8149 27.1301 43.3493 22.2292 43.4803 17.0143C43.5004 15.8301 43.2926 14.6545 42.868 13.5508Z"
                fill="#40A9FF"
              />
            </svg>

            <span className="text-2xl font-bold mr-3 ml-3">{humidity}%</span>

            {/* Buttons */}
            <div className="flex flex-col">
              <Button
                type="default"
                shape="circle"
                icon={<UpOutlined />}
                className="mb-2"
                onClick={() => handleIncrement(setHumidity)}
              />
              <Button
                type="default"
                shape="circle"
                icon={<DownOutlined />}
                onClick={() => handleDecrement(setHumidity)}
              />
            </div>
          </div>
        </Card>
      </div>
      <div className="h-[250px]">
        <Card
          className="h-full rounded-none"
          title="Temperature Setpoint"
          extra={<span>...</span>}
        >
          <div className="flex justify-center items-center h-full mt-7">
            <svg
              width="23"
              height="40"
              viewBox="0 0 23 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.63839 39.8303C13.2213 40.9136 18.0543 36.6639 18.0543 31.2476C18.0543 28.4145 16.6377 25.8314 14.4712 24.2482V5.16628C14.4712 2.33316 12.2214 0 9.30493 0C6.47181 0 4.13866 2.33316 4.13866 5.16628V24.2482C1.55552 26.1647 0.0556317 29.4144 0.805575 33.0808C1.47219 36.4139 4.22198 39.1637 7.63839 39.8303ZM5.22191 25.8314L5.97185 25.2481V5.2496C5.97185 3.41641 7.47174 1.99985 9.22161 1.99985C11.0548 1.99985 12.5547 3.49974 12.5547 5.2496V25.2481L13.3046 25.8314C15.0545 27.0813 16.0544 29.1645 16.0544 31.331C16.0544 33.1642 15.3045 34.914 14.0546 36.1639C12.7213 37.4138 11.0548 38.1638 9.22161 38.1638C5.8052 38.1638 3.13873 35.7473 2.55544 32.7475C2.13881 29.9977 3.13873 27.3313 5.22191 25.8314Z"
                fill="#40A9FF"
              />
              <path
                d="M9.30517 36.1639C10.6384 36.1639 11.8883 35.664 12.8049 34.7474C13.7215 33.8308 14.2215 32.5809 14.2215 31.2476C14.2215 27.9145 11.3883 26.8313 10.6384 26.1647V12.0824H7.88861V26.1647C7.30532 26.8313 3.63893 28.1645 4.4722 32.2475C4.88884 34.414 6.80536 36.1639 9.30517 36.1639Z"
                fill="#40A9FF"
              />
              <path
                d="M21.3873 5.66626H16.6377V7.58278H21.3873C21.8873 7.58278 22.3039 7.16615 22.3039 6.66618C22.3873 6.08289 21.9706 5.66626 21.3873 5.66626Z"
                fill="#40A9FF"
              />
              <path
                d="M20.4709 11.6657C20.4709 11.1657 20.0543 10.7491 19.5543 10.7491H16.7212V12.6656H19.5543C20.0543 12.5823 20.4709 12.1656 20.4709 11.6657Z"
                fill="#40A9FF"
              />
              <path
                d="M22.3874 16.6653C22.3874 16.1654 21.9708 15.7487 21.4708 15.7487H16.7212V17.6652H21.4708C21.9708 17.6652 22.3874 17.1653 22.3874 16.6653Z"
                fill="#40A9FF"
              />
            </svg>

            <span className="text-2xl font-bold mr-3 ml-3">{temperature}</span>

            {/* Buttons */}
            <div className="flex flex-col">
              <Button
                type="default"
                shape="circle"
                icon={<UpOutlined />}
                className="mb-2"
                onClick={() => handleIncrement(setTemperature)}
              />
              <Button
                type="default"
                shape="circle"
                icon={<DownOutlined />}
                onClick={() => handleDecrement(setTemperature)}
              />
            </div>
          </div>
        </Card>
      </div>
      <div className="h-[265px]">
        <Card
          className="h-full rounded-none text-center"
          title="Air Conditioning"
        >
          <div className="flex justify-center items-center h-full mt-14">
            <span className="opacity-50 font-bold">OFF</span>
            <Switch
              defaultChecked
              onChange={onChange}
              className="font-bold mx-2.5"
            />
            <span className="font-bold">ON</span>
          </div>
        </Card>
      </div>
      <div className="h-[265px]">
        <Card className="h-full rounded-none text-center" title="Humidifier">
          <div className="flex justify-center items-center h-full mt-14">
            <span className="opacity-50 font-bold">OFF</span>
            <Switch
              defaultChecked={false}
              onChange={onChange}
              className="font-bold mx-2.5"
            />
            <span className="font-bold">ON</span>
          </div>
        </Card>
      </div>
      <div className="h-[200px]">
        <Card className="h-full rounded-none text-center" title="Air Cleaner">
          <div className="flex justify-center items-center h-full mt-8">
            <span className="opacity-50 font-bold">OFF</span>
            <Switch
              defaultChecked
              onChange={onChange}
              className="font-bold mx-2.5"
            />
            <span className="font-bold">ON</span>
          </div>
        </Card>
      </div>
      <div className="h-[200px]">
        <Card className="h-full rounded-none text-center" title="Heat/Cool">
          <div className="flex justify-center items-center h-full mt-8">
            <span className="font-bold">Heat</span>
            <Switch
              style={{ backgroundColor: hotCold ? "#1677FF" : "red" }}
              defaultChecked
              onChange={switchHotCold}
              checked={hotCold}
              className="font-bold mx-2.5"
            />
            <span className="font-bold">Cool</span>
          </div>
        </Card>
      </div>
      <div className="h-[200px]">
        <Card
          className="h-full rounded-none text-center"
          title="Air Ionization"
        >
          <div className="flex justify-center items-center h-full mt-8">
            <span className="opacity-50 font-bold">OFF</span>
            <Switch
              defaultChecked
              onChange={onChange}
              className="font-bold mx-2.5"
            />
            <span className="font-bold">ON</span>
          </div>
        </Card>
      </div>
      <div className="bg-pink-800 h-[200px]">
        <Card className="h-full rounded-none text-center" title="AC Fan Speed">
          <div className="flex justify-center items-center h-full mt-3">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 20C20 17.2424 20.9776 14.8867 22.9327 12.9327C24.8867 10.9776 27.2424 10 30 10C32.7576 10 35.1139 10.9776 37.0691 12.9327C39.023 14.8867 40 17.2424 40 20H20ZM10 30C7.24242 30 4.88667 29.0224 2.93273 27.0673C0.977576 25.1133 0 22.7576 0 20H20C20 22.7576 19.0224 25.1133 17.0673 27.0673C15.1133 29.0224 12.7576 30 10 30ZM20 20C17.2424 20 14.8867 19.0224 12.9327 17.0673C10.9776 15.1133 10 12.7576 10 10C10 7.24242 10.9776 4.88606 12.9327 2.93091C14.8867 0.97697 17.2424 0 20 0V20ZM20 40V20C22.7576 20 25.1133 20.9776 27.0673 22.9327C29.0224 24.8867 30 27.2424 30 30C30 32.7576 29.0224 35.1133 27.0673 37.0673C25.1133 39.0224 22.7576 40 20 40Z"
                fill="#40A9FF"
              />
            </svg>
            <span className="text-2xl font-bold mr-3 ml-3">{count}</span>

            {/* Buttons */}
            <div className="flex flex-col">
              <Button
                type="default"
                shape="circle"
                icon={<UpOutlined />}
                className="mb-2"
                onClick={() => handleIncrement(setCount)}
              />
              <Button
                type="default"
                shape="circle"
                icon={<DownOutlined />}
                onClick={() => handleDecrement(setCount)}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HVAC;
