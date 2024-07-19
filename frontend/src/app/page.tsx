import ECommerce from "@/components/Overview";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { ConfigProvider } from "antd";
import en_US from "antd/es/locale/en_US";

export const metadata: Metadata = {
  title: "Chronic Disease Management System",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Home() {
  return (
    <ConfigProvider
      locale={en_US}
      theme={{
        components: {
          Button: {
            // blue hash color code
            colorPrimary: "#1890ff!important",
          },
        },
      }}
    >
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </ConfigProvider>
  );
}
