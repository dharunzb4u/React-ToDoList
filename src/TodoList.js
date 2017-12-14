import React, { Component } from "react";
import TodoItems from "./TodoItems";
import logo from './logo.svg';
import "./TodoList.css";

class TodoList extends Component {
    constructor(props, context) {
        super(props, context);

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {
            items: []
        };
    }
    addItem(e) {
       // this.showMsg();
        var itemArray = this.state.items;

        if (this._inputElement.value !== "") {
            itemArray.unshift({
                text: this._inputElement.value,
                key: Date.now()
            });

            this.setState({
                items: itemArray
            });

            this._inputElement.value = "";
        }

        console.log(itemArray);

        e.preventDefault();

    }


    componentWillMount()
    {
        this.code="Welcome to To-DoList Application !!!";
        this.footer="Developed By Dharun S"
        this.inputValue="";
        this.counter=0;
    }
    showMsg=()=>{
        this.inputValue=this.refs.inputvalue.value;
        this.counter=this.counter+1;
        alert("Task "+this.inputValue+"!! Added Successfully  as"+this.counter+" items");
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }
    render() {
        return (
            <div className="todoListMain">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">{this.code}</h1>
                </header>
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input placeholder="enter task" ref={(a)=>this._inputElement=a}>
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}
                           delete={this.deleteItem}/>
                <footer align="right" font="Century Gothic" font-size="16px">{this.footer}</footer>
            </div>

        );
    }
}

export default TodoList;