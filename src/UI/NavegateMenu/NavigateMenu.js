import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

// Иконки
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
// Иконка выбранного пункта меню
import PersonIcon from '@mui/icons-material/Person';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

import styles from './NavigateMenu.module.css';

function NavigateMenu({ user }) {
  const [wasClickedOn, setWasClickedOn] = useState("");

  const userMenu = [
    {link: "/profile/aboutMe", icon: <PersonOutlineOutlinedIcon />, choosen: <PersonIcon />, label: "Мой профиль"},
    {link: "/profile/programs", icon: <FormatListBulletedOutlinedIcon />, choosen: <FormatListBulletedIcon />, label: "Мои программы"}
  ];

  const adminMenu = [
    {link: "/admin/requests", linkName: "http://localhost:3000/admin/requests", icon: <RequestQuoteOutlinedIcon />, choosen: <RequestQuoteIcon />, label: "Заявки"},
    {link: "/admin/contracts", linkName: "http://localhost:3000/admin/contracts", icon: <ContentPasteSearchOutlinedIcon />, choosen: <ContentPasteSearchIcon />, label: "Договоры"},
    {link: "/admin/certificates", linkName: "http://localhost:3000/admin/certificates", icon: <HistoryEduOutlinedIcon />, choosen: <HistoryEduIcon />, label: "Удостоврения"}
  ];


  return (
    <div className={styles.navigateMenu}>
      <List className={styles.navList}>
        {
          user ?
            userMenu.map(item => (
              <Link to={item.link} key={item.link}>
                <ListItem
                  onClick={ () => {
                    setWasClickedOn(item.link);
                    document.documentElement.scrollTop = true;
                  } }
                  sx={ window.location.href.includes(item.link) ?
                    {
                      backgroundColor: '#fff',
                      background: "linear-gradient(90deg, #ffffff 0%, #f7fafd 70%, #edf0f5 100%)"
                    }
                    :
                    { color: 'black' } }
                >
                  <div className={ window.location.href.includes(item.link) ? styles.marker : { display: 'none' } }></div>
                  <ListItemAvatar style={ window.location.href.includes(item.link) ? {color: '#2972a0'} : {color: 'black'} }>
                    { window.location.href.includes(item.link) ? item.choosen : item.icon }
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.label}
                    className={ window.location.href.includes(item.link) ? styles.menuItem : null }
                  />
                </ListItem>
              </Link>
            ))
            :
            adminMenu.map(item => (
              <Link to={item.link} key={item.linkName}>
                <ListItem>
                  <ListItemAvatar style={ window.location.href.includes(item.linkName) ? {color: '#70caf2'} : {color: 'black'} }>
                  { window.location.href.includes(item.linkName) ? item.choosen : item.icon }
                  </ListItemAvatar>
                  <ListItemText primary={item.label} />
                </ListItem>
              </Link>
            ))
        }
      </List>
    </div>
  );
}

export default NavigateMenu;