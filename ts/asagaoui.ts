/*
==================================================
AsagaoUI
Written in TypeScript, compiled to JavaScript
==================================================
*/

import {langSel} from './components/langsel';
import {modalDialog} from "./components/modaldialog";
import {drawer} from "./components/drawer";
import {carousel} from "./components/carousel";

function initAsagaoUI() {
    langSel();
    modalDialog();
    drawer();
    carousel();
}

document.addEventListener('DOMContentLoaded', initAsagaoUI);
