"use client";

import { Appointment } from "@/types/appointment";
import { Button, ConfigProvider, Modal } from "antd";
import React from "react";
import { AppointmentData } from "../Overview/data";
import {
  ProForm,
  ProFormDateTimePicker,
  ProFormText,
  ProTable,
} from "@ant-design/pro-components";
import en_US from "antd/es/locale/en_US";

function History() {
  const [isAddingAppointment, setIsAddingAppointment] = React.useState(false);
  const columns = [
    {
      dataIndex: "avatar",
      title: "Avatar",
      valueType: "avatar",
    },
    {
      dataIndex: "name",
      title: "Name",
      dataType: "text",
    },
    {
      dataIndex: "gender",
      title: "Gender",
    },
    {
      dataIndex: "type",
      title: "Type",
    },
    {
      dataIndex: "time",
      title: "Time",
      valueType: "dateTime",
    },
    {
      dataIndex: "status",
      title: "Status",
      dataType: "status",
    },
  ];
  const data: Appointment[] = AppointmentData;

  const toggleAddAppointment = () => {
    setIsAddingAppointment(!isAddingAppointment);
  };

  const handleSubmit = (values: any) => {
    console.log(values);
    toggleAddAppointment();
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
        open={isAddingAppointment}
        onCancel={toggleAddAppointment}
        onOk={toggleAddAppointment}
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
          }}
          initialValues={{
            doctorName: "",
          }}
        >
          <ProFormText
            name="doctorName"
            label="Patient Name"
            placeholder="Input patient name"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          />
          <ProFormDateTimePicker
            name="appointmentDateTime"
            label="Appointment Date and Time"
            placeholder="Select the date and time of the appointment"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          />
        </ProForm>
      </Modal>
      <ProTable
        columns={columns}
        dataSource={data}
        toolbar={{
          actions: [
            <Button key={"add"} onClick={toggleAddAppointment}>
              Add
            </Button>,
          ],
        }}
      />
    </ConfigProvider>
  );
}

export default History;
