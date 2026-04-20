

export default function GameOver({ score, highScore, onRestart }) {
  return (
    <div className="game-over">
      <h2>Game Over!</h2>
      <p>Your score: {score}</p>
      <p>High score: {highScore}</p>
      <button onClick={onRestart}>Play Again</button>
    </div>
  );
}
