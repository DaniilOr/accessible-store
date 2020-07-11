import React, { useState } from 'react';
import {
  TextField,
  Typography,
  Switch,
  FormControlLabel,
  Snackbar,
  Button,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import styles from './form.module.css';
import api from '../api';

function Form() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [location, setLocation] = useState();
  const [store, setStore] = useState();
  const [availability, setAvailability] = useState(false);

  const handleRegister = () => {
    api
      .post(`/add/drug`, {
        name,
        price,
        location,
        store,
        is_available: availability,
      })
      .then(() => setSuccess(true))
      .catch(() => setError(true));
  };

  return (
    <div className={styles.wrapper}>
      <Typography variant="h5">Добавить лекарство</Typography>
      <TextField
        id="name"
        label="Название"
        variant="outlined"
        value={name}
        onChange={(evt) => setName(evt.target.value)}
      />
      <TextField
        id="price"
        label="Стоимость"
        variant="outlined"
        value={price}
        onChange={(evt) => setPrice(evt.target.value)}
      />
      <TextField
        id="location"
        label="Улица, город"
        variant="outlined"
        value={location}
        onChange={(evt) => setLocation(evt.target.value)}
      />
      <TextField
        id="store"
        label="Магазин"
        variant="outlined"
        value={store}
        onChange={(evt) => setStore(evt.target.value)}
      />
      <FormControlLabel
        control={
          <Switch
            id="is_available"
            color="primary"
            checked={availability}
            onChange={() => setAvailability(!availability)}
          />
        }
        label="В наличии"
      />
      <Button variant="contained" color="primary" onClick={handleRegister}>
        Добавить
      </Button>
      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
      >
        <MuiAlert onClose={() => setSuccess(false)} severity="success">
          Лекарство добавлено
        </MuiAlert>
      </Snackbar>
      <Snackbar
        open={error}
        autoHideDuration={3000}
        onClose={() => setError(false)}
      >
        <MuiAlert onClose={() => setError(false)} severity="error">
          Ошибка
        </MuiAlert>
      </Snackbar>
    </div>
  );
}

export default Form;
