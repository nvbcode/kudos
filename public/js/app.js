$(document).ready(function () {

    const getKudos = function () {
        $.get('/api/kudo', function (data) {
            // append data to page 
            console.log(`kudo data ${data}`);
            data.forEach(element => {
                // console.log(element);
                $('#kudos').append(`
                <div class = 'card'>
                        <h3>${element.title}</h3>
                        <h5> From: ${element.from}</h5>
                    <div class = 'card-body'>
                        <h4> To: ${element.to}</h5>
                        <h6> Message: ${element.message}</h5>
                    </div>
                </div>
                `);
            });
        })
    };

    const getUsers = function () {
        $.get('/api/user', function (data) {
            // console.log(data);
            data.forEach(element => {
                $('#kudo-from').append(`<option value='${element._id}'>${element.user}</option>`);
                $('#kudo-to').append(`<option value='${element._id}'>${element.user}</option>`)
            });
        })
    };

    const sendKudo = function (e) {
        e.preventDefault();
        const kudoData = {
            _id: $('#kudo-from').val(),
            from: $('#kudo-from option:selected').html(),
            to: $('#kudo-to option:selected').html(),
            title: $('#kudo-title').val().trim(),
            message: $('#kudo-body').val().trim(),
        };

        console.log(kudoData);
        $.post('/api/kudo', kudoData, function (res) {
            // console.log(res);
            console.log('successful post!');
        });
    window.location.reload();
    };

    getKudos();
    getUsers();

    //Event Listeners

    $('#send-kudo').on('click', sendKudo);
});