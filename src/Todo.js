import { Component } from "react";
import imageThree from "./check-mark.png"

export class Todo extends Component {
    state = {
        userInput: "",
        todolist:[],
    }
    onChangeEvent(e){
        this.setState({userInput:e});
    }
    addItem(input){
        if(input === "") {
            alert ("Please enter an item") 
            }   else {
        let listArray = this.state.todolist;
        listArray.push(input);
        this.setState({todolist: listArray, userInput:''})
    }}
    crossWord(event){
        const li = event.target;
        li.classList.toggle('crossed');
    }
    deleteItem(){
        let listArray = this.state.todolist;
        listArray=[];
        this.setState({todolist:listArray})
    }
    onFormSubmit(e){
        e.preventDefault();
    }
    render(){
        return(
            <div>
        <form onSubmit ={this.onFormSubmit}>
                <input type="text"
                placeholder="What is your plans?"
                onChange ={(e) => {this.onChangeEvent(e.target.value)}}
                value ={this.state.userInput} /> 
                
                        <button onClick={() => this.addItem(this.state.userInput)} className="button buttonOne"><span>Submit</span></button>
                        <button onClick ={()=> this.deleteItem()} className="button buttonTwo"><span>Delete</span></button>
                    <div>
                        <ul>
                        {this.state.todolist.map((item, index) => (
                    <li onClick = {this.crossWord} key={index}>
                    <img src={imageThree} width="20px" alt="check-mark"/> {item}
                    </li>
                ))}
                        </ul>
                        
                    </div>
                    </form>
                </div>
        )
    }
}