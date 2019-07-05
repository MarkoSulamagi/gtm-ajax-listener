---
layout: default
title: "AJAX Listener<br> for Google Tag Manager"
description: "Push AJAX events to data layer without JQuery"
---

# Get Started

## How to configure new GTM account

There are 2 options you can use to integrate the script.

#### Option 1: Import tags and variables using our container script (suggested).

1. <a href="https://raw.githubusercontent.com/MarkoSulamagi/gtm-ajax-listener/master/gtm-import-ajax-listener-marxdev.json" 
target="_blank">Download container</a>
2. Open your account in Google Tag Manager and navigate to **Admin -> Import Container**.
4. **Choose the downloaded file** and select **Existing workspace**.
5. Set **Choose an import option** to **Merge** with **Overwrite conflicting tags, triggers and variables**.
6. See that you have **1 new tag** and **13 new variables**.
7. Confirm the import and see the custom HTML tag and variables in your workspace.

**Next learn [how to use AJAX listener](#how-to-use-ajax-listener).**

#### Option 2: Configure a custom HTML tag and variables manually.

1. <a href="https://raw.githubusercontent.com/MarkoSulamagi/gtm-ajax-listener/master/ajax-listener.html" target="_blank">
Copy the script</a>
2. Create a **custom HTML tag**, name it "AJAX Listener". Paste the script to HTML input field and set the tag to 
trigger on **All Pages**
3. Use the 
<a href="https://www.analyticsmania.com/google-tag-manager-ajax-form-tracking" target="_blank">Analytics Mania</a> tutorial
to set up custom variables. 

## How to switch from Lunametrics AJAX listener

Differences between Lunametrics listener and this script are minimal and switching them 
shouldn't take more then a minute. 

All GTM variables that were working with Lunametrics keep working as is and there's no need to change any of them. 
**The only thing you need to do is replace the custom HTML tag with 
<a href="https://raw.githubusercontent.com/MarkoSulamagi/gtm-ajax-listener/master/ajax-listener.html" target="_blank">
this script</a>**. Once this is done then everything should work as it did before. 

* * *

## FAQ

### Why switch from Lunametrics

Lunametrics depends on a javascript library called <a href="https://jquery.com/" target="_blank">jQuery</a>. 
This means that if your website developers haven't included jQuery in the website code then Lunametrics 
ajax listener script will not work.

The `gtm-ajax-listener` script is dependency free and should work regardless of what technology the website is built 
with.

### How to use AJAX Listener

The tag is modified from a frequently used Lunametrics script. Everything you can do with Lunametrics tag, 
you can also do with `gtm-ajax-listener`. 

Once the script is configured in GTM then use the following tutorials on how to use it:

* <a href="https://www.analyticsmania.com/google-tag-manager-ajax-form-tracking" target="_blank">
Beginners guide to AJAX Listener - Analytics Mania</a>.  
_Skip the part that describes how to create custom HTML tag on GTM with Lunametrics script_
* <a href="https://medium.com/@marko.sulamagi/how-to-add-lunametrics-ajax-listener-to-single-page-apps-3daf8db3b52f" target="_blank">
How to add ajax listener script to Single-Page Apps</a>
