function solution(wallpaper) {
  const dragDrop = [Infinity, Infinity, null, null];

  wallpaper.forEach((ele, i) => {
    ele.split('').forEach((item, j) => {
      if (item === '#') {
        dragDrop[0] = Math.min(dragDrop[0], i);
        dragDrop[1] = Math.min(dragDrop[1], j);
        dragDrop[2] = Math.max(dragDrop[2], i + 1);
        dragDrop[3] = Math.max(dragDrop[3], j + 1);
      }
    });
  });

  return dragDrop;
}
