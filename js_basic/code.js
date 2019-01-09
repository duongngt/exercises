function loadJSON(callback) {
   var xobj = new XMLHttpRequest();
   xobj.overrideMimeType("application/json");
   xobj.open('GET', 'data.json', true); // Replace 'my_data' with the path to your file
   xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
         // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
         callback(xobj.responseText);
      }
   };
   xobj.send(null);
}
function init() {
   loadJSON(function (response) {
      // Parse JSON string into object
      var actual_JSON = JSON.parse(response);
      var loop = (actual_JSON.listblog).length;
      //  for(var i = 0; i < loop; i++ ){
      //    blog = (actual_JSON.listblog[i]);
      //    console.log(blog)
      //}     
      // let eventElement = document.getElementsByClassName('list-blog')
      let listBlog = actual_JSON.listblog;
         let test = document.getElementById('list-blog');
         let result = ''
       for(var i = 0; i < loop; i++ ){
          var id = (listBlog[i].id);
          var img = (listBlog[i].img);
          var author = (listBlog[i].author);
          var timepost = (listBlog[i].timepost);
          var title = (listBlog[i].title);
          result += ` 
          <div class="col-md-4" id=${id} >
          <a href="blog-single.html" class="blog-entry " data-animate-effect="fadeIn">
            <img src=${img} alt="Image placeholder">
            <div class="blog-content-body">
              <div class="post-meta">
                <span class="author mr-2"><img src="images/person_1.jpg" alt="Colorlib">${author}</span>&bullet;
                <span class="timeup mr-2">${timepost}</span>
              </div>
              <h2>${title}</h2>
            </div>
          </a> 
        </div>
        `
       }
       test.innerHTML = result;
      })
}
document.addEventListener('DOMContentLoaded', function () {
   init();
});


