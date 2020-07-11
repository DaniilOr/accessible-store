import React, { useState } from 'react';
import { TextField, Typography, Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import styles from './login.module.css';
import api from '../api';

interface Props {
  authorize: () => void;
}

function Login(props: Props) {
  const { authorize } = props;
  const [error, setError] = useState(false);

  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    api
      .post(`/users/login`, { phone, password })
      .then(() => authorize())
      .catch(() => setError(true));
  };

  return (
    <div className={styles.wrapper}>
      <Typography variant="h4">Вход</Typography>
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
        type="password"
        onChange={(evt) => setPassword(evt.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Войти
      </Button>
      <Button variant="outlined" color="primary" href="./registration">
        Зарегистрироваться
      </Button>
      <Snackbar
        open={error}
        autoHideDuration={3000}
        onClose={() => setError(false)}
      >
        <MuiAlert
          elevation={0}
          onClose={() => setError(false)}
          severity="error"
        >
          Ошибка входа
        </MuiAlert>
      </Snackbar>
    </div>
  );
}

export default Login;
