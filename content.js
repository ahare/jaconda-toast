$(function() {

    $('#chatContent')
        .bind('DOMNodeInserted', function(e) {
            if (e.target.tagName != 'TR') return;

            var target = $(e.target);

            if (!target.hasClass('message')) return;
            if (target.hasClass('my')) return;
            
            var name = target.find('td.nickname').attr('title');
            var ico = $('div.online:contains(' + name + ') > img').attr('src');
            
            chrome.extension.sendRequest({
                name: name,
                ico: ico.replace(/s=\d+/i, 's=32'),
                msg: $.trim(target.find('span.message').text())
            });
        });
    
    $('.pageRooms .room > a > span')
        .bind('DOMSubtreeModified', function(e) {
            var msg = $(e.target).parent().text();
            chrome.extension.sendRequest({
                name: 'other messages',
                msg: msg,
                ico: 'https://jaconda.im/images/defaultJacondaIcon.png',
            });
        });
});