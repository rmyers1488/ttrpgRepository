$(document).ready(function () {
    $('#myForm').bind('submit', function (event) {
        $('[type=text]').each(function () {
            console.log('empty text box');
            //outline empty text field with red border
            if (!$(this).val().length) {
                event.preventDefault();
                $(this).css('border', '2px solid red');
            }
        });
    });

    $('[type=input]').change(function () {
        alert($(this).val());
    });
    //alert when radio button is clicked
    $('[name=sex]').bind('click', function () {
        alert($(this).val());
    });

    $(':input').blur(function () {
        //if length of input == 0
        if ($(this).val().length == 0) {
            $(this)
                .addClass('error')
                .after('<span class="error">fill in field</span>');
        }

    });
    //only submit if text fields are filled
    $('form').submit(function (event) {
        let error = false;
        $(this).find('[type=text]').each(function () {
            if (!$(this).val().length) {
                alert('Text boxes need text');
                $(this).focus();
                error = true;
                return false; // exits the "each loop"
            }
        });
        if (error) {
            event.preventDefault;
        }
    });

    //validation, use validation JQuery plugin
    //$('#signUp form').validate({
    //    rules: {
    //        name: {
    //            required: true
    //        }
    //        email: {
    //            required: true,
    //            email: true
    //        }
    //        website: {
    //            url: true
    //        }
    //        password: {
    //            minlength: 6,
    //            required: true
    //        }
    //        passconf: {
    //            equalTo: '#password'
    //        }
    //    },
    //    success: function (label) {
    //        label.text("OK!").addClass('valid');
    //    }
    //});
    $('.maxlength')
        .after("<span></span>")
        .next()
        .hide()
        .end()
        .keypress(function (e) {
            let current = $(this).val().length;
            if (current >= 130) {
                if (e.which != 0 && e.which != 8) {
                    e.preventDefault();
                }
            }
            $(this).next().show().text(130 - current);
        });
    //$('input.clear').each(function () {
    //    $(this)
    //        .data('default', $(this).val())
    //        .addClass('inactive')
    //        .focus(function () {
    //            $(this).removeClass('inactive');
    //            if ($(this).val() === $(this).data('default') || $(this).val() === '') {
    //                $(this).val('');
    //            }
    //        })
    //        .blur(function () {
    //            if ($(this).val() === '') {
    //                $(this).addClass('inactive').val($(this).data('default'));
    //            }
    //        });
    //    console.log('input clear');
    //});
    //$('.check-all:checkbox').change(function () {
    //    let group = ':checkbox[name=' $(this).attr('name') + ']';
    //    $(group).attr('checked', $(this).attr('cheked'));
    //    console.log('check all');
    //});

    //inline-editing
    //let rapture = function (which) {
    //    $(which).contents().filter(function () {
    //        return this.nodeType === 3;
    //    })
    //        .wrap('<p></p>')
    //        .end() //back up before .wrap
    //        .filter('br')//breaks
    //        .remove()//remove breaks
    //        .end()
    //        .children().filter(function () {//hilter the children
    //            $(this).html($.trim($(this).html().replace(/(\t|\n)/g, "")));
    //            return !$(this).text().length // the length of this's text
    //        }).remove();
    //}
    //$('.editable, .editable-area')
    //    .hover(function () {
    //        $this.toggleClass('over-inline');
    //    })
    //    .click(function (event) {//start inline editing
    //        let $editable = $(this);
    //        if ($editable.hasClass('active-inline')) {
    //            return;
    //        }
    //        let contents = $.trim($editable.html().replace(/\/p>/g, "/p>\n\n"));
    //        $editable
    //            .addClass('active-inline')
    //            .empty();
    //        //for element
    //        let editElement = $editable.hasClass('editable') ?
    //            '<input type="tex" />' : '<textarea></textarea>';
    //        //replace target with form element
    //        $(editElement)
    //            .val(contents) //value of contents
    //            .appendTo($editable)
    //            .focus()
    //            .blur(function (event) {
    //                $editable.trigger('blur');
    //            });
    //    });
    //    .blur(function (event) {//end the inline editing
    //        let $editable = $(this);
    //        let edited = $editable.find(':first-child').val();
    //        $editable.children().replaceWidth('<em class="ajax">Saving...</em>');

    //        //new value to server w/ID
    //        $.post('save', {
    //            id: $editable.attr('id'),
    //            value: edited
    //        },
    //            function (data) {
    //                $editable
    //                    .removeClass('active-inline')
    //                    .children()
    //                    .replaceWith(edited),
    //                if ($editable.hasClass('editable-area')) {
    //                    rapture($editable);
    //                }
    //            }
    //        );
    //    });
    let choice = ['One', 'Two', 'Three', 'Four', 'Five'];
    $('#complete').autocomplete(choice, {
        autoFill: true,
        selectFirst: true,
        width: '240px'
    });
});