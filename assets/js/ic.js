// Static tipos
var tipos = [{
  nome: "Hardware",
  subtipos: ["Computador", "Impressora", "Monitor", "Roteador"]
}, {
  nome: "Software",
  subtipos: ["Gratuito", "Licenciado"]
}]

// Static fornecedores
var fornecedores = ["Apple", "Asus", "Hewlett-Packard", "Lenovo"]

// Static responsáveis
var responsaveis = ["Alan Turing", "Linus Torvalds", "Bill Gates", "Steve Jobs"]

// --- Document ready ---
$(function () {
  // --- Inputs ---
  var inputTipo = $("#inputTipo");
  var inputSubtipo = $("#inputSubtipo");
  var inputFornecedor = $("#inputFornecedor");
  var inputResponsavel = $("#modalUpdate #inputResponsavel");

  function loadSelectData () {
    // --- Data loads ---
    // Tipos
    if (tipos && tipos.length > 0) {
      for (var i = 0; i < tipos.length; i++) {
        loadSelect(inputTipo, [tipos[i].nome]);
        if (tipos[i].subtipos && tipos[i].subtipos.length > 0)
          loadSelect(inputSubtipo, tipos[i].subtipos);
        else
          disableSelect(inputSuptipo, "subtipo");
      }
    }
    else {
      disableSelect(inputTipo, "tipo");
      disableSelect(inputSuptipo, "subtipo");
    }

    // Fornecedores
    if (fornecedores && fornecedores.length > 0)
      loadSelect(inputFornecedor, fornecedores);
    else {
      disableSelect(inputFornecedor, "fornecedor");
    }
  }

  $(".btnAdd").on("click", function () {
    loadSelectData();
  })

  $(".btnUpdate").on("click", function () {
  })

  // --- Table ---
  var table = $("#tabelaIC");
  var modal = $("#modalIC");
  var modal_header = $("#modalIC .modal-header")

  // $("#tabelaIC tbody").on("click", ".btnView", function () {
  //
  // })

  $("#tabelaIC tbody").on("click", ".btnUpdate", function () {
    // Fornecedores
    if (responsaveis && responsaveis.length > 0)
      loadSelect(inputResponsavel, responsaveis);
    else {
      disableSelect(inputResponsavel, "fornecedor");
    }
  })
})
