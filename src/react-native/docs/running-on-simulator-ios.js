/**
 * @generated
 */
var React = require("React");
var Layout = require("DocsLayout");
var content = `
## 시뮬레이터 시작하기

React Native 프로젝트 초기화를 한 번이라도 하셨다면, 프로젝트 폴더로 이동하여 \`react-native run-ios\` 명령어 실행이 가능합니다. 모든 것이 올바르게 설정된 경우에는 iOS 시뮬레이터가 실행되면서 테스트 화면을 볼 수 있게 됩니다.

## 시뮬레이트 장치 선택하기

시뮬레이터를 실행할 때 \`--simulator\` 플래그를 사용하여 시뮬레이트 장치의 세부 모델을 선택할 수 있습니다. 기본 값은 \`"iPhone 6"\`입니다. 다른 시뮬레이트 장치, 예를 들어 iPhone 4s로 시뮬레이트 하고 싶다면 \`react-native run-ios --simulator="iPhone 4s"\`라고 입력하면 됩니다.


사용할 수 있는 시뮬레이트 장치의 세부 모델명은 Xcode에서 지원 가능한 장치들과 같습니다. \`xcrun simctl list devices\` 명령어를 통해 쉽게 확인할 수 있습니다.
`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"running-on-simulator-ios","title":"Running On Simulator","layout":"docs","category":"Guides (iOS)","permalink":"docs/running-on-simulator-ios.html","banner":"ejected","next":"communication-ios","previous":"linking-libraries-ios","filename":"RunningOnSimulatorIOS.md"}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;