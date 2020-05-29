let activePoint = null;

const showInfo = (e) => {
    activePoint = e.target; //element we clicked on
    const selectedInfo = activePoint.nextElementSibling.innerHTML;
    if () {
      //to get the info to show up and go away when a point is clicked (will need to )
    } else {

    }
};


const points = document.querySelectorAll('.point');
for (point of points) {
  point.onclick = showInfo;
 }
};

}
