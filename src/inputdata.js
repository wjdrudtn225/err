import React, {Component} from 'react'


export default class inputData extends Component{
    constructor(props) {
        super(props)
        this.state = {value: ''}
    }
    render() {
        this.preInput = <input type='text'
                               ref ={i => {this.realInput= i }}
                               onClick={e => this.doClick(e)}/>
    return (<div>{this.preInput}</div>)
    }

    doClick (e) {
        console.log(this.preInput)
        console.log(this.realInput)
        if(this.preInput===this.realInput){
            console.log('같음')
        }else{
            console.log('다름')        }
    }
}