function calculateResult() {
    let score = {
        a: 0,
        b: 0,
        c: 0
    };

    const answers = document.querySelectorAll('input[type="radio"]:checked');
    answers.forEach(answer => {
        score[answer.value]++;
    });

    const name = document.getElementById('name').value;
    let result = name + ", ";

    if (score.a >= score.b && score.a >= score.c) {
        result += "you're a Pie Chart - Chill and well-rounded!";
    } else if (score.b >= score.a && score.b >= score.c) {
        result += "you're a Bar Chart - Straightforward and reliable!";
    } else {
        result += "you're a Scatter Plot - Unique and free-spirited!";
    }

    document.getElementById('result').innerText = result;
}
