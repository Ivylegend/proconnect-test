import React from "react";
import TableLayout from "../containers/TableLayout";

const StudentDashboard = () => {
  return (
    <div className="margleft dashboard">
      <p className="doc-header mb-8">Recent Application</p>

      <TableLayout />
    </div>
  );
};

export default StudentDashboard;
