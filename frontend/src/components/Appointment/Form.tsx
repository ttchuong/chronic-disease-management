import {
  ProForm,
  ProFormDateTimePicker,
  ProFormText,
} from "@ant-design/pro-components";
import React from "react";

function Form() {
  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <div>
      <ProForm
        onFinish={handleSubmit}
        submitter={{
          searchConfig: {
            submitText: "Enviar",
            resetText: "Restablecer",
          },
        }}
        initialValues={{
          doctorName: "",
        }}
      >
        <ProFormText
          name="doctorName"
          label="Nombre del Doctor"
          placeholder="Ingrese el nombre del doctor"
          rules={[
            { required: true, message: "El nombre del doctor es obligatorio" },
          ]}
        />
        <ProFormDateTimePicker
          name="appointmentDateTime"
          label="Fecha y Hora de la Cita"
          placeholder="Seleccione la fecha y hora de la cita"
          rules={[
            {
              required: true,
              message: "La fecha y hora de la cita son obligatorias",
            },
          ]}
        />
      </ProForm>
    </div>
  );
}

export default Form;
