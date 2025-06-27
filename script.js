document.getElementById("primeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const lower = parseInt(document.getElementById("lower").value);
    const upper = parseInt(document.getElementById("upper").value);
    const resultDiv = document.getElementById("result");

    if (isNaN(lower) || isNaN(upper)) {
        resultDiv.innerHTML = "Please enter valid numbers.";
        return;
    }

    if (lower > upper) {
        resultDiv.innerHTML = "Lower limit should be less than or equal to upper limit.";
        return;
    }

    let primes = [];
    for (let num = lower; num <= upper; num++) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }

    resultDiv.innerHTML = primes.length ? primes.join(", ") : "No prime numbers found in this range.";
});

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
