import urlToImage from '../../../url-to-image/src/index';

function getScreenshot(url, filePath, opts) {
    opts.verbose = true;

    return urlToImage(url, filePath, opts);
}

export {
    getScreenshot
};
