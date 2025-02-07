/*
==================================================
AsagaoUI
Written in TypeScript, compiled to JavaScript
==================================================
*/

import './components/codesnippet.ts';

import {drawer} from "./components/drawer.js";

function initAsagaoUI() {
    drawer();
}

document.addEventListener('DOMContentLoaded', initAsagaoUI);
