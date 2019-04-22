import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import drizzle functions and contract artifact
import { Drizzle } from "drizzle";
import GenerateAvatar from "./contracts/GenerateAvatar.json";

// let drizzle know what contracts we want and how to access our test blockchain
const options = {
    contracts: [GenerateAvatar],
    web3: {
        fallback: {
            type: "ws",
            url: "",
        },
    },
};

// setup drizzle
const drizzle = new Drizzle(options);

ReactDOM.render(<App drizzle={drizzle} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
