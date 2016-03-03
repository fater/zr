$(document).ready(function () {

    var last_id = 0;

    // Load chat messages
    $.getJSON('/public/storage.json', function (data) {
        $.each(data, function (key, value) {
            insert_message(value);
        });

        if (last_id == 0) {
            show_form();
        }
    }).fail(function () {
        show_form();
    });

    // Initialization
    $('#close_form').click(function () {
        hide_form();
    });

    // Initialization
    $('#send_buton').click(function () {
        reply();
    });

    /**
     * Добавление сообщений в чат
     *
     * @param data
     */
    function insert_message(data) {

        // ID increment
        if (data.id) {
            if (data.id > last_id) {
                last_id = data.id;
            }
        } else {
            last_id++;
            data.id = last_id;
        }

        var template = $('.hidden .template').clone();
        template.find('.content').prepend(data.text);
        template.attr('block_id', data.id);
        template.find('> .content > button').attr('id', data.id);

        if (data.pid) {
            $('[block_id="' + data.pid + '"] > .attachment').append(template);
        } else {
            $('.container').append(template);
        }
        $('[block_id=' + data.id + '] > .content > button').click(function () {
            show_form(data.id);
        });
    }

    /**
     * Отображение формы добавления сообщений
     *
     * @param id
     */
    function show_form(id) {
        $('#send_buton').attr('data-id', id);
        $('.form').slideDown('show');
    }

    /**
     * Скрыть форму добавления сообщений
     */
    function hide_form() {
        $('#send_buton').removeAttr('data-id');
        $('.form').slideUp('show');
    }

    /**
     * Добавление нового сообщения
     */
    function reply() {
        var cm = $('#chat_message');
        var obj = {};
        obj.pid = $('#send_buton').attr('data-id');
        obj.text = cm.val();
        insert_message(obj);
        $('[block_id="' + last_id + '"]').hide().slideDown('show');
        hide_form();
        cm.val('')
    }
});
