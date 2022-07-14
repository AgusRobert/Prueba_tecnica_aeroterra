import { Box, Drawer, IconButton } from "@mui/material";
import Header from "./Header.jsx";
import "./Prueba.css";
import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import { DividerP, PaperTitulo, Texto } from "./MuiElements.js";
import { amber, grey } from "@mui/material/colors";
import { PoiForm } from "./Formulario.jsx";
import ListaPoi from "./ListaPoi.jsx";
import { Mapa } from "./Mapa.jsx";
import logo from '../utils/Aeroterra-Alta-Blanco.png'
const drawerWidth = 500;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
  backgroundColor: amber[500],
}));
export default function Prueba() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Header />
      <div className="prueba">
        <Box sx={{ display: "flex" }}>
          <IconButton
            backgroundColor={"white"}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              color: "white",
              fontSize: 80,
              mr: 2,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon sx={{ color: amber[500], fontSize: 80 }} />
          </IconButton>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                backgroundColor: grey[900],
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader sx={{alignItems:'center'}}>
                <img  style={{width:320,height:70,marginRight:150}} src={logo} alt="logo"/>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <PaperTitulo>
              <Texto sx={{ fontSize: 40 }}>Añadir nuevo POI</Texto>
            </PaperTitulo>
            <PoiForm />
            <DividerP />
            <PaperTitulo>
              <Texto sx={{ fontSize: 40 }}>Lista de POI</Texto>
            </PaperTitulo>
            <ListaPoi />
          </Drawer>
          <Main  open={open}>
            <Mapa/>
          </Main>
        </Box>
      </div>
    </>
  );
}
