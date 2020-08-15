var yandex = {
    "v1": 51633902,
    "v2": 51634310,
    "v3": 51634442,
    "v4": 51634484,
    "v5": 51634562,
    "v6": 51634607,
    "v6f": 53630386,
    "v7": 51634805,
    "v8": 53630389,
    "v9": 53630413,
    "v11": 51633953,
    "v12": 51634103,
    "v13": 54157780,
    "v14": 51634130,
    "v15": 51634172,
    "v16": 51634199,
    "v17": 51634238,
    "v18": 51634259,
    "v19": 51634289,
    "v20": 51634346,
    "v21": 51634379,
    "v22": 51634421,
    "v10": 53630209,
    "v23": 53630224,
    "v24": 53630266,
    "v25": 53630275,
    "v26": 53630314,
    "v27": 53630341,
    "v28": 54157825,
    "v29": 54810898,
    "v30": 54810901,
    "v31": 54810904,
    "v32": 54810907,
};

function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : '';
}

var site = $_GET('version').replace('es', '').replace('39', '')

if (!site) {
    var site = document.location.pathname
        .replace(/\/+/g, '')
        .replace('index.html', '')
        .replace('index2.html', '')
        .replace('prelp', '')
        .replace('es', '')
        .replace('39', '')
        .replace('confirm.html', '');

}
yandexId = yandex[site];

(function(d, w, c, id) {
    (w[c] = w[c] || []).push(function() {
        try {
            var n = 'yaCounter' + id;
            w.n = new Ya.Metrika({
                id: id,
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true
            });
        } catch (e) {}
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function() {
            n.parentNode.insertBefore(s, n);
        };
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else {
        f();
    }
})(document, window, "yandex_metrika_callbacks", yandexId);