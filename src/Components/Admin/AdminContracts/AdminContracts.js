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

import styles from './AdminContracts.module.css';

const columns = [
  {id: "status", label: 'Статус', minWidth: 170},
  {id: "secondName", label: 'Фамилия', minWidth: 140},
  {id: "name", label: 'Имя', minWidth: 140},
  {id: "thirdName", label: 'Отчество', minWidth: 140},
  {id: "phone", label: 'Телефон', minWidth: 100},
  {id: "mail", label: 'Email', minWidth: 100},
  {id: "programName", label: 'Название программы', minWidth: 150},
  {id: "stream", label: 'Поток', minWidth: 70},
  {id: "startDate", label: 'Начало обучения', minWidth: 100},
  {id: "endDate", label: 'Окончание обучения', minWidth: 100},
  {id: "amount", label: 'Объём', minWidth: 100},
  {id: "format", label: 'Формат', minWidth: 100},
  {id: "payment", label: 'Сумма оплаты', minWidth: 70},
  {id: "stage1", label: '1 этап', minWidth: 70},
  {id: "stage2", label: '2 этап', minWidth: 70},
  {id: "stage3", label: '3 этап', minWidth: 70},
  {id: "stage4", label: '4 этап', minWidth: 70},
  {id: "document", label: 'Документ', minWidth: 100},
  {id: "submitData", label: 'Подтвердить данные', minWidth: 70},
  {id: "contractScan", label: 'Скан договора', minWidth: 100},
  {id: "submitContract", label: 'Подтвердить договор', minWidth: 70},
  {id: "checksScan", label: 'Скан квитанкций', minWidth: 100},
  {id: "submitChecks", label: 'Подтвердить оплату', minWidth: 70},
  {id: "actScan", label: 'Скан акта', minWidth: 100},
  {id: "submitAct", label: 'Подтвердить акт', minWidth: 70},
];

function createData(
  id, status, secondName, name, thirdName, phone, mail, programName, stream, startDate,
  endDate, amount, format, payment, stage1, stage2, stage3, stage4, document,
  submitData, contractScan, submitContract, checksScan, submitChecks, actScan, submitAct
  )
  {
    return { id, status, secondName, name, thirdName, phone, mail, programName, stream, startDate,
      endDate, amount, format, payment, stage1, stage2, stage3, stage4, document,
      submitData, contractScan, submitContract, checksScan, submitChecks, actScan, submitAct };
}

function AdminContracts() {
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

    const person = JSON.parse(localStorage.getItem('person'));
    if (person != null) setPersonData({...person});
  }, [personData]);


  const rows = [
    createData(
      "id", "Какой-то", personData.secondName, personData.name, personData.thirdName, personData.phoneNumber,
      personData.mail, "programName", "stream", "startDate", "endDate", "amount", "format", "40 000", "10 000", "10 000",
      "10 000", "10 000", "document", "submitData", "Ссылка на скан договора", "submitContract", "Ссылка на чеки", "submitChecks",
      "Ссылка на акты", "submitAct"
    )
  ];



  return (
    <div style={{ minHeight: '100vh', marginBottom: '50px'}}>
      <NavigateMenu />

      <div className={styles.contracts}>
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

export default AdminContracts;