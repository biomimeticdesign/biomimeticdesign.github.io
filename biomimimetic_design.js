    function text1appear() {
        var x = document.getElementById("text1");
        if (window.getComputedStyle(x).display === "none") {
          x.style.display = "block";
        //   audio.setVolume(1);
          audio.currentTime = 0; 
          audio.play();

        } 
        else {
          x.style.display = "none";
          audio.pause();  
        }
        var box =x;
      $('.box').each (function (index, element) {
          if (box != element){
            x4.style.display = "none";
            audio4.pause();  
          }
      })
      }
    function text2appear() {
        var x2 = document.getElementById("text2");
        if (window.getComputedStyle(x2).display === "none") {
          x2.style.display = "block";
          audio2.currentTime=0; 
          audio2.play();

        } else {
          x2.style.display = "none";
          audio2.pause();  
        }
      }
      function text3appear() {
        var x3 = document.getElementById("text3");
        if (window.getComputedStyle(x3).display === "none") {
          x3.style.display = "block";
          audio3.currentTime=0; 
          audio3.play();

        } else {
          x3.style.display = "none";
          audio3.pause();  
        }
      }
      function text4appear() {
        var x4 = document.getElementById("text4");
        if (window.getComputedStyle(x4).display === "none") {
          x4.style.display = "block";
          audio4.currentTime=0; 
          audio4.play();

        } else {
          x4.style.display = "none";
          audio4.pause();  
        }
      }
      function text5appear() {
        var x5 = document.getElementById("text5");
        if (window.getComputedStyle(x5).display === "none") {
          x5.style.display = "block";
          audio5.currentTime=0; 
          audio5.play();

        } else {
          x5.style.display = "none";
          audio5.pause();  
        }
      }
      function text6appear() {
        var x6 = document.getElementById("text6");
        if (window.getComputedStyle(x6).display === "none") {
          x6.style.display = "block";
          audio5.currentTime=0; 
          audio6.play();

        } else {
          x6.style.display = "none";
          audio6.pause();  
        }
      }
      function text7appear() {
        var x7 = document.getElementById("text7");
        if (window.getComputedStyle(x7).display === "none") {
          x7.style.display = "block";
          audio7.currentTime=0; 
          audio7.play();

        } else {
          x7.style.display = "none";
          audio7.pause();  
        }
      }
      function text8appear() {
        var x8 = document.getElementById("text8");
        if (window.getComputedStyle(x8).display === "none") {
          x8.style.display = "block";
          audio8.currentTime=0; 
          audio8.play();

        } else {
          x8.style.display = "none";
          audio8.pause();  
        }
      }
      function text9appear() {
        var x9 = document.getElementById("text9");
        if (window.getComputedStyle(x9).display === "none") {
          x9.style.display = "block";
          audio9.currentTime=0; 
          audio9.play();

        } else {
          x9.style.display = "none";
          audio9.pause();  
        }
      }
      function text10appear() {
        var x10 = document.getElementById("text10");
        if (window.getComputedStyle(x10).display === "none") {
          x10.style.display = "block";
          audio10.currentTime=0; 
          audio10.play();

        } else {
          x10.style.display = "none";
          audio10.pause();  
        }
      }
      function text11appear() {
        var x11 = document.getElementById("text11");
        if (window.getComputedStyle(x11).display === "none") {
          x11.style.display = "block";
          audio11.currentTime=0; 
          audio11.play();

        } else {
          x11.style.display = "none";
          audio11.pause();  
        }
      }
      function text12appear() {
        var x12 = document.getElementById("text12");
        if (window.getComputedStyle(x12).display === "none") {
          x12.style.display = "block";
          audio12.currentTime=0; 
          audio12.play();

        } else {
          x12.style.display = "none";
          audio12.pause();  
        }
      }
    
      function setup() {
        createCanvas(1500,800);
        background("rgb(0, 28, 0)");
        var intervalID = window.setInterval(newEllipse,5000);
        fade=0;
      }
      function draw() {
      }
        // let noiseLevel = 100;
        // let noiseScale = 0.005;

        // let nt = noiseScale * frameCount;

        // let x = noiseLevel * noise(nt);
        // let y = noiseLevel * noise(nt + 10000);
        function newEllipse (){
        let x = random(1500);
        let y = random(800);
        let c = color(195,195,195);
        // let appearCounter=0;
        c.setAlpha(128);
        fill(c);
        stroke("rgb(195, 195, 195)");
        strokeWeight(2);
        rotate(random(360));
        // ellipse (x,y,20,5);
        rect(x,y,20,20)
    }
        function mouseMoved(){
            background("rgb(0,28,0)"); 
        }
      
    //   function setup(){
    //     createCanvas(400,400);
    //     background (225);
    //     translate (500,500);
    //     arrow = createElement ('arrow');
    //     canvas.position(400,100);
      
    //   function draw() {
    //     stroke('rgb(195, 195, 195)');
    //     strokeWeight(5);
    //     line (100,10);
    //   }
    // }
      

     
      

