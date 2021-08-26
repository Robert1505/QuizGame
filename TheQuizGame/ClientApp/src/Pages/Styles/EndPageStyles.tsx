import { createStyles, makeStyles, Theme } from "@material-ui/core";
import BgImage from '../../Backgrounds/Background1.jpg'

export const useStyles = makeStyles((theme: Theme)=>
  createStyles({
    endpage: {
        background: `url(${BgImage})`,
        minHeight: "100vh",
        alignItems: "center",
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        fontFamily: 'Poppins',
        fontWeight: 800,
        fontSize: 60,
        color: 'white',
        paddingTop: 140
    },
   score: {
       fontSize: 100,
       marginTop: 60
   },
   buttonPosition: {
        marginTop: 110
   },
   buttonStyle: {
        borderRadius: 7,
        color: 'white',
        border: 0,
        fontFamily: 'Poppins',
        fontWeight: 800,
        background: 'transparent',
        cursor: 'pointer',
   }
}));
