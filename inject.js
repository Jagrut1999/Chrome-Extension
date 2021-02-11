(function() {
    var data = JSON.parse(config);
    for (var key in data)
    {
        m = key + ' : ' + data[key];
        var div = document.createElement('div');
        div.style.paddingLeft = '300px';
        div.style.paddingBottom = '15px';
        div.style.paddingTop = '10px';
        div.style.backgroundColor = 'lightblue';
        div.textContent = m;
        document.body.appendChild(div);
    }
    var div = document.createElement('div');
    div.style.paddingBottom = '0px';
    div.style.backgroundColor = 'DarkBlue';
    div.style.blockSize = '50px';
    document.body.appendChild(div);
    alert("Script injected at the bottom of this page");
})();