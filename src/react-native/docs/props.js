/**
 * @generated
 */
var React = require("React");
var Layout = require("DocsLayout");
var content = `
대부분의 컴포넌트는 생성 시에 다양한 파라미터로 커스터마이징을 할 수 있습니다. 이러한 생성 파라미터를 props라고 부릅니다. 

예를 들어, 리액트 네이티브의 기본 컴포넌트 중 하나인 Image가 있습니다. 이미지를 생성할 때 \`source\`라는 이름의 prop을 사용해서 이미지가 무엇을 보여줄지 조정할 수 있습니다.


\`\`\`ReactNativeWebPlayer
import React, \{ Component } from 'react';
import \{ AppRegistry, Image } from 'react-native';

export default class Bananas extends Component \{
  render() \{
    let pic = \{
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source=\{pic} style=\{\{width: 193, height: 110}}/>
    );
  }
}

// Create React Native App을 사용한다면 이 라인을 무시하세요 
AppRegistry.registerComponent('AwesomeProject', () => Bananas);
\`\`\`

변수 \`pic\`을 JSX에 삽입하기 위해 \`\{pic}\`을 중괄호로 감싼 점에 주목하세요. JSX에서는 중괄호를 사용하여 언제든지 자바스크립트 표현식을 사용할 수 있습니다.  

여러분이 직접 만든 컴포넌트에도 \`props\`를 사용할 수 있습니다. 이 방법을 활용하여 앱 내부의 다양한 곳에서 사용 가능하고, 각기 조금씩 다른 속성(properties, props)을 가진 단일 컴포넌트를 만들 수 있습니다. 이를 위해 \`this.props\`를 \`render\` 함수 안에서 호출하는 것으로 충분합니다. 여기 예제를 보세요:

\`\`\`ReactNativeWebPlayer
import React, \{ Component } from 'react';
import \{ AppRegistry, Text, View } from 'react-native';

class Greeting extends Component \{
  render() \{
    return (
      <Text>Hello \{this.props.name}!</Text>
    );
  }
}

export default class LotsOfGreetings extends Component \{
  render() \{
    return (
      <View style=\{\{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}

// Create React Native App을 사용한다면 이 라인을 무시하세요
AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);
\`\`\`

\`name\`을 prop으로 사용해서 \`Greeting\` 컴포넌트를 커스터마이징 할 수 있습니다. 이로써 각각의 인사(greeting)에 Greeting 컴포넌트를 재사용할 수 있습니다. 이 예제는 또한 \`Greeting\` 컴포넌트를 JSX로 작성해서 마치 내장된 컴포넌트처럼 사용합니다. 이러한 사용법은 리액트를 굉장히 멋지고 풍부하게 만듭니다. 다른 종류의 UI 기본세트로 작업하고 싶다면 이런 방식으로 하나 만들어서 사용하면 그만입니다.

또 하나 새로운 것은 [\`View\`](docs/view.html) 컴포넌트 입니다. [\`View\`](docs/view.html)는 다른 컴포넌트를 담는 컨테이너로서 작동 가능해서 스타일과 레이아웃을 조정하는 데 유리합니다.

\`props\`와 함께 기본 [\`Text\`](docs/text.html)와 [\`Image\`](docs/image.html), [\`View\`](docs/view.html) 컴포넌트를 가지고 매우 다양한 정적 스크린을 만들 수 있습니다. 시간의 흐름에 따라 앱을 변경하고 싶다면 이제 [State](docs/state.html)를 배울 차례입니다.
`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"props","title":"속성 Props","layout":"docs","category":"The Basics","permalink":"docs/props.html","next":"state","previous":"tutorial","filename":"Props.md"}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;