import Image from "next/image";
import {
  SearchOutlined,
  QuestionCircleOutlined,
  BellOutlined,
} from "@ant-design/icons";
import React from "react";
import { Avatar } from "antd";

const Header = () => {
  return (
    <header className="w-full h-12 bg-[#001529] text-white flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <Image
          src={"/buildings-2.png"}
          alt={"IOT Logo"}
          width={32}
          height={32}
        />
        <h1 className="text-lg font-bold">IOT Automation</h1>
      </div>

      <div className="flex items-center gap-6">
        <SearchOutlined classID="text-white cursor-pointer" />
        <QuestionCircleOutlined className="text-white cursor-pointer" />
        <BellOutlined className="text-white cursor-pointer" />

        <div className="flex items-center gap-2">
          <Avatar src="/Setting.png" className="w-8 h-8" />
          <span className="text-white font-medium">Aldy Akbarrizky</span>
        </div>
        <span className="text-white ml-2">EN</span>
      </div>
    </header>
  );
};

export default Header;
