function createChipsCopy() {
  const chipRows = document.querySelectorAll('.chips__row');
  for (let i = 0; i < chipRows.length; i++) {
    const copyChipRow = document.querySelector(`.chips__images_${i + 1}`).cloneNode(true);
    if (i % 2 === 0) {
      chipRows[i].prepend(copyChipRow)
    } else {
      chipRows[i].append(copyChipRow)
    }
  }
}
createChipsCopy();
createChipsCopy();

