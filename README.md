## Standard Notes Checksum

This is a WebExtension that runs a checksum on the downloaded JS files for the Standard Notes web app.

## Development

So far, I've only tested this on Firefox. 

1. Navigate to [about:debugging#/runtime/this-firefox](about:debugging#/runtime/this-firefox)
2. Click "Load Temporary Add-on"
3. Select manifest.json
4. Navigate to [https://app.standardnotes.org/](https://app.standardnotes.org/)

You should now be able to select the Standard Notes Checksum panel in your devtools.

## TODO

- [x] Write proof-of-concept that displays the hash for the core Standard Notes JS file
- [ ] Ensure it grabs the content of the latest files that were downloaded
- [ ] Display hashes for all of Standard Notes JS files, including extensions
- [ ] Brainstorm a way to automate hashing of latest webapp releases for this extension to validate against

## Screenshots

![Screenshot of checksum-webextension's current state](https://box.silentsilas.com/index.php/s/jCRcWqJfX5mz8TS/preview)