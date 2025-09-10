import { Routes, Route, Navigate } from "react-router";
import { Login } from "@/components/Login";
import Admin from "../templates/Admin/Admin";
import User from "../templates/User/User";
import EditIncidentDetails from "../components/EditIncidentDetails";

const AppRoutes = ({
  formRef,
  formValues,
  setFormValues,
  comment,
  setComment,
  tab,
  setTab,
  archiveList,
  setArchiveList,
  role,
  rows,
        setRows
}) => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route
      path="/admin"
      element={
        <Admin
          formValues={formValues}
          setFormValues={setFormValues}
          comment={comment}
          setComment={setComment}
          tab={tab}
          setTab={setTab}
          archiveList={archiveList}
          setArchiveList={setArchiveList}
          role={role}
          rows={rows}
        setRows={setRows}
        />
      }
    />
    <Route
      path="/user"
      element={
        <User
          formRef={formRef}
          formValues={formValues}
          setFormValues={setFormValues}
          comment={comment}
          setComment={setComment}
          tab={tab}
          setTab={setTab}
          archiveList={archiveList}
          setArchiveList={setArchiveList}
          role={role}
          rows={rows}
        setRows={setRows}
        />
      }
    />
    <Route path="*" element={<Navigate to="/" />} />
    <Route path="/edit/:id" element={<EditIncidentDetails />} />
  </Routes>
);

export default AppRoutes;
