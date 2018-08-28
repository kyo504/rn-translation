/**
 * @generated
 */
var React = require("React");
var Layout = require("DocsLayout");
var content = `
크로스 플랫폼 앱을 만들 때 가능한 많은 코드를 재사용하고자 할 것입니다. 예를 들면, iOS와 안드로이드에 따라 다른 비주얼 컴포넌트를 구현해야 하는 경우에 해당합니다.

React Native는 플랫폼에 따라 쉽게 코드를 구조화하고 분리하는 두 가지 방법을 제공합니다.

* [\`Platform\` 모듈](docs/platform-specific-code.html#platform-module) 사용하기.
* [플랫폼에 따른 파일 확장자](docs/platform-specific-code.html#platform-specific-extensions) 사용하기.

특정 컴포넌트는 하나의 플랫폼에서만 동작하는 속성을 가질 수 있습니다. 이런 속성은 웹사이트에 \`@platform\`란 주석이 달려있고 옆에 작은 배지가 있습니다.

## 플랫폼 모듈

React Native는 앱이 어떤 플랫폼에서 실행되는지 알 수 있는 모듈을 제공합니다. 이 로직은 플랫폼에 따른 코드를 구현해야 할 때 이용할 수 있습니다. 컴포넌트의 일부가 플랫폼에 따라 분리되어야 할 경우 이 옵션을 사용하세요.

\`\`\`javascript
import \{ Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create(\{
  height: (Platform.OS === 'ios') ? 200 : 100,
});
\`\`\`

\`Platform.OS\`는 iOS에서 실행될 때, \`android\`는 안드로이드에서 실행될 때 사용됩니다.

또한, \`Platform.select\` 함수를 사용할 수도 있습니다. 이 함수는 Platform.OS를 키로 하는 객체를 전달하면 현재 실행되고 있는 플랫폼에 따라 값을 반환합니다.

\`\`\`javascript
import \{ Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create(\{
  container: \{
    flex: 1,
    ...Platform.select(\{
      ios: \{
        backgroundColor: 'red',
      },
      android: \{
        backgroundColor: 'blue',
      },
    }),
  },
});
\`\`\`

위 코드의 경우 모든 플랫폼에서 container가 \`flex: 1\`을 가지게 되고, iOS에서는 배경색이 빨간색, 안드로이드에서는 파란색이 됩니다.

어떤 값이라도 받을 수 있기 때문에 아래와 같이 플랫폼에 따라 다른 컴포넌트를 반환하도록 할 수도 있습니다.

\`\`\`javascript
const Component = Platform.select(\{
  ios: () => require\('ComponentIOS'),
  android: () => require\('ComponentAndroid'),
})();

<Component />;
\`\`\`

### 안드로이드 버전 확인

안드로이드에서는 \`Platform\` 모듈을 이용해서 현재 안드로이드 버전을 확인할 수 있습니다:


\`\`\`javascript
import \{ Platform } from 'react-native';

if (Platform.Version === 25) \{
  console.log('Running on Nougat!');
}
\`\`\`

### iOS 버전 확인

iOS에서는 \`Version\`이 \`-[UIDevice systemVersion]\`의 반환값인데 운영 체제의 현재 버전으로 시작합니다. 시스템 버전은 "10.3" 같은 형태입니다. 예를 들어, 아래와 같이 작성하면 iOS에서 메이저 버전을 확인할 수 있습니다:

\`\`\`javascript
import \{ Platform } from 'react-native';

const majorVersionIOS = parseInt(Platform.Version, 10);
if (majorVersionIOS <= 9) \{
  console.log('Work around a change in behavior'); 
}
\`\`\`

## 플랫폼에 따른 확장자

플랫폼에 따라 코드를 분기하는 것이 복잡해지면 파일로 분리하는 것을 고려해야 합니다. React Native는 파일이 \`.ios.\`나 \`.android.\` 확장자를 가지면 컴포넌트를 require할 때 해당 플랫폼에 해당하는 파일을 로드합니다.

예를 들어, 프로젝트에 다음과 같은 파일을 가지고 있다고 하면:

\`\`\`sh
BigButton.ios.js
BigButton.android.js
\`\`\`

다음과 같이 컴포넌트를 require 할 수 있습니다.

\`\`\`javascript
const BigButton = require\('./BigButton');
\`\`\`

React Native는 현재 플랫폼에 해당하는 파일을 자동을 선택하게 됩니다.

`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"platform-specific-code","title":"플랫폼에 따른 코드 분기","layout":"docs","category":"Guides","permalink":"docs/platform-specific-code.html","next":"navigation","previous":"components","filename":"PlatformSpecificInformation.md"}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;