document.getElementById('throw-btn').addEventListener('click', () => {
    const yutResults = throwYut();
    displayYutResults(yutResults);
    const resultText = calculateResult(yutResults);
    document.getElementById('result').innerText = `결과: ${resultText}`;
});

function throwYut() {
    const yutResults = [];
    for (let i = 0; i < 4; i++) {
        const isFront = Math.random() < 0.61; // 50% 확률로 앞면(1) 또는 뒷면(0)
        yutResults.push(isFront);
    }
    return yutResults;
}

function displayYutResults(yutResults) {
    for (let i = 0; i < yutResults.length; i++) {
        const yutElement = document.getElementById(`yut${i+1}`);
        if (yutResults[i]) {
            yutElement.style.transform = "rotateY(0deg)"; // 앞면
            if(i==0){
                yutElement.innerText = 'O';
            
            } else {
                yutElement.innerText = '';
            }
            yutElement.style.backgroundColor = "#ffebcd"; // 앞면 색상
        } else {
            yutElement.style.transform = "rotateY(180deg)"; // 뒷면
            yutElement.innerHTML = 'X<br>X<br>X<br>X';
            yutElement.style.backgroundColor = "#8b4513"; // 뒷면 색상
        }
    }
}

function calculateResult(yutResults) {
    const countFront = yutResults.reduce((acc, curr) => acc + curr, 0);
    switch (countFront) {
        case 1:
            if (yutResults[0]) {
                return '빽도';
            }
            return '도';
        case 2:
            return '개';
        case 3:
            return '걸';
        case 4:
            return '윷';
        case 0:
            return '모';
    }
}
