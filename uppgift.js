let rows = ["rad1", "rad2", "rad3", "rad4", "rad5"];
console.log(rows);

for (let i=0; i<rows.length; i++) {
    console.log (rows[i]);
    const ro = document.createElement("h1");
    ro.innerText = rows[i];
    document.body.appendChild(ro);

    ro.style.fontSize = `${10* (i +1)}px`;

    const hueStart = 120;
    const hueEnd = 200;

    const hue = hueStart + ((hueEnd - hueStart) * i) / (rows.length - 1);
    ro.style.backgroundColor = `hsl(${hue}, 90%, 85%)`;

}



const numList1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const numList2 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const numList3 = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];
const divBoxBody = document.createElement("div");
const idk = document.createElement("div");
const divBoxLow = document.createElement("div");
const divBoxMid = document.createElement("div");
const divBoxHigh = document.createElement("div");

document.body.appendChild(divBoxBody);
divBoxBody.appendChild(divBoxLow);
divBoxBody.appendChild(divBoxMid);
divBoxBody.appendChild(divBoxHigh);
divBoxBody.appendChild(idk);

divBoxBody.style.display = "flex";
divBoxBody.style.paddingTop = "80px";
divBoxBody.style.paddingBottom = "80px";
divBoxBody.style.gap = "200px";
divBoxBody.style.paddingLeft = "230px";

divBoxBody.style.justifyContent = "space-around";





divBoxBody.style.border = "2px solid black"


for (let i=0; i<numList1.length; i++) {
    const pRu = document.createElement("p");
    pRu.innerText = numList1[i];
    divBoxLow.appendChild(pRu);
    console.log(numList1[i]);

    divBoxLow.style.border = "10px solid #a8a8f0";
    divBoxLow.style.width = "70px";
    pRu.style.margin = "0";
    pRu.style.height = "30px";



    if (i === 0 || i === 2 || i === 6 || i === 8) {
    pRu.style.backgroundColor = "black";
    pRu.style.color = "white"; 
  } else if (i === 4) {
    pRu.style.backgroundColor = "#a8a8f0";
    pRu.style.color = "white";
  } else {
    pRu.style.backgroundColor = "white";
    pRu.style.color = "black";
  }

  divBoxLow.appendChild(pRu);
}





for (let i=0; i<numList2.length; i++) {
    const pRa = document.createElement("p");
    pRa.innerText = numList2[i];
    divBoxMid.appendChild(pRa);
    console.log(numList2[i]);

    divBoxMid.style.border = "10px solid #a8a8f0";
    divBoxMid.style.width = "70px";
    pRa.style.margin = "0";
    pRa.style.height = "30px";
    pRa.style.textAlign = "center"




    if (i === 3 || i === 5 || i === 7 || i === 9) {
    pRa.style.backgroundColor = "black";
    pRa.style.color = "white"; 
  } else if (i === 1) {
    pRa.style.backgroundColor = "#a8a8f0";
    pRa.style.color = "white";
  } else {
    pRa.style.backgroundColor = "white";
    pRa.style.color = "black";
  }

  divBoxMid.appendChild(pRa);
}



for (let i=0; i<numList3.length; i++) {
    const pRe = document.createElement("p");
    pRe.innerText = numList3[i];
    divBoxHigh.appendChild(pRe);

    divBoxHigh.style.border = "10px solid #a8a8f0";
    divBoxHigh.style.width = "70px";
    pRe.style.margin = "0";
    pRe.style.height = "30px";
    pRe.style.textAlign = "right"
    console.log("---");
    console.log(numList3[i]);



    if (i === 0 || i === 2 || i === 4 || i === 6 || i === 8) {
    pRe.style.backgroundColor = "black";
    pRe.style.color = "white"; 
  } else if (i === 5) {
    pRe.style.backgroundColor = "#a8a8f0";
    pRe.style.color = "white";
  } else {
    pRe.style.backgroundColor = "white";
    pRe.style.color = "black";
  }

  divBoxHigh.appendChild(pRe);
}