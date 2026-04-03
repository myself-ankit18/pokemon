# Pokedex - A Modern Pokemon Database

![Pokemon App Mockup](file:///C:/Users/LENOVO/.gemini/antigravity/brain/0cbdb7b3-e468-4a64-a59b-a8f02ed690dd/pokemon_app_mockup_1775204881818.png)

## Overview
A sleek, responsive React application that fetches and displays detailed information about the first 200 Pokemon from the [PokeAPI](https://pokeapi.co/). Built with performance and elegance in mind using React 19 and Tailwind CSS.

## Key Features
- **Search Functionality**: Quickly find your favorite Pokemon by name.
- **Filter by Type**: Narrow down your search by selecting specific Pokemon types (Fire, Water, Grass, etc.).
- **Detailed Stats**: Each card displays height, weight, speed, experience, attack, and defense.
- **Glassmorphic UI**: A premium, modern look with cards featuring soft shadows and clean typography.
- **Responsive Grid**: Optimized for mobile, tablet, and desktop viewing.

## Tech Stack
- **Frontend**: [React 19 (RC)](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Data Source**: [PokeAPI](https://pokeapi.co/)

## Getting Started

### Prerequisites
- Node.js (v18 or later)
- Bun (optional, but recommended as it's used for lock files in this repo)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/myself-ankit18/pokemon.git
   cd pokemon
   ```

2. Install dependencies:
   ```bash
   bun install
   # OR
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure
- `src/components/Pokemon.jsx`: Houses the main application logic, data fetching, and filtering.
- `src/components/PokemonCards.jsx`: A reusable component for individual Pokemon cards.
- `index.html`: The entry point for the Vite application.
- `tailwind.config.js`: Configuration for standard and custom Tailwind styling.

## Future Enhancements
- [ ] Add pagination for more than 200 Pokemon.
- [ ] Implementation of a "Favorites" list using LocalStorage.
- [ ] Add detailed evolution chain data.
- [ ] Implement a dark mode toggle.

## Author
[myself-ankit18](https://github.com/myself-ankit18)

---
*Created with care by Antigravity AI.*
