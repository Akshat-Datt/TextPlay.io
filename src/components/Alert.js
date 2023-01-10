import React from 'react'

// function to capitalize the first letter of success 



function Alert(props) {

  const capitalize = (word)=> {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}

  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.alert.type)} : {props.alert.message}</strong>
    </div>
  )
}

export default Alert

// if props.alert is true the statement after && will be executed, otherwise it will not 