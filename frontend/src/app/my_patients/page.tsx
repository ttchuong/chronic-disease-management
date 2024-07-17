import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import PatientTable from "@/components/Patient/PatientTable";

export const metadata: Metadata = {
    title: "Chronic Disease Management | My Patients",
    description: "Patient list",
};

const TablesPage = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName="My patients" />

            <div className="flex flex-col gap-10">
                <PatientTable />
            </div>
        </DefaultLayout>
    );
};

export default TablesPage;