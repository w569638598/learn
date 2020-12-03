移动端适配js
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