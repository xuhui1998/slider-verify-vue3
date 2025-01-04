一个基于vue3的滑块校验组件.

<img src="./public/2024-12-27 15.14.31.gif" width="360" />

1. 安装插件

```shell
# npm 安装：
npm install slider-verify-vue3 

# yarn 安装：
yarn add slider-verify-vue3
```

2. 引入插件
```js
import SliderVerify from 'slider-verify-vue3'
import 'slider-verify-vue3/lib/style.css';
createApp(App).use(SliderVerify)
```

3. 使用插件
```html
  <template>
    <div>
      <SliderVerify v-model="isPass" />
    </div>
  </template>

  <script>
    import { ref } from 'vue'

    const isPass = ref(false)
  </script>
```

4. 配置参数

| 参数 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| v-model | Boolean | false | 校验是否通过 |
| size | String | medium | 尺寸 |
| width | Number String | 100% | 宽度 |
| icons | Array | [IconDoubleRight, IconCheck] | 滑块图标，支持图片和SVG图标 |
| sliderTip | String | 请按住滑块拖动 | 滑块文案 |
| successTip | String | 验证通过 | 验证成功文案 |
| sliderColor | String | #f2f2f2 | 滑块的背景色 |
| fillColor | String | #79ce8e | 拖动后的背景填充色 |

| 事件  | 描述 |
| --- | --- |
| onSuccess | 校验通过 |
| onFail | 校验失败 |
| onDrag | 拖动滑块 |
| onDragEnd | 停止拖动 |