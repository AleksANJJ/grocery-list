import { Component } from 'react';
import check from './check.png';

export class GloceryList extends Component {
    state = {
        userInput: "",
        gloceryList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e});
    }

    addItem(input) {
        if(input === '') {
            alert("Please enter an item")
        }
        else {
        let listArray = this.state.gloceryList;
        listArray.push(input);
        this.setState({gloceryList: listArray, userInput: '' })
    }}

    deleteItem() {
        let listArray = this.state.gloceryList;
        listArray = [];
        this.setState({gloceryList: listArray});
    }


    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className='container'>
                    <input type="text" placeholder="What do you want to buy today?"
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}/>
                </div>
                <div className='container'>
                    <button className='btn add' onClick={() => this.addItem(this.state.userInput)}>Add</button>
                </div>
                <ul>
                    {this.state.gloceryList.map((item, index) => (
                        <li onClick={this.crossedWord} key = {index}>
                            <img src={check} width="35px" alt='image'/>
                            {item}</li>
                    ))}
                </ul>
                <div className='container'>
                    <button className='btn delete' onClick={() => this.deleteItem()}>Delete</button>
                </div>
                </form>
            </div>
        )
    }
}










