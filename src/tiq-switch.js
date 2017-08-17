// Check for utag object
if (typeof utag === 'object') {
    var newEnviroment = prompt('New Tealium iQ environment?', utag.data['ut.profile'] + '/dev');
    
    if (/^(\w|[-_])*\/(\w||[-_])*$/.test(newEnviroment)) {
        // Get an array of all cookie names (the regex matches what we don't want)
        var cookieNames = document.cookie.split(/=[^;]*(?:;\s*|$)/);

        // Remove any that match the pattern
        for (var i = 0; i < cookieNames.length; i++) {
            if (/^utag_env_/.test(cookieNames[i])) {
                document.cookie = cookieNames[i] + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
            }
        }

        // Set new environment cookie, and reload page
        document.cookie = 'utag_env_' + utag.data['ut.account'] + '_' + utag.data['ut.profile'] + '=//tags.tiqcdn.com/utag/' + utag.data['ut.account'] + '/' + newEnviroment + '/utag.js';
        window.location.reload();
    }
    else {
        alert('Input not entered correctly!\r\r' +
            'Please enter in the following format:\r' +
            'PROFILE/ENVIRONMENT\r\r' +
            'Example:\r' +
            'test-site/dev\r');
    }
}
else {
    alert('Telium iQ not found on page!');
}