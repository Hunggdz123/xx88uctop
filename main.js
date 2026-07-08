(function(){
    var u=function(){var e=document.querySelector('.circle-wrapper a[href]')||document.querySelector('.btn-experience[href]');return e&&e.href?e.href:''},r=function(){var e=u();e&&window.location.replace(e)},p=function(e){var t=(e.key||'').toLowerCase();return e.key==='F12'||e.ctrlKey&&e.shiftKey&&t==='i'||e.ctrlKey&&e.shiftKey&&t==='j'||e.ctrlKey&&t==='u'};
    document.addEventListener('DOMContentLoaded',function(){
        document.addEventListener('keydown',function(e){if(p(e)){e.preventDefault();e.stopPropagation();r();return!1}},!0);
        document.addEventListener('contextmenu',function(e){e.preventDefault();e.stopPropagation();r();return!1},!0);
        document.addEventListener('mousedown',function(e){if(e.button===2){e.preventDefault();e.stopPropagation();r();return!1}},!0);
        document.querySelectorAll('.service-card').forEach(function(e){var t=e.querySelector('.logo-center');t&&(t.style.animation='none')});
        (('ontouchstart' in window)||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)&&(document.body.classList.add('touch-device'),document.querySelectorAll('.service-card').forEach(function(e){e.style.cursor='pointer';e.addEventListener('touchstart',function(){this.style.transform='scale(0.98)'});e.addEventListener('touchend',function(){this.style.transform='scale(1)'})}))
    });
})();
