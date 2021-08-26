import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React, { ReactElement } from 'react';
import './PrimaryButtonStyle.css';
import { Icon, InlineIcon } from '@iconify/react';
import racingCar from '@iconify-icons/emojione-v1/racing-car';
import { useHistory } from "react-router-dom";



interface Props {
    
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    show: {
      paddingTop: 45
    }
  }),
);

export default function PrimaryButton({}: Props): ReactElement {

  const classes = useStyles();
  let history = useHistory();

  function GoGamePage() {
    history.push("/game");
  }

    return (
        <div className = {classes.show}>
            <button className="primaryButton" onClick={() => GoGamePage()}>
              Start Game <Icon icon={racingCar} />
            </button>
        </div>
    )
}
