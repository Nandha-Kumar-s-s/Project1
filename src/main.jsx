import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import PivotTable from "./PivotTable";
import ManageColumn from "./ManageColumn";
import { ReportProvider } from "./ReportContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReportProvider>
    <div>
      <ManageColumn />
      <PivotTable />
    </div>
  </ReportProvider>
  </React.StrictMode>,
)
