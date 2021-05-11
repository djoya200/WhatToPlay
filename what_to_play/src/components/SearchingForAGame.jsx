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
    //this function takes the user input from the DOM and hands it back to the MainWhatToPlayContainer
    passBackUp = (event) => {
        event.preventDefault();
        this.props.howManyWantToPlay(this.state.numberUserInputted)

    }

    render() {
        return (
            <div>

                <form action="" onSubmit={this.passBackUp}>
                    <label className="boldSubHeading">Search Games by Number of Players:   
                        <input type="text" onChange={this.handleChange}/>
                    </label>
                    <div className="buttonContainerForCenter">
                    <input className="addButton" type="submit" value="Search Games" />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchingForAGame;