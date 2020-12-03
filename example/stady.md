# 学习文件

### 移动端适配js
```javascript
        (function(doc, win, designWidth){
            const html = document.documentElement;
            const refreshRem = () => {
                const clientWidth = html.clientWidth;
                if(clientWidth >= designWidth){
                    html.style.fontSize = "100px";
                }else{
                    html.style.fontSize = clientWidth / designWidth + "px";
                }
            }
            doc.addEventListener("DOMContentLoaded", refreshRem)
        })(document, window, 750)
```
### 加密解密
```javascript
let encodedData = window.btoa("Hello, world"); // base64 编码
let decodedData = window.atob(encodedData); // 解码 成 ASCII'
```
### 正则多个匹配替换
```javascript
e.date.replace(/(.+?)\-(.+?)\-(.+)/,"$1年$2月$3日")
```



### css滚动条动画
```css
scroll-behavior
```
### 左边一个右边多个子导航，左边文字垂直居中-父导航样式
```css
    display: flex;
    flex-direction: column;
    justify-content: center;
```
### img标签图片裁剪
```css
            width: 150px;
            height: 150px;
            object-fit: cover;
```

### 适配
```html
<meta name="viewport" content=" width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
width=device-width    //应用程序的宽度和屏幕的宽度是一样的
height=device-height  //应用程序的高度和屏幕的高是一样的
initial-scale=1.0  //应用程序启动时候的缩放尺度（1.0表示不缩放）
minimum-scale=1.0  //用户可以缩放到的最小尺度（1.0表示不缩放）
maximum-scale=1.0  //用户可以放大到的最大尺度（1.0表示不缩放）
user-scalable=no  //用户是否可以通过他的手势来缩放整个应用程序，使应用程序的尺度发生一个改变（yes/no）
```