const games = [
    {
        gameName: "Connect 4",
        minNumberOfPlayers: "2",
        maxNumberOfPlayers: "2",
        playingTime: "1-10 minutes",
        category: "Connection Game",
        description: "Connect-Four is a tic-tac-toe-like two-player game in which players alternately place pieces on a vertical board 7 columns across and 6 rows high. Each player uses pieces of a particular color (commonly black and red, or sometimes yellow and red), and the object is to be the first to obtain four pieces in a horizontal, vertical, or diagonal line. Because the board is vertical, pieces inserted in a given column always drop to the lowest unoccupied row of that column. As soon as a column contains 6 pieces, it is full and no other piece can be placed in the column.",
        gameImage: 'https://media.kohlsimg.com/is/image/kohls/1725763?wid=1200&hei=1200&op_sharpen=1'
    },
    {
        gameName: "Clue",
        minNumberOfPlayers: "2",
        maxNumberOfPlayers: "6",
        playingTime: "45 minutes",
        category: "Mystery",
        description: "Clue is a suspenseful murder mystery game that turns everyone into a detective. There’s been a murder in the Boddy Mansion and it’s up to you to find the culprit. There are only six suspects and you are one of them. Move your game pieces through the rooms and secret passageways of the mansion depicted on the game board to look for clues.",
        gameImage: 'https://i5.walmartimages.com/asr/d5449a01-b3a9-40c4-8bad-17a116d1043e_1.71becdfe4cc9920db3b1a2610a267301.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'
    },
    {
        gameName: "Battleship",
        minNumberOfPlayers: "2",
        maxNumberOfPlayers: "2",
        playingTime: "45 Minutes",
        category: "Strategy",
        description: "In this two-person game of strategy, players secretly arrange their ships on a lettered and numbered 10x10 grid and then try to locate and destroy their opponent’s fleet.",
        gameImage: 'https://images-na.ssl-images-amazon.com/images/I/81u7L0geagL._AC_SX466_.jpg'
    },
    {
        gameName: "Jenga",
        minNumberOfPlayers: "1",
        maxNumberOfPlayers: "8",
        playingTime: "20 Minutes",
        category: "Party Game",
        description: "Jenga is played with 54 stacked wooden blocks. Can you take turns moving them without toppling the tower?",
        gameImage: 'https://target.scene7.com/is/image/Target/GUEST_2ff3e3eb-c38d-4c5a-a6bc-7b95b96c3fec?wid=488&hei=488&fmt=pjpeg'
    },
    {
        gameName: "Twister",
        minNumberOfPlayers: "2",
        maxNumberOfPlayers: "4",
        playingTime: "15 minutes",
        category: "Party Game",
        description: "The party game that ties you up in knots. Can you be the last to fall?",
        gameImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnpfJ9GTxRTUmJa05sfOZ0acZ5N36ozGAgWdHkZD4bU0PhoTyiKGMhn5ntMnkS0ks1h2BwsG9&usqp=CAc'
    },
    {
        gameName: "Monopoly",
        minNumberOfPlayers: "2",
        maxNumberOfPlayers: "6",
        playingTime: "1 - 2 hours",
        category: "Economic",
        description: "The thrill of bankrupting an opponent, but it pays to play nice, because fortunes could change with the roll of the dice. Experience the ups and downs by collecting property colors sets to build houses, and maybe even upgrading to a hotel! Can you run this town",
        gameImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwv0ZvKQLBe5b8DmX7THv0VclQyP6JCYbLK3-HRW58-ELo9Dd4IknBcSLvbg&usqp=CAc'
    },
    {
        gameName: "Scrabble",
        minNumberOfPlayers: "2",
        maxNumberOfPlayers: "4",
        playingTime: "90 minutes",
        category: "Word Game",
        description: "Scrabble is a beloved word game. It’s like a giant word jumble with endless possibilities.",
        gameImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA2xQpwXW3HyYblQX7anWDVEv5M-4Khiy62Vl7gBlBUju4bVEOoVvUmFL0r0ubBEFV2-sAgQlm&usqp=CAc'
    },
    {
        gameName: "Taboo",
        minNumberOfPlayers: "4",
        maxNumberOfPlayers: "10",
        playingTime: "30 Minutes",
        category: "Party Game",
        description: "Get your team to guess the target but you can't use the most obvious clues.",
        gameImage: 'https://i5.walmartimages.com/asr/2b39076f-e153-4b8a-accc-7a5fbbda7e00_1.07b64f061e1b81763ac1a05e0e34c127.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'
    },
    {
        gameName: "Pictionary",
        minNumberOfPlayers: "3",
        maxNumberOfPlayers: "16",
        playingTime: "90 minutes",
        category: "Party Game",
        description: "Guess what you team is drawing so you can Win, Lose, or Draw.",
        gameImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWj2Bw3EzAuyMDWVNk2yTbOtwZ0Jziu2eaRimId9dDjJqZGnoCo2pGZb4_vA&usqp=CAc'
    },
    {
        gameName: "Cards Against Humanity",
        minNumberOfPlayers: "4",
        maxNumberOfPlayers: "30",
        playingTime: "30 Minutes +",
        category: "Humor",
        description: "Cards with two sets of cards. Players take turns submitting answers and shuffling those cards and reads them aloud to the group before selecting a favorite. Player with the most favorite wins! ",
        gameImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSotoRG9XnQFkHxM0pLVaNiDk17mbepQ-8jPA&usqp=CAU'
    },
    {
        gameName: "Phase 10",
        minNumberOfPlayers: "2",
        maxNumberOfPlayers: "6",
        playingTime: "45-90 minutes",
        category: "card game",
        description: "Phase 10 is a card game for 2-6 players. The goal of the game is to complete all ten phases, one round at a time. At the end of a round players will add up their score based on the number and type of cards left in their hand. The goal is to have the lowest score at the end of the game.",
        gameImage: 'https://www.mattelgames.com/sites/mattel_games/files/styles/game_list_278x278/public/2017-08/phase10.jpg?itok=Rb-nr6v0'
    },
    {
        gameName: "Axis and Allies",
        minNumberOfPlayers: "2",
        maxNumberOfPlayers: "5",
        playingTime: "2-10 hours",
        category: "boardgame scenario",
        description: "Axis & Allies is a series of World War II strategy board games, revered by history buffs and strategy game enthusiast worldwide. This family of games takes you back to the front lines for some of the most memorable battles of all time.",
        gameImage: 'https://images-na.ssl-images-amazon.com/images/I/81m0JjDbfpL._AC_SL1439_.jpg'
    },
    {
        gameName: "Kerplunk",
        minNumberOfPlayers: "2",
        maxNumberOfPlayers: "4",
        playingTime: "15 minutes",
        category: "",
        description: "Create a lattice of sticks midway through the translucent tube and place the marbles on top; players choose one of four compartments in the base -2 to 4 people can play!Players take turns removing sticks while trying to prevent the marbles from dropping through. The player with the least number of marbles at the end of the game, wins!",
        gameImage: 'https://i5.walmartimages.com/asr/49ad7c50-9d4a-49a5-835e-0f4b47c04f46_1.7a7a6bf63c7ba02b1354e7d5b5581887.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff'
    },
    //    {
    //     gameName: "Tiwster",
    //     minNumberOfPlayers: "",
    //     maxNumberOfPlayers: "",
    //     playingTime: "",
    //     category: "Physical Skill Game",
    //     description: "",
    //     gameImage: ''
    // },

    // {
    //     gameName: "",
    //     minNumberOfPlayers: "",
    //     maxNumberOfPlayers: "",
    //     playingTime: "",
    //     category: "",
    //     description: "",
    //     gameImage: ''
    // },
]

export default games