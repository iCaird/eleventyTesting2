window.MathJax = {
    loader: {
        load: ['[tex]/mathtools']
    },
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        macros: {
            Hom: '\\operatorname{Hom}'
        }
    },
    svg: {
        fontCache: 'global'
    }
};

function typesetMath() {
    if (window.MathJax) {
        MathJax.typeset()
            .then(() => console.log("MathJax typesetting complete."))
            .catch(err => console.error("MathJax typesetting error: ", err));
    } else {
        console.error("MathJax is not loaded.");
    }
}

// Initial typeset on page load
window.addEventListener('load', typesetMath);

// Detect when Eleventy's live reload occurs
let socket;
const checkForLiveReload = () => {
    if (socket && socket.readyState === 1) {
        typesetMath();
    }
};

// Attempt to find the WebSocket used by Eleventy's live reload
const checkForSocket = setInterval(() => {
    if (typeof window.__eleventyLiveReload !== 'undefined') {
        socket = window.__eleventyLiveReload.socket;
        clearInterval(checkForSocket);

        // If socket is found, trigger typesetMath on socket open
        socket.addEventListener('open', () => {
            console.log("Live reload socket connected.");
            typesetMath();
        });

        // Re-check the socket connection when it closes
        socket.addEventListener('close', () => {
            console.log("Live reload socket closed.");
        });
    }
}, 100); // Check every 100ms for the WebSocket
