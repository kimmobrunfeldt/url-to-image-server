import _ from 'lodash';
import path from 'path';
import * as screenshotService from '../services/screenshot-service';
import {createRoute} from '../utils';

var defaultOpts = {
    width: 1200,
    height: 800
};

function generateUuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const getScreenshot = createRoute(function(req, res) {
    var url = req.query.url;
    var filePath = path.join(__dirname, generateUuid() + '.png');

    var opts = _.extend(defaultOpts, {
        width: req.query.width,
        height: req.query.height
    });

    return screenshotService.getScreenshot(url, filePath, opts)
    .then(function() {
        res.sendFile(filePath);
    });
});

export {
    getScreenshot
};
