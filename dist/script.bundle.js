/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/kulki1.ts":
/*!***********************!*\
  !*** ./src/kulki1.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n//// robienie tablic\r\nvar tabA = [];\r\nvar tabid = [];\r\nvar tabC = [];\r\nvar r;\r\nfor (var i = 0; i < 12; i++) {\r\n    tabA[i] = [];\r\n    tabid[i] = [];\r\n    for (var j = 0; j < 12; j++) {\r\n        if (j == 0 || j == 11) {\r\n            tabA[i][j] = \"X\";\r\n            tabid[i][j] = \"x\";\r\n        }\r\n        else if (i == 0 || i == 11) {\r\n            tabA[i][j] = \"X\";\r\n            tabid[i][j] = \"x\";\r\n        }\r\n        else {\r\n            tabA[i][j] = 0;\r\n            tabid[i][j] = i + \"_\" + j;\r\n        }\r\n    }\r\n}\r\n;\r\nfor (var i = 0; i < 9; i++) {\r\n    var x = Math.floor(Math.random() * (12));\r\n    var y = Math.floor(Math.random() * (12));\r\n    if (tabA[x][y] == \"X\") {\r\n        i--;\r\n    }\r\n    tabA[x][y] = \"X\";\r\n}\r\n//////// funkcje na ustawienie startu i mety\r\nfunction starcik(e) {\r\n    var starcikk = document.getElementById(e.srcElement.id);\r\n    var x = [];\r\n    x = starcikk.id.split('_');\r\n    if (tabA[parseInt(x[0])][parseInt(x[1])] == 0) {\r\n        document.querySelector(\".plansza\").removeEventListener(\"click\", starcik);\r\n        starcikk.innerText = \"S\";\r\n        tabA[parseInt(x[0])][parseInt(x[1])] = \"S\";\r\n    }\r\n}\r\nfunction meta(e) {\r\n    var starcik = document.getElementById(e.srcElement.id);\r\n    var x = [];\r\n    x = starcik.id.split('_');\r\n    if (tabA[parseInt(x[0])][parseInt(x[1])] == 0) {\r\n        starcik.innerText = \"M\";\r\n        tabA[parseInt(x[0])][parseInt(x[1])] = \"M\";\r\n        document.querySelector(\".plansza\").removeEventListener(\"click\", meta);\r\n        var Start_id = PathFind(x);\r\n        console.table(tabA);\r\n        // console.table(tabid)\r\n        console.table(Start_id);\r\n        PathDraw(Start_id);\r\n    }\r\n}\r\nfunction PathDraw(poczatek) {\r\n    var najmniejszy = 99;\r\n    var x_coord = (poczatek[0][1]);\r\n    var y_coord = (poczatek[0][0]);\r\n    var sciezka = [];\r\n    console.log(x_coord + \"x\");\r\n    console.log(y_coord + \"y\");\r\n    var string_poczatek = y_coord + \"_\" + x_coord;\r\n    var s1 = [];\r\n    var s2 = [];\r\n    var s3 = [];\r\n    var s4 = [];\r\n    var tablica_najmniejszych = [];\r\n    var tablica_koordow = [];\r\n    s1.push(x_coord + 1, y_coord);\r\n    s2.push(x_coord - 1, y_coord);\r\n    s3.push(x_coord, y_coord + 1);\r\n    s4.push(x_coord, y_coord - 1);\r\n    var tablica_stron = [];\r\n    tablica_najmniejszych.push(s1, s2, s3, s4);\r\n    var licznik = 0;\r\n    var stan = false;\r\n    document.getElementById(string_poczatek).style.backgroundColor = \"grey\";\r\n    for (var i = 0; i < 100; i++) {\r\n        console.log(najmniejszy + \" naj\");\r\n        if (tabA[s1[1]][s1[0]] == \"M\") {\r\n            stan = true;\r\n            tablica_koordow[i] = y_coord + \"_\" + x_coord;\r\n            document.getElementById(tablica_koordow[i]).style.backgroundColor = \"grey\";\r\n            console.log(tablica_koordow + \" koordy zdane\");\r\n            x_coord = x_coord + 1;\r\n            tablica_koordow[i + 1] = y_coord + \"_\" + x_coord;\r\n            document.getElementById(tablica_koordow[i + 1]).style.backgroundColor = \"grey\";\r\n            return tablica_koordow;\r\n        }\r\n        else if (tabA[s1[1]][s1[0]] != 0 && tabA[s1[1]][s1[0]] != \"X\" && tabA[s1[1]][s1[0]] < najmniejszy) {\r\n            najmniejszy = tabA[s1[1]][s1[0]];\r\n            tablica_koordow[i] = y_coord + \"_\" + x_coord;\r\n            document.getElementById(tablica_koordow[i]).style.backgroundColor = \"grey\";\r\n            x_coord = x_coord + 1;\r\n        }\r\n        /////////////\r\n        if (tabA[s2[1]][s2[0]] == \"M\") {\r\n            stan = true;\r\n            tablica_koordow[i] = y_coord + \"_\" + x_coord;\r\n            document.getElementById(tablica_koordow[i]).style.backgroundColor = \"grey\";\r\n            console.log(tablica_koordow + \" koordy zdane\");\r\n            x_coord = x_coord - 1;\r\n            tablica_koordow[i + 1] = y_coord + \"_\" + x_coord;\r\n            document.getElementById(tablica_koordow[i + 1]).style.backgroundColor = \"grey\";\r\n            return tablica_koordow;\r\n        }\r\n        else if (tabA[s2[1]][s2[0]] != 0 && tabA[s2[1]][s2[0]] != \"X\" && tabA[s2[1]][s2[0]] < najmniejszy) {\r\n            najmniejszy = tabA[s2[1]][s2[0]];\r\n            tablica_koordow[i] = y_coord + \"_\" + x_coord;\r\n            document.getElementById(tablica_koordow[i]).style.backgroundColor = \"grey\";\r\n            x_coord = x_coord - 1;\r\n        }\r\n        ///////////////\r\n        if (tabA[s3[1]][s3[0]] == \"M\") {\r\n            stan = true;\r\n            tablica_koordow[i] = y_coord + \"_\" + x_coord;\r\n            document.getElementById(tablica_koordow[i]).style.backgroundColor = \"grey\";\r\n            console.log(tablica_koordow + \" koordy zdane\");\r\n            y_coord = y_coord + 1;\r\n            tablica_koordow[i + 1] = y_coord + \"_\" + x_coord;\r\n            document.getElementById(tablica_koordow[i + 1]).style.backgroundColor = \"grey\";\r\n            return tablica_koordow;\r\n        }\r\n        else if (tabA[s3[1]][s3[0]] != 0 && tabA[s3[1]][s3[0]] != \"X\" && tabA[s3[1]][s3[0]] < najmniejszy) {\r\n            najmniejszy = tabA[s3[1]][s3[0]];\r\n            tablica_koordow[i] = y_coord + \"_\" + x_coord;\r\n            document.getElementById(tablica_koordow[i]).style.backgroundColor = \"grey\";\r\n            y_coord = y_coord + 1;\r\n        }\r\n        ////////////////ccv\r\n        if (tabA[s4[1]][s4[0]] == \"M\") {\r\n            stan = true;\r\n            tablica_koordow[i] = y_coord + \"_\" + x_coord;\r\n            document.getElementById(tablica_koordow[i]).style.backgroundColor = \"grey\";\r\n            console.log(tablica_koordow + \" koordy zdane\");\r\n            y_coord = y_coord - 1;\r\n            tablica_koordow[i + 1] = y_coord + \"_\" + x_coord;\r\n            document.getElementById(tablica_koordow[i + 1]).style.backgroundColor = \"grey\";\r\n            return tablica_koordow;\r\n        }\r\n        else if (tabA[s4[1]][s4[0]] != 0 && tabA[s4[1]][s4[0]] != \"X\" && tabA[s4[1]][s4[0]] < najmniejszy) {\r\n            najmniejszy = tabA[s4[1]][s4[0]];\r\n            tablica_koordow[i] = y_coord + \"_\" + x_coord;\r\n            document.getElementById(tablica_koordow[i]).style.backgroundColor = \"grey\";\r\n            y_coord = y_coord - 1;\r\n        }\r\n        s1[0] = x_coord + 1;\r\n        s1[1] = y_coord;\r\n        s2[0] = x_coord - 1;\r\n        s2[1] = y_coord;\r\n        s3[0] = x_coord;\r\n        s3[1] = y_coord + 1;\r\n        s4[0] = x_coord;\r\n        s4[1] = y_coord - 1;\r\n    }\r\n    console.log(tablica_koordow + \"koordy\");\r\n    //    for(let i = 0 ; i<sciezka.length; i++){\r\n    //        document.getElementById(sciezka[i]).style.backgroundColor = \"grey\"\r\n    //    }\r\n    //     console.log(sciezka)\r\n}\r\n//////// Szukanie scizki od mety do startu\r\nfunction PathFind(x) {\r\n    var S_Status = false;\r\n    var koordy = [];\r\n    var x_coord = parseInt(x[0]);\r\n    var y_coord = parseInt(x[1]);\r\n    koordy.push([x_coord, y_coord]);\r\n    var licznik_petli = 0;\r\n    var zmienna = 0;\r\n    var S_id = [];\r\n    //while(S_status ==false)\r\n    for (var i = 0; i < 150; i++) {\r\n        ////// +1 , 0\r\n        if (tabA[(koordy[licznik_petli][0]) + 1][(koordy[licznik_petli][1])] == 0) {\r\n            if (tabA[(koordy[licznik_petli][0])][koordy[licznik_petli][1]] == \"M\") {\r\n                zmienna = 0;\r\n            }\r\n            else {\r\n                zmienna = tabA[(koordy[licznik_petli][0])][koordy[licznik_petli][1]];\r\n            }\r\n            tabA[(koordy[licznik_petli][0]) + 1][koordy[licznik_petli][1]] = zmienna + 1;\r\n            var x_coord_1 = (koordy[licznik_petli][0]) + 1;\r\n            var y_coord_1 = (koordy[licznik_petli][1]);\r\n            koordy.push([x_coord_1, y_coord_1]);\r\n        }\r\n        else if (tabA[(koordy[licznik_petli][0]) + 1][(koordy[licznik_petli][1])] == \"S\") {\r\n            S_Status = true;\r\n            var S_x = koordy[licznik_petli][0] + 1;\r\n            var S_y = koordy[licznik_petli][1];\r\n            S_id.push([S_x, S_y]);\r\n            console.log(S_id + \"sid\");\r\n            return S_id;\r\n        }\r\n        /////// -1 , 0\r\n        if (tabA[(koordy[licznik_petli][0]) - 1][(koordy[licznik_petli][1])] == 0) {\r\n            if (tabA[(koordy[licznik_petli][0])][koordy[licznik_petli][1]] == \"M\") {\r\n                zmienna = 0;\r\n            }\r\n            else {\r\n                zmienna = tabA[(koordy[licznik_petli][0])][koordy[licznik_petli][1]];\r\n            }\r\n            tabA[(koordy[licznik_petli][0]) - 1][koordy[licznik_petli][1]] = zmienna + 1;\r\n            var x_coord_2 = (koordy[licznik_petli][0]) - 1;\r\n            var y_coord_2 = (koordy[licznik_petli][1]);\r\n            koordy.push([x_coord_2, y_coord_2]);\r\n        }\r\n        else if (tabA[(koordy[licznik_petli][0]) - 1][(koordy[licznik_petli][1])] == \"S\") {\r\n            S_Status = true;\r\n            var S_x = koordy[licznik_petli][0] - 1;\r\n            var S_y = koordy[licznik_petli][1];\r\n            S_id.push([S_x, S_y]);\r\n            console.log(S_id + \"sid\");\r\n            return S_id;\r\n        }\r\n        /////// 0 , +1\r\n        if (tabA[(koordy[licznik_petli][0])][(koordy[licznik_petli][1]) + 1] == 0) {\r\n            if (tabA[(koordy[licznik_petli][0])][koordy[licznik_petli][1]] == \"M\") {\r\n                zmienna = 0;\r\n            }\r\n            else {\r\n                zmienna = tabA[(koordy[licznik_petli][0])][koordy[licznik_petli][1]];\r\n            }\r\n            tabA[(koordy[licznik_petli][0])][koordy[licznik_petli][1] + 1] = zmienna + 1;\r\n            var x_coord_3 = (koordy[licznik_petli][0]);\r\n            var y_coord_3 = (koordy[licznik_petli][1]) + 1;\r\n            koordy.push([x_coord_3, y_coord_3]);\r\n        }\r\n        else if (tabA[(koordy[licznik_petli][0])][(koordy[licznik_petli][1]) + 1] == \"S\") {\r\n            S_Status = true;\r\n            var S_x = koordy[licznik_petli][0];\r\n            var S_y = koordy[licznik_petli][1] + 1;\r\n            S_id.push([S_x, S_y]);\r\n            console.log(S_id + \"sid\");\r\n            return S_id;\r\n        }\r\n        ///////   0 , -1\r\n        if (tabA[(koordy[licznik_petli][0])][(koordy[licznik_petli][1]) - 1] == 0) {\r\n            if (tabA[(koordy[licznik_petli][0])][koordy[licznik_petli][1]] == \"M\") {\r\n                zmienna = 0;\r\n            }\r\n            else {\r\n                zmienna = tabA[(koordy[licznik_petli][0])][koordy[licznik_petli][1]];\r\n            }\r\n            tabA[(koordy[licznik_petli][0])][koordy[licznik_petli][1] - 1] = zmienna + 1;\r\n            var x_coord_4 = (koordy[licznik_petli][0]);\r\n            var y_coord_4 = (koordy[licznik_petli][1]) - 1;\r\n            koordy.push([x_coord_4, y_coord_4]);\r\n        }\r\n        else if (tabA[(koordy[licznik_petli][0])][(koordy[licznik_petli][1]) - 1] == \"S\") {\r\n            S_Status = true;\r\n            var S_x = koordy[licznik_petli][0];\r\n            var S_y = koordy[licznik_petli][1] - 1;\r\n            S_id.push([S_x, S_y]);\r\n            console.log(S_id + \"sid\");\r\n            return S_id;\r\n        }\r\n        licznik_petli = licznik_petli + 1;\r\n    }\r\n    // if(tabA[parseInt(x[0])-1][parseInt(x[1])]==0){\r\n    //     tabA[parseInt(x[0])-1][parseInt(x[1])]=1\r\n    //     let x_coord: number = parseInt(x[0])-1 as number\r\n    //     let y_coord: number = parseInt(x[1]) as number\r\n    //    koordy.push([x_coord,y_coord])\r\n    // }\r\n    // else if(tabA[parseInt(x[0])-1][parseInt(x[1])]==\"S\"){\r\n    //     S_Status = true\r\n    // }\r\n    // if(tabA[parseInt(x[0])][parseInt(x[1])+1]==0){\r\n    //     tabA[parseInt(x[0])][parseInt(x[1])+1]=1\r\n    //     let x_coord: number = parseInt(x[0]) as number\r\n    //     let y_coord: number = parseInt(x[1])+1 as number\r\n    //    koordy.push([x_coord,y_coord])\r\n    // }\r\n    // else if(tabA[parseInt(x[0])][parseInt(x[1])+1]==\"S\"){\r\n    //     S_Status = true\r\n    // }\r\n    // if(tabA[parseInt(x[0])][parseInt(x[1])-1]==0){\r\n    //     tabA[parseInt(x[0])][parseInt(x[1])-1]=1\r\n    //     let x_coord: number = parseInt(x[0]) as number\r\n    //     let y_coord: number = parseInt(x[1])-1 as number\r\n    //    koordy.push([x_coord,y_coord])\r\n    // }\r\n    // else if(tabA[parseInt(x[0])][parseInt(x[1])-1]==\"S\"){\r\n    //     S_Status = true\r\n    // }\r\n}\r\n// tworzenie planaszy\r\nvar plansza = document.createElement(\"div\");\r\nplansza.classList.add(\"plansza\");\r\ndocument.body.appendChild(plansza);\r\nfor (var poziom = 1; poziom < 11; poziom++) {\r\n    for (var pion = 1; pion < 11; pion++) {\r\n        var pole = document.createElement(\"div\");\r\n        pole.classList.add(\"pole\");\r\n        pole.id = poziom + \"_\" + pion;\r\n        pole.style.left = (poziom) * 40 - 40 + \"px\"; //potrzebne do statkow do rozkladania\r\n        pole.style.top = (pion) * 40 - 40 + \"px\";\r\n        plansza.appendChild(pole);\r\n        if (tabA[poziom][pion] == \"X\") {\r\n            pole.innerText = \"X\";\r\n        }\r\n        else {\r\n            pole.innerText = \"0\";\r\n        }\r\n    }\r\n}\r\ndocument.querySelector(\".plansza\").addEventListener(\"click\", starcik);\r\ndocument.querySelector(\".plansza\").addEventListener(\"click\", meta);\r\n\r\n\n\n//# sourceURL=webpack://projekty/./src/kulki1.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/kulki1.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;