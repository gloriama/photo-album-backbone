var initialPhotos = [
  {
    title: 'Aang',
    url: 'http://vignette2.wikia.nocookie.net/avatar/images/c/ce/Aang_meditates.png/revision/20100924130958'
  },
  {
    title: 'Toph',
    url: 'http://static.comicvine.com/uploads/original/11112/111120404/3129869-toph_bei_fong___atla_by_yori_narpati.jpg'
  },
  {
    title: 'Katara',
    url: 'http://static.comicvine.com/uploads/original/11118/111183530/4221523-1722771950-Katar.png'
  },
  {
    title: 'Sokka',
    url: 'http://static.comicvine.com/uploads/original/11119/111193741/4607146-1325517488-Sokka.jpg'
  }
];

initialPhotos = initialPhotos.map((photo) => {
  photo.rating = 0;
  return photo;
});