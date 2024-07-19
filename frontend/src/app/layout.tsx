"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { use, useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import { ConfigProvider } from "antd";
import en_US from "antd/es/locale/en_US";
import { Provider, useSelector } from "react-redux";
import { RootState, store } from "@/store";
import { useRouter } from "next/router";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {loading ? (
            <Loader />
          ) : (
            <Provider store={store}>
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
                {children}
              </ConfigProvider>
            </Provider>
          )}
        </div>
      </body>
    </html>
  );
}
