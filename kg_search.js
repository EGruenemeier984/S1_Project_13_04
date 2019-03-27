"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 4

   Wordsearch Game Script
   
   Filename: kg_search.js
   Author: Ethan Gruenemeier
   Date:  3.25.19  
   
   
   Function List
   
   function drawWordSearch(letters, words)
      Returns the HTML code for a word search table based on the entries
      in the letters array and the location of the words
      in the words array
      
   showList(list)
      Returns the HTML for code for an unordered list of words based
      on the items in the list array

*/
window.onload = init;

var wordCells;
var wordBackground;
var string = "";

function init() {
    document.getElementById("wordSearchTitle").innerHTML = wordSearchTitle;
    document.getElementById("wordTable").innerHTML = drawWordSearch(letterGrid, wordGrid);
    document.getElementById("wordList").innerHTML = showList(wordArray);

    setupSearch();
    document.addEventListener("mouseup", endBackground);

    // Add event listener for solve button 
    document.getElementById("showSolution").addEventListener("click",
        function () {
            // Remove the inline backgroundColor style from each cell 
            window.alert("THERE IS NO SOLUTION :)");
            // for (var i = 0; i < wordCells.length; i++) {

            // }

        }
    );
}

function setupSearch() {
    wordCells = document.querySelectorAll("table#wordSearchTable td");

    for (var i = 0; i < wordCells.length; i++) {
        wordCells[i].onmousedown = setBackground;
        wordCells[i].style.cursor = "pointer";
    }
}

function setBackground(e) {
    var cursorType;
    wordBackground = "rgb(101, 101, 101)";
    cursorType = "pointer";

    e.target.style.backgroundColor = wordBackground;
    for (var i = 0; i < wordCells.length; i++) {
        wordCells[i].addEventListener("mouseenter", extendBackground);
        wordCells[i].style.cursor = cursorType;
    }
    e.preventDefault();

}

function extendBackground(e) {
    e.target.style.backgroundColor = wordBackground;
    string += e.target.textContent;
    console.log(string);
}

function endBackground() {
    // Remove the event listener for every puzzle cell 
    for (var i = 0; i < wordCells.length; i++) {
        wordCells[i].removeEventListener("mouseenter", extendBackground);
        wordCells[i].style.cursor = "pointer";
        string = "";
    }
}

/*============================================================*/

function drawWordSearch(letters, words) {
    var rowSize = letters.length;
    var colSize = letters[0].length;

    var htmlCode = "<table id='wordSearchTable'>";
    htmlCode += "<caption>Word Search</caption>";

    for (var i = 0; i < rowSize; i++) {
        htmlCode += "<tr>";

        for (var j = 0; j < colSize; j++) {
            if (words[i][j] == " ") {
                htmlCode += "<td>";
            } else {
                htmlCode += "<td class='wordCell'>";
            }
            htmlCode += letters[i][j];
            htmlCode += "</td>";
        }

        htmlCode += "</tr>";
    }
    htmlCode += "</table>";

    return htmlCode;
}

function showList(list) {
    var htmlCode = "<ul id='wordSearchList'>";

    for (var i = 0; i < list.length; i++) {
        htmlCode += "<li>" + list[i] + "</li>";
    }

    htmlCode += "</ul>";

    return htmlCode;
}