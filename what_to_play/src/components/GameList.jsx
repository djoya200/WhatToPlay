import React, { Component } from 'react';

class GameList extends Component {
    render() {
        return (
            <div className="mainContainerForGameInfo">

                <div className="gameInfoBox" >
                <h1> {this.props.oneGame.gameName}</h1>
                <img className="imgOfGame"  src={this.props.oneGame.gameImage} alt="image of game" /> 
                <h3> Players: {this.props.oneGame.minNumberOfPlayers} - {this.props.oneGame.maxNumberOfPlayers}</h3>
                <h3>Playing Time: {this.props.oneGame.playingTime}</h3>
                <h3>Category: {this.props.oneGame.category}</h3>
                <h3>Game Description: {this.props.oneGame.description}</h3>
            </div>
            </div>
           
        );
    }
}

export default GameList;