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
## Results Show
[example](./example.MP4)

## Usage
### React
```tsx
import React, { useEffect, useState } from 'react';
import imgPreload from 'ts.imgpreload';

import './app.css'

const images = [
      'https://img1.baidu.com/it/u=3267072842,3910847117&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
      'https://img2.baidu.com/it/u=852876481,1569343097&fm=253&fmt=auto&app=138&f=JPEG?w=1333&h=500',
      'https://img0.baidu.com/it/u=1611687267,221767265&fm=253&fmt=auto&app=138&f=PNG?w=883&h=500',
      'https://www.sgns.cn/images/2021_10/_20211016145303.jpg',
      'https://www.sgns.cn/images/2021_10/_20211016145301.jpg',
      'https://www.sgns.cn/images/2021_10/_20211016145302.jpg',
      'https://www.sgns.cn/images/2021_10/_20211016145307.jpg',
      'https://www.sgns.cn/images/2021_10/_20211016145305.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2020_09/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211017161705.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2020_09/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211017161709.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2020_09/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211017161713.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2020_09/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211017161716.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017%E8%B6%8A%E9%87%8E%E8%B7%911.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017%E8%B6%8A%E9%87%8E%E8%B7%912.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017%E8%B6%8A%E9%87%8E%E8%B7%913.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017%E8%B6%8A%E9%87%8E%E8%B7%914.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017%E8%B6%8A%E9%87%8E%E8%B7%915.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017%E8%B6%8A%E9%87%8E%E8%B7%916.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017%E6%88%B7%E5%A4%96%E6%94%80%E5%86%B0%E8%8A%821.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017%E6%88%B7%E5%A4%96%E6%94%80%E5%86%B0%E8%8A%822.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017%E6%88%B7%E5%A4%96%E6%94%80%E5%86%B0%E8%8A%823.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017%E6%88%B7%E5%A4%96%E6%94%80%E5%86%B0%E8%8A%824.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017%E6%88%B7%E5%A4%96%E6%94%80%E5%86%B0%E8%8A%825.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017%E6%88%B7%E5%A4%96%E6%94%80%E5%86%B0%E8%8A%826.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017103301%E6%BC%82%E6%B5%81%E5%BA%95%E9%83%A8.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017103302%E6%BC%82%E6%B5%81%E5%BA%95%E9%83%A8.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017103303%E6%BC%82%E6%B5%81%E5%BA%95%E9%83%A8.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017103304%E6%BC%82%E6%B5%81%E5%BA%95%E9%83%A8.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017103305%E6%BC%82%E6%B5%81%E5%BA%95%E9%83%A8.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017103306%E6%BC%82%E6%B5%81%E5%BA%95%E9%83%A8.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211017145831.png',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211017150042.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211017150155.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211017150324.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211017150351.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211017103111.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211017105717.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211017103151.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211017104938.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_202110177103311.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211017105235.jpg'
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
import { defineComponent, ref } from 'vue'
import imgPreload from 'ts.imgpreload'

const images = [
      'https://img1.baidu.com/it/u=3267072842,3910847117&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
      'https://img2.baidu.com/it/u=852876481,1569343097&fm=253&fmt=auto&app=138&f=JPEG?w=1333&h=500',
      'https://img0.baidu.com/it/u=1611687267,221767265&fm=253&fmt=auto&app=138&f=PNG?w=883&h=500',
      'https://www.sgns.cn/images/2021_10/_20211016145303.jpg',
      'https://www.sgns.cn/images/2021_10/_20211016145301.jpg',
      'https://www.sgns.cn/images/2021_10/_20211016145302.jpg',
      'https://www.sgns.cn/images/2021_10/_20211016145307.jpg',
      'https://www.sgns.cn/images/2021_10/_20211016145305.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2020_09/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211017161705.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2020_09/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211017161709.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2020_09/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211017161713.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2020_09/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211017161716.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017%E8%B6%8A%E9%87%8E%E8%B7%911.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017%E8%B6%8A%E9%87%8E%E8%B7%912.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017%E8%B6%8A%E9%87%8E%E8%B7%913.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017%E8%B6%8A%E9%87%8E%E8%B7%914.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017%E8%B6%8A%E9%87%8E%E8%B7%915.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017%E8%B6%8A%E9%87%8E%E8%B7%916.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017%E6%88%B7%E5%A4%96%E6%94%80%E5%86%B0%E8%8A%821.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017%E6%88%B7%E5%A4%96%E6%94%80%E5%86%B0%E8%8A%822.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017%E6%88%B7%E5%A4%96%E6%94%80%E5%86%B0%E8%8A%823.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017%E6%88%B7%E5%A4%96%E6%94%80%E5%86%B0%E8%8A%824.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017%E6%88%B7%E5%A4%96%E6%94%80%E5%86%B0%E8%8A%825.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017%E6%88%B7%E5%A4%96%E6%94%80%E5%86%B0%E8%8A%826.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017103301%E6%BC%82%E6%B5%81%E5%BA%95%E9%83%A8.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017103302%E6%BC%82%E6%B5%81%E5%BA%95%E9%83%A8.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017103303%E6%BC%82%E6%B5%81%E5%BA%95%E9%83%A8.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017103304%E6%BC%82%E6%B5%81%E5%BA%95%E9%83%A8.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017103305%E6%BC%82%E6%B5%81%E5%BA%95%E9%83%A8.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/2021_10/_20211017103306%E6%BC%82%E6%B5%81%E5%BA%95%E9%83%A8.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211017145831.png',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211017150042.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211017150155.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211017150324.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211017150351.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211017103111.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211017105717.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211017103151.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211017104938.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_202110177103311.jpg',
      'https://www.sgns.cn/templates/rt_acronym/custom/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211017105235.jpg'
    ]

export default defineComponent({
  setup() {
    const progress = ref('0')

    imgPreload({
      imgs: images,
      settings: {
        each: function (loaded, percentage) {
          setTimeout(() => {
            progress.value = percentage
          }, 1000)
        },
        all: function () {
          console.log('All images loaded')
          progress.value = '100'
        }
      }
    })

    return () => {
      const progressV = progress.value
      return (
        <>
          <div class="progress">
            <div
              class="progress-bar"
              style={{
                width: `${progressV}%`
              }}
            ></div>
          </div>
          <div style="textAlign:center">{progressV}%</div>
        </>
      )
    }
  }
})
```
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
<!-- # 🥥 [All Use Cases](https://github.com/QShengW/sw-ui/blob/master/src/App.tsx) -->

<!-- # React Mobile Component

Current projects include component encapsulation for everyday use -->


```
