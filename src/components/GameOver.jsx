
import catImg from "../assets/Cat.png";
export default function GameOver({ score, highScore, onRestart }) {
  return (
    <div className="game-over">
        <img src={catImg} alt="Game Over" className="cat-img" />
        <div className="game-over-content">

            <h2>Game Over!</h2>
            <p>Your score: {score}</p>
            <p>High score: {highScore}</p>
            <button onClick={onRestart}>Play Again</button>
        </div>
        
    </div>
  );
}
