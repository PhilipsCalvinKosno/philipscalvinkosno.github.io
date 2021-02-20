const endpoint_url = 'https://51018016.p-web.click/Final/api/';


function getImagemain(id) {
  fetch(endpoint_url + "images/imagemain"+"?id="+id)
  .then(status)
  .then(json)
  .then(function(data) {
    var mainHTML="";
    data.gambar.forEach(function(gambar){
      mainHTML += `


   <div class="col-lg-4">
     <img src="${gambar.image1}" alt="" style="width:430px ">
   </div>

   <div class="col-lg-4" >
     <img src="${gambar.image2}" alt="" style="width:440px;">
   </div>
   <br><br>
   <div class="col-lg-3" >
     <img src="${gambar.image3}" alt="" style="width:440px;">
   </div>




<div class="col kimochi">
   <div class="card mb-4" style="max-width: 650px;">
     <div class="row g-0">
       <div class="col-md-4">
         <img src="${gambar.game_logo}"style="width:200px; height:220px;">
       </div>
       <div class="col-md-7">
         <div class="card-body">
           <h5 class="card-title">${gambar.title}</h5>
           <p class="card-text">Size Game: ${gambar.size}Mb</p>
            <p class="card-text">Developer: ${gambar.developer_name}</p>
            <p class="card-text"><small class="text-muted">Genre: ${gambar.genre_name}</small></p>
           <p class="card-text"><small class="text-muted">Rating: ${gambar.rating}/5</small></p>
         </div>
       </div>
     </div>
   </div>
   </div>
   <div class="col">

   <div class="d-grid gap-2 col-6 mx-auto mantap">
   <a href="https://play.google.com/store?hl=in&gl=US">
  <button class="btn btn-success" type="button">Download From Playstore</button></a>

</div>
</div>





<div class="row">
      <div class="col-12">
  <h3>Deskripsi game</h3>
  <p class="deskripsi">${gambar.information}</p>
  </div>
</div>

        `;

    });
        document.getElementById("imagedetail").innerHTML = mainHTML;
  })
  .catch(error);
}
