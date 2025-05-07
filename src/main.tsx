import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import clarity from '@microsoft/clarity';

const CLARITY_PROJECT_ID = "rfxft0c156";
clarity.initialize(rfxft0c156);
createRoot(document.getElementById("root")!).render(<App />);
