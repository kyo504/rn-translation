/**
 * @generated
 */
var React = require("React");
var Layout = require("DocsLayout");
var content = `
## 정적 이미지 리소스

React Native에서 iOS, 안드로이드 앱은 동일한 방법으로 이미지와 다른 미디어를 관리합니다. 앱에 정적 이미지를 추가하려면, 폴더 어딘가에 이미지를 넣고 아래와 같이 참조할 수 있습니다.

\`\`\`javascript
<Image source=\{require\('./my-icon.png')} />
\`\`\`

이미지 이름은 JS 모듈과 같은 방식으로 해석됩니다. 위의 예제에서 packager는 해당 컴포넌트의 같은 폴더에서 \`my-icon.png\`를 찾을 것입니다. 이미지가 \`my-icon.ios.png\`, \`my-icon.android.png\`와 같이 두 가지가 있다면, packager는 플랫폼에 맞는 파일을 고를 것입니다.

스크린에 맞는 이미지를 사용하기 위해 \`@2x\`, \`@3x\` 접미사를 사용할 수 있습니다. 다음과 같은 파일 구조라면,

\`\`\`
.
├── button.js
└── img
    ├── check@2x.png
    └── check@3x.png
\`\`\`

\`button.js\`에서 다음과 같이 작성할 수 있습니다.

\`\`\`javascript
<Image source=\{require\('./img/check.png')} />
\`\`\`

packager가 기기의 스크린에 맞는 이미지를 선택할 것입니다. 예를 들어, \`check@2x.png\`는 iPhone 7에 사용되고, \`check@3x.png\`는 iPhone 7 Plus나 Nexus 5에서 사용됩니다. screen에 맞는 이미지가 없다면 그 중에서 최적의 이미지가 선택됩니다.

Windows에서 프로젝트에 새로운 이미지를 추가하려면 packager를 재시작해야합니다.

여기 몇 가지 장점이 있습니다.

1. iOS와 안드로이드가 같은 방식이다.
2. 이미지가 자바스크립트 코드와 같은 폴더에 있다. 컴포넌트가 자체적으로 포함된다.
3. 전역 네임스페이스가 아니다. 즉, 이름이 충돌할 걱정을 하지 않아도 된다.
4. 실제로 사용할 이미지만 앱에 포함된다.
5. 이미지를 추가하거나 변경할 때 앱을 다시 컴파일할 필요가 없다. 평소 하던대로 시뮬레이터만 새로고침하면 된다.
6. packager가 이미지 크기를 알고 있으니 코드에서 다시 알 필요가 없다.
7. 이미지는 [npm](https://www.npmjs.com/) 패키지를 통해 배포할 수 있다.

이러한 작업을 수행하려면 \`require\`에서 이미지 이름을 고정시켜야 합니다.

\`\`\`javascript
// GOOD
<Image source=\{require\('./my-icon.png')} />

// BAD
var icon = this.props.active ? 'my-icon-active' : 'my-icon-inactive';
<Image source=\{require\('./' + icon + '.png')} />

// GOOD
var icon = this.props.active ? require\('./my-icon-active.png') : require\('./my-icon-inactive.png');
<Image source=\{icon} />
\`\`\`

이렇게 하면 필요한 이미지 소스에 이미지의 크기(너비 높이)가 포함됩니다. 이미지 크기를 (flex를 통해) 유동적으로 바꾸려면, 스타일 속성에 \`\{ width: undefined, height: undefined }\`을 세팅하면 됩니다.

## 정적이 아닌 이미지 리소스

위에서 설명한 \`require\`문법은 정적으로 포함될 오디오, 비디오, 문서파일 모두 같은 방법으로 사용됩니다. 가장 일반적인 파일 형태는 \`.mp3\`, \`.wav\`, \`.mp4\`, \`.mov\`, \`.html\`, \`.pdf\`입니다. 전체 목록을 보고 싶으면 [packager defaults](https://github.com/facebook/metro-bundler/blob/master/packages/metro-bundler/src/defaults.js#L13-L18)를 확인하세요.

설정 파일을 생성해서 다른 타입도 추가할 수 있습니다([packager config file](https://github.com/facebook/react-native/blob/master/local-cli/util/Config.js#L34-L39)에서 전체 설정 옵션을 확인할 수 있습니다.).

하나 주의할 것은 비디오는 \`flexGrow\` 대신에 절대적인 위치를 사용해야합니다. 왜냐하면 이미지가 아닌 것은 크기가 전달되지 않기 때문입니다. 비디오를 Xcode나 안드로이드의 Assets 폴더에 바로 연결한다면 문제는 없습니다.

## 하이브리드 앱 이미지

하이브리드 앱으로 빌드한다면 (일부 UI는 React Native로, 일부 UI는 다른 플랫폼으로), 앱에 이미 번들된 이미지를 사용할 수 있습니다.

Xcode asset catalog나 안드로이드 drawable 폴더에 포함된 이미지는 확장자 없이 이름만 사용하세요.

\`\`\`javascript
<Image source=\{\{uri: 'app_icon'}} style=\{\{width: 40, height: 40}} />
\`\`\`

안드로이드 assets 폴더의 이미지는, \`asset:/\`을 사용하세요.

\`\`\`javascript
<Image source=\{\{uri: 'asset:/app_icon.png'}} style=\{\{width: 40, height: 40}} />
\`\`\`

이러한 접근은 안정성 검사를 하지 않습니다. 이미지가 애플리케이션에서 잘 나오는지는 여러분에게 달려있습니다. 또한 수동으로 이미지 크기도 지정해줘야 합니다.

## 네트워크 이미지

앱의 이미지는 대부분 컴파일 시점에서 사용할 수 없거나 바이너리 크기를 줄이기 위해 일부를 동적으로 가져올 것입니다. 정적인 리소스와 달리 *이미지 크기를 명시해줘야 합니다*. iOS에서 [App Transport Security](docs/running-on-device.html#app-transport-security) 요구사항을 충족시키기 위해 https를 사용하는 것을 권장합니다.

\`\`\`javascript
// GOOD
<Image source=\{\{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style=\{\{width: 400, height: 400}} />

// BAD
<Image source=\{\{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
\`\`\`

### 이미지를 위한 네트워크 요청

이미지 요청과 함께 HTTP-Verb, headers, body를 설정하려면, 다음과 같이 속성을 정의할 수 있습니다.

  \`\`\`javascript
  <Image source=\{\{
      uri: 'https://facebook.github.io/react/img/logo_og.png',
      method: 'POST',
      headers: \{
        Pragma: 'no-cache'
      },
      body: 'Your Body goes here'
    }}
    style=\{\{width: 400, height: 400}} />
  \`\`\`

### 캐시 관리 (iOS 전용)

어느 경우에는 로컬 캐시에 이미지가 있을 때만 보여주고 싶을 것입니다. 즉, 높은 해상도의 이미지가 가능하기 전까지 낮은 해상도의 이미지를 보여줄 수 있습니다. 다른 경우에는 이미지가 오래 된 것을 신경쓰지 않거나 대역폭을 아끼기 위해 오래된 이미지를 표시할 지는 신경쓰지 않아도 됩니다. \`cache\`속성은 네트워크 계층이 어떻게 캐시와 상호작용하는지 관리할 수 있습니다.

* \`default\`: native 플랫폼의 기본 전략을 사용합니다.
* \`reload\`: URL 데이터는 원본 소스에서 로드됩니다. URL 로드 요청을 위해서 기존의 캐시 데이터를 사용하면 안 됩니다.
* \`force-cache\`: 기존 캐시 데이터는 기간이나 만료 날짜에 상관 없이 요청을 충족하기 위해 사용됩니다.
캐시에 기존 데이터가 없다면 요청에 따라 원본 소스에서 로드됩니다.
* \`only-if-cached\`: 기존 캐시 데이터는 기간이나 만료 날짜에 상관 없이 요청을 충족하기 위해 사용됩니다.
URL 로드 요청에 해당하는 캐시에 기존 데이터가 없다면 원본 소스에서 데이터를 로드하려고 시도 하지 않으며 로드가 실패되었다고 간주됩니다.

\`\`\`javascript
<Image source=\{\{uri: 'https://facebook.github.io/react/img/logo_og.png', cache: 'only-if-cached'}}
       style=\{\{width: 400, height: 400}} />
\`\`\`

## 로컬 파일시스템 이미지

\`Images.xcassets\` 외부에 있는 로컬 리소스를 사용하는 예제는 [CameraRoll](docs/cameraroll.html)에서 확인하세요.

### 최적의 카메라 롤 이미지

iOS는 카메라 롤에 같은 이미지를 여러 크기로 저장하기 때문에 성능상의 이유로 이 중에 최적의 이미지를 선택하는 것이 중요합니다. 200x200 크기의 썸네일을 표시할 때 최고 품질인 3264x2448 크기의 이미지를 사용하고 싶지는 않을 것입니다. 정확히 맞는 크기가 있으면 React Native가 알아서 선택할 것입니다. 그렇지 않다면 크기가 조정될 때 흐림을 방지하기 위해 최소 50% 더 큰 크기의 첫 번째 것을 사용할 것입니다. 이 모든 것은 기본 적으로 되는 것이니 코드 작성할 걱정은 안 하셔도 됩니다.

## 왜 자동으로 모든 크기를 조정하지 않을까?

*브라우저에서* 이미지에 크기를 지정해주지 않으면 0x0 크기로 요소를 그리고, 이미지를 다운로드하고, 그리고 나서 실제 크기로 이미지를 그릴 것 입니다. 이 것의 큰 문제점은 이미지가 로드될 때 UI가 정상 동작하지 않을 때가 있어서 좋지 않은 사용자 경험을 남겨줄 것입니다.

*React Native에서* 이 동작은 의도적으로 구현되지 않았습니다. 개발자는 이미지의 크기(또는 종횡비)를 미리 알기 위해 더 많은 작업을 해야하지만 더 나은 사용자 경험을 제공할 것이라고 믿습니다. \`require\('./my-icon.png')\`를 통해 로드된 정적인 이미지는 *자동으로 크기가 조정됩니다.* 왜냐하면 설치 즉시 이미지 크기를 사용할 수 있기 때문입니다.

예를 들어, \`require\('./my-icon.png')\`의 결과는 아래와 같습니다.

\`\`\`javascript
\{"__packager_asset":true,"uri":"my-icon.png","width":591,"height":573}
\`\`\`

## source 객체

React Native에서 한가지 흥미로운 점은 \`src\`속성이 \`source\`라고 명명되었다는 것이고, 문자열이 아니라 \`uri\`속성이 있는 객체를 사용한다는 것입니다.

\`\`\`javascript
<Image source=\{\{uri: 'something.jpg'}} />
\`\`\`

인프라 측면에서 보면 이 객체에 메타데이터를 첨부할 수가 있습니다. 예를 들어 \`require\('./my-icon.png')\`를 사용할 경우, 실제 위치와 크기 정보를 추가합니다(추후에 변경될 수도 있으니 이 사실에 의존하지 말 것). 이것도 나중에 수정될 예정이지만, \`\{uri: ...}\`를 출력하는 대신에 스프라이트(sprite)를 지원할 수도 있습니다. \`\{uri: ..., crop: \{left: 10, top: 50, width: 20, height: 40}}\`를 출력하고 기존의 모든 사이트에서 sprite를 지원할 수 있습니다.

사용자 측면에서는 이미지 크기같은 유용한 속성과 함께 객체에 주석을 달아서 이미지 크기를 계산할 수 있습니다. 이미지의 정보를 저장하는 데이터 구조를 자유롭게 사용하세요.

## 중첩을 사용한 배경 이미지

웹에서 \`background-image\`는 개발자에게 익숙한 일반적인 기능입니다. 이 기능을 사용하려면 \`<Image>\`와 같은 props를 가지는 \`<ImageBackground>\`컴포넌트를 사용할 수 있습니다. 그리고 이 컴포넌트위에 올릴 어떤 하위 요소도 추가할 수 있습니다.

\`\`\`javascript
return (
  <ImageBackground source=\{...}>
    <Text>Inside</Text>
  </ImageBackground>
);
\`\`\`

## iOS 테두리 반경 스타일

iOS 이미지 컴포넌트에서 아래의 테두리 반경 속성은 현재 지원하지 않습니다.

* \`borderTopLeftRadius\`
* \`borderTopRightRadius\`
* \`borderBottomLeftRadius\`
* \`borderBottomRightRadius\`

## 오프-쓰레드 디코딩

이미지 디코딩은 프레임 시간 이상으로 소요될 수 있습니다. 디코딩은 메인 쓰레드에서 수행되기 때문에 웹에서는 프레임 드랍의 주요 이유 중 하나입니다. React Native에서 이미지 디코딩은 다른 쓰레드에서 실행됩니다. 실제로는 이미지가 아직 다운로드 되지 않은 상태에서 이 케이스를 처리해야 하므로 더 많은 프레임을 위한 placeholder를 표시하기 위해 코드를 변경할 필요가 없습니다.
`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"images","title":"이미지","layout":"docs","category":"Guides","permalink":"docs/images.html","next":"animations","previous":"navigation","filename":"Images.md"}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;