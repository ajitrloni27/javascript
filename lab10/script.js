function show()
{
    let n = document.getElementById("num").value;
    if(n < 1 || n > 10)
    {
        alert("Enter number between 1 and 10");
        return;
    }
    // Fibonacci
    let a = 0;
    let b = 1;
    let fib = "";
    let i = 1;
    while(i <= n)
    {
        fib = fib + a + " ";
        let c = a + b;
        a = b;
        b = c;
        i++;
    }

    // Factorial
    let fact = 1;
    let j = 1;
    do
    {
        fact = fact * j;
        j++;
    }
    while(j <= n);

    
    document.getElementById("ans").innerHTML = 
    "Fibonacci: " + fib + "<br><br>" + "Factorial: " + fact;
}