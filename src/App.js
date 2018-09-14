import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            person: {}
        }
    }

    loadNewUser() {
        axios.get('https://randomuser.me/api/')
            .then(result => this.setState({ person: result.data.results[0] }))
            .catch(error => console.log(error))
    }

    render() {
        console.log(this.state.person);
        return (
            <div className={'container'} >
                <button onClick={() => this.loadNewUser()}>Load new user</button>

                {
                    this.state.person.name &&
                     <div className={'mx-auto'}>
                         <div> {this.state.person.name.first[0].toUpperCase()}{this.state.person.name.first.slice(1)}
                         {' '}{this.state.person.name.last[0].toUpperCase()}{this.state.person.name.last.slice(1)}
                         </div>

                         <img src={this.state.person.picture.large} className={'mx-auto'}/>

                    </div>


                }


            </div>
        );
    }
}

export default App;