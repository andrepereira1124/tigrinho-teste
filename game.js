document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('playGameButton').addEventListener('click', function() {
        const result = Math.random() < 0.5 ? 'Você ganhou!' : 'Tente novamente!';
        document.getElementById('result').textContent = result;
    });
});
