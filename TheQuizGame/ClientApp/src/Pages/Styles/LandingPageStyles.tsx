import { createStyles, makeStyles, Theme } from "@material-ui/core";
import BgImage from "../../Backgrounds/Background1.jpg";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    landingPage: {
      background: `url(${BgImage})`,
      minHeight: "100vh",
      alignItems: "center",
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    },
    title: {
      fontSize: 100,
      fontFamily: "Poppins",
      fontWeight: 800,
      textAlign: "center",
      paddingTop: 45,
      color: "white",
    },
    body: {
      textAlign: "center",
      paddingTop: "120px",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width: "10rem",
      "& .MuiFormLabel-root.Mui-focused": {
        color: "#fff",
      },
    },
    select: {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "white !important",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "white !important",
      },
      "& .MuiSelect-selectMenu": {
        color: "white !important",
      },
      "& .MuiOutlinedInput-root": {
        borderColor: "white !important",
      },
      "& .makeStyles-select-6": {
        borderColor: "white !important",
      },
      "& .PrivateNotchedOutline-legendLabelled-10": {
        color: "white !important",
      },
      "& .MuiSelect-icon": {
        color: "white !important",
      },
    },
    label: {
      color: "white",
      fontFamily: "Raleway",
    },
  })
);
