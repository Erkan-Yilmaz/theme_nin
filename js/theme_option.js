
$(document).ready(function()
{
    var windowHeight = $(window).height();
    $('.right').css('height', windowHeight - 100);
    $('.module.who-to-follow').detach().appendTo($('.dashboard.left'));
    $('.module.twistday-reminder').detach().appendTo($('.dashboard.left'));
});


$(window).resize(function()
{
    var windowHeight = $(window).height();
    $('.right').css('height', windowHeight - 100);
    $('.module.who-to-follow').detach().appendTo($('.dashboard.left'));
    $('.module.twistday-reminder').detach().appendTo($('.dashboard.left'));
});

$(function(){
    var windowHeight = $(window).height();
    $('.modal-close').html('');
    $('.right').css('height', windowHeight - 100);
    $('.modal-back').html('');
    $('.twister-user-remove').html('');
    $('.profile-card-main').attr('style', '');
    $('.userMenu-search-profiles button').html('').attr('title',polyglot.t('Follow'));
    $('.mini-profile-actions span').html('');
    $('.promoted-posts-only').detach().appendTo($('.dashboard.left'));
    $('.mini-profile-indicators').detach().insertAfter($('.dashboard.left .profile-data'));
    $('.post-context').each(function(){
        $(this).prependTo($(this).parent());
    });


    $( '.userMenu-home.current a' ).on( 'click', function() {
        $('html, body').animate({scrollTop:0},300);
        return false
    });


    
    $( ".promoted-posts-only").click(function() {
    // modify the way promoted posts are shown
        //active promoted posts tab
        $(this).children('.promoted-posts').addClass(promotedPostsOnly ? "active" : "disabled");
        $(this).children('.normal-posts').addClass(promotedPostsOnly ? "disabled" : "active");
        $('#postboard-top').removeClass(promotedPostsOnly ? "show" : "hide");
        //active normal posts
        $(this).children('.promoted-posts').removeClass(promotedPostsOnly ? "disabled" : "active");
        $(this).children('.normal-posts').removeClass(promotedPostsOnly ? "active" : "disabled");
        $('#postboard-top').addClass(promotedPostsOnly ? "hide" : "show");
    });



    $(".userMenu-search-profiles .follow")
        .on("eventToggleFollow", function() {
            $(this).text('').attr('title', polyglot.t('Follow'));
        })
        .on("eventToggleUnfollow", function() {
            $(this).text('').attr('title', polyglot.t('Unfollow'));
        });

    if (/\/options.html$/i.test(document.location))
        $(document).ready(localizeLabels);




});




function localizeLabels() {
    $("label[for=tab_language]").text(polyglot.t("Language"));
    $("label[for=t-2]").text(polyglot.t("Theme"));
    $("label[for=t-3]").text(polyglot.t("Notifications"));
    $("label[for=t-4]").text(polyglot.t("Keys"));
    $("label[for=t-5]").text(polyglot.t("Appearance"));
    $("label[for=t-6]").text(polyglot.t("Users"));
}

function openModal(modal) {
    window_scrollY = window.pageYOffset;

    if (!modal.classBase)
        modal.classBase = '.modal-wrapper';

    $(modal.classBase + ':not(#templates *)').remove();

    modal.self = $('#templates ' + modal.classBase).clone(true)
        .addClass(modal.classAdd);

    if (modal.title)
        modal.self.find('.modal-header h3').html(modal.title);
    if (modal.content)
        modal.content = modal.self.find('.modal-content')
            .append(modal.content);
    else
        modal.content = modal.self.find('.modal-content');
        modal.self.prependTo('body').fadeIn('fast');
        

    if (modal.classBase === '.modal-wrapper') {
        modal.content.outerHeight(modal.self.height() - modal.self.find('.modal-header').outerHeight());

        var windowHeight = $(window).height();
        if (modal.self.outerHeight() > windowHeight) {
            modal.content.outerHeight(modal.content.outerHeight() - modal.self.outerHeight() + windowHeight);
            modal.self.outerHeight(windowHeight);
            modal.self.css('margin-top', - windowHeight / 2);
        }

    }

    return modal;
}
