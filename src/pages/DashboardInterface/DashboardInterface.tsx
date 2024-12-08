import Dashboardheader from "@/components/ui/Dashboardheader";
import DashboardFirstLook from "@/DashboardFirstLook/DashboardFirstLook";
import { Outlet, useLocation } from "react-router-dom";

const DashboardInterface = () => {
    const location = useLocation();
    let locationPath = location.pathname;

    // Normalize the path for easier comparison
    if (locationPath === "/dashboard/") {
        locationPath = "/dashboard";
    }

    return (
        <div className="flex flex-col w-screen overflow-auto overflow-x-hidden">
            <Dashboardheader />
            <div className="m-5">
                {/* Explicitly check both paths */}
                {
                    locationPath === "/dashboard" || locationPath === "/dashboard/" 
                    ? <DashboardFirstLook /> 
                    : <Outlet />
                }
            </div>
        </div>
    );
};

export default DashboardInterface;