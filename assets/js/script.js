// --- Document ready ---
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// --- Functions ---
// Disable select element
function disableSelect ($element, title) {
  $element.attr("disabled", true);
  $element.append(`<option selected>Nenhum ${title} cadastrado</option>`)
}

// Load data on a select HTML element
function loadSelect ($element, data, firstDash = true) {
  if (firstDash && $element.children().length == 0)
    $element.append("<option selected>-</option>");

  for (var i = 0; i < data.length; i++)
    $element.append(`<option value="${i}">${data[i]}</option>`);
}
