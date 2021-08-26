import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React, { ReactElement } from 'react'

interface Props {
    question: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    question: {
        fontSize: 55,
        fontFamily: 'Poppins',
        fontWeight: 800,
        color: 'white',
        paddingTop: 20,
        marginBottom: 50,
        marginLeft: 200,
        marginRight: 200
    }
  })
);

export default function Question(props: Props): ReactElement {

    const classes = useStyles();

    return (
        <div className = {classes.question}>
            {props.question}
        </div>
    )
}
