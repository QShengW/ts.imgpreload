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
declare function assert<T>(exp: T, msg?: string): asserts exp;
interface ImgPreloadSettings {
    each?: (this: HTMLImageElement, loadedImages: HTMLElement[], percentage: string) => void;
    all?: Function;
}
interface ImgPreload {
    imgs: (string | HTMLImageElement)[];
    settings?: ImgPreloadSettings;
}
declare function imgPreload({ imgs, settings }: ImgPreload): void;

export { assert, imgPreload as default };
