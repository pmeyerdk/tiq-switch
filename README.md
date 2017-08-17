

# Tealium iQ Switch
A minimalistic profile and environment switcher bookmarklet for Tealium iQ.

I created this bookmarklet to make it easier for myself to switch between different environment and profiles, while working with Tealium iQ implementation and debugging.

I hope you find it useful, and welcome comments and contributions.

All the best,
Peter

## How to add it
To add the bookmarklet to your browser, drag the following link to the bookmark bar.  
[TiQ Switch](javascript:void%20function(){if(%22object%22==typeof%20utag){var%20t=prompt(%22New%20Tealium%20iQ%20environment%3F%22,utag.data[%22ut.profile%22]+%22/dev%22);if(/^(\w|[-_])*\/(\w||[-_])*$/.test(t)){for(var%20e=document.cookie.split(/=[^;]*(%3F:;\s*|$)/),a=0;a%3Ce.length;a++)/^utag_env_/.test(e[a])%26%26(document.cookie=e[a]+%22=;%20expires=Thu,%2001%20Jan%201970%2000:00:00%20GMT;%20path=/%22);document.cookie=%22utag_env_%22+utag.data[%22ut.account%22]+%22_%22+utag.data[%22ut.profile%22]+%22=//tags.tiqcdn.com/utag/%22+utag.data[%22ut.account%22]+%22/%22+t+%22/utag.js%22,window.location.reload()}else%20alert(%22Input%20not%20entered%20correctly!\r\rPlease%20enter%20in%20the%20following%20format:\rPROFILE/ENVIRONMENT\r\rExample:\rtest-site/dev\r%22)}else%20alert(%22Telium%20iQ%20not%20found%20on%20page!%22)}();)


## How to use it

### 1. Click the bookmarklet link

### 2. Enter desired profile and enviroment in the alert box
![TiQ Switch - Alert Box](http://macdown.uranusjr.com/static/images/logo-160.png)

### 3. Click the "OK" button to switch profile/environment
![MacDown logo](http://macdown.uranusjr.com/static/images/logo-160.png)