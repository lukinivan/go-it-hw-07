const allListEls = document.querySelectorAll('.item');

console.log(`Number of categories: ${allListEls.length}`);

allListEls.forEach((el) => {
  console.log(`Category: ${el.children[0].textContent}`);
  console.log(`Elements: ${el.children[1].childElementCount}`);

  // console.log(`Category: ${el.firstElementChild.textContent}`);
  // console.log(`Elements: ${el.lastElementChild.childElementCount}`);
});
