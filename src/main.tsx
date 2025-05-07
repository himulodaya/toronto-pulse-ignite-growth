import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import clarity from '@microsoft/clarity'; // Import the clarity library

const CLARITY_PROJECT_ID = "rfxft0c156";

// Initialize Microsoft Clarity
// It's generally recommended to initialize Clarity as early as possible
// in your application's lifecycle to ensure comprehensive tracking.
// Wrap in a try...catch in case the script is blocked or fails to load
try {
  // Check if clarity object exists before trying to initialize
  if (clarity) {
    clarity.initialize(CLARITY_PROJECT_ID);
    console.log("Microsoft Clarity initialized successfully.");
  } else {
    console.warn("Microsoft Clarity object not available. Script might be blocked.");
  }
} catch (e) {
  console.error("Failed to initialize Microsoft Clarity:", e);
}


createRoot(document.getElementById("root")!).render(<App />);
