import './app.css';

function main(): void {
    const button = document.querySelector("#testButton");
    button?.addEventListener("click", testSubmitHandler);
}

function testSubmitHandler(e: Event): void {
    e.preventDefault();
    const outputElement = document.querySelector('#output');
    outputElement.textContent = 'Scripts work!';
}

main();