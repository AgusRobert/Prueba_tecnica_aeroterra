import {
    indigo,
    grey,
    amber
  } from "@mui/material/colors";
  import {
    Button,
    InputBase,
    TextField,
    Toolbar,
    MenuItem,
    AppBar,
    Typography,
    Drawer,
    Divider
  } from "@mui/material";
  import {
    styled,
    Box
  } from "@mui/system";
  
  export const ToolbarP = styled(Toolbar)({
   position:'sticky',
    color: "black",
    backgroundColor: amber[500],
  });
  export const AppbarP = styled(AppBar)({
    position:'sticky',
     color: "black",
     backgroundColor: amber[500],
   });
   export const Texto = styled(Typography)({
    fontFamily: [
        'Open Sans',
        'sans-serif',
      ].join(',')
   });
   export const DrawerP = styled(Drawer)({
    
     color: "black",
     backgroundColor: amber[500],
   });
   export const DividerP = styled(Divider)({
    
    backgroundColor: amber[500],
  });