$(function () {
  // --- ICs ---
  getICs(function (data) {
    // Quantity
    $(".estatisticas .ICs .qtd_total").text(data.length);

    // Total cost
    var custo_total = 0;
    for (var i = 0; i < data.length; i++)
      custo_total += data[i].preco;

    $(".estatisticas .ICs .custo_acumulado").text(custo_total);
  })

  // --- Computadores ---
  getSubtipo("computador", function (data) {
    // Quantity
    $(".estatisticas .computadores .qtd_total").text(data.length);

    // Total cost
    var custo_total = 0;
    for (var i = 0; i < data.length; i++)
      custo_total += data[i].preco;

    $(".estatisticas .computadores .custo_acumulado").text(custo_total);
  })

  // --- Departamentos ---
  getDepartamentos(function (data) {
    // Quantity
    $(".estatisticas .departamentos .qtd_total").text(data.length);
  })

  // --- Fornecedores ---
  getFornecedores(function (data) {
    // Quantity
    $(".estatisticas .fornecedores .qtd_total").text(data.length);
  })
});
