//
// // This variable will always hold the "active" photo element (the div)
// let activePoint = null;
//
// // PART 1: Make the showPhoto function work
// // 1. set the .featured_image's background image to the imgURL (above), and
// // 2. update the .preview_box's class to include the "active" class.
// const showInfo = (e) => {
//     // Hint: figure out which element the user clicked from the event object:
//     activePoint = e.target; //element we clicked on
//     // Hint: figure out what its background image is:
//     //we want to put this image into featured_image (inside preview box)
//     const clickedPoint = activePoint.innerHTML;
//     document.querySelector(".featured_image").style.backgroundImage = clickedPoint;
//     document.querySelector(".preview").className = "preview active"
// };
// 
// // PART 2: Replace this code with what's commented below.
// //         Instead of just applying the event handler to
// //         the first .card element, you want to apply it to
// //         all of the card elements
// const points = document.querySelectorAll('.point');
// for (point of points) {
//   if () {
//   point.onclick = showInfo;
// } else {
//
// }
// };
//
//
// // PART 3: Close functionality
// // a. This function should remove the “active” class from the
// //    “.preview_box” element.
// // b. Attach your newly created “close” function to the onclick
// //    event handler of the close button (in the upper right-hand corner).
// const close = () => {
//   document.querySelector(".preview.active").className = "preview"
// };
// document.querySelector('#close').onclick = close;
