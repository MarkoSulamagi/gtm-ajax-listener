---
layout: default
title: "AJAX Listener<br> for Google Tag Manager"
description: "Push AJAX events to data layer"
---

# Intro

A GTM tag that pushes data from AJAX forms into data layer. 

This is an upgraded version of a widely used Lunametrics AJAX listener. Lunametrics' version of the script has been 
working very well over the years, but with the rise of the 
[Single Page applications]([https://www.quora.com/What-is-a-single-page-application-in-web-development]) (SPAs) 
the script oftentimes
doesn't work.

This is usually caused by missing jQuery library that Lunametrics' script depends on. Use the upgraded script to 
get past this problem.

[More info in FAQ](#why-doesnt-lunametrics-script-work)

# Get Started

## How to configure new GTM account

There are 2 options you can use to integrate the script.

#### Option 1: Import tags and variables using our container script (suggested).

Importing a container script is the quickest way to get started. It will automatically create a custom HTML tag with 
all the required variables into your GTM account for you to use. 

1. <a href="/downloads/gtm-import-ajax-listener-marxdev.json" download>Download container file</a>
2. Open your account in Google Tag Manager and navigate to **Admin -> Import Container**.
4. **Choose the downloaded file** and select **Existing workspace**.
5. ⚠️ Set **Choose an import option** to **Merge** with **Overwrite conflicting tags, triggers and variables**.  
_Merging containers will make sure your existing tags, triggers and variables will stay in place and you won't lose 
any of your previous configuration._
6. See that you have **1 new tag** and **13 new variables**.
7. Confirm the import and see the custom HTML tag and variables in your workspace.

<a href="https://www.bounteous.com/insights/2015/08/26/how-import-container-google-tag-manager/" 
class="muted" target="_blank">🔗 View more detailed guide on how to import</a>

**Next learn [how to use AJAX listener](#how-to-use-ajax-listener).**

#### Option 2: Configure a custom HTML tag and variables manually.

More advanced users can set up the tag and variables themselves without using the pre-built script.

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

#### Why doesn't Lunametrics script work?

Lunametrics depends on a javascript library called <a href="https://jquery.com/" target="_blank">jQuery</a>. 
This means that if your website developers haven't included jQuery in the website code then Lunametrics 
ajax listener script will not work.

This problem is more common with 
<a href="https://www.quora.com/What-is-a-single-page-application-in-web-development" target="_blank">Single Page applications</a>.

The easiest way to find out if your website has jquery enabled is to ask the developers. 
Another option is to use a <a href="https://www.quora.com/How-do-you-know-where-jQuery-is-used-in-a-website" target="_blank">browser console</a>

This script is dependency free and should work regardless of what technology the website is built 
with.

#### How to use AJAX Listener

The tag is modified from a frequently used Lunametrics script. Everything that works with Lunametrics tag 
will keep working the same way. 

Once the script is configured in GTM then use the following tutorials on how to use it:

* <a href="https://www.analyticsmania.com/google-tag-manager-ajax-form-tracking" target="_blank">
Beginners guide to AJAX Listener - Analytics Mania</a>.  
_Skip the part that describes how to create custom HTML tag on GTM with Lunametrics script_
* <a href="https://medium.com/@marko.sulamagi/how-to-add-lunametrics-ajax-listener-to-single-page-apps-3daf8db3b52f" target="_blank">
How to add ajax listener script to Single-Page Apps</a>
* <a href="https://www.analyticsmania.com/post/google-tag-manager-form-tracking/" target="_blank">
More detailed guide to using ajax listener</a>

* * *

#### Leave a comment if you have any questions or feedback
