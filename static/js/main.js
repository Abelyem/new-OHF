$("#gallery-img-container").magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery: {
    enabled: true
  }
});

const yewandeInfo = document.getElementById('yewandeInfo')
const overlay = document.getElementById('overlay')


function ShowHideTrusteeInfo() {
  if (yewandeInfo.style.display === "none") {
    yewandeInfo.style.display = "inline";
  } else {
    yewandeInfo.style.display = "none";
  }
}