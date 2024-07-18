import Appointment from "@/components/Appointment";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

function Appointments() {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Appointments" />

      <div className="flex flex-col gap-10">
        <Appointment />
      </div>
    </DefaultLayout>
  );
}

export default Appointments;
