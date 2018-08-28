/**
 * @generated
 */
var React = require("React");
var Layout = require("DocsLayout");
var content = `
컴포넌트는 flexbox 알고리즘을 사용하여 하위 요소의 레이아웃을 지정할 수 있습니다. Flexbox는 다양한 화면 크기에서 일관된 레이아웃을 제공하도록 설계 되었습니다.

일반적으로 \`flexDirection\`,\`alignItems\` 및 \`justifyContent\`의 조합을 사용하여 레이아웃을 구성 합니다.

> Flexbox는 웹의 CSS와 마찬가지로 React Native와 동일한 방식으로 작동하지만 몇 가지 예외가 있습니다. \`flexDirection\`의 기본값은 \`row\` 대신에\`column\`이고,\`flex\` 매개 변수는 단일 숫자만을 지원합니다.

#### Flex Direction

컴포넌트의 \`style\`에 \`flexDirection\`을 추가하면 레이아웃의 **주 축**이 결정됩니다. 자식들은 수평 (\`row\`) 또는 수직 (\`column\`)으로 배치되어야 합니까? 기본값은\`column\`입니다.

\`\`\`ReactNativeWebPlayer
import React, \{ Component } from 'react';
import \{ AppRegistry, View } from 'react-native';

export default class FlexDirectionBasics extends Component \{
  render() \{
    return (
      // \`flexDirection\` 값을 \`column\`으로 해봅시다. 
      <View style=\{\{flex: 1, flexDirection: 'row'}}>
        <View style=\{\{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style=\{\{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style=\{\{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

// Create React Native App을 사용 한다면 생략 합니다.
AppRegistry.registerComponent('AwesomeProject', () => FlexDirectionBasics);
\`\`\`

#### Justify Content

컴퍼넌트의 스타일에 \`justifyContent\`를 추가하면 **주 축**에 따른 자식의 **배치**가 결정됩니다. 자식들이 시작, 중앙, 끝 또는 균등 한 간격으로 배치 되어야 합니까? 사용 가능한 옵션은 \`flex-start\`,\`center\`,\`flex-end\`,\`space-around\` 및 \`space-between\` 입니다.

\`\`\`ReactNativeWebPlayer
import React, \{ Component } from 'react';
import \{ AppRegistry, View } from 'react-native';

export default class JustifyContentBasics extends Component \{
  render() \{
    return (
      // Try setting \`justifyContent\` to \`center\`.
      // Try setting \`flexDirection\` to \`row\`.
      <View style=\{\{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View style=\{\{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style=\{\{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style=\{\{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

// Create React Native App을 사용 한다면 생략 합니다.
AppRegistry.registerComponent('AwesomeProject', () => JustifyContentBasics);
\`\`\`

#### Align Items

컴포넌트의 스타일에 \`alignItems\`을 추가하면 **보조 축** (기본 축이 \`row\`이고 보조 축이 \`column\`이고 그 반대도 마찬가지)을 따라 자식들의 **정렬**이 결정됩니다. 자식들은 시작, 중심, 끝, 또는 늘려져야 합니까? 사용 가능한 옵션은 \`flex-start\`,\`center\`,\`flex-end\`,\`stretch\` 입니다.

> \`stretch\`가 영향을 미치기 위해서는 자식들은 보조 축을 따라 고정 된 치수를 가져서는 안됩니다. 다음 예제에서 \`width : 50\`이 제거 되지 않으면 \`alignItems: stretch\`은 아무런 영향을 주지 않습니다.

\`\`\`ReactNativeWebPlayer
import React, \{ Component } from 'react';
import \{ AppRegistry, View } from 'react-native';

export default class AlignItemsBasics extends Component \{
  render() \{
    return (
      // \`alignItems\`를 'flex-start'로 변경 해보십시오.
      // \`justifyContent\`를 \`flex-end\`로 변경 해보십시오.
      // \`flexDirection\`을 \`row\`로 변경 해보십시오.
      <View style=\{\{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style=\{\{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style=\{\{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style=\{\{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

// Create React Native App을 사용 한다면 생략 합니다.
AppRegistry.registerComponent('AwesomeProject', () => AlignItemsBasics);
\`\`\`

#### 더 깊이 들어가기

기본적인 레이아웃에 대해 다뤘지만 레이아웃에 필요한 다른 스타일이 많이 있습니다. 레이아웃을 제어하는 props의 전체 목록은 [여기] (./ docs / layout-props.html)에 문서화되어 있습니다.

우리는 실제 어플리케이션을 만들 수 있게 가까워지고 있습니다. 아직 우리가 다루지 않은 한 가지는 사용자 입력을 받는 것에 대한 것 입니다. [TextInput 컴포넌트로 텍스트 입력을 처리하는 방법] (docs / handling-text-input.html)으로 넘어 가도록 하겠습니다.
`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"flexbox","title":"Flexbox로 레이아웃 구성","layout":"docs","category":"The Basics","permalink":"docs/flexbox.html","next":"handling-text-input","previous":"height-and-width","filename":"LayoutWithFlexbox.md"}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;