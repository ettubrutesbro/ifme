import React from 'react'
import styles from './inputs.scss'

// class Switch extends React.Component{

//     render(){

//     }
// }

const Switch = (props) => {
    return(
        <div className = {[styles.switch, props.on? styles.on : styles.off].join(" ")}>
            <div className = {styles.button}>
                {props.on && 'ON'}
                {!props.on && 'OFF'}
            </div>
        </div>
    )
}

export {Switch}