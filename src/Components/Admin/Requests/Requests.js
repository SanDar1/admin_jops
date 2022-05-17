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

import styles from './Requests.module.css';

const columns = [
  {id: "status", label: 'Статус', minWidth: 170},
  {id: "secondName", label: 'Фамилия', minWidth: 140},
  {id: "name", label: 'Имя', minWidth: 140},
  {id: "thirdName", label: 'Отчество', minWidth: 140},
  {id: "phone", label: 'Телефон', minWidth: 100},
  {id: "mail", label: 'Email', minWidth: 100},
  {id: "company", label: 'Организация', minWidth: 200},
  {id: "job", label: 'Должность', minWidth: 150},
  {id: "birthDate", label: 'Дата рождения', minWidth: 100},
  {id: "gender", label: 'Пол', minWidth: 70},
  {id: "citizenship", label: 'Гражданство', minWidth: 120},
  {id: "education", label: 'Уровень образования', minWidth: 200},
  {id: "secondNameInEducation", label: 'Фамилия указанная в дипломе об образовании', minWidth: 200},
  {id: "educationSeries", label: 'Серия документа об образовании', minWidth: 170},
  {id: "educationNumber", label: 'Номер документа об образовании', minWidth: 170},
  {id: "snils", label: 'СНИЛС', minWidth: 120},
  {id: "learnAs", label: 'Обучаюсь как', minWidth: 120},
  {id: "passportSeries", label: 'Серия паспорта', minWidth: 100},
  {id: "passportNumber", label: 'Номер паспорта', minWidth: 100},
  {id: "passportGiven", label: 'Кем и когда выдан', minWidth: 200},
  {id: "adress", label: 'Адрес проживания', minWidth: 180},
  {id: "passportScan", label: 'Скан паспорта', minWidth: 150},
  {id: "diplomScan", label: 'Скан диплома', minWidth: 150},
  {id: "snilsScan", label: 'Скан свидетельства', minWidth: 150},
  {id: "submit", label: 'Подтвердить данные', minWidth: 70},
];

function createData(
  id, status, secondName, name, thirdName, phone, mail, company, job,
  birthDate, gender, citizenship, education, secondNameInEducation,
  educationSeries, educationNumber, snils, learnAs, passportSeries,
  passportNumber, passportGiven, adress, passportScan, diplomScan, snilsScan, submit
  )
  {
    return { id, status, secondName, name, thirdName, phone, mail, company, job,
            birthDate, gender, citizenship, education, secondNameInEducation,
            educationSeries, educationNumber, snils, learnAs, passportSeries,
            passportNumber, passportGiven, adress, passportScan, diplomScan, snilsScan, submit };
}

function Requests() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  // const [personData, setPersonData] = useState({});


  // useEffect(() => {
  //   // Брать данные с серва, но пока костыль с localStorage
  //   // localStorage.removeItem('person');

  //   const person = JSON.parse(localStorage.getItem('person'));
  //   if (person != null) setPersonData({...person});
  // }, [personData]);


  const rows = [
    createData(
      1, "Какой-то", "personData.secondName", "personData.name", "personData.thirdName", "personData.phoneNumber", 
      "personData.mail", "personData.work", "personData.job", "personData.birthDate", "personData.gender", "personData.citizenship",
      "personData.education", "personData.educationSecondName", "personData.educationDocumentSeries", "personData.educationDocumentNumber",
      "personData.snils", "personData.learnAs", "personData.passportSeries", "personData.passportNumber", "personData.passportGiven",
      "personData.personAdress", "Скан", "Скан", "Скан", "КНОПКА"
    )
  ];



  return (
    <div style={{ minHeight: '100vh', marginBottom: '50px'}}>
      <NavigateMenu />

      <div className={styles.requests}>
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
            className={styles.tablePagination}
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

export default Requests;