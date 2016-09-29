// ==UserScript==
// @name        Economist kill #leaderborad
// @namespace   nmingotti AT gmail com
// @description Kill ads in the top part of Economist
// @version     1.0
// @Author      Nicola Mingotti 
// @grant       none
// @include    http://www.economist.com/*
// @require    http://code.jquery.com/jquery-latest.js
// ==/UserScript==

// Once the page is loaded remove the annoying ads banner on the top 
// with id "#leaderboard".
$(function() {
    'use strict';
    $('#leaderboard').remove();
    // setTimeout(function () { $('input#login.btn').click(); }, 1000);
});


