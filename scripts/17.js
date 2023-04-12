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
        fromsel.value == '℃' ? tosel.value = '℉' : tosel.value = '℃';
        calculate();
    });
    tosel.addEventListener("change", () => {
        totx.textContent = tosel.value;
        tosel.value == '℃' ? fromsel.value = '℉' : fromsel.value = '℃';
        calculate();
    });

    const calculate = () => {
        /* if (fromsel.value == '℃') {
            toval.value = tosel.value == '℃' ? fromval.value : fromval.value * 1.8 + 32;
        } else {
            toval.value = tosel.value == '℃' ? (fromval.value - 32) * 5 / 9 : fromval.value;
        } */
        /* if (fromsel.value == tosel.value) {// 같을 일이 없어짐
            toval.value = fromval.value;
        } */
        toval.value = tosel.value == '℃' ? fromval.value * 1.8 + 32 : (fromval.value - 32) * 5 / 9;
    };

    fromval.addEventListener("input", calculate);
});