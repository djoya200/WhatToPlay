import React, { Component } from 'react';
import games from "../gameData/gamesToPlay";
import AddingGameForm from './AddingGameForm';
import GameList from './GameList';

class MainWhatToPlayContainer extends Component {
    constructor() {
        super()

        this.state = {
            allGames: games,
            showGameForm: false
        }
    }

    //adding a game to the list
    addGameToList = (newGameFromForm) => {

        let gameCopy = this.state.allGames
        gameCopy.push(newGameFromForm)
        this.setState({
            allGames: gameCopy
        })
        console.log(this.state.allGames)

        this.toggleShowGameForm()

    }
    // show the form or not toggle
    toggleShowGameForm = () => {

        this.setState({ showGameForm: !this.state.showGameForm })

    }



    render() {
        return (
            <div>
                <h1>What To Play???</h1>

                {/* toggle to show game form */}
                <button onClick={this.toggleShowGameForm}>Add a Game</button>
                {this.state.showGameForm
                    ? <AddingGameForm addGameToList={this.addGameToList} />
                    : null
                }
                {/* mapping though game array */}
                {this.state.allGames.map((oneGame, i) =>
                    <GameList index={i} oneGame={oneGame} />
                )}

            </div>
        );
    }
}

export default MainWhatToPlayContainer;