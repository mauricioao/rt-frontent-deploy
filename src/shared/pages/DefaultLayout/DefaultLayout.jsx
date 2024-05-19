import { Container } from "@mui/material"
import Header from "../../components/Header"
import { Outlet, redirect } from "react-router-dom"
import useStore from "../../../store/store"

export const loader = () => {
  const token = useStore.getState().token
  // console.log(token);
  if(token === "") return redirect("/login");
  return null
}

const DefaultLayout = () => {
  
  return (
    <Container maxWidth="xl" sx={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >

      <Header />
      <Outlet />

    </Container>
  )
}
export default DefaultLayout