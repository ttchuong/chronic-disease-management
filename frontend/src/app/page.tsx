"use client";

import ECommerce from "@/components/Overview";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Provider, useSelector } from "react-redux";
import { RootState, store } from "@/store";
import { redirect } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Chronic Disease Management System",
//   description: "This is Next.js Home for TailAdmin Dashboard Template",
// };

export default function Home() {
  const authenticated = useSelector(
    (state: RootState) => state.auth.authenticated,
  );
  console.log(authenticated);
  if (!authenticated) {
    // Routing to login page
    redirect("/login");
  }
  return (
    <DefaultLayout>
      <ECommerce />
    </DefaultLayout>
  );
}
