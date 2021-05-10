import React, { Component } from 'react';

class SearchingForAGame extends Component {
    constructor() {
        super()
        this.state = {
            numberUserInputted: ''
        }
    }


    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            numberUserInputted: event.target.value
        })
    }
    passBackUp = (event) => {
        event.preventDefault();
        this.props.howManyWantToPlay(this.state.numberUserInputted)

    }

    render() {
        return (
            <div>
                <form action="" onSubmit={this.passBackUp}>
                    <label>Search Games by Number of Players: 
                        <input type="text" onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Search Games" />
                </form>
            </div>
        );
    }
}

export default SearchingForAGame;