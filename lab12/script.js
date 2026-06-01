window.onload = function()
{
    const colorSelect = document.getElementById("colorSelect");
    const fruitList = document.getElementById("fruitList");
    const output = document.getElementById("output");


    colorSelect.onchange = function()
    {
        show();
    };

    fruitList.onchange = function()
    {
        show();
    };

    function show()
    {
        let color = colorSelect.value;

        let fruit = fruitList.value;

        output.innerHTML =
        "Selected Color: " + color +"<br><br>" + "Selected Fruit: " + fruit;
    };
};