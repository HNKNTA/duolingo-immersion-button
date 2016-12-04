// ==UserScript==
// @name         DuoLingo Immersion Button
// @namespace    duolingoimmersion
// @version      0.1
// @description  Adds a button for Immersion in Duolingo
// @downloadURL  https://github.com/HNKNTA/duolingo-immersion-button/raw/master/DuolingoImmersion.user.js
// @author       HNKNTA aka Balbatoon
// @match        https://www.duolingo.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    var ul = document.querySelectorAll("ul.topbar-nav-main")[0];
    var li = document.createElement('li');
    li.setAttribute('id', "translations-nav");
    var a = document.createElement('a');
    a.addEventListener("click", function () {
        duo.user.attributes.ab_options.web_noimmersion_experiment = false;
        duo.immersion_enabled = duo.user.attributes.language_data
        [duo.user.attributes.learning_language].immersion_enabled = true;
        duo.translationRouter.navigate('translations', true);
        void 0;
    });
    a.style.cssText = "cursor: pointer;";
    a.innerHTML = duo.ui_translations.Immersion;
    li.appendChild(a);
    ul.appendChild(li);
})();
