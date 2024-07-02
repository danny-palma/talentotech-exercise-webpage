import { useContext, useState } from "react";

import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { IoSend } from "react-icons/io5";
import { MdEmail, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { PiPasswordFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";

import FondoLogin from "../../assets/Fondo-login.png";
import LogoTalentoTechBlanco from "../../assets/Logo-tech-blanco.png";
import LogoTalentoTechNegro from "../../assets/Logo-tech-negro.png";
import { themeContext } from "../../contexts/themeContext";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { Theme } = useContext(themeContext);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const Navigate = useNavigate();
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <div className="flex h-full w-full items-center">
      <div className="flex h-full w-full flex-col items-center rounded max-sm:hidden">
        <img
          src={FondoLogin}
          alt=""
          className="h-full w-full rounded-r-3xl object-cover"
        />
      </div>
      <div className="flex h-full w-full flex-col items-center rounded p-12">
        <img
          src={Theme == "light" ? LogoTalentoTechNegro : LogoTalentoTechBlanco}
          alt=""
          className="mb-5 w-72 drop-shadow-xl"
        />
        <h4>Iniciar sesión</h4>
        <form target="" className="flex flex-col items-center">
          <p className="m-0 self-start ps-2">Correo</p>
          <FormControl sx={{ m: 1, width: "30ch" }} variant="outlined">
            <OutlinedInput
              startAdornment={
                <InputAdornment position="start">
                  <MdEmail />
                </InputAdornment>
              }
              id="outlined-start-adornment"
              size="small"
            />
          </FormControl>
          <p className="m-0 self-start ps-2">Contraseña</p>
          <FormControl sx={{ m: 1, width: "30ch" }} variant="outlined">
            <OutlinedInput
              startAdornment={
                <InputAdornment position="start">
                  <PiPasswordFill />
                </InputAdornment>
              }
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                  </IconButton>
                </InputAdornment>
              }
              size="small"
            />
          </FormControl>
          <Button
            onClick={() => Navigate("/panel")}
            variant="contained"
            className="my-3"
            endIcon={<IoSend />}
          >
            Send
          </Button>
          <Link to="#">Recuperar contraseña</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
