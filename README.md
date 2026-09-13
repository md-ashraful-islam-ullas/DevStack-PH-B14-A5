# Dev Stack

A simple app to browse frontend, backend, database, and tooling technologies, and add the ones you want to your own stack.

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS
- DaisyUI
- React Toastify

## Features

- Browse technologies by category (frontend, backend, database, tooling)
- Add or remove a technology from your stack, or clear it all at once
- Toast notification every time you add or remove something
- Loading state while the technology list is being fetched
- Empty state shown when your stack has nothing in it yet


## Project Structure

```
src/
├── assets/                  # images and icons
├── components/
│   ├── Nav.tsx              # top navigation bar
│   ├── Banner.tsx           # hero section
│   ├── TechnologyHeader.tsx
│   ├── TechCard.tsx         # loads the tech list and holds the stack state
│   ├── TechnologyCard.tsx   # single technology card
│   ├── TechCardLoading.tsx  # loading skeleton
│   ├── YourStackCard.tsx    # your selected stack
│   ├── CardWithStack.tsx    # single item inside your stack
│   ├── EmptyStack.tsx       # shown when stack is empty
│   └── Footer.tsx
├── Technology.ts            # Technology type
└── App.tsx
```

## Getting Started

```bash
git clone <repo-url>
cd dev-stack
npm install
npm run dev
```

The app expects a `data.json` file in the `public` folder with the list of technologies.

## How It Works

`App.tsx` fetches `data.json` once and passes the promise down to `TechCard`, which reads it with React's `use()` hook inside a `Suspense` boundary. `TechCard` owns the stack state and passes `addToStack` / `removeFromStack` down to the technology grid and the stack panel.



## Q&A
 
### What is `JSX`, and why is it used in React?
 
```
JSX is a syntax extension for JavaScript that looks like HTML code. It is used in React because it makes code easier to read, more concise, and easier to maintain. And it is also standard way to write React UI code.
```
 
### What is the difference between `props` and `state` ?
 
```
Props are data that passed from parent component to child component. State is data that components stores and manages. When State changes, React update it's UI and show new data.
```
 
### What does the `useState` hook do, and where did you use it in this project?
 
```
useState lets component hold a value that can change. It gives us a value and a function to update that value. When the value is updated, React re-renders the component and updates the UI.

I used it in two places in DevStack:
- App.tsx: to store the data-fetching promise so it's only created once.
- TechCard.tsx: to store the list of technologies added to "Your Stack"
```

### What does the `useEffect` hook do, and why did you need it to load the `JSON` data?

```
useEffect lets you run some code after React renders the component. It is commonly used for things like fetching data, calling APIs etc.

For loading the JSON data we need useEffect because we wanted to fetch the JSON data when the component loads. Then store the data in state so React can display it. 
```

### Why does every item in a `.map()` list need a unique `key` `prop`?

```
Every item in .map() list need a key prop so that React can identify each item and track changes when list updated.
```

### What is conditional rendering? Show one place you used it (example: the empty stack message).

```
Conditional rendering means showing different UI based on a condition.

I used it in (YourStackCard.tsx):

- If stack.length === 0, the <EmptyStack /> component is displayed.
- Otherwise, the selected technologies and other stack content are displayed.
```

### How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

```
Parent -> Child

The parent passes data using props.

Parent <- Child

React doesn't directly let child component send data to parent. Instead we do State Lifting to the parent and pass a function to the child as props.
```