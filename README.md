# Just Divide - Kid Mode (ReactJS Implementation)

[cite_start]A visually engaging, math-based puzzle game for children aged 7-12[cite: 15]. [cite_start]The goal is to master division by dragging and dropping tiles into a grid to create merges based on mathematical factors[cite: 16].

## 🚀 Approach & Key Decisions

* [cite_start]**Framework Choice:** Built using **ReactJS** to manage a clean component structure and handle complex game states[cite: 81, 87].
* **Drag & Drop Logic:** Implemented using the `@dnd-kit/core` library, specifically `useDraggable` and `useDroppable`. [cite_start]I transitioned to this library to ensure the game remains functional on mobile and touch devices, as standard libraries often lack robust mobile support[cite: 65, 99].
* [cite_start]**Mathematical Logic:** Merges are calculated immediately upon placement[cite: 35, 42].
    * [cite_start]**Equal Tiles:** If values match, both are removed[cite: 38].
    * [cite_start]**Divisible Tiles:** The larger value is replaced by the quotient, and the smaller tile is removed[cite: 38].
* [cite_start]**Difficulty Scaling:** To keep players challenged, I implemented logic where the number range increases with each level (e.g., Level 1: 1-10, Level 2: 1-30, Level 3: 1-50)[cite: 76].
* [cite_start]**Persistence:** Used `localStorage` to save and display the player's best score across sessions[cite: 89, 104].

## 🛠 Challenges Overcome

* [cite_start]**Drag and Drop Learning Curve:** As drag-and-drop was a new concept for me, the primary challenge was coordinating state between the active tile and the 16 individual grid slots[cite: 49, 99].
* [cite_start]**Responsive Scaling:** Achieving a "visually faithful" layout across desktop, tablet, and mobile was a significant hurdle[cite: 84, 97]. [cite_start]I utilized CSS **Media Queries** to ensure the game board remains centered and legible on various screen sizes[cite: 50, 111].
* **Asset Positioning:** I encountered issues with the "Game Over" cat image due to extra transparent padding within the asset. [cite_start]While I successfully centered the UI, I plan to improve accuracy by using precise screen coordinates for asset layering[cite: 47, 94].

## 🚧 Known Limitations

* [cite_start]**Undo/Hints:** The undo (up to 10 states) and hint systems are currently not implemented[cite: 103].
* [cite_start]**UI Polish:** The visual recreation is functional but requires further refinement to be 100% identical to the provided design brief[cite: 113].

## 💡 Future Improvements & Suggestions

* **Power-Up Blocks:** Introduce special grid blocks that, when cleared, provide rewards such as:
    * **Grid Eraser:** Remove any single block from the board.
    * **Trash Boost:** Grant an extra discard use.
    * **Double Keep:** Unlock a second storage slot for tiles.
* **Initial Board Complexity:** At higher levels (e.g., Level 2+), spawn "pre-filled" cells with difficult numbers like 23 or 27 to force more strategic planning from the start.
* **Multiplayer Mode:** Add a timed "Head-to-Head" mode where two players compete to see who can achieve the highest score within a set duration.