// Course generation utilities

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Note {
  id: string;
  title: string;
  content: string;
  timestamp: number;
}

export interface GeneratedCourse {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  notes: Note[];
  quiz: Quiz;
  flashcards: Flashcard[];
  videoUrl?: string;
  pdfUrl?: string;
  createdAt: number;
  progress: number;
}

// Mock course generation functions
export async function generateCourseFromYoutube(url: string): Promise<GeneratedCourse> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const courseId = `youtube-${Date.now()}`;
  const videoId = extractVideoId(url);
  
  return {
    id: courseId,
    title: "JavaScript Fundamentals",
    description: "Learn the core concepts of JavaScript programming including variables, functions, objects, and modern ES6+ features.",
    thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    duration: "2h 30m",
    difficulty: 'Beginner',
    category: "Programming",
    videoUrl: url,
    createdAt: Date.now(),
    progress: 0,
    notes: [
      {
        id: "note-1",
        title: "Introduction to JavaScript",
        content: `# JavaScript Fundamentals

## What is JavaScript?
JavaScript is a high-level, interpreted programming language that is one of the core technologies of the World Wide Web. It enables interactive web pages and is an essential part of web applications.

## Key Features:
- **Dynamic Typing**: Variables can hold different types of values
- **First-class Functions**: Functions are treated as values
- **Prototype-based OOP**: Object-oriented programming through prototypes
- **Event-driven Programming**: Responds to user interactions

## Basic Syntax:

\`\`\`javascript
// Variables
let name = "John";
const age = 25;
var isStudent = true;

// Functions
function greet(name) {
    return "Hello, " + name + "!";
}

// Arrow Functions (ES6+)
const add = (a, b) => a + b;

// Objects
const person = {
    name: "Alice",
    age: 30,
    greet() {
        console.log("Hi, I'm " + this.name);
    }
};
\`\`\`

## Modern JavaScript (ES6+):
- **Let and Const**: Block-scoped variable declarations
- **Template Literals**: String interpolation with backticks
- **Destructuring**: Extract values from arrays and objects
- **Modules**: Import and export functionality
- **Promises**: Handle asynchronous operations
- **Async/Await**: Cleaner asynchronous code

## Best Practices:
1. Use \`const\` by default, \`let\` when reassignment is needed
2. Use meaningful variable names
3. Keep functions small and focused
4. Handle errors appropriately
5. Use modern syntax features for cleaner code`,
        timestamp: Date.now()
      },
      {
        id: "note-2",
        title: "Variables and Data Types",
        content: `# Variables and Data Types in JavaScript

## Variable Declarations:

### var (Legacy)
\`\`\`javascript
var name = "John"; // Function-scoped
\`\`\`

### let (Modern)
\`\`\`javascript
let age = 25; // Block-scoped, can be reassigned
age = 26; // Valid
\`\`\`

### const (Modern)
\`\`\`javascript
const PI = 3.14159; // Block-scoped, cannot be reassigned
// PI = 3.14; // Error!
\`\`\`

## Primitive Data Types:

### String
\`\`\`javascript
const firstName = "Alice";
const lastName = 'Smith';
const fullName = \`\${firstName} \${lastName}\`; // Template literal
\`\`\`

### Number
\`\`\`javascript
const integer = 42;
const decimal = 3.14;
const negative = -10;
const infinity = Infinity;
const notANumber = NaN;
\`\`\`

### Boolean
\`\`\`javascript
const isActive = true;
const isComplete = false;
\`\`\`

### Undefined and Null
\`\`\`javascript
let undefinedVar; // undefined
const nullVar = null; // null (intentional absence of value)
\`\`\`

### Symbol (ES6+)
\`\`\`javascript
const sym = Symbol('description');
const uniqueKey = Symbol.for('key');
\`\`\`

### BigInt (ES2020)
\`\`\`javascript
const bigNumber = 123456789012345678901234567890n;
\`\`\`

## Reference Types:

### Objects
\`\`\`javascript
const person = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    }
};
\`\`\`

### Arrays
\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "hello", true, null, {name: "John"}];
\`\`\`

### Functions
\`\`\`javascript
function regularFunction() {
    return "Hello World";
}

const arrowFunction = () => "Hello World";
\`\`\`

## Type Checking:
\`\`\`javascript
typeof "hello"; // "string"
typeof 42; // "number"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" (this is a known quirk)
typeof {}; // "object"
typeof []; // "object"
typeof function() {}; // "function"
\`\`\``,
        timestamp: Date.now()
      }
    ],
    quiz: {
      id: "quiz-1",
      title: "JavaScript Fundamentals Quiz",
      questions: [
        {
          id: "q1",
          question: "Which of the following is the correct way to declare a constant variable in JavaScript?",
          options: ["var PI = 3.14", "let PI = 3.14", "const PI = 3.14", "constant PI = 3.14"],
          correctAnswer: 2,
          explanation: "The 'const' keyword is used to declare constants in JavaScript. Unlike 'var' and 'let', constants cannot be reassigned after declaration."
        },
        {
          id: "q2",
          question: "What will be the output of: typeof null",
          options: ["'null'", "'undefined'", "'object'", "'boolean'"],
          correctAnswer: 2,
          explanation: "This is a well-known quirk in JavaScript. typeof null returns 'object', which is considered a bug in the language but is kept for backward compatibility."
        },
        {
          id: "q3",
          question: "Which ES6+ feature allows you to embed expressions in string literals?",
          options: ["String concatenation", "Template literals", "String methods", "Regular expressions"],
          correctAnswer: 1,
          explanation: "Template literals, denoted by backticks (`), allow you to embed expressions using ${expression} syntax, making string interpolation much cleaner."
        },
        {
          id: "q4",
          question: "What is the main difference between 'let' and 'var'?",
          options: ["No difference", "let is block-scoped, var is function-scoped", "var is block-scoped, let is function-scoped", "let cannot be reassigned"],
          correctAnswer: 1,
          explanation: "'let' is block-scoped (only accessible within the nearest enclosing block), while 'var' is function-scoped (accessible throughout the entire function)."
        },
        {
          id: "q5",
          question: "Which of the following is NOT a primitive data type in JavaScript?",
          options: ["string", "number", "array", "boolean"],
          correctAnswer: 2,
          explanation: "Arrays are reference types (objects) in JavaScript, not primitive types. The primitive types are: string, number, boolean, undefined, null, symbol, and bigint."
        }
      ]
    },
    flashcards: [
      {
        id: "fc1",
        front: "What are the three ways to declare variables in JavaScript?",
        back: "var (function-scoped, legacy), let (block-scoped, reassignable), and const (block-scoped, non-reassignable)",
        difficulty: 'easy'
      },
      {
        id: "fc2",
        front: "What is the difference between null and undefined?",
        back: "undefined means a variable has been declared but not assigned a value. null is an intentional absence of any object value, assigned by the programmer.",
        difficulty: 'medium'
      },
      {
        id: "fc3",
        front: "How do you create a template literal in JavaScript?",
        back: "Use backticks (`) instead of quotes and embed expressions with ${expression} syntax. Example: `Hello ${name}!`",
        difficulty: 'easy'
      },
      {
        id: "fc4",
        front: "What does 'typeof []' return and why?",
        back: "It returns 'object' because arrays are a special type of object in JavaScript. To check for arrays specifically, use Array.isArray().",
        difficulty: 'medium'
      },
      {
        id: "fc5",
        front: "What is hoisting in JavaScript?",
        back: "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope during compilation. var declarations are hoisted and initialized with undefined, while let/const are hoisted but not initialized.",
        difficulty: 'hard'
      },
      {
        id: "fc6",
        front: "What are arrow functions and how do they differ from regular functions?",
        back: "Arrow functions are a concise way to write functions using => syntax. They don't have their own 'this' binding, cannot be used as constructors, and don't have arguments object.",
        difficulty: 'medium'
      },
      {
        id: "fc7",
        front: "What is destructuring in JavaScript?",
        back: "Destructuring allows you to extract values from arrays or properties from objects into distinct variables. Example: const {name, age} = person; or const [first, second] = array;",
        difficulty: 'medium'
      },
      {
        id: "fc8",
        front: "What is the difference between == and === in JavaScript?",
        back: "== performs type coercion (converts types before comparison), while === performs strict equality (no type conversion). Always prefer === for predictable comparisons.",
        difficulty: 'easy'
      }
    ]
  };
}

export async function generateCourseFromPdf(file: File): Promise<GeneratedCourse> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  const courseId = `pdf-${Date.now()}`;
  
  return {
    id: courseId,
    title: "React Development Guide",
    description: "Comprehensive guide to building modern web applications with React, including hooks, state management, and best practices.",
    thumbnail: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "4h 15m",
    difficulty: 'Intermediate',
    category: "Web Development",
    pdfUrl: URL.createObjectURL(file),
    createdAt: Date.now(),
    progress: 0,
    notes: [
      {
        id: "note-1",
        title: "Introduction to React",
        content: `# React Development Guide

## What is React?
React is a JavaScript library for building user interfaces, particularly web applications. It was developed by Facebook and is now maintained by Meta and the open-source community.

## Key Concepts:

### Components
React applications are built using components - reusable pieces of UI that can manage their own state.

\`\`\`jsx
// Functional Component
function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
}

// Class Component (Legacy)
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}!</h1>;
    }
}
\`\`\`

### JSX (JavaScript XML)
JSX allows you to write HTML-like syntax in JavaScript:

\`\`\`jsx
const element = (
    <div className="container">
        <h1>Welcome to React!</h1>
        <p>This is JSX syntax</p>
    </div>
);
\`\`\`

### Props
Props are how you pass data from parent to child components:

\`\`\`jsx
function UserCard({ name, email, avatar }) {
    return (
        <div className="user-card">
            <img src={avatar} alt={name} />
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    );
}

// Usage
<UserCard 
    name="John Doe" 
    email="john@example.com" 
    avatar="/avatar.jpg" 
/>
\`\`\`

### State
State allows components to manage and update their own data:

\`\`\`jsx
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}
\`\`\`

## React Hooks:
Hooks allow you to use state and other React features in functional components:

- **useState**: Manage component state
- **useEffect**: Handle side effects
- **useContext**: Access React context
- **useReducer**: Manage complex state logic
- **useMemo**: Optimize expensive calculations
- **useCallback**: Optimize function references

## Best Practices:
1. Keep components small and focused
2. Use functional components with hooks
3. Follow naming conventions (PascalCase for components)
4. Use PropTypes or TypeScript for type checking
5. Organize components in a logical folder structure
6. Use React DevTools for debugging`,
        timestamp: Date.now()
      },
      {
        id: "note-2",
        title: "React Hooks Deep Dive",
        content: `# React Hooks Deep Dive

## useState Hook
Manages local component state:

\`\`\`jsx
import { useState } from 'react';

function UserProfile() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        age: 0
    });
    
    const updateUser = (field, value) => {
        setUser(prevUser => ({
            ...prevUser,
            [field]: value
        }));
    };
    
    return (
        <form>
            <input 
                value={user.name}
                onChange={(e) => updateUser('name', e.target.value)}
                placeholder="Name"
            />
            <input 
                value={user.email}
                onChange={(e) => updateUser('email', e.target.value)}
                placeholder="Email"
            />
        </form>
    );
}
\`\`\`

## useEffect Hook
Handles side effects like API calls, subscriptions, and cleanup:

\`\`\`jsx
import { useState, useEffect } from 'react';

function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // Fetch users when component mounts
        async function fetchUsers() {
            try {
                const response = await fetch('/api/users');
                const userData = await response.json();
                setUsers(userData);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            } finally {
                setLoading(false);
            }
        }
        
        fetchUsers();
    }, []); // Empty dependency array = run once on mount
    
    useEffect(() => {
        // Cleanup function
        return () => {
            console.log('Component unmounting');
        };
    }, []);
    
    if (loading) return <div>Loading...</div>;
    
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}
\`\`\`

## useContext Hook
Access context values without prop drilling:

\`\`\`jsx
import { createContext, useContext, useState } from 'react';

// Create context
const ThemeContext = createContext();

// Provider component
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Consumer component
function ThemedButton() {
    const { theme, setTheme } = useContext(ThemeContext);
    
    return (
        <button 
            className={\`btn btn-\${theme}\`}
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            Toggle Theme
        </button>
    );
}
\`\`\`

## useReducer Hook
Manage complex state logic:

\`\`\`jsx
import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return initialState;
        default:
            throw new Error();
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <div>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
}
\`\`\`

## Performance Optimization Hooks

### useMemo
Memoize expensive calculations:

\`\`\`jsx
import { useMemo, useState } from 'react';

function ExpensiveComponent({ items }) {
    const [filter, setFilter] = useState('');
    
    const filteredItems = useMemo(() => {
        return items.filter(item => 
            item.name.toLowerCase().includes(filter.toLowerCase())
        );
    }, [items, filter]);
    
    return (
        <div>
            <input 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Filter items..."
            />
            {filteredItems.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
}
\`\`\`

### useCallback
Memoize function references:

\`\`\`jsx
import { useCallback, useState } from 'react';

function TodoList({ todos }) {
    const [filter, setFilter] = useState('all');
    
    const handleToggle = useCallback((id) => {
        // This function reference will only change if dependencies change
        setTodos(prevTodos => 
            prevTodos.map(todo => 
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }, []);
    
    return (
        <div>
            {todos.map(todo => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    onToggle={handleToggle} 
                />
            ))}
        </div>
    );
}
\`\`\``,
        timestamp: Date.now()
      }
    ],
    quiz: {
      id: "quiz-1",
      title: "React Fundamentals Quiz",
      questions: [
        {
          id: "q1",
          question: "What is the correct way to update state in a functional component?",
          options: [
            "this.setState({value: newValue})",
            "setState(newValue)",
            "const [state, setState] = useState(); setState(newValue)",
            "state = newValue"
          ],
          correctAnswer: 2,
          explanation: "In functional components, you use the useState hook which returns an array with the current state value and a setter function."
        },
        {
          id: "q2",
          question: "When does the useEffect hook run by default?",
          options: [
            "Only on component mount",
            "Only on component unmount", 
            "After every render",
            "Only when dependencies change"
          ],
          correctAnswer: 2,
          explanation: "By default, useEffect runs after every render (both mount and update). You can control this behavior with the dependency array."
        },
        {
          id: "q3",
          question: "What is JSX?",
          options: [
            "A new programming language",
            "JavaScript XML - a syntax extension for JavaScript",
            "A CSS framework",
            "A database query language"
          ],
          correctAnswer: 1,
          explanation: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It gets transpiled to regular JavaScript."
        },
        {
          id: "q4",
          question: "How do you pass data from a parent component to a child component?",
          options: [
            "Using state",
            "Using props",
            "Using context",
            "Using refs"
          ],
          correctAnswer: 1,
          explanation: "Props (properties) are the primary way to pass data from parent components to child components in React."
        },
        {
          id: "q5",
          question: "What is the purpose of the dependency array in useEffect?",
          options: [
            "To define which components can use the effect",
            "To control when the effect should run",
            "To pass data to the effect",
            "To handle errors in the effect"
          ],
          correctAnswer: 1,
          explanation: "The dependency array controls when useEffect runs. If empty [], it runs once on mount. If it contains values, it runs when those values change."
        }
      ]
    },
    flashcards: [
      {
        id: "fc1",
        front: "What is the difference between props and state in React?",
        back: "Props are read-only data passed from parent to child components. State is mutable data managed within a component that can trigger re-renders when updated.",
        difficulty: 'easy'
      },
      {
        id: "fc2",
        front: "What is the Virtual DOM and why is it useful?",
        back: "The Virtual DOM is a JavaScript representation of the actual DOM. React uses it to efficiently update the UI by comparing (diffing) the virtual DOM trees and only updating the parts that changed.",
        difficulty: 'medium'
      },
      {
        id: "fc3",
        front: "How do you handle events in React?",
        back: "React uses SyntheticEvents, which wrap native events. You pass event handlers as props: <button onClick={handleClick}>Click me</button>",
        difficulty: 'easy'
      },
      {
        id: "fc4",
        front: "What is the purpose of keys in React lists?",
        back: "Keys help React identify which items have changed, been added, or removed. They should be stable, predictable, and unique among siblings for optimal performance.",
        difficulty: 'medium'
      },
      {
        id: "fc5",
        front: "What is prop drilling and how can you avoid it?",
        back: "Prop drilling is passing props through multiple component layers. You can avoid it using React Context, state management libraries (Redux, Zustand), or component composition patterns.",
        difficulty: 'hard'
      },
      {
        id: "fc6",
        front: "When should you use useCallback vs useMemo?",
        back: "useCallback memoizes functions to prevent unnecessary re-renders of child components. useMemo memoizes the result of expensive calculations. Both help with performance optimization.",
        difficulty: 'hard'
      },
      {
        id: "fc7",
        front: "What is the difference between controlled and uncontrolled components?",
        back: "Controlled components have their form data handled by React state. Uncontrolled components store form data in the DOM itself, accessed via refs.",
        difficulty: 'medium'
      },
      {
        id: "fc8",
        front: "How do you handle side effects in React functional components?",
        back: "Use the useEffect hook. It can handle mounting, updating, and cleanup. The dependency array controls when the effect runs.",
        difficulty: 'easy'
      }
    ]
  };
}

// Helper function to extract video ID from YouTube URL
function extractVideoId(url: string): string {
  const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
  const match = url.match(regex);
  return match ? match[1] : 'dQw4w9WgXcQ'; // Default to Rick Roll if no match
}

// Mock storage functions
const courses: GeneratedCourse[] = [];

export async function saveCourse(course: GeneratedCourse): Promise<void> {
  const existingIndex = courses.findIndex(c => c.id === course.id);
  if (existingIndex >= 0) {
    courses[existingIndex] = course;
  } else {
    courses.push(course);
  }
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
}

export async function getCourseById(id: string): Promise<GeneratedCourse | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return courses.find(course => course.id === id) || null;
}

export async function getCourses(): Promise<GeneratedCourse[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return [...courses];
}