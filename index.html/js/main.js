import Game from './Game.js'
import GameView from "./Gameview.js"

let gameView=new GameView()

let game=new Game();


document.querySelector('.restart').addEventListener('click', onRestartClick)

let tiles= document.querySelectorAll('.board-tile')


tiles.forEach((tile,index)=>{
    tile.addEventListener("click", ()=>{
      
        game.makeMove(index)
        gameView.updateBoard(game);

    })
})

function onRestartClick(){
    game=new Game();
    gameView.updateBoard(game)
}
gameView.updateBoard(game)