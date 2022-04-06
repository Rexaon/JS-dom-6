document.getElementById("velg").addEventListener("click", function () {
    var print = document.getElementById("mySelect");

    if (print.options[print.selectedIndex].text == "Her er det flere bilder") {
        document.getElementById("min_valg").innerHTML = "Du trenger å velge en av dem :)"
    } else {
        document.getElementById("min_valg").innerHTML = 
        print.options[print.selectedIndex].text;
        minFarge = print.options[print.selectedIndex].text;
        // console.log(minFarge);
        document.body.style.background = minFarge;
    }

    
})

function changeBackground() {
    var rd = parseInt(document.getElementById('red').value);
    var gn = parseInt(document.getElementById('green').value);
    var bl = parseInt(document.getElementById('blue').value);

    var rdhex = (rd < 16) ? "0" + rd.toString(16) : rd.toString(16);
    var gnhex = (gn < 16) ? "0" + gn.toString(16) : gn.toString(16);
    var blhex = (bl < 16) ? "0" + bl.toString(16) : bl.toString(16);

    var hexcode = "#" + rdhex + gnhex + blhex;

    document.body.style.backgroundColor = hexcode
    document.getElementById('hexdisplay').innerHTML = hexcode;
}

function favColor() {
    document.body.style.backgroundColor = favcolor
}