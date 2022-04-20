$(document).ready(function () {
  //Data Tables

  let request = $('#table-request').DataTable({
    dom: 'Bfrtip',
    lengthChange: false,
    responsive: true,
    buttons: [
      {
        extend: 'excel',
        split: ['pdf', 'csv']
      }
    ],
    language: {
      url: '//cdn.datatables.net/plug-ins/1.11.5/i18n/pt-BR.json'
    }
  })

  request.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)')

  let my_request = $('#table-my-request').DataTable({
    lengthChange: false,
    dom: 'Bfrtip',
    responsive: true,
    buttons: [
      {
        extend: 'excel',
        split: ['pdf', 'csv']
      }
    ],
    language: {
      url: '//cdn.datatables.net/plug-ins/1.11.5/i18n/pt-BR.json'
    }
  })
  my_request.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)')
})
