/**
 * @generated
 */
var React = require("React");
var Layout = require("DocsLayout");
var content = `
타이머는 애플리케이션의 중요한 부분이며 리액트 네이티브는 [자바스크립트 타이머](https://developer.mozilla.org/en-US/Add-ons/Code_snippets/Timers)를 구현합니다.

## 타이머

- setTimeout, clearTimeout
- setInterval, clearInterval
- setImmediate, clearImmediate
- requestAnimationFrame, cancelAnimationFrame

\`requestAnimationFrame(fn)\`과 \`setTimeout(fn, 0)\`는 같지 않습니다 - 모든 프레임이 비워지면 \`requestAnimationFrame(fn)\`이 호출이 되지만 \`setTimeout(fn, 0)\`은 최대한 바로 호출됩니다(아이폰 5S 기준으로 1초당 1000x 이상).

\`setImmediate\`는 일괄 처리된 응답을 네이티브로 바로 되돌려 보내기 전에 현재 자바스크립트 실행 블록의 마지막에 실행됩니다. 참고로 \`setImmediate\` 콜백 내에서 \`setImmediate\`가 호출이 되면 일괄 처리된 응답을 네이티브로 되돌려 보내지 않고 바로 실행이 됩니다.

\`Promise\` 구현은 \`setImmediate\`를 비동기로 사용합니다.

## InteractionManager

잘 만들어진 네이티브 앱이 부드럽게 동작하는 이유 중에 하나는 인터렉션(상호작용?)과 애니메이션 하는 동안에 비용이 많이 드는 연산을 피하기 때문입니다. 리액트 네이티브에서는 싱글 자바스크립트 쓰레드 하나로만 실행이 되는 것에 대한 제한이 있으나 인터렉션/애니메이션이 다 끝난 후에 긴 작업이 진행되게 스케줄 되는 \`InteractionManager\`을 사용 할 수 있습니다.

애플리케이션은 다음과 같이 인터렉션 후에 작업이 실행되도록 스케줄 할 수 있습니다:

\`\`\`javascript
InteractionManager.runAfterInteractions(() => \{
   // ...긴 작업이 실행되는 동기적인 작업... 
});
\`\`\`

대체 가능한 다른 스케줄링과 비교하자면:

- requestAnimationFrame(): 시간이 지남에 따라 뷰를 애니메이트 하는 코드
- setImmediate/setTimeout/setInterval(): 코드가 나중에 실행, 애니메이션이 딜레이 될수 있음.
- runAfterInteractions(): 코드가 나중에 실행, 활성화 된 애니메이션은 딜레이 되지 않음.

터치 핸들링 시스템은 하나 이상의 활성화 된 터치들을 '인터렉션'으로 간주하며 모든 터치가 끝나거나 취소가 될 때 까지 \`runAfterInteractions()\` 콜백이 딜레이 될 것입니다.

InteractionManager를 사용하면 애플리케이션에서 애니메이션 시작 시 'handle' 인터렉션을 생성하고 완료 시 'handle'을 삭제하여 애니메이션을 등록할 수 있습니다:

\`\`\`javascript
var handle = InteractionManager.createInteractionHandle();
// 애니메이션을 실행합니다... (\`runAfterInteractions\` 작업은 큐에 쌓입니다)
// 시간이 흐른후 애니메이션이 완료될때:
InteractionManager.clearInteractionHandle(handle);
// 모든 handle이 삭제되면 큐에 쌓인 작업이 실행됩니다.
\`\`\`


## TimerMixin

리액트 네이티브로 만들어진 앱에서 일어나는 치명적 오류의 주요 원인은 컴포넌트가 해제 된 후에 타이머가 호출되기 때문입니다. 이 오류가 발생하는 것을 방지하려면 \`TimerMixin\`을 사용하면 됩니다. \`TimerMixin\`을 사용하게 되면 타이머를 호출할 때 \`setTimeout(fn, 500)\` 대신 앞에 접미사 \`this.\`을 붙여서 \`this.setTimeout(fn, 500)\`를 호출하면 컴포넌트가 해제 될 때 모든 것이 정상적으로 클리어(?) 됩니다.

이 라이브러리는 리액트 네이티브에 포함이 되지 않으므로 \`npm i react-timer-mixin --save\` 하여 프로젝트에 설치하여야 합니다.

\`\`\`javascript
import TimerMixin from 'react-timer-mixin';

var Component = createReactClass(\{
  mixins: [TimerMixin],
  componentDidMount: function() \{
    this.setTimeout(
      () => \{ console.log('I do not leak!'); },
      500
    );
  }
});
\`\`\`

\`TimerMixin\`을 사용하면 컴포넌트가 해제 된 후에 timeout이 호출이 되면서 일어나는 앱을 크래쉬(?) 하는 버그들을 추적하는데 드는 불필요한 작업을 줄일 수 있습니다.

리액트 컴포넌트를 구현할 때 ES6 클래스를 사용한다면 [mixins을 위한 정의된 API가 없다](https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#mixins)는 것에 명심하세요. ES6 클래스에서 \`TimerMixin\`을 사용하려면 [react-mixin](https://github.com/brigand/react-mixin)을 쓰시면 됩니다.
`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"timers","title":"타이머","layout":"docs","category":"Guides","permalink":"docs/timers.html","next":"debugging","previous":"accessibility","filename":"Timers.md"}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;