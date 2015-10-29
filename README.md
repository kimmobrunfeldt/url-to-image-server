# url-to-image server

HTTP API for [url-to-image](https://github.com/kimmobrunfeldt/url-to-image/).

## API Endpoints

* `GET /api/screenshot` Download screenshot of a given url

    **Parameters**

    * `url` **required** Url of the page to download screenshot from.
    * `width` Width of the user agent when taking screenshot.
    * `height` Height of the user agent when taking screenshot.


## Tech

* Node.js express app
* Written in ES6
