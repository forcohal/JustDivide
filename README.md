# Just Divide - Kid Mode (ReactJS)

A math-based puzzle game designed for children aged 7-12 to master division through strategic gameplay.

| Category | Details |
| :--- | :--- |
| **Tech Stack** | ReactJS, HTML5, CSS3 |
| **Libraries** | @dnd-kit/core (Ensures Mobile/Touch support) |
| **Persistence** | LocalStorage (Best Score tracking) |
| **Status** | Core Gameplay & Logic Fully Functional |

---

## 🎯 Approach & Decisions
* **Mobile-First Interaction:** I chose `@dnd-kit/core` specifically to ensure the game remains functional on touch devices, overcoming the mobile limitations found in other drag-and-drop libraries.
* **Dynamic Difficulty:** I implemented logic where the number range expands as the player levels up (e.g., Level 1: 1-10, Level 2: 1-30) to keep the challenge engaging.
* **Mathematical Logic:** Merges are resolved immediately. Equal tiles vanish, and divisible tiles are replaced by their quotient.

## 🛠 Challenges Overcome
* **D&D State Management:** As drag-and-drop was a new concept for me, I focused on syncing the state between the active tile queue and the 16-slot grid for a seamless experience.
* **Responsive Scaling:** Achieving a visually faithful layout was a priority. I utilized CSS Media Queries to ensure the grid remains centered and legible across desktop, tablet, and mobile.
* **Asset Positioning:** Handled complex UI layering, specifically centering the cat assets above the grid while accounting for transparency padding within the provided images.

## 🚧 Known Limitations
* **Advanced Features:** The Undo (up to 10 states) and Hint systems are currently in the roadmap and not yet implemented.
* **Visual Refinement:** While functional, the UI polish is ongoing to reach 100% fidelity with the original design brief.

## 💡 Future Suggestions
* **Power-Up Blocks:** Introduce special blocks that grant rewards like a "Grid Eraser" or an extra "KEEP" slot when cleared.
* **Initial Board Complexity:** At higher levels, spawn "pre-filled" cells with difficult numbers (like 23 or 27) to force deeper strategic planning.
* **Multiplayer Mode:** Add a timed "Head-to-Head" mode for kids to compete with friends for the high score.