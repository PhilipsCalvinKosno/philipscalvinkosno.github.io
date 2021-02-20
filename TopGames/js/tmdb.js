const endpoint_url = 'http://localhost/Backend/api';
ocument.addEventListener("DOMContentLoaded", function() {
  getImagemain();
});

function getImagemain() {
  fetch(endpoint_url + "/Images/imagemain")
  .then(status)
  .then(json)
  .then(function(data) {
    var mainHTML="";
    data.gambar.forEach(function(gambar){
      mainHTML += `
      <div class="col">
        <a href="index.html">  <img  class="grid-image shadow mb-5 bg-body rounded" src="http://srv4.pweb201.local/TopGames${gambar.image1}" />
        </a>
      </div>

        `;

    });
        document.getElementById("imagedetail").innerHTML = mainHTML;
  })
  .catch(error);
}
