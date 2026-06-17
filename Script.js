let tempo = 25 * 60;
let intervalo;
let rodando = false;

const timer = document.getElementById("timer");

function atualizarTela() {
    let minutos = Math.floor(tempo / 60);
    let segundos = tempo % 60;

    timer.innerHTML =
        `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
}

function iniciarTimer() {

    if (rodando) return;

    rodando = true;

    intervalo = setInterval(() => {

        if (tempo > 0) {
            tempo--;
            atualizarTela();
        } else {
            clearInterval(intervalo);
            alert("Tempo finalizado!");
            rodando = false;
        }

    }, 1000);
}

function mudarTempo(minutos) {
    clearInterval(intervalo);
    rodando = false;
    tempo = minutos * 60;
    atualizarTela();
}

function adicionarTarefa() {

    const input = document.getElementById("novaTarefa");
    const texto = input.value.trim();

    if (texto === "") return;

    const li = document.createElement("li");
    li.textContent = texto;

    li.onclick = () => {
        document.getElementById("tarefaAtual").textContent = texto;
    };

    document.getElementById("listaTarefas").appendChild(li);

    input.value = "";
}

atualizarTela();
