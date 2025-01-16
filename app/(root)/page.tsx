import { Button, Flex, Tabs } from "antd";
import LoginHeader from "@/components/LoginHeader";
import type { TabsProps } from "antd";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";

const items: TabsProps["items"] = [
  {
    key: "sign-in",
    label: <p className="text-[14px] md:text-[16px]">Login</p>,
    children: <LoginForm />,
  },
  {
    key: "sign-up",
    label: <p className="text-[14px] md:text-[16px]">Sign Up</p>,
    children: <RegisterForm />,
  },
];

const Home = () => {
  return (
    <div className="flex min-h-screen bg-[#F0F2F5]">
      <div className="flex flex-col gap-2 justify-center items-center w-full text-sm">
        <LoginHeader />
        <Tabs
          className="w-98 sm:w-[460px] p-5"
          defaultActiveKey="sign-in"
          items={items}
        />
      </div>
    </div>
  );
};

export default Home;
