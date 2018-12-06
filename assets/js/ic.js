// Static tipos
var tipos = [{
  nome: "Hardware",
  subtipos: ["Computador", "Impressora", "Monitor", "Roteador"]
}, {
  nome: "Software",
  subtipos: ["Gratuito", "Licenciado"]
}]

// Static fornecedores
// var fornecedores = ["Apple", "Asus", "Hewlett-Packard", "Lenovo"]
var fornecedores = [];

// Static responsáveis
var responsaveis = ["Alan Turing", "Linus Torvalds", "Bill Gates", "Steve Jobs"]

// --- Document ready ---
$(function () {
  $('#tabelaIC').DataTable({
    "initComplete": function () { $('[data-toggle="tooltip"]').tooltip() },
    responsive: true,
    "language": {
    "url": "https://cdn.datatables.net/plug-ins/1.10.19/i18n/Portuguese-Brasil.json"
    },
    "processing" : true,
    "ajax" : {
        "url" : `${HOST}/getICs`,
        dataSrc : ''
    },
    "columns" : [ {
        "data" : "id"
    },{
        "data" : "nome"
    }, {
        "data" : "subtipo"
    }, {
        "data" : "status"
    }, {
      "data"   : null
    }],
    "columnDefs": [ {
        "targets": -1,
        "data": null,
        "defaultContent": html
    } ]
  });

  // --- Inputs ---
  var inputTipo = $("#inputTipo");
  var inputSubtipo = $("#inputSubtipo");
  var inputFornecedor = $("#inputFornecedor");
  var inputResponsavel = $(".specificity #inputResponsavel");

  function loadSelectData () {
    // --- Data loads ---
    // Tipos
    if (tipos && tipos.length > 0) {
      var aux_tipos = [];
      for (var i = 0; i < tipos.length; i++)
        aux_tipos.push(tipos[i].nome);

      loadSelect(inputTipo, aux_tipos)
    } else
      disableSelect(inputTipo, "tipo");


    if (fornecedores && fornecedores.length > 0)
      loadSelect(inputFornecedor, fornecedores)
    else
      disableSelect(inputFornecedor, "fornecedor");
  }

  getFornecedores(function (data) {
    for (var i = 0; i < data.length; i++)
      fornecedores.push(data[i].nomeFantasia)

    loadSelectData();
  });

  $(inputTipo).on("change", function () {
    // --- Load Subtipo ---
    inputSubtipo.html("");

    var opc = $(this).val();

    if (opc.length > 0)
      if (tipos[opc].subtipos && tipos[opc].subtipos.length > 0)
        loadSelect(inputSubtipo, tipos[opc].subtipos);
      else
        disableSelect(inputSubtipo, "subtipo");
    else {
      inputSubtipo.attr("disabled", true)
      inputSubtipo.html("<option selected>-</option>");
    }
  })

  $(inputSubtipo).on("change", function () {
    // --- Specificity ---
    var opc = $(this).val();

    if (opc.length > 0 && opc == 0) {
      $(".specificity").removeClass("d-none");
      var nomes = [];
      getUsuarios(function (data) {
        for (var i = 0; i < data.length; i++)
          nomes.push(data[i].nome)

        loadSelect(inputResponsavel, nomes)
      })
    } else
      $(".specificity").addClass("d-none");
  })

  $(".btnAdd").on("click", function () {

  })

  $(".btnUpdate").on("click", function () {})

  // --- Table ---
  var table = $("#tabelaIC");
  var modal = $("#modalIC");
  var modal_header = $("#modalIC .modal-header")

  $("#tabelaIC tbody").on("click", ".btnUpdate", function () {
    // Fornecedores
    if (responsaveis && responsaveis.length > 0)
      loadSelect(inputResponsavel, responsaveis);
    else {
      disableSelect(inputResponsavel, "fornecedor");
    }
  })

  $("#tabelaIC tbody").on("click", ".btnView", function () {
    getICs(function (data) { });
  })
})
