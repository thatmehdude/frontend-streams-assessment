# Peppermint Frontend Assessment

A Next.js application implementing an AI chatbot interface with interactive card stacks.

## Approach

### Component Structure
The application follows a modular component architecture with clear separation of concerns

### Technology Decisions

**Framer Motion for Card Stack**
Framer Motion for the card stack animation because it provides:
- Smooth, physics-based animations out of the box
- Built-in gesture detection (drag, swipe) with minimal code
- AnimatePresence for handling card transitions elegantly
- Better performance than CSS-only solutions for complex animations

**TypeScript**
Strong typing ensures data integrity across components and makes the codebase more maintainable.

**Tailwind CSS**
Utility-first approach enables rapid UI development while maintaining consistency with the Figma design specifications.

### Key Features Implemented

1. **Card Stack Modal**
   - Swipeable cards with gesture detection
   - Visual stacking effect with offset positioning
   - Click outside to close functionality
   - Smooth rotation animations on drag

2. **Responsive Layout**
   - Single column on mobile
   - Two-column grid on tablet and desktop
   - Collapsible sidebar for navigation

## Running the Project Locally

### Prerequisites
- Node.js
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/peppermint-ppm/frontend-streams-assessment
cd frontend-streams-assessment
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000/dashboard/streams
```