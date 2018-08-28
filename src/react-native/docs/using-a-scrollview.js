/**
 * @generated
 */
var React = require("React");
var Layout = require("DocsLayout");
var content = `
[스크롤뷰(ScrollView)](docs/scrollview.html) 는  다양한 컴포넌트와 뷰를 제어할 수 있는 스크롤 컨테이너입니다. 스크롤 가능한 아이템은 같을 필요가 없으며, 가로와 세로 둘 다 스크롤 할 수 있습니다. (셋팅 속성(property)은 \`horizontal\` ).

이 예제는 이미지(image)와 텍스트(text)가 섞인 스크롤뷰(\`ScrollView\`) 를 생성합니다.

\`\`\`ReactNativeWebPlayer
import React, \{ Component } from 'react';
import \{ AppRegistry, ScrollView, Image, Text } from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component \{
  render() \{
      return (
        <ScrollView>
          <Text style=\{\{fontSize:96}}>Scroll me plz</Text>
          <Image source=\{require\('./img/favicon.png')} />
          <Image source=\{require\('./img/favicon.png')} />
          <Image source=\{require\('./img/favicon.png')} />
          <Image source=\{require\('./img/favicon.png')} />
          <Image source=\{require\('./img/favicon.png')} />
          <Text style=\{\{fontSize:96}}>If you like</Text>
          <Image source=\{require\('./img/favicon.png')} />
          <Image source=\{require\('./img/favicon.png')} />
          <Image source=\{require\('./img/favicon.png')} />
          <Image source=\{require\('./img/favicon.png')} />
          <Image source=\{require\('./img/favicon.png')} />
          <Text style=\{\{fontSize:96}}>Scrolling down</Text>
          <Image source=\{require\('./img/favicon.png')} />
          <Image source=\{require\('./img/favicon.png')} />
          <Image source=\{require\('./img/favicon.png')} />
          <Image source=\{require\('./img/favicon.png')} />
          <Image source=\{require\('./img/favicon.png')} />
          <Text style=\{\{fontSize:96}}>What's the best</Text>
          <Image source=\{require\('./img/favicon.png')} />
          <Image source=\{require\('./img/favicon.png')} />
          <Image source=\{require\('./img/favicon.png')} />
          <Image source=\{require\('./img/favicon.png')} />
          <Image source=\{require\('./img/favicon.png')} />
          <Text style=\{\{fontSize:96}}>Framework around?</Text>
          <Image source=\{require\('./img/favicon.png')} />
          <Image source=\{require\('./img/favicon.png')} />
          <Image source=\{require\('./img/favicon.png')} />
          <Image source=\{require\('./img/favicon.png')} />
          <Image source=\{require\('./img/favicon.png')} />
          <Text style=\{\{fontSize:80}}>React Native</Text>
        </ScrollView>
    );
  }
}

// 리엑트 네이티브 앱(App)을 생성하는 경우 이 라인(Line)을 생략 합니다.
AppRegistry.registerComponent(
  'AwesomeProject',
  () => IScrolledDownAndWhatHappenedNextShockedMe);
\`\`\`

스크롤뷰는 스와이핑 제스처(swiping gestures)를 이용해서 뷰를 통한 페이징을  \`pagingEnabled\` 속성(props)을 사용하여 환경을 설정 할 수 있습니다.
뷰 사이의 가로 스와이핑(Swiping)은 안드로이드(Android) 의 [뷰 페이저 안드로이드(ViewPagerAndroid)](docs/viewpagerandroid.html) 컴포넌트를 활용해서 구현할 수 있습니다.

스크롤뷰 단일 아이템을 사용하여 사용자는 콘텐츠를 확대/축소할 수 있습니다.  \`maximumZoomScale\` 과 \`minimumZoomScale\` 속성(props)을 설정하고 사용자가 접기와 펼치기 제스처(gestures)를 써 확대 및 축소를 할 수 있습니다.

스크롤뷰는 제한된 크기의 작은 것을 표현하는 데 가장 효과적입니다. 스크롤뷰(\`ScrollView\`) 의 모든 요소와 뷰는 현재 스크린 위에 보이지 않아도 렌더링(rendered) 됩니다. 만약 화면에 들어갈 아이템이 많고 길어지면 플랫리스트(\`FlatList\`) 사용해야 합니다.[그래서 다음에는 리스트뷰를 배우러 갑니다](docs/using-a-listview.html).
`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"using-a-scrollview","title":"스크롤뷰(ScrollView) 사용법","layout":"docs","category":"The Basics","permalink":"docs/using-a-scrollview.html","next":"using-a-listview","previous":"handling-touches","filename":"UsingAScrollView.md"}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;