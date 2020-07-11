import React, { useState } from 'react';
import { Button, Snackbar, TextField, Typography } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import styles from './registration.module.css';
import api from '../api';

function Registration() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();

  const handleRegister = () => {
    api
      .post(`/users/add`, { phone, password })
      .then(() => setSuccess(true))
      .catch(() => setError(true));
  };

  return (
    <div className={styles.wrapper}>
      <Typography variant="h4">Регистрация</Typography>
      <TextField
        id="phone"
        label="Телефон"
        variant="outlined"
        value={phone}
        onChange={(evt) => setPhone(evt.target.value)}
      />
      <TextField
        id="password"
        label="Пароль"
        variant="outlined"
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleRegister}>
        Зарегистрироваться
      </Button>
      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
      >
        <MuiAlert onClose={() => setSuccess(false)} severity="success">
          Успешно
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

export default Registration;
