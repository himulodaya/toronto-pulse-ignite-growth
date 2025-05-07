import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// Correct import name and function name based on Clarity NPM package documentation
import Clarity from '@microsoft/clarity'; // Changed import name to Clarity

// Get your Project ID from your Microsoft Clarity dashboard
// IMPORTANT: Replace "rfxft0c156" with your actual Project ID string,
// keeping the quotes around it.
const CLARITY_PROJECT_ID = "rfxft0c156";

// Initialize Microsoft Clarity
// It's generally recommended to initialize Clarity as early as possible
// in your application's lifecycle to ensure comprehensive tracking.
// Wrap in a try...catch in case the script is blocked or fails to load
try {
  // Check if Clarity object exists before trying to initialize
  if (Clarity) { // Changed check to use Clarity
    Clarity.init(CLARITY_PROJECT_ID); // Changed initialize to init
    console.log("Microsoft Clarity initialized successfully.");
  } else {
    console.warn("Microsoft Clarity object not available. Script might be blocked.");
  }
} catch (e) {
  console.error("Failed to initialize Microsoft Clarity:", e);
}


createRoot(document.getElementById("root")!).render(<App />);
