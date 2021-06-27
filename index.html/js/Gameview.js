export default class GameView{


    constructor(){
        
    }

    updateBoard(game){
        this.updateTurn(game)

        for(let i= 0; i< game.board.length; i++){
            
            const tile=document.querySelector(`.board-tile[data-index='${i}']`)

            tile.textContent=game.board[i];

            if (tile.textContent=="X") {
                tile.style.color= "#42BED7 "
            }else{
                tile.style.color="#d7bafb"
            }
            
            
        }

        let winningCombination=game.findWinningCombinations();

        if (winningCombination) {

            const [a,b,c]=winningCombination;

           
                const tileA=document.querySelector(`.board-tile[data-index='${a}']`)  ;
                tileA.style.color='green';

                const tileB=document.querySelector(`.board-tile[data-index='${b}']`)  ;
                tileB.style.color='green'

                const tileC=document.querySelector(`.board-tile[data-index='${c}']`)  ;
                tileC.style.color='green'
    
            
             
        }


    }

    updateTurn(game){
        let playerX=document.querySelector('.player-X');

        let playerO=document.querySelector('.player-O');
        
        if (game.turn=="O") {
            playerX.classList.remove('active');
        }else{
            playerO.classList.remove('active')
        }
        

        if (game.turn=="X") {
            playerX.classList.add('active')
        }else{
            playerO.classList.add('active')
        }

        let winningCombination=game.findWinningCombinations();

        if (winningCombination) {

            const [a,b,c]=winningCombination;

           
                const tileA=document.querySelector(`.board-tile[data-index='${a}']`)  ;
                tileA.style.color='green';

                const tileB=document.querySelector(`.board-tile[data-index='${b}']`)  ;
                tileB.style.color='green'

                const tileC=document.querySelector(`.board-tile[data-index='${c}']`)  ;
                tileC.style.color='green'
    
            
             
        }
       
    }

}