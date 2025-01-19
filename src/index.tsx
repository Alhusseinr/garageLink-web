import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
    <MantineProvider>
        <App />
    </MantineProvider>
);