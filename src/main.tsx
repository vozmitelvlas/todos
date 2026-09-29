import {createRoot} from 'react-dom/client';
import {TodoProvider} from "./providers";
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <TodoProvider>
        <App/>
    </TodoProvider>
);
