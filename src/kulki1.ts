//// robienie tablic

import { S_IXGRP } from "constants";
import { start } from "repl";
import { strict } from "assert";


let tabA: (string | number)[][] = [];
let tabid: string[][] = [];
let tabC: (string | number)[] = [];
let r: string;

for (let i = 0; i < 12; i++) {
    tabA[i] = []
    tabid[i] = []

    for (let j = 0; j < 12; j++) {
        if (j == 0 || j == 11) {
            tabA[i][j] = "X";
            tabid[i][j] = "x"
        }
        else if (i == 0 || i == 11) {
            tabA[i][j] = "X";
            tabid[i][j] = "x"
        }
        else {
            tabA[i][j] = 0;
            tabid[i][j] = i + "_" + j;
        }





    }

};

for (let i = 0; i < 9; i++) {
    let x: number = Math.floor(Math.random() * (12));
    let y: number = Math.floor(Math.random() * (12));
    if (tabA[x][y] == "X") {
        i--
    }
    tabA[x][y] = "X"

}
//////// funkcje na ustawienie startu i mety


function starcik(e: MouseEvent) {
    let starcikk = document.getElementById((e.srcElement as HTMLDivElement).id)

    let x: (string)[] = [];
    x = starcikk.id.split('_');
    if (tabA[parseInt(x[0])][parseInt(x[1])] == 0) {
        document.querySelector(".plansza").removeEventListener("click", starcik)
        starcikk.innerText = "S"
        tabA[parseInt(x[0])][parseInt(x[1])] = "S"
    }
}


function meta(e: MouseEvent) {

    let starcik = document.getElementById((e.srcElement as HTMLDivElement).id)
    let x: (string)[] = [];
    x = starcik.id.split('_');
    if (tabA[parseInt(x[0])][parseInt(x[1])] == 0) {
        starcik.innerText = "M"
        tabA[parseInt(x[0])][parseInt(x[1])] = "M"
        document.querySelector(".plansza").removeEventListener("click", meta)
        let Start_id: number[][] = PathFind(x)
        console.table(tabA)
        // console.table(tabid)
        console.table(Start_id)
        PathDraw(Start_id)
    }

}
function PathDraw(poczatek: number[][]) {

    let najmniejszy: number = 99
    let x_coord: number = (poczatek[0][1])
    let y_coord: number = (poczatek[0][0])
    let sciezka: string[] = []
    console.log(x_coord + "x")
    console.log(y_coord + "y")

    let string_poczatek: string = y_coord + "_" + x_coord
    let s1: number[] = []
    let s2: number[] = []
    let s3: number[] = []
    let s4: number[] = []
    let tablica_najmniejszych: number[][] = []

    let tablica_koordow: string[] = []

    s1.push(x_coord + 1, y_coord)
    s2.push(x_coord - 1, y_coord)
    s3.push(x_coord, y_coord + 1)
    s4.push(x_coord, y_coord - 1)

    let tablica_stron: number[][] = []
    tablica_najmniejszych.push(s1, s2, s3, s4)

    let licznik: number = 0
    let stan: boolean = false

    document.getElementById(string_poczatek).style.backgroundColor = "grey"

    for (let i = 0; i < 100; i++) {
        console.log(najmniejszy + " naj")


        if (tabA[s1[1]][s1[0]] == "M") {
            stan = true

            tablica_koordow[i] = y_coord + "_" + x_coord
            document.getElementById(tablica_koordow[i]).style.backgroundColor = "grey"
            console.log(tablica_koordow + " koordy zdane")
            x_coord = x_coord + 1
            tablica_koordow[i + 1] = y_coord + "_" + x_coord
            document.getElementById(tablica_koordow[i + 1]).style.backgroundColor = "grey"


            return tablica_koordow
        }
        else if (tabA[s1[1]][s1[0]] != 0 && tabA[s1[1]][s1[0]] != "X" && tabA[s1[1]][s1[0]] < najmniejszy) {
            najmniejszy = tabA[s1[1]][s1[0]] as number
            tablica_koordow[i] = y_coord + "_" + x_coord
            document.getElementById(tablica_koordow[i]).style.backgroundColor = "grey"
            x_coord = x_coord + 1



        }
        /////////////
        if (tabA[s2[1]][s2[0]] == "M") {
            stan = true
            tablica_koordow[i] = y_coord + "_" + x_coord
            document.getElementById(tablica_koordow[i]).style.backgroundColor = "grey"
            console.log(tablica_koordow + " koordy zdane")

            x_coord = x_coord - 1
            tablica_koordow[i + 1] = y_coord + "_" + x_coord
            document.getElementById(tablica_koordow[i + 1]).style.backgroundColor = "grey"


            return tablica_koordow
        }
        else if (tabA[s2[1]][s2[0]] != 0 && tabA[s2[1]][s2[0]] != "X" && tabA[s2[1]][s2[0]] < najmniejszy) {
            najmniejszy = tabA[s2[1]][s2[0]] as number
            tablica_koordow[i] = y_coord + "_" + x_coord
            document.getElementById(tablica_koordow[i]).style.backgroundColor = "grey"
            x_coord = x_coord - 1


        }
        ///////////////
        if (tabA[s3[1]][s3[0]] == "M") {
            stan = true
            tablica_koordow[i] = y_coord + "_" + x_coord
            document.getElementById(tablica_koordow[i]).style.backgroundColor = "grey"
            console.log(tablica_koordow + " koordy zdane")

            y_coord = y_coord + 1
            tablica_koordow[i + 1] = y_coord + "_" + x_coord
            document.getElementById(tablica_koordow[i + 1]).style.backgroundColor = "grey"


            return tablica_koordow
        }
        else if (tabA[s3[1]][s3[0]] != 0 && tabA[s3[1]][s3[0]] != "X" && tabA[s3[1]][s3[0]] < najmniejszy) {
            najmniejszy = tabA[s3[1]][s3[0]] as number
            tablica_koordow[i] = y_coord + "_" + x_coord
            document.getElementById(tablica_koordow[i]).style.backgroundColor = "grey"
            y_coord = y_coord + 1



        }
        ////////////////ccv
        if (tabA[s4[1]][s4[0]] == "M") {
            stan = true
            tablica_koordow[i] = y_coord + "_" + x_coord
            document.getElementById(tablica_koordow[i]).style.backgroundColor = "grey"
            console.log(tablica_koordow + " koordy zdane")

            y_coord = y_coord - 1
            tablica_koordow[i + 1] = y_coord + "_" + x_coord
            document.getElementById(tablica_koordow[i + 1]).style.backgroundColor = "grey"

            return tablica_koordow
        }
        else if (tabA[s4[1]][s4[0]] != 0 && tabA[s4[1]][s4[0]] != "X" && tabA[s4[1]][s4[0]] < najmniejszy) {
            najmniejszy = tabA[s4[1]][s4[0]] as number
            tablica_koordow[i] = y_coord + "_" + x_coord
            document.getElementById(tablica_koordow[i]).style.backgroundColor = "grey"
            y_coord = y_coord - 1



        }

        s1[0] = x_coord + 1
        s1[1] = y_coord

        s2[0] = x_coord - 1
        s2[1] = y_coord

        s3[0] = x_coord
        s3[1] = y_coord + 1

        s4[0] = x_coord
        s4[1] = y_coord - 1

    }









    console.log(tablica_koordow + "koordy")



    //    for(let i = 0 ; i<sciezka.length; i++){
    //        document.getElementById(sciezka[i]).style.backgroundColor = "grey"
    //    }
    //     console.log(sciezka)





}
//////// Szukanie scizki od mety do startu



function PathFind(x: string[]) {

    let S_Status = false
    let koordy: number[][] = []
    let x_coord: number = parseInt(x[0]) as number
    let y_coord: number = parseInt(x[1]) as number
    koordy.push([x_coord, y_coord])
    let licznik_petli: number = 0
    let zmienna: number = 0
    let S_id: number[][] = []
    //while(S_status ==false)
    for (let i = 0; i < 150; i++) {


        ////// +1 , 0
        if (tabA[(koordy[licznik_petli][0]) + 1][(koordy[licznik_petli][1])] == 0) {
            if (tabA[(koordy[licznik_petli][0])][koordy[licznik_petli][1]] == "M") {
                zmienna = 0
            }
            else {
                zmienna = tabA[(koordy[licznik_petli][0])][koordy[licznik_petli][1]] as number
            }

            tabA[(koordy[licznik_petli][0]) + 1][koordy[licznik_petli][1]] = zmienna + 1
            let x_coord: number = (koordy[licznik_petli][0]) + 1 as number
            let y_coord: number = (koordy[licznik_petli][1]) as number
            koordy.push([x_coord, y_coord])

        }
        else if (tabA[(koordy[licznik_petli][0]) + 1][(koordy[licznik_petli][1])] == "S") {
            S_Status = true
            let S_x: number = koordy[licznik_petli][0] + 1
            let S_y: number = koordy[licznik_petli][1]
            S_id.push([S_x, S_y])
            console.log(S_id + "sid")
            return S_id
        }
        /////// -1 , 0
        if (tabA[(koordy[licznik_petli][0]) - 1][(koordy[licznik_petli][1])] == 0) {
            if (tabA[(koordy[licznik_petli][0])][koordy[licznik_petli][1]] == "M") {
                zmienna = 0
            }
            else {
                zmienna = tabA[(koordy[licznik_petli][0])][koordy[licznik_petli][1]] as number
            }
            tabA[(koordy[licznik_petli][0]) - 1][koordy[licznik_petli][1]] = zmienna + 1
            let x_coord: number = (koordy[licznik_petli][0]) - 1 as number
            let y_coord: number = (koordy[licznik_petli][1]) as number
            koordy.push([x_coord, y_coord])

        }
        else if (tabA[(koordy[licznik_petli][0]) - 1][(koordy[licznik_petli][1])] == "S") {
            S_Status = true
            let S_x: number = koordy[licznik_petli][0] - 1
            let S_y: number = koordy[licznik_petli][1]
            S_id.push([S_x, S_y])
            console.log(S_id + "sid")
            return S_id
        }
        /////// 0 , +1
        if (tabA[(koordy[licznik_petli][0])][(koordy[licznik_petli][1]) + 1] == 0) {
            if (tabA[(koordy[licznik_petli][0])][koordy[licznik_petli][1]] == "M") {
                zmienna = 0
            }
            else {
                zmienna = tabA[(koordy[licznik_petli][0])][koordy[licznik_petli][1]] as number
            }
            tabA[(koordy[licznik_petli][0])][koordy[licznik_petli][1] + 1] = zmienna + 1
            let x_coord: number = (koordy[licznik_petli][0]) as number
            let y_coord: number = (koordy[licznik_petli][1]) + 1 as number
            koordy.push([x_coord, y_coord])

        }
        else if (tabA[(koordy[licznik_petli][0])][(koordy[licznik_petli][1]) + 1] == "S") {
            S_Status = true
            let S_x: number = koordy[licznik_petli][0]
            let S_y: number = koordy[licznik_petli][1] + 1
            S_id.push([S_x, S_y])
            console.log(S_id + "sid")
            return S_id
        }
        ///////   0 , -1
        if (tabA[(koordy[licznik_petli][0])][(koordy[licznik_petli][1]) - 1] == 0) {
            if (tabA[(koordy[licznik_petli][0])][koordy[licznik_petli][1]] == "M") {
                zmienna = 0
            }
            else {
                zmienna = tabA[(koordy[licznik_petli][0])][koordy[licznik_petli][1]] as number
            }
            tabA[(koordy[licznik_petli][0])][koordy[licznik_petli][1] - 1] = zmienna + 1
            let x_coord: number = (koordy[licznik_petli][0]) as number
            let y_coord: number = (koordy[licznik_petli][1]) - 1 as number
            koordy.push([x_coord, y_coord])

        }
        else if (tabA[(koordy[licznik_petli][0])][(koordy[licznik_petli][1]) - 1] == "S") {
            S_Status = true
            let S_x: number = koordy[licznik_petli][0]
            let S_y: number = koordy[licznik_petli][1] - 1
            S_id.push([S_x, S_y])
            console.log(S_id + "sid")
            return S_id
        }
        licznik_petli = licznik_petli + 1
    }



    // if(tabA[parseInt(x[0])-1][parseInt(x[1])]==0){
    //     tabA[parseInt(x[0])-1][parseInt(x[1])]=1
    //     let x_coord: number = parseInt(x[0])-1 as number
    //     let y_coord: number = parseInt(x[1]) as number
    //    koordy.push([x_coord,y_coord])


    // }
    // else if(tabA[parseInt(x[0])-1][parseInt(x[1])]=="S"){
    //     S_Status = true
    // }


    // if(tabA[parseInt(x[0])][parseInt(x[1])+1]==0){
    //     tabA[parseInt(x[0])][parseInt(x[1])+1]=1
    //     let x_coord: number = parseInt(x[0]) as number
    //     let y_coord: number = parseInt(x[1])+1 as number
    //    koordy.push([x_coord,y_coord])

    // }
    // else if(tabA[parseInt(x[0])][parseInt(x[1])+1]=="S"){
    //     S_Status = true
    // }


    // if(tabA[parseInt(x[0])][parseInt(x[1])-1]==0){
    //     tabA[parseInt(x[0])][parseInt(x[1])-1]=1
    //     let x_coord: number = parseInt(x[0]) as number
    //     let y_coord: number = parseInt(x[1])-1 as number
    //    koordy.push([x_coord,y_coord])


    // }
    // else if(tabA[parseInt(x[0])][parseInt(x[1])-1]=="S"){
    //     S_Status = true
    // }




}


// tworzenie planaszy
let plansza: HTMLDivElement = document.createElement("div")
plansza.classList.add("plansza")
document.body.appendChild(plansza)



for (let poziom = 1; poziom < 11; poziom++) {
    for (let pion = 1; pion < 11; pion++) {
        let pole: HTMLDivElement = document.createElement("div")
        pole.classList.add("pole")
        pole.id = poziom + "_" + pion
        pole.style.left = (poziom) * 40 - 40 + "px" //potrzebne do statkow do rozkladania
        pole.style.top = (pion) * 40 - 40 + "px"
        plansza.appendChild(pole)

        if (tabA[poziom][pion] == "X") {
            pole.innerText = "X"
        }
        else {
            pole.innerText = "0"
        }
    }
}

document.querySelector(".plansza").addEventListener("click", starcik)


document.querySelector(".plansza").addEventListener("click", meta)






