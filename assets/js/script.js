// --- HOST const ---
const HOST = "http://192.168.43.169:8080/Tinfo";

// --- Request ---
function requestError (error, name) {
  if (name)
    console.error(`Erro ao fazer requisição para buscar ${name}: `, error);
}

// --- Getters ---
function getICs (success, error) {
  $.ajax({
    url: `${HOST}/getICs`,
    type: "GET",
    dataType: 'json',
    success: function (data) {
      success(data)
    },
    error: function (e) {
      if (error && typeof error === "function")
        error(e);
      else
        requestError(e, "ICs");
    }
  });
}

function getSubtipo (subtipo, success, error) {
  var url = HOST;
  switch (subtipo) {
    case "computador":
      url += "/getComputadores"
      break;

    default:
    url += "/getFiltroIC?subtipo=" + subtipo
  }

  $.ajax({
    url: url,
    type: "GET",
    dataType: 'json',
    success: function (data) {
      success(data)
    },
    error: function (e) {
      if (error && typeof error === "function")
        error(e);
      else
        requestError(e, "subtipo");
    }
  });
}

function getComputadores (success, error) {
  $.ajax({
    url: `${HOST}/getComputadores`,
    type: "GET",
    dataType: 'json',
    success: function (data) {
      success(data)
    },
    error: function (e) {
      if (error && typeof error === "function")
        error(e);
      else
        requestError(e, "subtipo");
    }
  });
}

function getDepartamentos (success, error) {
  $.ajax({
    url: `${HOST}/getDepartamentos`,
    type: "GET",
    dataType: 'json',
    success: function (data) {
      success(data)
    },
    error: function (e) {
      if (error && typeof error === "function")
        error(e);
      else
        requestError(e, "subtipo");
    }
  });
}

function getFornecedores (success, error) {
  $.ajax({
    url: `${HOST}/getFornecedores`,
    type: "GET",
    dataType: 'json',
    success: function (data) {
      success(data)
    },
    error: function (e) {
      if (error && typeof error === "function")
        error(e);
      else
        requestError(e, "subtipo");
    }
  });
}

function getUsuarios (success, error) {
  $.ajax({
    url: `${HOST}/getUsuarios`,
    type: "GET",
    dataType: 'json',
    success: function (data) {
      success(data)
    },
    error: function (e) {
      if (error && typeof error === "function")
        error(e);
      else
        requestError(e, "subtipo");
    }
  });
}

function getFabricantes (success, error) {
  $.ajax({
    url: `${HOST}/getFabricantes`,
    type: "GET",
    dataType: 'json',
    success: function (data) {
      success(data)
    },
    error: function (e) {
      if (error && typeof error === "function")
        error(e);
      else
        requestError(e, "subtipo");
    }
  });
}

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
  if (data.length > 0){
    $element.attr("disabled", false);

    if (firstDash && $element.children().length == 0)
      $element.append(`<option value="" selected>-</option>`);

    for (var i = 0; i < data.length; i++)
      $element.append(`<option value="${i}">${data[i]}</option>`);
  }
}
