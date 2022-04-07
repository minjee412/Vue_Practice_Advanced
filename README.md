
🍥 폴더 전체에 Eslint 적용 해제 🍥       </br>
    1. Root에 vue.config.js 파일 생성     </br>
    2. 아래 코드 입력
```
     module.exports = {  
       devServer: {
            overlay: {
            warnings: true,
            errors: true
            }
        }
      }
```
