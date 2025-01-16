import {
  UserOutlined,
  LogoutOutlined,
  BankOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];

export const menuItems: MenuItem[] = [
  {
    key: "sub1",
    label: "Building",
    icon: <BankOutlined />,
    children: [
      { key: "1", label: <Link href="/dashboard">Dashboard</Link> },
      { key: "2", label: <Link href="/dashboard/hvac">Sistem HVAC</Link> },
      { key: "3", label: "Penerangan" },
      { key: "4", label: "Keamanan" },
      { key: "5", label: <Link href="/dashboard/energi">Energi</Link> },
      { key: "6", label: "Pengendalian Akses" },
      { key: "7", label: <Link href="/dashboard/alarm">Alarm</Link> },
      { key: "8", label: "Lift dan Eskalator" },
    ],
  },
  {
    key: "sub2",
    label: "Energy",
    icon: <ThunderboltOutlined />,
    children: [
      { key: "9", label: "Dashboard" },
      { key: "10", label: "Energi Real-Time" },
      { key: "11", label: "Histori Penggunaan" },
      { key: "12", label: "Biaya Energi" },
      { key: "13", label: "Efisiensi" },
      { key: "14", label: "Alarm" },
    ],
  },
  { key: "15", icon: <UserOutlined />, label: "User" },
  { key: "16", icon: <LogoutOutlined />, label: "Logout" },
];
