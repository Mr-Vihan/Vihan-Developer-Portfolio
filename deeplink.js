(function() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    var isInstagram = ua.indexOf('Instagram') > -1 || ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1;

    if (isInstagram) {
        // The URL you want to open
        var currentUrl = window.location.href;

        // Android Trick: Use the intent scheme to force Chrome
        if (/Android/i.test(ua)) {
            window.location.href = 'intent://' + currentUrl.replace(/^https?:\/\//, '') + '#Intent;scheme=https;package=com.android.chrome;end';
        } 
        // iOS Trick: There is no direct "force" command for Safari, 
        // so we often prompt the user or use a 'googlechrome://' bypass if installed.
        else if (/iPhone|iPad|iPod/i.test(ua)) {
            // Optional: You can try to force Chrome if they have it, 
            // but usually, iOS users just have to use the "Open in Safari" button in the IG menu.
            console.log("User is on Instagram iOS");
        }
    }
})();
