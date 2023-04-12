document.addEventListener("DOMContentLoaded", () => {
    const fromsel = document.getElementById("fromsel");
    const tosel = document.getElementById("tosel");
    const fromtx = document.getElementById("fromtx");
    const totx = document.getElementById("totx");

    fromtx.textContent = fromsel.value;
    totx.textContent = tosel.value;

    const fromval = document.getElementById("fromval");
    const toval = document.getElementById("toval");

    fromsel.addEventListener("change", () => {
        fromtx.textContent = fromsel.value;
        calculate();
    });
    tosel.addEventListener("change", () => {
        totx.textContent = tosel.value;
        calculate();
    });

    const calculate = () => {
        if (fromsel.value == '℃') {
            if (tosel.value == '℃') {
                toval.value = fromval.value;
            } else {
                toval.value = fromval.value * 1.8 + 32;
            }
        } else {
            if (tosel.value == '℃') {
                toval.value = (fromval.value - 32) * 5 / 9;
            } else {
                toval.value = fromval.value;
            }
        }
    };

    fromval.addEventListener("input", calculate);
});