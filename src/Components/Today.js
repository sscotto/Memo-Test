import React from 'react';

const Months = ["January", "February", "March", "April", 
"May", "June", "July", "August", "September", "October", "November", "December"];

class Today extends React.Component {
    constructor() {
        super();
        this.Date = new Date();
      }

    BuildDate = () => {
        return Months[this.Date.getMonth()] + " - " + this.Date.getUTCFullYear();
    }

    render() {
        return <div>{this.BuildDate()}</div>;
    }
}

export default Today;
