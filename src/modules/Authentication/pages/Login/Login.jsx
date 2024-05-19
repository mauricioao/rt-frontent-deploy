
import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

import { Alert, Box, Container, TextField, Typography, Zoom } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';

import { login } from "../../services/auth-service";
import useStore from "../../../../store/store";
import s from "./Login.module.css"

export const loader = () => {
  const token = useStore.getState().token
  if (token !== "") return redirect("/upload");
  return null
}

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState({
    flag: false,
    message: ""
  })
  const [loading, setLoading] = useState(false)

  const { updateToken } = useStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    const { email, password } = formData
    const res = await login({ email, password })
    if (res.ok) {
      updateToken(res.data.token)
      navigate("/upload")
      setLoading(false)
      return
    }
    setLoading(false)
    handleErrors(res)
  }

  const handleChange = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleErrors = ({error}) => {
    setError({
      flag: true,
      message: error.message
    })
    setTimeout(() => {
      setError({
        flag: false,
        message: ""
      })
    },4000)
  }

  return (
    <Container maxWidth="xs" sx={{
      display: "flex",
      flexDirection: "column",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      height: "100dvh",
    }} >
      <Typography variant="h2" component={"h1"} sx={{ textAlign: "center", fontWeight: "bold" }}>Data loading <span className={s.system}>system</span></Typography>
      <Box component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          display: "flex", flexDirection: "column", justifyContent: "center", gap: 1
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >

        <TextField
          label="Email"
          id="email"
          variant="standard"
          value={formData.email}
          onChange={handleChange}
          helperText="Ex: codeable@example.com"
        />

        <TextField
          label="Password"
          id="password"
          variant="standard"
          value={formData.password}
          onChange={handleChange}
          helperText="Ex: 123456"
        />

        <LoadingButton
          color="primary"
          loading={loading}
          loadingPosition="center"
          variant="contained"
          type="submit"
        >
          <span>Sign In</span>
        </LoadingButton>
        {/* <Button variant="contained" fullWidth sx={{ mt: 2 }} type="submit" >Sign In</Button> */}

      </Box>

      <Zoom in={error.flag}>
        <Alert severity="error">{error.message}</Alert>
      </Zoom>
    </Container>
  )
}

export default Login