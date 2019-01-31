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
        let newArray = [];
        while (newArray.length < 5) {
            let n = (Math.floor(Math.random() * 100) + 1);
            if (n >= 5 && n <= 36) {
                newArray.push(n)
            }
            newArray.sort(this.compareNumeric)
            this.checkArray(newArray)
        }
        let newState = {...this.state};
        newState.myArray = newArray;
        this.setState(newState);
        console.log(this.state.myArray);
    };


    render() {

        return (
            <div className="App">
                <div className="container">
                    <button onClick={this.action} className={'m-3'}>New numbers</button>

                    <div>
                        <Random number={this.state.myArray[0]}/>
                        <Random number={this.state.myArray[1]}/>
                        <Random number={this.state.myArray[2]}/>
                        <Random number={this.state.myArray[3]}/>
                        <Random number={this.state.myArray[4]}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
