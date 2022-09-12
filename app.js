const counters = document.querySelectorAll(".counter");

const Data = [{ total: "5000" }, { total: "12000" }, { total: "7000" }]

counters.forEach((element, index) => {
    const update = () => {
        const MaxCount = +Data[index].total;
        let currNum = +element.innerText;

        if (currNum < MaxCount) {
            element.innerText = `${Math.ceil(currNum + MaxCount / 250)}`;
        }
        setTimeout(update, 0.7);
    };
    update();
})