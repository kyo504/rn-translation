/**
 * @generated
 */
var React = require("React");
var Layout = require("DocsLayout");
var content = `
모바일 앱이 하나의 화면으로 되어있는 경우는 드뭅니다. 일반적으로는 네비게이터를 통해 복수의 화면을 표현 그리고 이들 간의 화면 이동을 다룰 수 있습니다.

이 가이드는 React Native에서 할 수 있는 다양한 네비게이션 컴포넌트를 다룹니다. 네비게이션을 처음 시작하는 것이라면 [React Navigation](docs/navigation.html#react-navigation)을 사용해보세요. React Navigation은 iOS와 Android에서 많이 사용되는 스택 네비게이션과 탭 네비게이션 패턴을 제공하기 때문에 사용하기 쉽습니다. 그리고 자바스크립트로 구현되어 있기 때문에 [redux](https://reactnavigation.org/docs/guides/redux)같은 상태 관리 라이브러리와 통합하여 사용할 때 굉장한 유연성과 다양한 설정 방법을 제공합니다.

iOS만을 생각하고 있다면, 간단한 설정으로 네이티브의 감성을 제공하는 [NavigatorIOS](docs/navigation.html#navigatorios)도 하나의 선택지가 될 수 있습니다. NavigatorIOS는 네이티브의 \`UINavigationController\` 클래스를 감싼 형태입니다. 하지만 안드로이드에서는 동작하지 않습니다.

iOS와 안드로이드 모두에서 네이티브 감성을 느끼고 싶다면 혹은 React Native를 네이티브 쪽에서 네비게이션을 다루고 있는 앱에 통합하려 한다면 다음 두 개의 라이브러리를 고려해보세요: [native-navigation](http://airbnb.io/native-navigation/), [react-native-navigation](https://github.com/wix/react-native-navigation).

## React Navigation

React Native는 개발자가 몇 줄의 코드만으로 앱의 화면들을 설정할 수 있게 해주는 네비게이션 라이브러리입니다.

가장 먼저 프로젝트에서 아래 명령어를 통해 설치하세요:

\`\`\`
npm install --save react-navigation
\`\`\`

그런 다음 홈 화면과 프로파일 화면으로 구성된 앱을 만들 수 있습니다:

\`\`\`
import \{
  StackNavigator,
} from 'react-navigation';

const App = StackNavigator(\{
  Home: \{ screen: HomeScreen },
  Profile: \{ screen: ProfileScreen },
});
\`\`\`

각 화면 컴포넌트는 헤더 제목같은 네비게이션 옵션을 설정할 수 있습니다. 다른 화면으로 전환하려면 \`navigation\` 속성에 있는 액션 생성자를 이용하면 됩니다:

\`\`\`
class HomeScreen extends React.Component \{
  static navigationOptions = \{
    title: 'Welcome',
  };
  render() \{
    const \{ navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress=\{() =>
          navigate('Profile', \{ name: 'Jane' })
        }
      />
    );
  }
}
\`\`\`

React Navigation 라우터는 네이게이션 로직을 재설정하거나 redux와 통합하기 쉽게 해 줍니다. 라우터는 중첩된 형태가 될 수 있기 때문에 개발자는 큰 변화 없이도 앱 안에서 네비게이션 로직을 재설정 할 수 있습니다.

React Navigation에서 화면은 네이티브 컴포넌트와 네이티브 스레드에서 동작하는 애니메이션을 60fps로 만들어주는 [\`Animated\`](docs/animated.html)을 사용합니다. 또한, 애니메이션과 제스처는 원하는 대로 구성할 수 있습니다.

React Navigation이 궁금하시다면 [React Navigation Getting Started Guide](https://reactnavigation.org/docs/intro/) 혹은 [Intro to Navigators](https://reactnavigation.org/docs/navigators/)같은 온라인 문서에 방문해 보세요.

## NavigatorIOS

\`NavigatorIOS\` 는 [\`UINavigationController\`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UINavigationController_Class/) 위에서 만들어진 것이기 때문에 같은 형태를 보여줍니다.

![](img/NavigationStack-NavigatorIOS.gif)

\`\`\`javascript
<NavigatorIOS
  initialRoute=\{\{
    component: MyScene,
    title: 'My Initial Scene',
    passProps: \{ myProp: 'foo' },
  }}
/>
\`\`\`

다른 네비게이션 시스템과 같이, \`NavigatorIOS\`는 화면을 표현하는데 라우트라는 것을 사용하지만 중요한 차이점이 있습니다. 실제 화면에 그려지는 컴포넌트는 라우트 안에 \`component\`라는 키를 사용하도록 되어 있습니다. 그리고 이 컴포넌트에 전달되는 모든 속성은 \`psssProps\`에 명시됩니다. 컴포넌트는 자동으로 "navigator" 객체를 속성으로 전달받게 되고 필요시 \`push\`와 \`pop\`을 호출해서 화면 이동을 할 수 있습니다.

\`NavigatorIOS\`가 UIKit 네비게이션을 활용하기 때문에 자동적으로 뒤로가기 버튼과 타이틀을 포함한 네비게이션 바를 그리게 됩니다

\`\`\`javascript
import React from 'react';
import PropTypes from 'prop-types';
import \{ Button, NavigatorIOS, Text, View } from 'react-native';

export default class NavigatorIOSApp extends React.Component \{
  render() \{
    return (
      <NavigatorIOS
        initialRoute=\{\{
          component: MyScene,
          title: 'My Initial Scene',
          passProps: \{index: 1},
        }}
        style=\{\{flex: 1}}
      />
    )
  }
}

class MyScene extends React.Component \{
  static propTypes = \{
    route: PropTypes.shape(\{
      title: PropTypes.string.isRequired
    }),
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) \{
    super(props, context);
    this._onForward = this._onForward.bind(this);
  }
  
  _onForward() \{
    let nextIndex = ++this.props.index;
    this.props.navigator.push(\{
      component: MyScene,
      title: 'Scene ' + nextIndex,
      passProps: \{index: nextIndex}
    });
  }

  render() \{
    return (
      <View>
        <Text>Current Scene: \{ this.props.title }</Text>
        <Button
          onPress=\{this._onForward}
          title="Tap me to load the next scene"
        />
      </View>
    )
  }
}
\`\`\`

이 컴포넌트에 대해 더 알고 싶으시다면 [\`NavigatorIOS\` 관련 문서](docs/navigatorios.html)를 확인해 보세요.
`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"navigation","title":"화면 간 이동하기","layout":"docs","category":"Guides","permalink":"docs/navigation.html","next":"images","previous":"platform-specific-code","filename":"Navigation.md"}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;