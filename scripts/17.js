document.addEventListener("DOMContentLoaded", () => {
    const fromsel = document.getElementById("fromsel");
    const tosel = document.getElementById("tosel");
    const fromtx = document.getElementById("fromtx");
    const totx = document.getElementById("totx");

    fromtx.textContent = fromsel.value;
    totx.textContent = tosel.value;

    const fromval = document.getElementById("fromval");
    const toval = document.getElementById("toval");

    function setText() {
        fromtx.textContent = fromsel.value;
        totx.textContent = tosel.value;
    }

    fromsel.addEventListener("change", () => {
        autoSel(fromsel, tosel);
        console.log(fromsel.value);
        setText();
        //fromsel.value == '℃' ? tosel.value = '℉' : tosel.value = '℃';
        calculate();
    });
    tosel.addEventListener("change", () => {
        autoSel(tosel, fromsel);
        setText();
        //tosel.value == '℃' ? fromsel.value = '℉' : fromsel.value = '℃';
        calculate();
    });

    const calculate = () => {
        toval.value = tosel.value == '℃' ? cToF(fromval.value) : fToC(fromval.value);
    };

    fromval.addEventListener("input", calculate);
});

const cToF = (cTemp) => {
    return cTemp * 1.8 + 32;
}

const fToC = (fTemp) => {
    return (fTemp - 32) * 5 / 9;
}

const autoSel = (change, tobe) => {
    change.value == '℃' ? tobe.value = '℉' : tobe.value = '℃';
}