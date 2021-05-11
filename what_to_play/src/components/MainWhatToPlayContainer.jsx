import React, { Component } from 'react';
import games from "../gameData/gamesToPlay";
import AddingGameForm from './AddingGameForm';
import GameList from './GameList';
import SearchingForAGame from './SearchingForAGame';

class MainWhatToPlayContainer extends Component {
    constructor() {
        super()

        this.state = {
            allGames: games,
            showGameForm: false,
            numberUserInputted: 0,
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

    //search games by amount of players
    howManyWantToPlay = (number) => {

        this.setState({
            numberUserInputted: parseInt(number)
        })

    }



    render() {
        return (
            <div>
                <div className="headerDiv">
                    <text className="pageHeader">What To Play???</text>
                </div>
                {/* toggle to show game form */}
                <div className="buttonContainerForCenter">
                    <button className='addButton' onClick={this.toggleShowGameForm}>Add a Game</button>
                </div>
                
                {this.state.showGameForm
                    ? <AddingGameForm addGameToList={this.addGameToList} />
                    : null
                }
                <SearchingForAGame howManyWantToPlay={this.howManyWantToPlay} />
                {/* mapping though game array */}
                <div className='gameListHolder'>
                    {this.state.allGames.map((oneGame, i) =>

                        this.state.numberUserInputted >= oneGame.minNumberOfPlayers
                            ?
                            this.state.numberUserInputted <= oneGame.maxNumberOfPlayers
                                ? <GameList index={i} oneGame={oneGame} />
                                : null
                            // <text>Oh no! Sorry, but you don't have a game for that number of players on file.</text>
                            : null

                    )}
                </div>
            </div>
        );
    }
}

export default MainWhatToPlayContainer;