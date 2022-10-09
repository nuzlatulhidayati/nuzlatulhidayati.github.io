$(document).ready(function () {
  $('.data').click(function () {
    let isi = $(this).text();
    let tid = $(this).prop('id');
    let rid = tid.split('__');
    let id_baris = rid[1];
    let nama_mhs = $('#nama_mhs__' + id_baris).text();
    let alamat = $('#alamat__' + id_baris).text();

    if (isi == 'Hapus') {
      let yakin = confirm('yakin mau menghapus data atas nama ' + nama_mhs + '??');
      if (!yakin) return;

      $('#baris__' + id_baris).fadeOut();
    } else {
      alert('ini kolom atas nama ' + nama_mhs + ' alamat di ' + alamat);
    }
  });
});
