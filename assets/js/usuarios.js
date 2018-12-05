// Static departamentos
var departamentos = ["Design", "Desenvolvimento de Software", "Financeiro", "Recursos Humanos"]

// --- Inputs ---
var inputDepartamento = $("#inputDepartamento");

// --- Data loads ---
// Fornecedores
if (departamentos && departamentos.length > 0)
  loadSelect(inputDepartamento, departamentos);
else {
  disableSelect(inputDepartamento, "departamento");
}
