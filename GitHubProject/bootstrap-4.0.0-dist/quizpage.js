function checkAnswers() {
    var answer1 = document.getElementById('answer1').value;
    var answer2 = document.getElementById('answer2').value;
    var resultsHtml = '';
    var score = 0;
    if (answer1.toLowerCase() === 'Jamba') {
        resultsHtml += '<p class="correct">Válaszod helyes az első kérdésre!p>';
        score++;
    } else {
        resultsHtml += '<p class="incorrect">A válaszod helytelen az első kérdésre. Gergő beceneve Jamba!</p>';
    }
    if (answer2 === '9') {
        resultsHtml += '<p class="correct">Válaszod a második kérdésre helyes!</p>';
        score++;
    } else {
        resultsHtml += '<p class="incorrect">Question 2 is incorrect. The correct answer is 9.</p>';
    }
    resultsHtml += '<p>Your score is ' + score + ' out of 2.</p>';
    document.getElementById('results').innerHTML = resultsHtml;
}