document.getElementById("hash").addEventListener("click", async () => {
    const { entries } = await browser.devtools.network.getHAR();

    // TODO: they may have opened the panel after making 20 additional network requests
    // Then the last app-*.js won't be found. Should parse entire log, retrieve all app-*.js files,
    // And compare their timestamps to get the last one downloaded
    const entry = entries.slice(entries.length - 20).find((entry) => {
        return entry.request.url.startsWith("https://app.standardnotes.org/assets/javascripts/app-");
    });
    
    if (entry) {
        document.getElementById("filename").innerHTML = `Found file: ${entry.request.url}`;

        const encoder = new TextEncoder();
        const data = encoder.encode(entry.response.content.text);
        const digest = await crypto.subtle.digest("SHA-256", data);
        // convert buffer to byte array
        const hashArray = Array.from(new Uint8Array(digest));
        // convert bytes to hex string
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); 
    
        document.getElementById("result").innerHTML = hashHex;
    }
});