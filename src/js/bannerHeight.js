(function findBannerTop() {
    const banner = document.querySelector('.banner');
    const promo = document.querySelector('.promo');
    
    let promoHeight = promo.offsetHeight + 'px';
    
    
    banner.style.top = promoHeight;
    
}())