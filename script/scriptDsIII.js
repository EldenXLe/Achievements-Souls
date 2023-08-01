// Função para carregar e exibir as conquistas a partir do arquivo JSON
function exibirConquistas() {
    const divConquistas = document.getElementById("conquistas");

    // Faz a requisição para carregar o arquivo JSON
    fetch("./listaConquista/conquistas3.json")
        .then(response => response.json())
        .then(data => {
            // Percorre o array de conquistas e cria elementos para exibir na DOM
            data.forEach(conquista => {
                const divConquista = document.createElement("div");

                // Adicione a classe "ds_conquista" à div de conquista criada
                divConquista.classList.add("ds_conquista");
                divConquista.innerHTML = `
                    <h3 class="ds_nconq">${conquista.nome}</h3>
                    <p class="ds_dconq">${conquista.descricao}</p>
                    <p class="ds_dtconq">${conquista.detalhes}</p>
                `;

                divConquistas.appendChild(divConquista);

                // Adicione a div de separação após a div de conquista criada
                const divDivisoria = document.createElement("div");
                divDivisoria.classList.add("ds_divisoria");
                divConquistas.appendChild(divDivisoria);
            });
        })
        .catch(error => console.log("Erro ao carregar as conquistas:", error));
}
// Chama a função para exibir as conquistas quando a página é carregada
window.onload = exibirConquistas;