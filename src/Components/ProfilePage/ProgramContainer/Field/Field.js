import React from 'react';
import { Link } from 'react-router-dom';

import CustomButton from '../../../../UI/Button/CustomBtn';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

import styles from './Field.module.css';

const Field = ({ content, url, setNaprIndex }) => {
  const onLinkClick = () => {
    setNaprIndex(url);
    localStorage.setItem('naprIndex', url);
  }

  const deleteNapr = () => {
    const arr = JSON.parse(localStorage.getItem('fields'));
    arr.splice(url, 1);

    localStorage.setItem('fields', JSON.stringify(arr));
  }

  return (
    <Card className={styles.cards}>
      <Box sx={{ width: "100%" }}>
        {/* <CardActionArea> */}
        <Box>
          <Link to={`${url}`} onClick={onLinkClick}>
            <CardMedia
              component="img"
              height="140"
              image={content.image}
              alt="snake"
            />
            <CardContent className={styles.content}>
              <Typography gutterBottom variant="h5" component="div">
                {content.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" className={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet,
              </Typography>
              <Typography color="text.secondary">
                Статус
                <Checkbox disabled checked={content.check1}/>
                <Checkbox disabled checked={content.check2}/>
                <Checkbox disabled checked={content.check3}/>
                <Checkbox disabled checked={content.check4}/>
              </Typography>
            </CardContent>
          </Link>
        </Box>
        {/* </CardActionArea> */}
        <CardActions size="small">
          <CustomButton
            variant="text"
            customColor="blue"
            text="Удалить"
            margin="-5px 0 0 5px"
            onBtnClick={deleteNapr}
          />
        </CardActions>
      </Box>
    </Card>
  )
}

export default Field;