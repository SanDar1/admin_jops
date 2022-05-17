import React, { useState, useEffect } from 'react';

import NavigateMenu from '../../../UI/NavegateMenu/NavigateMenu';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import styles from './Certificates.module.css';

const columns = [
  {id: "status", label: 'Статус', minWidth: 170},
  {id: "programName", label: 'Название программы', minWidth: 150},
  {id: "secondName", label: 'Фамилия', minWidth: 140},
  {id: "name", label: 'Имя', minWidth: 140},
  {id: "thirdName", label: 'Отчество', minWidth: 140},
  {id: "documentType", label: 'Вид документ', minWidth: 100},
  {id: "documentSeries", label: 'Серия документа', minWidth: 70},
  {id: "documentNumber", label: 'Номер документа', minWidth: 100},
  {id: "givenDate", label: 'Дата выдачи', minWidth: 70},
  {id: "regNumber", label: 'Рег. номер', minWidth: 100},
  {id: "finishingDocument", label: 'Загрузка документа об окончании', minWidth: 150},
  {id: "gettingType", label: 'Способ получения оригинала', minWidth: 150},
];

function createData(
  id, status, programName, secondName, name, thirdName, documentType, documentSeries,
  documentNumber, givenDate, regNumber, finishingDocument, gettingType
  )
  {
    return { id, status, programName, secondName, name, thirdName, documentType, documentSeries,
            documentNumber, givenDate, regNumber, finishingDocument, gettingType };
}

function Certificates() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const [personData, setPersonData] = useState({});


  useEffect(() => {
    // Брать данные с серва, но пока костыль с localStorage
    // localStorage.removeItem('person');

    const person = JSON.parse(localStorage.getItem('person'));
    if (person != null) setPersonData({...person});
  }, [personData]);


  const rows = [
    createData(
      "id", "Какой-то", "programName", personData.secondName, personData.name, personData.thirdName,
      "documentType", "documentSeries", "documentNumber", "givenDate", "regNumber", "finishingDocument", "gettingType"
    )
  ];



  return (
    <div style={{ minHeight: '100vh', marginBottom: '50px'}}>
      <NavigateMenu />

      <div className={styles.certificates}>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440, borderRadius: '10px' }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell key={column.id}  align="left" style={{ minWidth: column.minWidth }}>
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align="left">
                              {value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
}

export default Certificates;