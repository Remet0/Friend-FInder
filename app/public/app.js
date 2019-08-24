$('.submit').on('click', function(event) {
    event.preventDefault();
    let newFriend = {
        name: $('#name').val().trim(),
        photo: $('#photo').val().trim(),
        scores: [
            $('#one').val().trim(),
            $('#two').val().trim(),
            $('#three').val().trim(),
            $('#four').val().trim(),
            $('#five').val().trim(),
            $('#six').val().trim(),
            $('#seven').val().trim(),
            $('#eight').val().trim(),
            $('#nine').val().trim(),
            $('#ten').val().trim()
        ]
    };
    $.post("/api/friends", newFriend, function(data){
        console.log(data);
    })
});