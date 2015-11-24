$(document).ready(function () {
  console.log('creo los handlers para los clicks de los botones, CREATE y DELETE');

  $('.getData').click(function () {
    console.log('hago un pedido POST para CREAR los datos a la url /create');
    $.ajax({
      type: 'GET',
      url: '/getData',
      success: function (data) {
        $('.getDataContainer').empty().text(JSON.stringify(data));
        console.log('getData me retorno:%j', data);
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });
  });

  $('.create').click(function () {
    console.log('hago un pedido POST para CREAR los datos a la url /create');
    $.ajax({
      type: 'POST',
      url: '/create',
      data: JSON.stringify({name: 'luke', id: '1'}),
      success: function (data) {
        $('.createContainer').empty().text(JSON.stringify(data));
        console.log('create me retorno:%j', data);
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });
  });

  $('.delete').click(function () {
    console.log('hago un pedido POST para ELIMINAR los datos a la url /delete');
    $.ajax({
      type: 'POST',
      url: '/delete',
      data: JSON.stringify({id: '1'}),
      success: function (data) {
        $('.deleteContainer').empty().text(JSON.stringify(data));
        console.log('delete me retorno:%j', data);
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });
  });
});
