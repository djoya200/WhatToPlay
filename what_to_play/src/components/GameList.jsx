import React, { Component } from 'react';

class GameList extends Component {
    render() {
        return (
            <div className="mainContainerForGameInfo">
                <div className="imgOfGame"></div>

                <div className="gameInfoBox" >
                <h2>Name of Game: {this.props.oneGame.gameName}</h2>
                <h3>Minimum Number of Players: {this.props.oneGame.minNumberOfPlayers}</h3>
                <h3>Maximum Number of Players: {this.props.oneGame.maxNumberOfPlayers}</h3>
                <h3>Playing Time: {this.props.oneGame.playingTime}</h3>
                <h3>Category: {this.props.oneGame.category}</h3>
                <h3>Game Description: {this.props.oneGame.description}</h3>
            </div>
            </div>
           
        );
    }
}

export default GameList;