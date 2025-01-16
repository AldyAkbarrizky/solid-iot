"use client";
import React, { useState, useEffect } from "react";
import { Divider, Menu } from "antd";
import type { MenuProps } from "antd";
import { menuItems } from "@/utils/menuItem";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";

const findKeyFromPath = (
  path: string
): { key: string; parentKey: string | null } => {
  const segments = path.slice(1).split("/");
  const pathToKey: { [key: string]: { key: string; parentKey: string } } = {
    dashboard: { key: "1", parentKey: "sub1" },
    "dashboard/hvac": { key: "2", parentKey: "sub1" },
    "dashboard/energi": { key: "5", parentKey: "sub1" },
    "dashboard/alarm": { key: "7", parentKey: "sub1" },
  };

  const fullPath = segments.join("/");
  return pathToKey[fullPath] || { key: "1", parentKey: "sub1" };
};

const Sidebar = () => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [current, setCurrent] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("selectedMenuKey") ||
        findKeyFromPath(pathname || "").key
      );
    }
    return findKeyFromPath(pathname || "").key;
  });

  useEffect(() => {
    const { key, parentKey } = findKeyFromPath(pathname);
    setCurrent(key);
    if (parentKey) setOpenKeys([parentKey]);
    localStorage.setItem("selectedMenuKey", key);
  }, [pathname]);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    localStorage.setItem("selectedMenuKey", e.key);
  };

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    setOpenKeys(keys);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={`${
        isCollapsed ? "w-16" : "w-64"
      } bg-white shadow-md flex flex-col transition-all duration-300 relative`}
    >
      {!isCollapsed && (
        <nav className="flex-grow">
          <Menu
            onClick={onClick}
            onOpenChange={onOpenChange}
            style={{ borderInlineEnd: 0 }}
            openKeys={openKeys}
            selectedKeys={[current]}
            mode="inline"
            items={menuItems}
          />
        </nav>
      )}

      <div className="absolute bottom-6 left-0 w-full">
        <Divider className="m-0 w-full" />
        <div className="flex justify-center items-center py-4">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:bg-gray-200 transition"
          >
            {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
