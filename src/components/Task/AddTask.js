import React, { Component } from 'react';
import '../../css/Task/addTask.css';

export default class AddTask extends Component{
    constructor(props){
        super(props);
        this.wrapperAdd = this.wrapperAdd.bind(this);
    }
    wrapperAdd(e){

        this.props.add(this.timeFrom.value, this.timeTo.value, this.message.value);
    }
    render(){
        return(

               <div className="task-time">
                   <form action="">
                       <label className="wrapper-input-time">
                           <span>From:</span>
                           <input
                               type="time"
                               required = {true}
                               ref = {(input) => { this.timeFrom = input;}}/>
                       </label>
                       <label className="wrapper-input-time">
                           <span>To:</span>
                           <input
                               type="time"
                               required
                               ref = {(input) => { this.timeTo = input;}}/>
                       </label>
                       <label>
                           <span>Task message:</span>
                           <textarea
                               name="task" id=""
                               ref = {(input) => { this.message = input;}}
                           ></textarea>
                       </label>
                       <input
                           type="button"
                           value="Cancel"
                           className="event-button"
                           onClick = { this.props.cancel }
                       />
                       <input
                           type="button"
                           value="Add"
                           className="event-button"
                           onClick = { this.wrapperAdd }
                       />
                   </form>
                   {this.props.errors}
               </div>
        )
    }
}