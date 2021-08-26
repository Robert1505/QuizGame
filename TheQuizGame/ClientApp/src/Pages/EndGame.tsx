import React, { ReactElement } from 'react';
import { useStyles } from './Styles/EndPageStyles';
import '../Components/PrimaryButtonStyle.css'
import { useHistory } from 'react-router-dom';


interface Props {
    score: number;
    setScore: Function
}

export default function EndGame(props: Props): ReactElement {

    const classes = useStyles();
    let history = useHistory();

    function GoHomePage() {
        props.setScore(0);
        history.push("/");
    }

    return (
        <div className = {classes.endpage}>
            Congratulations, your score is: 
            <div className = {classes.score}>
                {props.score}
            </div>
            <div className = {classes.buttonPosition}>
                <button className= {classes.buttonStyle} onClick={() => GoHomePage()}>
                    Go To Main Menu
                </button>
            </div>
        </div>
    )
}
