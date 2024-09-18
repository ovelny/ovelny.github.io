window.onload = (event) => {
  // Logo is always displayed, so that's always one image
  // on page. If we don't have anything else, don't run
  // this script at all, thank you very much.
  if (document.images.length <= 1) {
    return;
  }

  const images = document.querySelectorAll('p > img');
  images.forEach(image => {
    // We only apply the onclick property and the cursor
    // style to images that need to be zoomed in. That
    // is, images wider than the document body:
    if (image.naturalWidth > document.body.clientWidth) {
      image.style.cursor = "crosshair";
      image.onclick = (event) => {
        image.style.maxWidth != "none" ? image.style.maxWidth = "none" : image.style.maxWidth = document.body.style.maxWidth;
      }
    }
  });
}
