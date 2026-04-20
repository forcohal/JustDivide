# Just Divide - Kid Mode (ReactJS)

I built this math-based puzzle game to help kids (ages 7-12) practice division through a simple, interactive interface. The goal was to take a design brief and turn it into a working React application.

### 🎯 How I Built This
* **The Tech Stack:** I used **ReactJS** for the core logic and **CSS** for the layout and styling.
* **Real Mobile Support:** I originally tried a different drag-and-drop library, but it didn't work well on mobile. I switched to **@dnd-kit/core** specifically so that kids could play on tablets or phones using touch.
* **Game Logic:** I wrote the code to handle merges the second a tile is dropped. If numbers match, they vanish; if one divides into the other, it replaces the tile with the result.
* **Difficulty Scaling:** To keep the game from getting boring, I made the numbers get larger as the player levels up—starting with 1–10 and moving up to 1–50.

### 🛠 The Challenges I Faced
* **Learning Drag & Drop:** This was my first time ever working with drag-and-drop mechanics. It was a huge learning curve to figure out how to get the "active" tile to talk to the 16 different grid slots without the app crashing.
* **The "Responsive" Headache:** Making the game look good on both a giant monitor and a tiny phone was tough. I used **Media Queries** to keep the grid centered and readable so the UI didn't break on smaller screens.
* **The Cat Image Problem:** The cat image assets had a lot of empty space around them, which made alignment tricky. I had to spend extra time on the positioning to make sure the cat sat perfectly on top of the grid as shown in the design.

### 🚧 What’s Next & My Ideas
* **Current Gaps:** I haven't added the **Undo** or **Hint** systems yet. I also want to keep polishing the UI to get it even closer to the original brief.
* **Power-up Concept:** I’d love to add "Special Blocks" that give you a reward when you break them—like a tool to delete a block from the grid or an extra "Keep" slot.
* **Tougher Starts:** For higher levels, I’d suggest starting the game with "hard" numbers (like 23 or 27) already placed on the grid to force kids to think more strategically.
* **Multiplayer:** I think a timed "Head-to-Head" mode would be great for kids to compete with their friends for the highest score.