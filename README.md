# ts.imgpreload
In a single page simple application, if there are too many images, preload them first and return a percentage, similar to the game's resource loading progress.  
在单页简单应用(小型的H5游戏)中如果图片过多，先预加载并且返回百分比，类似游戏加载资源进度。

<h1 align="center">Welcome to ts.imgpreload 👋</h1>
<p>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

### 🏠 [Homepage](https://github.com/QShengW/sw-ui)

## Install

```sh
yarn add ts.imgpreload

# or

npm i ts.imgpreload
```

## Usage
### app.css
```css
.progress {
  padding: 4px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
}

.progress-bar {
  position: relative;
  height: 16px;
  border-radius: 4px;
  -webkit-transition: 0.4s linear;
  -moz-transition: 0.4s linear;
  -o-transition: 0.4s linear;
  transition: 0.4s linear;
  -webkit-transition-property: width, background-color;
  -moz-transition-property: width, background-color;
  -o-transition-property: width, background-color;
  transition-property: width, background-color;
  -webkit-box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25), inset 0 1px rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25), inset 0 1px rgba(255, 255, 255, 0.1);
}

.progress-bar:before,
.progress-bar:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.progress-bar:before {
  bottom: 0;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAJ0lEQVR42mXMsQkAAAzDMH+S/69M6VAoeAgGDQFIW/4QQARbwaF+B3+SPGAo8blgAAAAAElFTkSuQmCC) 0 0 repeat;
  border-radius: 4px 4px 0 0;
}

.progress-bar:after {
  z-index: 2;
  bottom: 45%;
  border-radius: 4px;
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05));
  background-image: -moz-linear-gradient(top, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05));
  background-image: -o-linear-gradient(top, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05));
}

.progress>.progress-bar {
  background-color: #f27011;
}
```
### React
```tsx
import React, { useEffect, useState } from 'react';
import imgPreload from 'ts.imgpreload';

import './app.css'

const images = [
  'https://up.zhuoku.org/pic_source/bd/12/91/bd1291b72dde32d6ca8061bf85b66241.jpg',
  'https://img1.baidu.com/it/u=3267072842,3910847117&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
  'https://img2.baidu.com/it/u=852876481,1569343097&fm=253&fmt=auto&app=138&f=JPEG?w=1333&h=500',
  'https://img0.baidu.com/it/u=1611687267,221767265&fm=253&fmt=auto&app=138&f=PNG?w=883&h=500'
];

function ReactApp() {

  const [progress, setProgress] = useState('0');

  useEffect(() => {

    imgPreload({
      imgs: images, 
      settings: {
        each: function (loaded, percentage) {
          setTimeout(() => {
            setProgress(percentage);
          }, 1000);
        },
        all: function () {
          console.log('All images loaded');
          setProgress('100');
        },
      }
    });

  }, []);

  return (
    <>
      <div className="progress">
        <div className="progress-bar" style={{
          width: `${progress}%`
        }}></div>
      </div>
      <div style={{ textAlign:'center' }}>{progress}%</div>
    </>
  );
}

export default ReactApp;
```
### Vue
```vue

```
<!-- # 🥥 [All Use Cases](https://github.com/QShengW/sw-ui/blob/master/src/App.tsx) -->

<!-- # React Mobile Component

Current projects include component encapsulation for everyday use -->


```
