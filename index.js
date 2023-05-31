'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
* reference address jquery.imgpreload 1.6.2 <https://github.com/farinspace/jquery.imgpreload>
* Copyright 2023 Sw Q <https://github.com/QShengW>
* License MIT
* In a single page simple application, if there are too many images, preload them first and return a percentage, similar to the game's resource loading progress.
 在单页简单应用(小型的H5游戏)中如果图片过多，先预加载并且返回百分比，类似游戏加载资源进度。
*/
/**
 * 断言
 * @param exp
 * @param msg
 */
function assert(exp, msg) {
    if (!exp) {
        throw new Error(msg || 'assert error');
    }
}
function imgPreload({ imgs, settings = {} }) {
    // 对数据进行断言
    if (Array.isArray(imgs)) {
        for (const img of imgs) {
            if (!(typeof img === 'string' || img instanceof HTMLElement)) {
                assert(false, 'the type passed in must be string');
            }
        }
    }
    else {
        assert(false, 'the type passed in must be (string | HTMLElement)[]');
    }
    // 如果 imgs 是字符串，则转为数组
    if (typeof imgs === 'string') {
        imgs = [imgs];
    }
    const loaded = [];
    // 遍历每个图像
    imgs.forEach((elem, index) => {
        const img = new Image();
        let url = elem;
        let imgObj = img;
        // 如果元素不是字符串，则尝试获取图像的 URL
        if (typeof elem !== 'string') {
            url =
                elem.getAttribute('src') ||
                    getComputedStyle(elem).getPropertyValue('background-image').replace(/^url\((?:"|')?(.*)(?:'|")?\)$/mg, '$1');
            imgObj = elem;
        }
        // 图像加载完成或加载错误时的回调函数
        img.onload = img.onerror = function (e) {
            loaded.push(imgObj);
            imgObj.setAttribute('status', e.type);
            // 每个图像加载完成时执行的回调函数
            if (typeof settings.each === 'function') {
                let percentage = 0;
                if (loaded.length === imgs.length) {
                    percentage = 100;
                }
                else {
                    percentage = (index / imgs.length) * 100;
                }
                settings.each.call(imgObj, loaded.slice(0), percentage.toFixed(0));
            }
            // 所有图像加载完成时执行的回调函数
            if (loaded.length >= imgs.length && typeof settings.all === 'function') {
                settings.all.call(loaded);
            }
            // 清除事件处理程序，避免内存泄漏
            img.onload = img.onerror = null;
        };
        img.src = url;
    });
}

exports.assert = assert;
exports.default = imgPreload;
