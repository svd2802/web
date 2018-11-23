import React from 'react';
import './ToDoComponent.css';
import {InputForm} from './InputForm.js';
import {ItemsList} from './ItemsList.js';

class ToDoComponent extends React.Component {
  
    state = {
        items: [],
        newItem: '',
    };

    onInputChange = (e) => {
        this.setState({
            newItem: e.target.value
        });
    }

    onAddButtonClick = () => {
        if(this.state.newItem){
            const newItemsObject ={
                title: this.state.newItem,
                isComplete: false
            }

            this.setState({
                items: [...this.state.items, newItemsObject],
                newItem: ''
            })
        }
    }

    onClearButtonClick = () => {
        this.setState({
            items: [],
            newItem: ''
        })
    }

    render() {
        const {items, newItem} = this.state;

        return (
            <div className="todoComp"> 
                <InputForm  newItem = {newItem}
                            onAddButtonClick = {this.onAddButtonClick}
                            onClearButtonClick = {this.onClearButtonClick}
                            onInputChange = {this.onInputChange} />
                <ItemsList items = {items} />
            </div>
        );
    }
  }

  export default ToDoComponent;