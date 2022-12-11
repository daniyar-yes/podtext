This repository is for PodText project.

PodText is a blog for my Podcast show called Will of D.

The list of requirements for project completion are:
<ul>
    <li> This blog platform should have a backend, for example Node + Mongo or AWS serverless.
    <li> Backend should store blog article objects in the DB
    <li> Server should allow CRUD operations for blog posts.
    <li> 1 admin user - me - is enough. But I should be required to authorize as Admin in order to post anything.
    <li> Admin view should only be visible to me on rout /newpost and reject everyone not authorized
    <li> Blog creation form should include Title, Text, Audio File
    <li> Audiofile link should be pre-populated in the blog edit/publish form
    <li> Audiofile list should look like a drop-down menu
    <li> Audios dropdown should automatically parse updated list of audio from podcast RSS: [link to RSS](https://anchor.fm/s/9435b1d4/podcast/rss)
    <li> Blog text input field should be pre-populated with #Description field from RSS after selecting the audio
    <li> Audio names in the dropdown menu should be named as corresponing Titles of Episodes in the RSS feed
    <li> Titles should be pre-populated with the right title in the RSS feed
    <li> Episode Picures should be fetched from RSS too
    <li> The workflow of /newpost route should look like this:
        <ol>
            <li>The page should have 3 inputs: Top-down: Audio file selector drop-down; Title text-input field; Main blog text-input field
            <li>When selecting Audio in the list, Title and Main blog text fields should be populated with the corresponding episode text from RSS
            <li> Text should be editable
            <li> There should be a preview button
            <li> There should be a Publish button
            <li> Preview build and shows how the blog will look without publishing it
            <li> Publish will send this form-data to server via POST request, save the blog object to the DB, and save routes to reach this article. When loading this article, the Blog View will render the corresponding blog fetched from the DB, and the preview on the main page.
            <li> There should be a cancel button to quit without saving that will return to main page /home or just /
        </ol>
    <li> Actual player can be an Audio html tag, or ideally Spotify player
    <li> Main page should have a list of the last 10 blogs, with pagination of the rest
    <li> On the right of the feed (list of blog previews) there should be a calendar
    <li> Calendar should be synced with my public calendar on google for future posts
    <li> Main page should have Social block, with all the links to my social media
    <li> Site should be hosted on the willofd.ca domain
    <li> it should be Secured HTTPS
    <li> Each blog should have a Like ❤️ button available from Home page previews and from inside the blog
    <li> Like button ❤️ should send a POST request and with +1 increase function to the value stored in the DB
    <li> Like buttn should be open for all, not authorized included
    <li> Each blog should have a DISQUSS module for comments
    <li> Total number of comments should be seen on the main preview list
    <li> Comments themselves should be visible in the lower part of the page on the blog page
    <li> Comments should be related only to that specific blog post, i.e. each blog instance should have a separate DISQUSS comments instance
    <li> When refreshed, both Previews of blogs and blogs themselves should show the number of likes ❤️ fetched from the DB
    <li> Pressing like on the Client should increase the number by 1 immediately, refreshing should return a new number of likes based on the DB record (lags are ok)
    <li> each blog page and main page should have easy share link buttons that should be big, nice looking, and optimized for mobile
    <li> calendar and socials on mobile are not required, expect for the links to platforms to listen
    <li> based on the OS, site should filter with podcasting platform to suggest: Windows: all, iOS - Apple + Anchor, Android - Google + Anchor. (optional)
</ul>