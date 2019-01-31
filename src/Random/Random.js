import React, {Component} from 'react';

class Random extends Component {
    render() {
        return (<div className={'d-inline mt-8'}>
           <div className={'d-inline m-3 border border-dark rounded-circle p-3'}>
               {this.props.number}
           </div>
            </div>
        )
    }
}

export default Random;