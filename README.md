# Just Divide - Kid Mode (ReactJS)

A math-based puzzle game where children master division through strategic tile placement.

| Category | Details |
| :--- | :--- |
| **Tech Stack** | ReactJS, CSS (Media Queries) |
| **Libraries** | @dnd-kit/core (for Mobile/Touch support) |
| **Persistence** | LocalStorage (Best Score) |
| **Status** | Core Gameplay & Logic Complete |

---

## 🎯 Approach & Decisions
* [cite_start]**Mobile-First Interaction:** I chose `@dnd-kit/core` specifically to ensure the game works on touchscreens, overcoming limitations found in other drag-and-drop libraries[cite: 65, 97].
* [cite_start]**Dynamic Difficulty:** Implemented a leveling system where the number range expands (e.g., Level 1: 1-10 to Level 3: 1-50) to keep gameplay engaging[cite: 74, 76].
* [cite_start]**Core Logic:** Fully implemented division-based merges: equal tiles vanish, and divisible tiles reduce to their quotient[cite: 38].

## 🛠 Challenges Overcome
* [cite_start]**Responsive Layout:** Used CSS Media Queries to ensure the $4\times4$ grid scales accurately across mobile and desktop[cite: 84, 111].
* [cite_start]**D&D State Management:** As a new concept for me, I focused on syncing the draggable tile state with the 16 grid slots for seamless placement[cite: 99].
* [cite_start]**Asset Alignment:** Managed complex UI layering, specifically centering the "Cat" assets above the grid despite asset-specific padding[cite: 47, 94].

## 💡 Key Improvements & Suggestions
* [cite_start]**Current Gaps:** Undo and Hint systems are planned for future updates[cite: 103].
* **Power-Ups:** I suggest adding "Special Blocks" that grant extra Trash uses or a second "KEEP" slot when cleared.
* **Starting Difficulty:** To increase challenge at higher levels, we could spawn difficult prime numbers (like 23 or 27) in random cells at the start of a round.
* **Multiplayer:** A timed "Head-to-Head" mode would add a social, competitive element for students.