/**
 * @generated
 */
var React = require("React");
var Layout = require("DocsLayout");
var content = `
웹뷰 베이스의 툴 대신에 React Native를 사용하는 이유는 여러분의 앱이 초당 60프레임을 구현하고, 좀 더 네이티브 앱처럼 느껴지게 하기 위해서입니다. 가능한 저희는 React Native가 제대로 동작해서 여러분이 성능 최적화 대신 앱에 집중할 수 있도록 돕고 싶었습니다. 하지만 아직 부족한 부분은 존재합니다. React Native(네이티브 코드를 직접 작성하는 것과 비슷한 작업)가 여러분의 앱을 최적화하는 최선의 방법을 찾을 수 없으므로 수동적인 작업이 일정 부분 필요합니다. 저희는 기본적으로 부드러운 UI 성능을 제공하기 위해 최선을 다하고 있지만 불가능한 부분도 있습니다.

이 가이드는 [성능 이슈를 해결](docs/performance.html#profiling)하는 데 도움이 되는 몇 가지 기본 사항과 [이슈의 일반적인 원인과 해결책](docs/performance.html#common-sources-of-performance-problems)을 제공합니다.

## 프레임에 대해 알아야 할 사항

여러분의 할머니, 할아버지 세대엔 영화를 ["움직이는 그림"](https://www.youtube.com/watch?v=F1i40rnp0sA)이라고 불렀습니다. 비디오 안에서 현실적인 움직임은 일정한 속도로 정적인 이미지를 빠르게 변경함으로써 생기는 환상입니다. 우리는 이 각각의 이미지를 프레임이라고 부릅니다. 초당 표시되는 프레임의 숫자는 비디오(또는 사용자 인터페이스)가 얼마나 매끄럽고 실제와 비슷하게 보이는지에 대해 직접적인 영향을 끼칩니다.
iOS 기기들은 초당 60프레임을 표시합니다. 이는 사용자와 UI 시스템에서 약 16.67ms 속도로 사용자가 화면을 볼 때 필요한 정적 이미지(프레임)를 생성하는 모든 작업을 함을 의미합니다. 만약 16.67ms 내에 해당 프레임을 생성하지 못한다면 "프레임 드랍"이 발생하고, UI가 멈춘 것처럼 보이게 됩니다. 좀 더 자세히 확인해보겠습니다. 여러분의 앱 내에 개발자 메뉴를 열고, \`Show Perf Monitor\`를 눌러 보세요. 그러면 두 가지의 프레임 속도를 확인할 수 있습니다.

![](img/PerfUtil.png)

### JS 프레임 속도 (자바스크립트 스레드)

대부분의 React Native 어플리케이션에서 여러분의 비지니스 로직은 자바스크립트 스레드 위에서 동작합니다. 이 스레드는 React 어플리케이션이 돌아가는 곳이기도 하며 API 요청이 만들어지고 터치 이벤트를 처리하는 곳이기도 합니다.기본 백업 뷰에 대한 업데이트는 한 프레임이 끝나기 전에 일괄 처리되어 이벤트 루프가 반복 될 때마다 네이티브 측으로 보내집니다(에러 없이 작동 했을 시).
만약 자바스크립트 스레드가 프레임에 응답하지 않는다면 드랍된 프레임으로 간주됩니다. 예를 들어, 여러분이 복잡한 어플리케이션의 최상위 컴포넌트에서 \`this.setState\`을 호출한다면 비용 소모가 큰 컴포넌트 서브트리를 다시 렌더링하게 됩니다. 이런 일은 200ms가 걸리므로 12프레임을 떨어뜨릴 수 있습니다. 자바스크립트로 동작하는 어느 애니메이션이든 100ms 이상 걸린다면 사용자는 그 시간 동안 멈춘 것처럼 느끼게 됩니다.

이는 \`Navigator\`의 트렌지션 중에 종종 발생합니다. 여러분이 새로운 경로를 푸시할 때, 자바스크립트 스레드는 적절한 명령을 네이티브 측으로 보내어 배경을 그리기 위해 필요한 모든 구성 요소를 렌더링해야합니다. 또한 새로운 route로 푸쉬할 때도 자바스크립트 스레드는 네이티브 측에서 백업 뷰를 만들기 위해 필요한 모든 구성 요소를 렌더링해야합니다. 트랜지션은 자바스크립트 스레드에서 컨트롤되기 때문에 여기서 일어나는 작업은 프레임을 몇 개 가져와서 [jank](http://jankfree.org/) 시키는게 일반적입니다. 때때로 컴포넌트는 \`componentDidMount\`에서 추가적인 작업을 하기 때문에 트렌지션하는 동안 버벅임이 발생할 수 있습니다.

다른 예시로 터치에 대한 반응을 들 수 있습니다. 만약 자바스크립트 스레드 위에서 여러 프레임에 걸쳐 작업하는 경우, \`TouchableOpacity\`에 대한 반응이 느리게 느껴질 수 있습니다. 이는 자바스크립트 스레드가 사용 중이기에 UI 스레드에서 보낸 터치 이벤트를 처리 할 수 ​​없기 때문입니다. 이렇게 되면 \`TouchableOpacity\`는 터치 이벤트에 반응할 수 없으며 네이티브 뷰에 불투명도를 조정하도록 명령을 보낼 수 없습니다.

### UI 프레임 속도 (UI 스레드)

많은 사람들이 \`NavigatorIOS\`의 성능이  \`Navigator\`보다 뛰어나다는 사실을 알고 있습니다. 이에 대한 이유는 트렌지션의 애니메이션이 전부 UI 스레드 위에서 끝나기 때문입니다. 그래서 그 작업은 자바스크립트 스레드의 프레임 드랍을 유발하지 않습니다.

비슷하게 \`ScrollView\`는 UI 스레드 위에 있으므로 자바스크립트 스레드가 잠겼어도 여러분은 \`ScrollView\`를 통해 언제든지 스크롤 업다운을 할 수 있습니다. 스크롤 이벤트는 자바스크립트 스레드로 전달되지만 스크롤이 발생하는 데 필요한 것은 아닙니다.

## 성능 이슈의 일반적인 원인

### 개발자 모드에서 실행 (\`dev=true\`)

자바스크립트 스레드 성능은 개발자 모드에서 크게 저하됩니다. propTypes 및 다양한 다른 어썰션 유효성 검사와 같은 경고 및 오류 메시지를 제공하기 위해 런타임 시 더 많은 작업을 수행하기 때문에 이는 불가피합니다. [배포](docs/running-on-device.html#building-your-app-for-production) 단계에서 항상 최종적인 성능 테스트를 해보세요.

### \`console.log\` 사용하기

번들된 앱을 실행할 때, 이러한 명령문은 자바스크립트 스레드에서 큰 병목 현상을 일으킬 수 있습니다. 여기에는 [redux-logger](https://github.com/evgenyrodionov/redux-logger)와 같은 디버깅 라이브러리들이 포함됩니다. 배포할 때는 이런 것들을 삭제하는 것을 잊지 마세요. 그리고 모든 console.log를 삭제하기 위해 [babel plugin](https://babeljs.io/docs/plugins/transform-remove-console/)을 사용할 수도 있습니다. \`npm i babel-plugin-transform-remove-console --save\`를 먼저 설치한 뒤 프로젝트 디렉토리 내에 있는 \`.babelrc\` 파일을 아래와 같이 수정해주세요.
\`\`\`json
\{
	"env": \{
		"production": \{
			"plugins": ["transform-remove-console"]
		}
	}
}
\`\`\`
프로젝트의 배포 버전에서 자동으로 모든 \`console.*\`를 삭제시켜줄 것입니다.

### \`ListView\` 초기 렌더링이 너무 느리거나 리스트가 많을 때 스크롤 성능이 떨어집니다.

ListView 대신에 새로나온 [\`FlatList\`](docs/flatlist.html) 또는 [\`SectionList\`](docs/sectionlist.html) 컴포넌트를 사용하세요. API를 간소화하는 것 외에도 상당한 성능 향상을 가져왔습니다. 이들은 모든 행의 숫자에 상관없이 일정한 메모리만 사용합니다.

### JS FPS는 급격히 변하는 뷰를 리렌더링 할 때 급감합니다.

만약 여러분이 리스트뷰를 사용하고 있다면 반드시 \`rowHasChanged\` 함수를 써야합니다. 이 함수는 행을 다시 렌더링해야 하는지 여부를 신속하게 판별하여 많은 작업을 줄일 수 있습니다. 만약 immutable 데이터 구조를 사용 중이라면 체크하기 간단한 레퍼런스가 될 것입니다.

마찬가지로 \`shouldComponentUpdate\` 를 구현하고 컴포넌트에서 다시 렌더링 할 정확한 조건을 나타낼 수 있습니다. 만약 순수 컴포넌트를 작성 중이라면(렌더링 함수의 반환 값이 props와 state에 따라 달라지는 경우) PureRenderMixin을 활용하여 같은 작업을 수행 할 수 있습니다. 다시 말하면, immutable 데이터 구조는 이것을 빠르게 유지하는 데 유용합니다. 큰 객체 리스트의 깊이 있는 값을 비교해야 하는 경우 전체 컴포넌트를 다시 렌더링 하는 것이 빠르고, 더 적은 코드만 필요하게 됩니다.

### JS 스레드에서 많은 작업을 동시에 수행하기 때문에 JS 스레드의 FPS가 떨어집니다.

"느린 네비게이터 트렌지션"은 가장 일반적인 증상입니다만 다른 경우가 발생할 수 있습니다. InteractionManager를 사용하는 것이 좋은 방법 일 수 있지만 사용자 경험 비용이 너무 높기에 애니메이션 작업을 지연시킬 수 없는 경우 LayoutAnimation을 고려할 수 있습니다.

Animated API는 현재 JavaScript 스레드에서 요청 시 각 키 프레임을 계산하지만 LayoutAnimation은 Core Animation을 활용하기 때문에 JS 스레드 및 UI 스레드 프레임 드랍에 영향을 받지 않습니다.

이 예제를 사용한 한 사례는 여러 네트워크 요청에 대한 응답을 초기화하고 수신 한 다음 모달의 내용을 렌더링하고 모달이 표시된 뷰를 업데이트하는 동안 모달로 애니메이션을 적용하는 것입니다. (반투명 오버레이에서 위쪽으로 이동하고 페이드 아웃). LayoutAnimation을 사용하는 방법에 대한 자세한 내용은 애니메이션 가이드를 참조하시길 바랍니다.

주의 사항:

- LayoutAnimation은 fire-and-forget 애니메이션("정적" 애니메이션)에서만 작동합니다. 중단해야하는 경우 \`Animated\`를 사용하시길 바랍니다.

### 스크린에서 뷰를 움직이는 행동(스크롤링, 전환, 회전)이 UI 스레드의 FPS를 떨어뜨립니다.

이는 특히 투명한 배경을 가진 텍스트를 이미지 위에 배치 할 때 나타납니다. 또는 각 프레임에서 뷰를 다시 그릴 때 투명도 합성이 필요할 수 있는 다른 상황이 있을 수 있습니다. \`shouldRasterizeIOS\` 또는\`renderToHardwareTextureAndroid\`를 활성화하면 좀 더 성능 향상을 가져올 수 있습니다.

하지만 과하게 사용하면 메모리 사용량이 대기권을 통과 할 수 있으므로 꼭 필요할 때만 사용해야 합니다. 그러므로 이 props들을 사용할 때 성능과 메모리 사용량을 항상 프로파일링 하시길 바랍니다. 더 이상 위의 행동들을 하지 않을 경우 속성을 해제해야 합니다.

### 이미지의 사이즈를 애니메이션으로 구현할 경우 UI 스레드의 FPS가 감소됩니다.

iOS에서 이미지 컴포넌트의 가로나 세로 길이를 조정할 경우 원래의 이미지에서 잘리거나 스케일이 조정됩니다. 이는 매우 큰 비용을 요구하는 작업이며 이미지가 클수록 더 심해집니다. 대신 \`transform: [\{scale}]\` 스타일 속성을 사용하여 사이즈를 애니메이션 처리 해야합니다. 예시로 이미지를 탭하거나 전체 화면으로 확대할 때를 들 수 있습니다.

### 제 TouchableX 뷰 반응이 느립니다.

때때로 같은 프레임 내에서 어떤 동작을 수행하는 경우가 있습니다. 터치에 응답하는 컴포넌트의 불투명도 또는 강조 표시를 조정하는 경우입니다. 우리는 \`onPress\` 함수가 반환 되기 전까지 그 효과를 보지 않을 것입니다. 만약 \`onPress\`가 \`setState\`를 건드린다면 프레임 드랍이 발생할 것입니다. 이것에 대한 해결책으론 \`requestAnimationFrame\`에서 \`onPress\` 핸들러 내부의 액션들을 감싸주는 방법이 있습니다.

\`\`\`js
handleonPress() \{
	// TimerMixin은 항상 requestAnimationFrame, setTimeout, setInterval 함께 사용
	// 해야합니다.
	this.requestAnimationFrame(() => \{
		this.doExpensiveAction();
	});
}
\`\`\`

### 느린 네비게이터 전환

위에서 언급했듯이 \`Navigator\` 애니메이션은 JS 스레드에서 동작합니다. "오른쪽에서 밀어오기" 화면 전환 효과를 떠올려보세요. 각 프레임에서 새로운 화면이 오른쪽에서 왼쪽으로 이동하고 화면이 사라지기 시작합니다. (x-offset이 320이라고 치면) 그리고 화면의 x-offset이 0에 오면 마침내 안정화됩니다. 각 프레임에서 이 전환이 진행될 때마다 JS 스레드는 UI 스레드로 새 x-offset을 전달합니다. 만약 JS 스레드가 잠겼다면 위의 작업을 하지 않으므로 더 이상의 업데이트가 발생하지 않습니다.

한 가지 해결책은 JavaScript 기반 애니메이션을 UI 스레드로 오프로드 할 수 있게 하는 것입니다. 이 접근법으로 위의 예에서와 같은 일을 한다면, 트랜지션을 시작할 때 새 장면에 대한 모든 x 오프셋의 목록을 계산하여 UI 스레드로 보내 최적화 된 방식으로 실행할 수 있습니다. 이제 JS 스레드가 이 책임으로부터 벗어났으므로 장면을 렌더링하는 동안 몇 프레임이 떨어지는 정도는 크게 문제가 되지 않습니다. 멋진 전환 효과로 시선이 분산되기 때문에 그 정도는 눈치 채지 못할 것입니다.


이 문제를 해결하는 것은 새로운 React Navigation 라이브러리의 주요 목표 중 하나입니다. [React Navigation](docs/navigation.html)의 뷰는 네이티브 컴포넌트와 [\`Animated\`](docs/animated.html) 라이브러리를 사용하여 네이티브 스레드에서 실행되는 60FPS의 애니메이션을 제공합니다.

## 프로파일링

기본으로 제공되는 프로파일러를 사용하여 JavaScript 스레드 및 UI 스레드에서 수행되는 작업에 대한 작업을 표시할 수 있습니다. 디버그 메뉴에서 성능 모니터를 선택하여 액세스하시길 바랍니다.

iOS의 경우 Instruments는 소중한 도구이며 Android에서는 [\`systrace\`](docs/performance.html#profiling-android-ui-performance-width-systrace)를 사용하는 법을 배워야합니다.

다른 선택지로 [\`react-addons-perf\`](https://facebook.github.io/react/docs/perf.html)를 사용하여 컴포넌트를 렌더링 할 때 React가 잡아먹는 시간을 파악할 수 있습니다.

JavaScript를 프로파일하는 다른 방법으론 크롬 개발자 도구를 사용하는 것입니다.코드가 Chrome에서 실행 중일 때 정확한 결과를 얻을 수는 없지만 병목 현상이 발생하는 위치 정도는 파악할 수 있습니다.


하지만 [**먼저 개발 모드가 꺼져 있는지 확인하세요!**](docs/performance.html#running-in-development-mode-dev-true) \`__DEV__ === false가 표시되어야하며 개발 수준 경고는 OFF이고 응용 프로그램 로그의 성능 최적화는 ON\`입니다.

### \`systrace\`와 함께하는 안으로이드 UI 성능 프로파일링

안드로이드는 1만 개가 넘는 서로 다른 스마트폰을 지원하며 소프트웨어 렌더링 지원에 최적화되었습니다. 프레임워크 아키텍쳐는 많은 하드웨어 타겟에 일반화되야 합니다. 불행히도 이는 iOS와 관련하여 무료로 제공된다는 것을 의미합니다. 그러나 때로는 개선 할 수있는 것들이 있습니다. 그리고 그것은 네이티브 코드의 잘못이 아닙니다! (?)

이 쓰레기를 디버깅하는 첫번째 단계는 16ms 프레임 동안 어디에서 시간을 소비하는지에 대한 근본적인 질문에 답하는 것입니다. 그러기 위해선 \`systrace\`라고 불리는 안드로이드 프로파일링 기본 툴을 사용해야 합니다.

\`systrace\`는 안드로이드 마커 베이스의 기본 프로파일링 툴입니다. (안드로이드 플랫폼 툴 패키지를 설치할 때 설치되어 있습니다)
프로파일된 코드 블럭은 start/end 마커들로 감싸져 있으며 화려한 차트 형태로 시각화되어 나타납니다. Android SDK와 React Native 프레임워크는 여러분이 볼 수 있게끔 기본 마커들을 제공합니다.

### 1. trace 모으기

먼저 디버깅 하고 싶은 장치를 USB를 통해 컴퓨터에 연결하고, 프로파일하려는 네비게이션/애니메이션 바로 앞에 놓습니다. 아래 처럼 \`systrace\`를 실행해주세요.


\`\`\`
$ <path_to_android_sdk>/platform-tools/systrace/systrace.py --time=10 -o trace.html sched gfx view -a <your_package_name>
\`\`\`

이 명령어가 빠르게 분석해준 결과:

- \`time\`은 모아진 디버깅 데이터가 몇 초 걸렸는지를 알려줍니다.
- \`sched\`, \`gfx\`, \`view\`는 우리가 신경 쓰는 안드로이드 SDK 태그 (마커 모음)입니다. \`sched\`는 휴대 전화의 각 코어에서 무엇이 실행되고 있는지에 대한 정보를 제공하고,\`gfx\`는 여러분에게 그래픽 정보를 줍니다 'view'는 프레임 경계로 측정, 레이아웃 및 드로우 패스에 대한 정보를 제공합니다.
- \`-a <your_package_name>\` 은 앱 고유 마커, 특히 React Native 프레임 워크에 내장 된 마커를 활성화합니다. \`your_package_name\`은 앱의 \`AndroidManifest.xml\`에서 찾을 수 있으며 \`com.example.app\`처럼 보입니다.

trace가 데이터를 모으기 시작할 때, 우리가 알려 했던 애니메이션이나 상호작용에 대해 보여줄겁니다. 추적이 끝날 때 systrace가 브라우저에서 열어볼 수 있는 추적에 대한 링크를 줍니다.

#### 2. trace 읽기

브라우저(예: Chrome)에서 trace를 열면 아래와 같은 화면이 보여야 합니다.

![Example](img/SystraceExample.png)

> **힌트**:
> 확대/축소 하거나 strafe 할 때 WASD 키를 사용하세요.

만약 여러분의 trace가 .html 파일을 제대로 열지 못한다면 브라우저 콘솔에서 다음을 확인하시길 바랍니다.

![ObjectObserveError](img/ObjectObserveError.png)

최근 브라우저에서는 \`Object.observe\`가 더 이상 사용되지 않으므로 구글 크롬 트레이싱 툴에서 파일을 열어야 합니다.

- 크롬에서 탭을 열고 chrome://tracing 주소창에 입력하세요.
- load를 선택하세요.
- 전에 생성된 html 파일을 선택하세요. 

> **VSync 강조 사용하기**
> 
> 16ms 프레임 경계를 강조되게 하려면 화면의 오른쪽 상단에 위치한 체크박스를 확인하세요.
> 
> ![Enable VSync Highlighting](img/SystraceHighlightVSync.png)
> 
> 위 화면처럼 얼룩말 무늬같은 줄이 보여져야 합니다.
> 만약 보이지 않는다면 다른 기기에서 프로파일링을 해보세요. 삼성 기기들은 vsyncs를 표시할 때 문제가 있다고 알려져 있습니다. 반면에 Nexus 시리즈들은 신뢰할만 합니다.

#### 3. 프로세스 찾기

패키지 이름이 보일 때까지 스크롤 해보세요. 이 경우에 \`com.facebook.adsmanager\`를 프로파일링하고 있는데 이는 커널의 바보같은 스레드 이름 제한으로 인해 \`book.adsmanager\`로 보입니다.

왼쪽 편에는 오른쪽의 타임라인 행에 해당하는 스레드 세트가 표시됩니다. UI 스레드 (패키지 이름이나 UI 스레드 이름이 포함됩니다), \`mqt_js\` 및 \`mqt_native_modules\`와 같은 몇 가지 스레드가 있습니다. Android 5 이상에서 실행중인 경우 렌더링 스레드에도 신경을 써야합니다.

- **UI 스레드**
  여기는 안드로이드의 표준 measure/레이아웃/드로우가 발생하는 곳입니다. 오른쪽의 스레드 이름은 패키지 이름 (예의 경우엔 book.adsmanager) 또는 UI 스레드가 됩니다. 이 스레드에서 볼 수 있는 이벤트는 아래 이미지와 같아야 하며 Choreographer, traversals, DispatchUI와 관련이 있어야합니다.

  ![UI Thread Example](img/SystraceUIThreadExample.png)

- **자바스크립트 스레드**
  여기는 자바스크립트가 실행되는 곳입니다. 스레드 이름은 기기의 커널이 얼마나 관련되어 있는지에 따라 \`mqt_js\` 또는 \`<...>\`로 명명됩니다. 이름이 없는 경우 식별하려면 JSCall, Bridge.executeJSCall 등에서 찾습니다.

  ![JS Thread Example](img/SystraceJSThreadExample.png)

- **네이티브 스레드**
  여기는 네이티브 모듈 호출(예: \`UIManager\`)이 실행되는 곳입니다. 스레드 이름은 \`mqt_native_modules\` 또는 \`<...>\`로 명명됩니다. 후자의 경우 식별하려면 NativeCall, callJavaModuleMethod 및 onBatchComplete와 같은 항목에서 찾습니다.

  ![Native Modules Thread Example](img/SystraceNativeModulesThreadExample.png)

- **보너스: 렌더 스레드.**
  Android L (5.0) 이상을 사용하는 경우 앱에 렌더링 스레드가 있습니다. 이 스레드는 UI를 그릴 때 사용되는 실제 OpenGL 명령을 생성합니다. 스레드 이름은 \`RenderThread\` 또는 \`<...>\`로 명명됩니다. 후자의 경우 식별하려면 \`DrawFrame\`과 \`queueBuffer\`에서 찾습니다.

  ![Render Thread Example](img/SystraceRenderThreadExample.png)

#### 범인 확인(?)

부드러운 애니메이션은 다음과 같이 보여야 합니다.

![Smooth Animation](img/SystraceWellBehaved.png)

색마다 변하는 것은 프레임입니다. 프레임을 표시하기 위해선 우리의 모든 UI 작업들이 16ms 내에 완료되야 합니다. 프레임 경계 근처에서는 스레드가 작동하지 않는 것을 확인하실 수 있습니다. 이와 같은 응용 프로그램 렌더링은 60FPS로 렌더링됩니다. 만약 chop을 발견하면 다음과 같은 화면을 볼 수 있습니다.

![Choppy Animation from JS](img/SystraceBadJS.png)

자바스크립트 스레드는 기본적으로 항상 프레임 경계를 넘어서 실행됩니다. 이 앱은 60FPS로 렌더링되지 않는데 이 경우엔 **자바스크립트 내에 문제가 있습니다**.

또한 아래와 같은 화면도 확인할 수 있습니다.

![Choppy Animation from UI](img/SystraceBadUI.png)

이 경우에 UI와 렌더 스레드는 프레임 경계를 넘는 작업이 있는 스레드입니다. 우리가 각 프레임에서 렌더링하려고하는 UI는 너무 많은 작업을 요합니다. 이 때 문제는 **렌더링된 네이티브 뷰에 있습니다**.

이 단계에서 다음 단계를 알려주는 유용한 정보를 얻을 수 있습니다.

#### 자바스크립트 이슈 해결하기

자바스크립트 문제를 발견했을 경우 실행 중인 특정 자바스크립트를 살펴봐야 합니다. 위 시나리오에서 \`RCTEventEmitter\`는 프레임 당 여러 번 호출됩니다. 위의 trace에서 자바스크립트 스레드를 확대 한 모습은 아래와 같습니다.

![Too much JS](img/SystraceBadJS2.png)

뭔가 잘못되고 있습니다. 호출이 너무 자주 일어나고 있으며, 실제로 다른 이벤트인지도 알 수 없습니다. 
이에 대한 답변은 여러분의 코드에 따라 다를 수 있습니다. 그리고 [shouldComponentUpdate](https://facebook.github.io/react/docs/component-specs.html#updating-shouldcomponentupdate)를 여러 번 살펴보시길 바랍니다.

#### 네이티브 UI 이슈 해결하기

네이티브 UI 문제를 발견했을 경우 보통 2가지의 시나리오로 나뉩니다.

1. 여러 분이 그리려고 하는 UI가 GPU에서 너무 많은 작업을 요한다거나
2. 새로운 UI를 애니메이션이나 상호작용 중에 생성할 경우입니다. (예: 스크롤 시 새로운 콘텐츠 로딩하기)

##### GPU가 너무 많은 일을 할 경우

첫 번째 시나리오에서는 다음과 같이 UI 스레드나 Render 스레드가 있는 trace를 확인하실 수 있습니다.

![Overloaded GPU](img/SystraceBadUI.png)


프레임 경계를 넘는 \`DrawFrame\`에서 보낸 걸린 시간을 확인해보세요. 이것은 GPU가 이전 프레임으로부터 명령 버퍼를 소모하는데 사용된 시간입니다.

이를 완화하기 위해서

- 애니메이션 효과가 있거나 변환 효과가 있는 복잡한 정적 콘텐츠 (예 : \`Navigator\` 슬라이드 / 애니메이션 투명도)에 대해 \`renderToHardwareTextureAndroid\`를 사용하여 확인해보세요.

- \`needsOffScreenAlphaCompositing\`는 절대 **사용하지 마세요**. 기본으로 비활성화 되어있으며 활성화시킬 경우 GPU의 프레임 당 로드를 매우 크게 증가시킵니다.

만약 위 정보로 부족하여 GPU가 실제로 수행하는 작을 더 깊이 파고 싶다면 [OpenGL ES 용 Tracer](http://developer.android.com/tools/help/gltracer.html)를 확인하시길 바랍니다.

##### UI 스레드에서 새로운 뷰 만들기

두 번째 시나리오 경우 아래와 비슷한 것을 볼 수 있습니다.

![Creating Views](img/SystraceBadCreateUI.png)

첫 번째 자바스크립트 스레드가 잠시 생각하다가네이티브 모듈 스레드 단에서 수행된 작업을 확인한 다음 UI 스레드에서 비용이 큰 탐색이 시작됩니다.

상호 작용이 끝날 때까지 새 UI 로딩을 지연시킬 수 없거나 작성중인 UI를 단순화 할 수 없다면 이 문제를 완화 할 수 있는 쉬운 방법은 없습니다. React Native 팀은 기본 UI에서 새 UI를 만들고 구성 할 수 있는 인프라를 갖춘 솔루션을 개발 중이므로 원활한 상호 작용이 가능합니다.
`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"performance","title":"성능","layout":"docs","category":"Guides","permalink":"docs/performance.html","next":"gesture-responder-system","previous":"debugging","filename":"Performance.md"}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;