import { amber, red } from "@mui/material/colors";
import {
  Button,
  InputBase,
  TextField,
  Toolbar,
  MenuItem,
  AppBar,
  Typography,
  Drawer,
  Divider,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";

export const ToolbarP = styled(Toolbar)({
  position: "sticky",
  color: "black",
  backgroundColor: amber[500],
});
export const AppbarP = styled(AppBar)({
  position: 'fixed',
  color: "black",
  backgroundColor: amber[500],
});
export const Texto = styled(Typography)({
  fontFamily: ["Open Sans", "sans-serif"].join(","),
});
export const TextoError = styled(Typography)({
  color: "red",
  fontFamily: ["Open Sans", "sans-serif"].join(","),
});
export const DrawerP = styled(Drawer)({
  color: "black",
  backgroundColor: amber[500],
});
export const DividerP = styled(Divider)({
  height: 5,
  marginBottom: 5,
  backgroundColor: amber[500],
});
export const InputStyle = styled(InputBase)({
  backgroundColor: amber[200],
  borderRadius: 5,
  width: "250px",
  padding: 4,
});
export const LabelStyle = styled("label")({
  //   color: "white",
  color: "#e7e0d2",
});
export const SelectStyle = styled(TextField)({
  borderRadius: 8,
  width: 160,
  padding: 0,
});
export const MenuItemStyle = styled(MenuItem)({
  marginLeft: "auto",
  color: "black",
  backgroundColor: amber[200],
  "&:focus": {
    backgroundColor: amber[300],
  },
});
export const ButtonStyle = styled(Button)({
  color: "white",
  borderColor: amber[700],
  backgroundColor: amber[700],
  padding: 10,
  width: "150px",
  ":hover": {
    borderColor: amber[400],
    backgroundColor: "#ffdc95",
  },
});

export const PaperForm = styled(Paper)({
  background: "none",
  padding: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const PaperTitulo = styled(Paper)({
  background: amber[300],
  padding: 5,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});
export const PaperLista = styled(Paper)({
  background: amber[50],
  display: "inline-flex",
  flexDirection:'column',
  borderRadius: 8,
  marginTop:10,
  overflow: 'auto'
});
export const PaperListaP = styled(Paper)({
  background: amber[100],
  display: "inline-flex",
  borderRadius: 8,
  flexDirection:'column',
  alignContent:'center',
  ":hover":{
    background: amber[300],
  }
});

export const DeleteBtn = styled(Button)({
  background: red[700],
  display: "flex",
  width:0.2,
  borderRadius: 5,
  padding: 0,
  color:"white",
  fontSize:20,
  alignContent:'center',
  ":hover":{
    background: red[800],
  }
});
export const sxSelectStyle = {
  ":active": {
    color: "white",
    borderColor: amber[700],
  },
  ":focused": {
    borderColor: amber[700],
  },
};
