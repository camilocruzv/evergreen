import React from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import './Login.css';
import useStyles from './styles';

const Login = () => {
  const classes = useStyles();
  const {
    handleSubmit, register, formState: { errors },
  } = useForm();
  const history = useHistory();

  const handleLogin = async (data) => {
    const [error, resp] = await axios.post('http://ec2-50-17-107-241.compute-1.amazonaws.com/auth/singin/', data)
      .then((response) => [null, response])
      .catch((err) => [err, err]);

    if (error) {
      Swal.fire('Hubo un error en el proceso de login!', 'Revisa nuevamente el usuario y la contraseña', 'error');
    } else {
      history.push("/tablas-maestras");
      localStorage.setItem('token-logged', resp.data.token);
    }
  };

  return (
    <div className="login-form">
      <h2 className="login-title">Bienvenido</h2>
      <form className="hazmat-modal-form" onSubmit={handleSubmit(handleLogin)}>
        <div className="login-inputs">
          <TextField
            name="username"
            className={classes.root}
            type="text"
            {...register("username", { required: true })}
            InputProps={{
              classes: {
                root: classes.root
              }
            }}
            error={!!errors && !!errors.username}
            helperText={errors.username ? errors.username.message : null}
            label="Usuario *"
            variant="outlined"
          />
          <TextField
            name="password"
            className={classes.root}
            type="password"
            {...register("password", {
              required: true,
            })}
            InputProps={{
              classes: {
                root: classes.root
              }
            }}
            error={!!errors && !!errors.password}
            helperText={errors.password ? errors.password.message : null}
            label="Contraseña *"
            variant="outlined"
          />
        </div>
        <div className="form-group">
          <Button className={classes.addButton} type="submit" color="primary" variant="contained">Login</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
