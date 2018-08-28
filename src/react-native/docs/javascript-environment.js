/**
 * @generated
 */
var React = require("React");
var Layout = require("DocsLayout");
var content = `
## 자바스트립트 런타임(Runtime)

여러분이 리엑트 네이티브(React Native)를 사용할 때 두 가지 환경에서 자바스크립트 코드를 실행하게 됩니다:

* iOS 시물레이터(simulators)와 장치에서 , Android 에물레이터(emulators) 와 장치에서 리엑트 네이티브는 사파리의 자바스크립트 엔진의 [자바스크립트 코어(JavaScriptCore)](http://trac.webkit.org/wiki/JavaScriptCore)를 사용합니다.
iOS의 JSC(자바스크립트 코어)는  iOS 앱(apps)에 쓰기 가능한 메모리가 없어서 JIT를 같이 이용하지 않습니다.

* 크롬 디버깅(debugging)을 이용할 때에, 크롬 자체에서 모든 자바스크립트 코드를 실행하고, 네이티브 코드(native code) 웹소켓(WebSocket)을 통해서 통신합니다. 이것은 [V8](https://code.google.com/p/v8/) 사용합니다.

두 환경은 매우 비슷하지만, 때로는 불일치할 수도 있습니다. 우리는 미래에 다른 자바스크립트 엔진을 실험할 가능성이 있습니다.
그러니, 다른 런타임(runtime) 세부사항에 의지하는 것을 피합니다.


## 자바스크립트 문법 변환기(Transformers)

문법 변환기는 모든 인터프리터(interpreters)에 대한 지원 없이, 새로운 자바스크립트 문법을 사용할 수 있게 하여, 코드 작성을 좀 더 즐겁게 만듭니다.


리엑트 네이티브 0.5.0 버전부터는 [바벨 자바스크립트 컴파일러(Babel JavaScript compiler)](https://babeljs.io).
자세한 내용은 [바벨 문서(Babel documentation)](https://babeljs.io/docs/plugins/#transform-plugins)에서 지원되는 변환을 확인합니다. 

여기 리엑트 네이티브 [사용 가능한 변환기(enabled transformations)](https://github.com/facebook/react-native/blob/master/babel-preset/configs/main.js#L16) 전체 목록이 있습니다.

ES5

* Reserved Words: \`promise.catch(function() \{ });\`

ES6

* [Arrow functions](http://babeljs.io/docs/learn-es2015/#arrows): \`<C onPress=\{() => this.setState(\{pressed: true})}\`
* [Block scoping](https://babeljs.io/docs/learn-es2015/#let-const): \`let greeting = 'hi';\`
* [Call spread](http://babeljs.io/docs/learn-es2015/#default-rest-spread): \`Math.max(...array);\`
* [Classes](http://babeljs.io/docs/learn-es2015/#classes): \`class C extends React.Component \{ render() \{ return <View />; } }\`
* [Constants](https://babeljs.io/docs/learn-es2015/#let-const): \`const answer = 42;\`
* [Destructuring](http://babeljs.io/docs/learn-es2015/#destructuring): \`var \{isActive, style} = this.props;\`
* [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of): \`for (var num of [1, 2, 3]) \{}\`
* [Modules](http://babeljs.io/docs/learn-es2015/#modules): \`import React, \{ Component } from 'react';\`
* [Computed Properties](http://babeljs.io/docs/learn-es2015/#enhanced-object-literals): \`var key = 'abc'; var obj = \{[key]: 10};\`
* [Object Concise Method](http://babeljs.io/docs/learn-es2015/#enhanced-object-literals): \`var obj = \{ method() \{ return 10; } };\`
* [Object Short Notation](http://babeljs.io/docs/learn-es2015/#enhanced-object-literals): \`var name = 'vjeux'; var obj = \{ name };\`
* [Rest Params](https://github.com/sebmarkbage/ecmascript-rest-spread): \`function(type, ...args) \{ }\`
* [Template Literals](http://babeljs.io/docs/learn-es2015/#template-strings): \`\`var who = 'world'; var str = \`Hello $\{who}\`;\`\`

ES7

* [Object Spread](https://github.com/sebmarkbage/ecmascript-rest-spread): \`var extended = \{ ...obj, a: 10 };\`
* [Function Trailing Comma](https://github.com/jeffmo/es-trailing-function-commas): \`function f(a, b, c,) \{ }\`
* [Async Functions](https://github.com/tc39/ecmascript-asyncawait): \`async function doStuffAsync() \{ const foo = await doOtherStuffAsync(); }\`;

Specific

* [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html): \`<View style=\{\{color: 'red'}} />\`
* [Flow](http://flowtype.org/): \`function foo(x: ?number): string \{}\`


## 폴리필(Polyfills)

모든 자바스크립트 런타임(runtimes)에서 지원되는 많은 표준 함수를 이용할 수 있습니다.

Browser

* [console.\{log, warn, error, info, trace, table}](https://developer.chrome.com/devtools/docs/console-api)
* [CommonJS require](https://nodejs.org/docs/latest/api/modules.html)
* [XMLHttpRequest, fetch](docs/network.html#content)
* [\{set, clear}\{Timeout, Interval, Immediate}, \{request, cancel}AnimationFrame](docs/timers.html#content)
* [navigator.geolocation](docs/geolocation.html#content)

ES6

* [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
* String.prototype.\{[startsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith), [endsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith), [repeat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeats), [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)}
* [Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
* Array.prototype.\{[find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find), [findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex), [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)}

ES7

* Object.\{[entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries), [values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)}

Specific

* \`__DEV__\`
`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"javascript-environment","title":"자바스크립트 환경(JavaScript Environment)","layout":"docs","category":"Guides","permalink":"docs/javascript-environment.html","next":"direct-manipulation","previous":"gesture-responder-system","filename":"JavaScriptEnvironment.md"}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;