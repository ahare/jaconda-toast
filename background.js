$(function() {

    $('#chatContent')
        .bind('DOMNodeInserted', function(e) {
            if (e.target.tagName != 'TR') return;

            var target = $(e.target);

            if (!target.hasClass('message')) return;
            if (target.hasClass('my')) return;
            
            var name = target.find('td.nickname').attr('title');
            var msg = $.trim(target.find('span.message').text());
            console.log(target);
            var notif = webkitNotifications.createNotification(
              'https://secure.gravatar.com/avatar/eeaeac4ea5869d8e9098565b4876075d.png?d=mm&r=PG&s=28',
              name,  // notification title
              msg
            );
            notif.show();
        });
    
    $('.pageRooms .room > a > span')
        .bind('DOMSubtreeModified', function(e) {
            var msg = $(e.target).parent().text();
            console.log(msg);
        });
});