// 1. STYLES
const style = document.createElement('style');
style.textContent = `
    .gs-blur {
        filter: blur(8px) !important;
        transition: filter 0.3s ease;
        cursor: pointer !important;
        display: inline !important;
        unicode-bidi: isolate;
    }
    .gs-blur:hover {
        filter: blur(0px) !important;
    }
`;
document.head.appendChild(style);

// 2. REFINED PATTERNS
// Added support for multiple phone formats and slashes as seen in your photo
const PATTERNS = {
    email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
    phone: /(?:\+?\d{1,3}[-.\s]?)?\(?\d{2,4}\)?[-.\s]?\d{3,4}[-.\s]?\d{3,9}/,
    numeric16: /\b\d{13,19}\b/
};

const masterRegex = new RegExp(
    Object.values(PATTERNS).map(re => `(${re.source})`).join('|'),
    'g'
);

// 3. THE ENGINE
function ghostSyncEngine(rootNode) {
    if (!rootNode || !rootNode.isConnected) return;

    // Use TreeWalker to find all text nodes
    const walker = document.createTreeWalker(rootNode, NodeFilter.SHOW_TEXT, null, false);
    let textNodes = [];

    while (walker.nextNode()) {
        const node = walker.currentNode;
        const parent = node.parentNode;

        if (!parent || 
            ['SCRIPT', 'STYLE', 'INPUT', 'TEXTAREA'].includes(parent.tagName) || 
            parent.closest('.gs-blur')) continue;

        if (masterRegex.test(node.nodeValue)) {
            textNodes.push(node);
        }
        masterRegex.lastIndex = 0; 
    }

    textNodes.forEach(node => {
        const parent = node.parentNode;
        // CRITICAL ERROR FIX: check if node is still attached to its parent
        if (!parent || !node.isConnected || node.parentNode !== parent) return;

        const originalText = node.nodeValue;
        const fragment = document.createDocumentFragment();
        const temp = document.createElement('span');
        
        // Replace all occurrences in the string globally
        temp.innerHTML = originalText.replace(masterRegex, (match) => {
            return `<span class="gs-blur">${match}</span>`;
        });

        // Safe replacement
        try {
            while (temp.firstChild) {
                fragment.appendChild(temp.firstChild);
            }
            parent.replaceChild(fragment, node);
        } catch (e) {
            console.warn("GhostSync: Blocked a NotFoundError crash on dynamic node.");
        }
    });
}

// 4. THE OBSERVER & AUTO-RUN
ghostSyncEngine(document.body);

const observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) ghostSyncEngine(node);
        });
    }
});

observer.observe(document.body, { childList: true, subtree: true });

// Safety Net: Run every 3 seconds for persistent elements missed by observer
setInterval(() => ghostSyncEngine(document.body), 3000);