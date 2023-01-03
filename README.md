# Payload Pro
Javascript payload for exploiting blind XSS. You can simply host `payload.js` file editing the specifications for an ultimate XSS.

# Features
It has some basic features like it can retrieve
- Cookies
- Page URL (the page on which it was fired)
- System date and time (the date and time of victim machine)
- Page source
- Screenshot of page on which it was fired
- A unique ID to recognise it

Some advanced features (inbuilt) are:-
- Scan for HTTP ports running on the server hosting the vulnerable page
- Scan for additional paths (fuzzing the path) on the same web server
URL and page source will be sent to the server for above features

# Add-ons
You can also done some more interesting stuff with add-ons. Just uncomment the line as written in the README file of particular add-on. Currenly, you can use three add-ons:-
- [All port scanner](https://github.com/shriyanss/payload-pro/tree/main/addons/all_port_scanner): Scan all 65536 ports of the host
- [Login creator](https://github.com/shriyanss/payload-pro/tree/main/addons/login_creator): Create a fake login page for phishing
- [Wordlist fuzzer](https://github.com/shriyanss/payload-pro/tree/main/addons/wordlist_fuzzer): Fuzz URL endpoint using a wordlist (URL)

More infomation can be found on README file

# Deploying
You can use Pipedream to create workflows. Information can be found [here](https://github.com/shriyanss/payload-pro/blob/main/webhook.md)
