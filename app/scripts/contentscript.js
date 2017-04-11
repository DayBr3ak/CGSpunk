(function() {
    'use strict';

    window.postMessage({ action: 'removeEventListeners' }, '*');

    function injectScript() {
        let script = document.createElement('script');
        script.src = chrome.extension.getURL('scripts/Injected.js');
        let html = document.getElementsByTagName('html')[0];
        html.appendChild(script);
    }

    $(document).ready(() => {
        setTimeout(injectScript, 100);
    });

    let ngDebugStr = 'NG_ENABLE_DEBUG_INFO!';
    if (window.name.indexOf(ngDebugStr) === -1) {
        window.name = ngDebugStr + window.name
    }

})();
