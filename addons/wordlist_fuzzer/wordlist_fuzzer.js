function fuzz_path(wordlist, target) {
    $.get(wordlist, function (data) {
        var fuzzes = data.split("\n");
        for (fuzz in fuzzes) {
            $.ajax({
                url: (target + "/" + fuzzes[fuzz]),
                success: function (text) {
                    var response = text;
                    push_addition_pgs_to_svr((target + fuzzes[fuzz]), response, "paths");
                }
            });
        }
    })
}
