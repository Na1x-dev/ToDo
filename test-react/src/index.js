import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);


document.addEventListener('keypress', function (event) {
    const button = document.querySelector('.btn-secondary');
    const titleInput = document.querySelector('.title-input')


    if (event.key === 'Enter') {
        if (button) {
            button.click();
            titleInput.focus();

        }
    }
})


