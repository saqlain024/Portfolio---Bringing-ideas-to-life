  // navigation bar scrolling code
  var navMenuAnchorTags = document.querySelectorAll( '.nav-menu a');

  for( var i=0; i<navMenuAnchorTags.length; i++){
      
      navMenuAnchorTags[i].addEventListener('click', function(event){
          event.preventDefault();
          var targetSectionID = this.textContent.trim().toLowerCase();
          var targetSection = document.getElementById(targetSectionID);
          console.log(targetSection);
          
          var interval = setInterval( function(){
               var targetSectionCoordinates  = targetSection.getBoundingClientRect();
               if(targetSectionCoordinates.top <= 0){
                   clearInterval(interval);
                   return;
               }
               window.scrollBy(0,50);
    
           }, 27);
           //this handles the contact option
           setTimeout(function(){
              clearInterval(interval);
              return;
           }, 3000);
          
      });
  }
          
  //  Alternate  :  css  has one property  scroll-behaviour which handles this too 
  // html{
  //     scroll-behavior: smooth;
  //   }
  
  
  
  
                     // skills section animation code
  
  //check that skills section container is visible or not 
  // ensure that intial width of colored skill divs is zero
  // start animation on every skills -> increased skill width from 0 t0 skill level
  //store skill level -> html with the help data  attribute
  
  // var progressBars = document.querySelectorAll('.skill-progress > div');
  // var skillsContainer = document.getElementById('skills-container');
  // window.addEventListener('scroll', checkScroll);
  // var animationDone = false;
  
  
  // //intialize the  each skills  by 0
  // function instialiseBars(){
  //     for (let bar of progressBars) {
  //         bar.style.width = 0 + '%';
  //     }
  // }
  
  // instialiseBars();
  
  
  
  // //function to fill the skills up to the desired percentage
  // function fillBars(){
  
  //     for( let bar of progressBars){
  //         let targetWidth = bar.getAttribute('data-bar-width');
  //         let currentWidth = 0;
  //         let interval = setInterval( function(){
  //             if( currentWidth > targetWidth){
  //                 clearInterval(interval);
  //                 return;
  //             }
  //             currentWidth++;
  //             bar.style.width = currentWidth + '%';
  
  //         }, 5);
  
  //     }
  // }
    
  // function checkScroll(){
  
  //     //you have to check whether skill container is visible or not 
  //     var coordinates  = skillsContainer.getBoundingClientRect();
  
  //     if( !animationDone &&  coordinates.top < window.innerHeight){
  //         animationDone = true;
  //         console.log('skills section visible');
  //         fillBars();
  //     }
  //     else if(coordinates.top > window.innerHeight ){
  //         animationDone = false;
  //         instialiseBars();
  //     }
  // }
  
  
                    //      individual animation
  
  var progressBars = document.querySelectorAll('.skill-progress > div');
  console.log(progressBars);
  window.addEventListener('scroll', checkScroll);
//   var animationDone = false;
  
  function initialiseBar(bar){
          bar.setAttribute("data-visited", false);
          bar.style.width = 0 + '%';
  }
  
  for (let bar of progressBars) {
      initialiseBar(bar);
  }
  
  
  function fillBar(bar){
      var targetWidth = bar.getAttribute('data-bar-width');
      var currentWidth = 0;
  
      var interval = setInterval( function() {
          if(currentWidth > targetWidth){
              clearInterval(interval);
              return;
          }
          currentWidth++;
          bar.style.width = currentWidth + "%";
  
      }, 5);
  }
  
  function checkScroll(){
              //we have to check whether individual bars  is visible or not 
          for (let bar of progressBars) {
          var barCoordinates = bar.getBoundingClientRect();
          if ((bar.getAttribute("data-visited") == "false") && (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
              bar.setAttribute("data-visited", true);
              fillBar(bar);
          } else if (barCoordinates.top > window.innerHeight) {
              bar.setAttribute("data-visited", false);
              initialiseBar(bar);
          }
  
      }
  }