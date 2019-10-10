(function FindHeight() {
    const banner = document.querySelector('.banner');
    const promo = document.querySelector('.promo');
    
    let bannerHeight = getComputedStyle(banner);
    
     window.onload = function() {
     
         promo.style.marginBottom = bannerHeight.height;
     }
     
      window.onresize = function() {
     
         promo.style.marginBottom = bannerHeight.height;
     }
}())