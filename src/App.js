import React, {Component} from 'react';
import Random from './Random/Random';
import './App.css';

class App extends Component {
    state = {
        myArray: []
    };

    compareNumeric = (a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
    };

    checkArray = (array) => {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === array[i + 1]) {
                array.splice(0, array[i])
            }
        }
    };

    action = () => {
        console.log('Кнопка нажата!');
        this.state.myArray.splice(0, 5)
        while (this.state.myArray.length < 5) {
            let n = (Math.floor(Math.random() * 100) + 1);
            if (n >= 5 && n <= 36) {
                this.state.myArray.push(n)
            }
            this.state.myArray.sort(this.compareNumeric)
            this.checkArray(this.state.myArray)
        }
        console.log(this.state.myArray)

    };




    render() {
        return (
            <div className="App">

                <button onClick={this.action}>
                    New numbers
                </button>

                <div>
                    <Random num = {this.state.myArray[0]}/>
                    <Random num = {this.state.myArray[1]}/>
                    <Random num = {this.state.myArray[2]}/>
                    <Random num = {this.state.myArray[3]}/>
                    <Random num = {this.state.myArray[4]}/>
                </div>
            </div>
        );
    }
}

export default App;
