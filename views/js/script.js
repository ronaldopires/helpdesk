$(document).ready(function () {
  //Data Tables

  if (
    window.location.href.toString().split(window.location.host)[1] ==
    "/requests.html"
  ) {
    let request = $("#table-request").DataTable({
      dom: "Bfrtip",
      lengthChange: false,
      responsive: true,
      buttons: [
        {
          extend: "excel",
          split: ["pdf", "csv"],
        },
      ],
      language: {
        url: "//cdn.datatables.net/plug-ins/1.11.5/i18n/pt-BR.json",
      },
    });
    request.buttons().container().appendTo("#example_wrapper .col-md-6:eq(0)");
  }
  if (
    window.location.href.toString().split(window.location.host)[1] ==
    "/my-requests.html"
  ) {
    let my_request = $("#table-my-request").DataTable({
      lengthChange: false,
      dom: "Bfrtip",
      responsive: true,
      buttons: [
        {
          extend: "excel",
          split: ["pdf", "csv"],
        },
      ],
      language: {
        url: "//cdn.datatables.net/plug-ins/1.11.5/i18n/pt-BR.json",
      },
    });
    my_request.buttons().container().appendTo("#example_wrapper .col:eq(0)");
  }
});
