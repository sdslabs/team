<html>
  <head>
    <link rel="stylesheet" href="/home/topbar.css">
    <title>SDSLabs Team</title>
    <link rel="stylesheet" href="assets/style.css">
    <link rel="shortcut icon" href="assets/favicon.png">
    <script src='//cdn.sdslabs.co.in/cdnjs/ajax/libs/jquery/1.8.1/jquery.min.js'></script>
    <script src="/api/public/api.js"></script>
    <script src="//cdn.sdslabs.co.in/cdnjs/ajax/libs/masonry/2.1.04/jquery.masonry.min.js"></script>
  </head>
  <body>
    <div id="wrapper">
      <div id="container">
        <div class="box photo col4">
          <img src="pics/aarti.jpg" alt="Aarti" />
          <div class="img-title">&nbsp;&nbsp;Aarti Dwivedi</div>
        </div>
      
        <div class="box photo col4">
          <img src="pics/abhay.jpg" alt="Abhay" />
          <div class="img-title">&nbsp;&nbsp;Abhay Bir Singh Rana</div>
        </div>
      
        <div class="box photo col4">
          <img src="pics/abhishek.jpg" alt="Abhishek" />
          <div class="img-title">&nbsp;&nbsp;Abhishek Das</div>
        </div>

        <div class="box photo col4">
          <img src="pics/aditya.jpg" alt="Aditya" />
          <div class="img-title">&nbsp;&nbsp;Aditya Garg</div>
        </div>

        <div class="box photo col4">
          <img src="pics/apoorva.jpg" alt="Apoorva" />
          <div class="img-title">&nbsp;&nbsp;Apoorva Mudgal</div>
        </div>

        <div class="box photo col4">
          <img src="pics/arun.jpg" alt="Arun" />
          <div class="img-title">&nbsp;&nbsp;Arun Chetty</div>
        </div>
      
        <div class="box photo col4">
          <img src="pics/ashwini.jpg" alt="Ashwini" />
          <div class="img-title">&nbsp;&nbsp;Ashwini Khare</div>
        </div>

        <div class="box photo col4">
          <img src="pics/divyanshu.jpg" alt="Divyanshu" />
          <div class="img-title">&nbsp;&nbsp;Divyanshu Upreti</div>
        </div>

        <div class="box photo col4">
          <img src="pics/durgesh.jpg" alt="Durgesh" />
          <div class="img-title">&nbsp;&nbsp;Durgesh Suthar</div>
        </div>

        <div class="box photo col4">
          <img src="pics/giri.jpg" alt="Giri" />
          <div class="img-title">&nbsp;&nbsp;Giridaran Manivannan</div>
        </div>
      
        <div class="box photo col4">
          <img src="pics/harshil.jpg" alt="Harshil" />
          <div class="img-title">&nbsp;&nbsp;Harshil Mathur</div>
        </div>

        <div class="box photo col4">
          <img src="pics/jayant.jpg" alt="Jayant" />
          <div class="img-title">&nbsp;&nbsp;Jayant Jain</div>
        </div>

        <div class="box photo col4">
          <img src="pics/neeraj.jpg" alt="Neeraj" />
          <div class="img-title">&nbsp;&nbsp;Neeraj Gangwar</div>
        </div>
      
        <div class="box photo col4">
          <img src="pics/nisha.jpg" alt="Nisha" />
          <div class="img-title">&nbsp;&nbsp;Nisha Chandramoorthy</div>
        </div>

        <div class="box photo col4">
          <img src="pics/nitish.jpg" alt="Nitish" />
          <div class="img-title">&nbsp;&nbsp;Nitish Sharma</div>
        </div>

        <div class="box photo col4">
          <img src="pics/obuli.jpg" alt="Obuli" />
          <div class="img-title">&nbsp;&nbsp;Obuli Vignesh</div>
        </div>
      
        <div class="box photo col4">
          <img src="pics/ravi.jpg" alt="Ravi" />
          <div class="img-title">&nbsp;&nbsp;Ravi Kishore</div>
        </div>

        <div class="box photo col4">
          <img src="pics/richa.jpg" alt="Richa" />
          <div class="img-title">&nbsp;&nbsp;Richa Jain</div>
        </div>

        <div class="box photo col4">
          <img src="pics/rushil.jpg" alt="Rushil" />
          <div class="img-title">&nbsp;&nbsp;Rushil Nagda</div>
        </div>
      
        <div class="box photo col4">
          <img src="pics/sagar.jpg" alt="Sagar" />
          <div class="img-title">&nbsp;&nbsp;Sagar Saxena</div>
        </div>

        <div class="box photo col4">
          <img src="pics/saket.jpg" alt="Saket" />
          <div class="img-title">&nbsp;&nbsp;Saket Sarupria</div>
        </div>
      
        <div class="box photo col4">
          <img src="pics/sethu.jpg" alt="Sethu" />
          <div class="img-title">&nbsp;&nbsp;Sethu Nachiappan</div>
        </div>

        <div class="box photo col4">
          <img src="pics/shagun.jpg" alt="Shagun" />
          <div class="img-title">&nbsp;&nbsp;Shagun Sodhani</div>
        </div>

        <div class="box photo col4">
          <img src="pics/shashank.jpg" alt="Shashank" />
          <div class="img-title">&nbsp;&nbsp;Shashank Mehta</div>
        </div>

        <div class="box photo col4">
          <img src="pics/shikhar.jpg" alt="Shikhar" />
          <div class="img-title">&nbsp;&nbsp;Shikhar Shrivastava</div>
        </div>

        <div class="box photo col4">
          <img src="pics/shivam.jpg" alt="Shivam" />
          <div class="img-title">&nbsp;&nbsp;Shivam Gupta</div>
        </div>

        <div class="box photo col4">
          <img src="pics/shreya.jpg" alt="Shreya" />
          <div class="img-title">&nbsp;&nbsp;Shreya Bhardwaj</div>
        </div>
      </div>
    </div>
    <script>

      $(function() {
        var $container = $('#container');

        $container.imagesLoaded( function(){
          $container.masonry({
            itemSelector : '.box'
          });
          $('#wrapper').css('width',$('.photo').width()*3+26).animate({
            opacity: 1
          },1000);
        });
        topbar.showTopbar(); 
        topbar.setCurrent("Team");
      });

    </script>
  </body>
</html>
