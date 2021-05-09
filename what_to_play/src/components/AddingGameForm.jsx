import React, { Component } from 'react';

class AddingGameForm extends Component {
    constructor() {
        super()
        this.state = {
            gameName: "",
            minNumberOfPlayers: '',
            maxNumberOfPlayers: '',
            playingTime: '',
            category: ' ',
            description: ' ',
        }

    }


    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.name)
        console.log(this.state.gameName)
    }

    // take gameNames from state, put them in an object 
    // to send to addGameToList from the Main component
    addNewGame = (event) => {
        event.preventDefault();
        let newGameObject = {
            gameName: this.state.gameName,
            minNumberOfPlayers: this.state.minNumberOfPlayers,
            maxNumberOfPlayers: this.state.maxNumberOfPlayers,
            playingTime: this.state.playingTime,
            category: this.state.category,
            description: this.state.description,
        }
        this.props.addGameToList(newGameObject)
        this.setState({
            gameName: '',
            minNumberOfPlayers: '',
            maxNumberOfPlayers: '',
            playingTime: '',
            category: '',
            description: '',
        })

    }

    render() {
        return (
            <div>
                <form className="formArea" onSubmit={this.addNewGame}>

                    <label className='gameLabel'> Name of Game: </label>
                    <input type="text" className='gameInput' name='gameName' value={this.state.gameName} onChange={this.handleChange} />

                    <label className='gameLabel'> Minimum Number of Players: </label>
                    <input type="text" className='gameInput' name='minNumberOfPlayers' value={this.state.minNumberOfPlayers} onChange={this.handleChange} />

                    <label className='gameLabel'> Maximum Number of Players: </label>
                    <input type="text" className='gameInput' name='maxNumberOfPlayers' value={this.state.maxNumberOfPlayers} onChange={this.handleChange} />

                    <label className='gameLabel'> Playing Time: </label>
                    <input type="text" className='gameInput' name='playingTime' value={this.state.playingTime} onChange={this.handleChange} />

                    <label className='gameLabel'> Category: </label>
                    <input type="text" className='gameInput' name='category' value={this.state.category} onChange={this.handleChange} />
                    
                    <label className='gameLabel'> Description: </label>
                    <input type="text" className='gameInput' name='description' value={this.state.description} onChange={this.handleChange} />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AddingGameForm;