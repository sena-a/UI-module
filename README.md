# UI Modules

## 사용 스택

- html
- scss
- vanilla javascript
- parcel
- [placeholder polyfill](http://jamesallardice.github.io/Placeholders.js/)
- [classList polyfill](https://github.com/eligrey/classList.js)

## 사용 시

메인 css 파일에 scss 파일 import

```css
@import "_reset.scss";
@import "_card.scss";
@import "_input.scss";
@import "_common.scss";
```

폴리필 추가

```html
<script src="http://jamesallardice.github.io/Placeholders.js/assets/js/placeholders.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/eligrey-classlist-js-polyfill@1.2.20171210/classList.min.js"></script>
```

## 프로젝트 라이브서버 구동 시

```
npm start
```

## demo

https://serendipity-ui-module.netlify.com/
