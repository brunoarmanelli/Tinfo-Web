var tipos = [{
  nome: "Hardware",
  subtipos: ["Computador", "Impressora", "Monitor", "Roteador"]
}, {
  nome: "Software",
  subtipos: ["Gratuito", "Licenciado"]
}]

function disableSelect ($element, title) {
  $element.attr("disabled", true);
  $element.append(`<option selected>Nenhum ${title} cadastrado</option>`)
}

function loadSelect ($element, data, firstDash = true) {
  console.log(data)

  if (firstDash)
    $element.append("<option selected>-</option>");

    for (var i = 0; i < data.length; i++)
      $element.append(`<option value="${i}">${data[i]}</option>`);
}

$(function () {
  // --- Inputs ---
  var inputTipo = $("#inputTipo");
  var inputSubtipo = $("#inputSubtipo");
  var inputFornecedor = $("#inputFornecedor");

  // --- Loads ---
  // Tipos
  if (tipos.length > 0) {
    var nomes = []
    for (var i = 0; i < tipos.length; i++) {
      nomes.push(tipos[i].nome);
    }
    loadSelect(inputTipo, nomes)
  }
  else
    disableSelect(inputTipo, "tipo")

  // Subtipos
  // if (tipos.length > 0)
  //   loadSelect(inputSubtipo, tipos)
  // else
  //   disableSelect(inputSubtipo, "tipo")
})
