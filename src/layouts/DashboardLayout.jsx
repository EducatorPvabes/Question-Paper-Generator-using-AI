
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      {/* Navbar */}

      {/* Sidebar */}

      <main>
        <Outlet />
      </main>

      {/* Footer */}
    </div>
  );
};

export default DashboardLayout;