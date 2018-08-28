/**
 * @generated
 */
var React = require("React");
var Layout = require("DocsLayout");
var content = `
컴포넌트의 높이와 너비가 화면의 크기를 결정합니다.

#### 고정 치수

컴포넌트의 크기를 설정하는 가장 간단한 방법은 스타일에 고정 된 \`width\`와 \`height\`를 추가하는 것 입니다. React Native의 모든 치수는 단위가 없으며 density-independent 픽셀을 나타냅니다.

\`\`\`ReactNativeWebPlayer
import React, \{ Component } from 'react';
import \{ AppRegistry, View } from 'react-native';

export default class FixedDimensionsBasics extends Component \{
  render() \{
    return (
      <View>
        <View style=\{\{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style=\{\{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style=\{\{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

// Create React Native App을 사용 한다면 생략 합니다.
AppRegistry.registerComponent('AwesomeProject', () => FixedDimensionsBasics);
\`\`\`

이 방법으로 치수를 설정하는 것은 화면 크기에 관계없이 항상 동일한 크기로 렌더링해야하는 컴포넌트에 일반적으로 사용 할 수 있습니다.


#### Flex 치수

컴퍼넌트 스타일로 \`flex\`를 사용하면, 컴퍼넌트를 사용 가능한 공간에 맞춰 동적으로 확장 및 축소 시킵니다. 일반적으로 \`flex : 1\`을 사용 하면, 컴퍼넌트에게 사용 가능한 모든 공간을 채우고, 같은 부모를 가진 다른 컴퍼넌트간에 균등하게 공유 합니다. 주어진 'flex'값이 클수록 형제에 비해 컴포넌트의 공간 비율이 높아집니다.

> A component can only expand to fill available space if its parent has dimensions greater than 0. If a parent does not have either a fixed \`width\` and \`height\` or \`flex\`, the parent will have dimensions of 0 and the \`flex\` children will not be visible.
> 컴퍼넌트의 부모가 0보다 큰 치수에서만 컴퍼넌트는 사용 가능 영역을 확장 합니다. 부모가 고정된 \`width\` 및 \`height\` 또는 \`flex\`를 없다면, 부모의 치수는 0이므로, \`flex\` 자식들은 보이지 않을 것이다.

\`\`\`ReactNativeWebPlayer
import React, \{ Component } from 'react';
import \{ AppRegistry, View } from 'react-native';

export default class FlexDimensionsBasics extends Component \{
  render() \{
    return (
      // 상위 뷰에서 \`flex : 1\`을 제거해보십시오.
      // 부모의 치수가 없기 때문에, 자식 컴포넌트는 보이지 않을 것입니다.
      //\`flex : 1\` 대신 \`height: 300\`을 추가하면 어떨까요?
      <View style=\{\{flex: 1}}>
        <View style=\{\{flex: 1, backgroundColor: 'powderblue'}} />
        <View style=\{\{flex: 2, backgroundColor: 'skyblue'}} />
        <View style=\{\{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

// Create React Native App을 사용 한다면 생략 합니다.
AppRegistry.registerComponent('AwesomeProject', () => FlexDimensionsBasics);
\`\`\`

컴포넌트의 크기를 제어 할 수 있게 되면 다음 단계는 [화면에 배치하는 방법을 배우는] 것 입니다 (docs / flexbox.html).
`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"height-and-width","title":"높이와 너비","layout":"docs","category":"The Basics","permalink":"docs/height-and-width.html","next":"flexbox","previous":"style","filename":"HeightAndWidth.md"}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;