function toggleModal(id) {
    // alert(id);
    $("#" + id + "-modal-body").toggleClass("d-none");
    $("#modal").toggleClass("d-none");
}