"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import PatientTable from "@/components/Patient/PatientTable";
import {Button, ConfigProvider, Modal} from "antd";
import {ProForm, ProFormText, ProFormTextArea} from "@ant-design/pro-components";
import React from "react";
import en_US from "antd/es/locale/en_US";

const TablesPage = () => {
  const [isAddingPatient, setIsAddingPatient] = React.useState(false);
  const toggleModal = () => {
    setIsAddingPatient(!isAddingPatient);
  };

  const handleSubmit = (values: any) => {
    console.log(values);
    toggleModal();
    // TODO: Add the new appointment to the list
  };

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
      <Modal
        open={isAddingPatient}
        onCancel={toggleModal}
        onOk={toggleModal}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <ProForm
          onFinish={handleSubmit}
          submitter={{
            searchConfig: {
              submitText: "Submit",
              resetText: "Reset",
            },
          }}>
          <div className="flex justify-between">
            <ProFormText
              name="firstName"
              label="First Name"
              placeholder="First name"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}/>
            <ProFormText
              name="lastName"
              label="Last Name"
              placeholder="First name"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}/>
          </div>
          <ProFormText
            name="location"
            label="Location"
            placeholder="Location"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}/>
          <div className="flex justify-between">
            <ProFormText
              name="email"
              label="Email"
              placeholder="Email"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}/>
            <ProFormText
              name="phoneNumber"
              label="Phone Number"
              placeholder="Phone Number"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}/>
          </div>
          <ProFormTextArea
            name="reason"
            label="Reason"
            placeholder="Reason"
          />
        </ProForm>
      </Modal>

      <DefaultLayout>
        <Breadcrumb pageName="My patients" />

        <div className="flex flex-col gap-10">
          <div className="bg-white flex justify-between p-4 rounded-lg">
            <ProForm submitter={false}>
              <ProFormText
                name="date"
                placeholder="Date"/>
            </ProForm>
            <Button onClick={toggleModal}>Add Patient</Button>
          </div>
          <PatientTable />
        </div>
      </DefaultLayout>
    </ConfigProvider>

  );
};

export default TablesPage;
