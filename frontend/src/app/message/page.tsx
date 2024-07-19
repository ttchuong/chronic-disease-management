import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import MessageComponent from "@/components/Message/index";
import React from "react";

function Message() {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Message" />
      <MessageComponent />
    </DefaultLayout>
  );
}

export default Message;
