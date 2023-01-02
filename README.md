# Payload Pro
Javascript payload for exploiting blind XSS

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

# Deploying
You can use Pipedream to deploy your XSS payload. A tutorial can be found on my [medium page](https://shriyanssudhi.medium.com)
