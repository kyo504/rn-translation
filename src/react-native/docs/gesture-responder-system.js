/**
 * @generated
 */
var React = require("React");
var Layout = require("DocsLayout");
var content = `
제스처 응답 시스템은 앱에서 제스처의 생명주기를 관리합니다. 터치는 앱이 사용자의 의도를 파악하기 위해 여러 단계를 거칠 수 있습니다. 예를 들면, 터치가 스크롤인지 위젯에서 슬라이딩인지 탭인지를 결정할 필요가 있습니다. 또한 동시에 여러 개의 터치가 있을 수도 있습니다.

터치 응답 시스템은 컴포넌트가 부모나 자식에 대한 추가적인 정보 없이 터치 인터랙션을 다루기 위해 필요합니다. 이런 시스템은 \`ResponderEventPlugin.js\`에 구현되어 있으며 더 자세한 내용을 포함하고 있습니다.

### 모범 사례

좋은 앱을 만들려면, 모든 액션이 다음의 속성을 지니고 있어야 합니다:

- 피드백/하이라이트- 사용자의 터치가 무엇을 핸들링하는 것인지 그리고 제스처를 종료했을 때 어떤 일이 일어나는지를 시각적으로 보여주어야 합니다.
- 취소 기능- 액션을 만들 때 사용자가 중간에 손가락을 어디론가 드래깅해서 보냈을 때 액션을 취소할 수 있어야 합니다.

이러한 기능은 사용자가 앱을 사용하는 동안 더 편안함을 느끼게 해줍니다. 왜냐하면 이러한 기능은 사람들이 실수로 인한 두려움 없이 경험하고 상호작용할 수 있게 해 주기 때문입니다.

### TouchableHighlight and Touchable*

응답 시스템은 사용하기에 복잡할 수 있습니다. 그래서 React Native에서는 "탭"이 가능해야 하는 것들에 대해 추상화한 \`Touchable\` 구현을 제공하고 있습니다. \`Touchable\`은 응답 시스템을 사용하고 여러분이 쉽게 탭 상호작용을 선언적으로 설정할 수 있게 해 줍니다. 웹에서 버튼 혹은 링크를 사용하는 모든 곳에 \`TouchableHighlight\`를 사용하세요.

### 응답 생명주기

뷰는 올바른 절충 메서드를 구현하여 터치에 대해 응답할 수 있습니다. 뷰가 터치 응답을 할 수 있는지 없는지는 아래 두 개의 함수와 관련 있습니다:

- \`View.props.onStartShouldSetResponder: (evt) => true,\` - 이 뷰가 터치 입력을 시작할 때 응답하기를 원하나요?
- \`View.props.onMoveShouldSetResponder: (evt) => true,\` - 뷰가 응답을 받는 주체가 아닐 때 뷰에서 발생하는 모든 터치 이동에 대해 호출됩니다: 이 뷰가 터치 응답을 "요청 " 하길 원하나요?

만약, 뷰가 treu를 반환하고 응답을 받을 수 있게 된다면, 다음 중 하나가 발생합니다.

- \`View.props.onResponderGrant: (evt) => \{}\` - 뷰는 이제 터치 이벤트에 응답합니다. 이제 사용자에게 무슨 일이 일어나는지를 보여주어야 할 시점입니다.
- \`View.props.onResponderReject: (evt) => \{}\` - 이제 다른 누군가가 응답을 받는 주체가 되고 종료하지 않게 됩니다.

뷰가 응답한다면, 다음 핸들러들이 호출됩니다:

- \`View.props.onResponderMove: (evt) => \{}\` - 사용자가 손가락을 움직입니다.
- \`View.props.onResponderRelease: (evt) => \{}\` - 터치의 마지막(예를 들면, "touchUp")에 발생합니다.
- \`View.props.onResponderTerminationRequest: (evt) => true\` - 다른 누군가가 응답을 받기 원합니다. 이 뷰가 응답을 종료해야 하나요? true를 반환하는 것은 종료(release)를 허용합니다.
- \`View.props.onResponderTerminate: (evt) => \{}\` - 뷰는 더 이상 응답을 받지 않습니다. \`onResponderTerminationRequest\` 호출 이후에 다른 뷰가 응답을 받거나 혹은 요청 없이(iOS에서 컨트롤 센터나 알림 센터) 운영체제가 가져갈 수 있습니다.

\`evt\` 는 다음의 형태를 가진 합성된 터치 이벤트 입니다:

 - \`nativeEvent\`
     + \`changedTouches\` - 마지막 이벤트 이후에 바뀐 모든 터치 이벤트 배열
     + \`identifier\` - 터치 ID
     + \`locationX\` - 터치의 X 포지션, 요소에 대한 상대적인 위치
     + \`locationY\` - 터치의 Y 포지션, 요소에 대한 상대적인 위치
     + \`pageX\` - 터치의 X 포지션, 루트 요소에 대한 상대적인 위치
     + \`pageY\` - 터치의 Y 포지션, 루트 요소에 대한 상대적인 위치
     + \`target\` - 터치 이벤트를 받는 요소의 노드 id
     + \`timestamp\` - 터치에 대한 시간 정보로 속도 계산시에 용이
     + \`touches\` - 스크린에서의 모든 현재 터치에 대한 배열

### Capture ShouldSet Handlers

\`onStartShouldSetResponder\`와 \`onMoveShouldSetResponder\`는 가장 깊은 노드에서 처음 호출되고 부모로 타고 올라가는 버블링 패턴을 지닙니다. 즉, 여러 뷰가 \`*ShouldSetResponder\` 핸들러에 대해 true를 반환할 때 가장 깊은 곳에 있는 컴포넌트가 응답을 받게된다는 의미입니다. 이는 대부분의 경우에 있어서 바람직한 형태입니다. 왜냐하면 모든 컨트롤과 버튼이 사용가능하게 되기 때문입니다.

하지만, 때로는 부모가 응답을 받고 싶어할 수 있습니다. 이때는 캡처 단계를 이용해서 처리할 수 있습니다. 가장 깊이 있는 컴포넌트로 부터 버블링되기 전에 \`on*ShouldSetResponderCapture\`를 발생시켜서 캡처 단계를 합니다. 그래서 부모 뷰가 터치가 시작될 때 자식이 응답을 받지 못하도록 하기 원한다면, 부모 뷰에서 \`onStartShouldSetResponderCapture\` 핸들러가 true를 반환하도록 해야 합니다.

 - \`View.props.onStartShouldSetResponderCapture: (evt) => true,\`
 - \`View.props.onMoveShouldSetResponderCapture: (evt) => true,\`

### PanResponder

고차원의 제스처 해석에 대해서는 [PanResponder](docs/panresponder.html)를 한번 확인해 보세요.
`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"gesture-responder-system","title":"제스처 응답 시스템","layout":"docs","category":"Guides","permalink":"docs/gesture-responder-system.html","next":"javascript-environment","previous":"performance","filename":"GestureResponderSystem.md"}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;