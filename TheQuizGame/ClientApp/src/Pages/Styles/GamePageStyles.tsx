import { createStyles, makeStyles, Theme } from "@material-ui/core";
import BgImage from '../../Backgrounds/Background1.jpg'

export const useStyles = makeStyles((theme: Theme)=>
  createStyles({
    gamepage: {
        background: `url(${BgImage})`,
        minHeight: "100vh",
        alignItems: "center",
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
    },
    scoreandtime: {
      color: 'white',
      fontFamily: 'Poppins',
      fontWeight: 800,
      fontSize: 25,
      paddingTop: 25
    },
    time: {
      marginLeft: '100px'
    },
}));
