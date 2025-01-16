import { Flex, Typography } from "antd";
import Image from "next/image";
import React from "react";

const LoginHeader = () => {
  return (
    <div className="flex gap-2 px-4 w-[768px] flex-col">
      <div className="flex justify-center items-center gap-2">
        <Image
          src={"/buildings-2.png"}
          alt={"IOT Logo"}
          width={48}
          height={48}
        />
        <h2 className="text-2xl sm:text-4xl font-bold">IOT Automation</h2>
      </div>
      <p className="text-base opacity-75 text-center hidden sm:block px-16">
        Transform your building’s energy efficiency and automation with
        cutting-edge IoT solutions
      </p>
    </div>
  );
};

export default LoginHeader;
