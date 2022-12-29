import React from "react";

class AEDTClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.setHour(11),
            delay: 1000
        }
        this.setHour = this.setHour.bind(this);
        this.tick = this.tick.bind(this);
        this.doubleMyInterval = this.doubleMyInterval.bind(this);
        this.resetInterval = this.resetInterval.bind(this);
        this.updateMeNow = this.updateMeNow.bind(this);
    }

    setHour(offset) {
        var time = new Date();
        var utc = time.getTime() + (time.getTimezoneOffset() * 60000)
        var timeOfCity = new Date(utc + (3600000 * offset));
        return timeOfCity;
    }
    
    tick(delay) {
        this.intervalID = setInterval(() => { this.setState({ date: this.setHour(11)}) },
        delay)

    }

    componentDidMount() {
        this.tick(this.state.delay);
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
    }
    
    doubleMyInterval() {
        this.setState((prevState) => {
            return {
                delay: prevState.delay * 2
            }
        })
    }
    
    componentDidUpdate(prevState){
        if(this.state.delay === prevState.delay){
            return;
        }
        clearInterval(this.intervalID);
        this.tick(this.state.delay);
  
    }
    resetInterval(){
        this.setState({delay: 1000})
    }
    updateMeNow() {
       this.setState({date: this.setHour(11)})
    }

    render() {
        return (
            <div>
                <h1> AEDT timezone - Updateinterval = {this.state.delay/1000} sec </h1>
                <h2>The time is:{this.state.date.toLocaleTimeString()}</h2>
                <button onClick={this.resetInterval}>Reset my interval</button>
                <button onClick={this.doubleMyInterval}>Double my interval</button>
                <button onClick={this.updateMeNow}>Update me now</button>

            </div>
        )
    }

}

export default AEDTClock;