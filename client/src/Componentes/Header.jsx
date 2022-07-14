import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { AppbarP, Texto, ToolbarP } from "./MuiElements";


export default function Header (){
   
    return(
      
        <AppbarP> 
            <ToolbarP sx={{display:'flex',alignItems:'center',justifyContent:'space-around',flexDirection:'row', marginLeft:50}}>
            
            <Texto variant="h4">PRUEBA TÉCNICA</Texto>
            <Texto variant="h4">
     Agustin Iabichella Robert
      </Texto>
            <LinkedInIcon
        fontSize="large"
        onClick={() =>
          window.open("https://www.linkedin.com/in/iabichellarobert/", "_blank")
        }
        sx={{
          color: "white",
          fontSize: 50,
          ":hover": { color: "black", cursor: "pointer" },
        }}
      />
     
            </ToolbarP> 
        </AppbarP>
       
       
    )
}