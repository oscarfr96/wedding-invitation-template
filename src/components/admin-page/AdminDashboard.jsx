import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./adminDashboard.scss";

const AdminDashboard = () => {
  const [records, setRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;

  useEffect(() => {
    const fetchRecords = async () => {
      const querySnapshot = await getDocs(collection(db, "attendance"));
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setRecords(data);
    };

    fetchRecords();
  }, []);

  const handleSort = (key) => {
    const sortedRecords = [...records].sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
    setRecords(sortedRecords);
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Registros de Asistencia", 20, 10);

    const tableData = records.map((record, index) => [
      index + 1,
      record.name,
      record.email,
      record.phone,
      record.message,
      record.needBus ? "Sí" : "No",
      record.hasAllergies ? record.allergiesDetails : "N/A",
    ]);

    doc.autoTable({
      head: [["#", "Nombre", "Email", "Teléfono", "Mensaje", "Autobús", "Alergias"]],
      body: tableData,
    });

    doc.save("Registros_Asistencia.pdf");
  };

  // Paginación
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = records.slice(indexOfFirstRecord, indexOfLastRecord);

  const totalPages = Math.ceil(records.length / recordsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="admin-dashboard">
      <h2>Registros de Asistencia</h2>
      <button className="export-btn" onClick={exportToPDF}>
        Exportar a PDF
      </button>
      {records.length === 0 ? (
        <p>No hay registros disponibles</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th onClick={() => handleSort("name")}>Nombre</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Mensaje</th>
                <th onClick={() => handleSort("needBus")}>Autobús</th>
                <th onClick={() => handleSort("hasAllergies")}>Alergias</th>
              </tr>
            </thead>
            <tbody>
              {currentRecords.map((record) => (
                <tr key={record.id}>
                  <td>{record.name}</td>
                  <td>{record.email}</td>
                  <td>{record.phone}</td>
                  <td>{record.message}</td>
                  <td>{record.needBus ? "Sí" : "No"}</td>
                  <td>{record.hasAllergies ? record.allergiesDetails : "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
