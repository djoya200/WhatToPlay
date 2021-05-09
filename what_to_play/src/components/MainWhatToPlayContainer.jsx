import React, { Component } from 'react';
import games from "../gameData/gamesToPlay";
import GameList from './GameList';

class MainWhatToPlayContainer extends Component {
    constructor() {
        super()

        this.state = {
            allGames: games
        }
    }



    render() {
        return (
            <div>
                <h1>What To Play???</h1>

                {/* mapping though game array */}
                {this.state.allGames.map((oneGame, i) =>
                    <GameList index={i} oneGame={oneGame} />
                )}

            </div>
        );
    }
}

export default MainWhatToPlayContainer;