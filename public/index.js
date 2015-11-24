$(document).ready(function () {
  console.log('creo los handlers para los clicks de los botones, CREATE y DELETE');

  $('.getData').click(function () {
    console.log('hago un pedido POST para CREAR los datos a la url /create');
    $.ajax({
      type: 'GET',
      url: '/getData',
      data: {name: 'luke', id: 1},
      success: function (data) {
        $('getDataContainer').text();
        console.log('getData me retorno:%j', data);
      }
    });
  });

  $('.create').click(function () {
    console.log('hago un pedido POST para CREAR los datos a la url /create');
    $.ajax({
      type: 'POST',
      url: '/create',
      data: {name: 'luke', id: 1},
      success: function (data) {
        $('createContainer').text();
        console.log('create me retorno:%j', data);
      }
    });
  });

  $('.delete').click(function () {
    console.log('hago un pedido POST para ELIMINAR los datos a la url /delete');
    $.ajax({
      type: 'POST',
      url: '/delete',
      data: {id: 1},
      success: function (data) {
        $('deleteContainer').text(data);
        console.log('delete me retorno:%j', data);
      }
    });
  });
});
