/**
 * @generated
 */
var React = require("React");
var Layout = require("DocsLayout");
var content = `
애니메이션은 좋은 사용자 경험을 제공하는데 매우 중요한 요소입니다. 움직이지 않는 물체는 움직일 때 관성을 이겨내야 하고 움직이고 있는 물체는 가속도를 지니고 있어서 갑자기 멈추기 쉽지 않습니다. 애니메이션은 여러분의 인터페이스에서 물리적으로 신뢰할 만한 움직임을 전달할 수 있게 해 줍니다.

React Native는 두 가지의 포괄적인 애니메이션 시스템을 제공합니다: 특정 값에 대해 세밀하고 인터랙티브한 제어를 위한 [\`Animated\`](docs/animations.html#animated-api) 그리고 글로벌 레이아웃 트랜잭션 애니메이션을 위한 [\`LayoutAnimation\`](docs/animations.html#layoutanimation).

## \`Animated\` API

[\`Animated\`](docs/animated.html)는 다양한 종류의 흥미로운 애니메이션과 인터렉션 패턴을 매우 좋은 성능으로 간결하게 표현하기 쉽도록 해주기 위해 디자인된 API입니다. \`Animated\`는 설정 가능한 transform을 가지고 입출력 간의 선언적 관계 그리고 시간 기반의 애니메이션 수행을 제어하기 위한 간단한 \`start\`/\`stop\` 함수에 초점을 맞추고 있습니다.

\`Animated\`는 애니메이션이 가능한 4개의 컴포넌트(\`View\`, \`Text\`, \`Image\`, \`ScrollView\`)를 제공합니다. 그러나 \`Animated.createAnimatedComponent()\`를 이용해서 자신만의 애니메이션 컴포넌트를 만들 수도 있습니다.

다음 예제는 마운트 될 때 서서히 나타나는 컨테이너 뷰를 구현하는 코드입니다:

\`\`\`SnackPlayer
import React from 'react';
import \{ Animated, Text, View } from 'react-native';

class FadeInView extends React.Component \{
  state = \{
    fadeAnim: new Animated.Value(0),  // 초기 투명도 값: 0
  }

  componentDidMount() \{
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // 움직일 때 animated value
      \{
        toValue: 1,                   // 애니메이션이 끝났을 때 투명도 값: 1
        duration: 10000,              // 애니메이션 동작 시간
      }
    ).start();                        // 애니메이션을 시작
  }

  render() \{
    let \{ fadeAnim } = this.state;

    return (
      <Animated.View                 // 애니메이션이 가능한 view
        style=\{\{
          ...this.props.style,
          opacity: fadeAnim,         // 투명도 값을 animated 값이 바인딩
        }}
      >
        \{this.props.children}
      </Animated.View>
    );
  }
}

// 이제 \`View 대신 \`FadeInView\`를 사용할 수 있습니다.
export default class App extends React.Component \{
  render() \{
    return (
      <View style=\{\{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FadeInView style=\{\{width: 250, height: 50, backgroundColor: 'powderblue'}}>
          <Text style=\{\{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
        </FadeInView>
      </View>
    )
  }
}
\`\`\`

여기에서 일어난 일을 쪼개봅시다. \`FadeInView\` 생성자에는 \`fadeAnim\`이라 불리는 \`Animated.Value\`가 \`state\`의 한 부분으로 초기화되어 있습니다. \`View\`에서 투명도 속성은 이 animated 값에 매핑되어 있습니다. 이면에서는 숫자 값이 추출되어 투명도 값에 설정되어 사용됩니다.

컴포넌트가 마운트 될 때 투명도 값은 0으로 설정됩니다. 이후에 easing 애니메이션이 \`fadeAnim\` 값으로 시작됩니다. 이때 \`fadeAnim\`은 값이 최종 값인 1에 감에 따라 매 프레임에서 모든 연관된 매핑을 업데이트합니다(이 경우에는 투명도).

이것은 최적화된 방법을 통해서 이루어지는데 'setState'를 호출하고 다시 그리는 것보다 빠릅니다. 왜냐하면 전체적인 설정이 선언적(declarative)이기 때문에 설정을 직렬화하고 높은 우선순위의 스레드에서 애니메이션이 수행되는 훨씬 최적화된 방법을 구현할 수 있습니다.

### 애니메이션을 설정하기

애니메이션은 다양한 설정이 가능합니다. 애니메이션 종류에 따라서 미리 설정된 easing 함수, delay, duration, decay factor, spring 상수 이외의 더 많은 것들이 사용자에 의도에 따라 수정할 수 있습니다.

\`Animated\`는 몇 가지 애니메이션 타입을 제공합니다. 가장 일반적으로 사용되는 것은 [\`Animated.timing()\`](docs/animated.html#timing)인데 미리 정의된 혹은 스스로 만든 easing 함수를 이용해서 시간이 지남에 따라 값이 변하도록 하는 것을 지원합니다.

기본적으로 \`timing\`는 easeInOut 커브를 사용하는데 이는 애니메이션이 시작할 때 천천히 가속도가 붙어 최대 속도로 움직인 다음 서서히 줄어든 다음 애니메이션이 멈추는 동작을 하게 합니다. \`easing\` 파라미터를 전달해서 다른 easing 함수를 적용할 수도 있습니다. 애니메이션이 시작하기 전에 \`duration\`이나 \`delay\`를 설정할 수도 있습니다.

예를 들면, 최종 위치로 이동하기 전에 뒤에서 위치하고 있다가 2초간 애니메이션을 제공하는 객체를 생성한다면 다음과 같이 작성하면 됩니다.

\`\`\`javascript
Animated.timing(
  this.state.xPosition,
  \{
    toValue: 100,
    easing: Easing.back,
    duration: 2000,
  }
).start();
\`\`\`

빌트인 애니메이션에서 제공되는 모든 설정 파라미터에 대해 더 자세히 알고 싶다면 \`Animated\` API 레퍼런스의 [Configuring animations](docs/animated.html#configuring-animations) 섹션을 참고하세요.

### 애니메이션 합성하기

애니메이션은 순차적 혹은 병렬적으로 병합되어 재생될 수 있습니다. 순차적인 애니메이션은 하나가 끝나면 다음 애니메이션이 바로 혹은 일정한 딜레이 후에 시작됩니다. \`Animated\` API는 \`sequence()\`나 \`delay()\` 같은 함수들을 제공하고 각 함수는 수행할 애니메이션을 배열 형태로 취하며 필요하다면 \`start()\`/\`stop()\`을 자동으로 호출할 수 있습니다.

예를 들면, 다음 애니메이션은 멈춘 다음에 회전하면서 뒤로 가는 동작을 병렬로 하게 됩니다.

\`\`\`javascript
Animated.sequence([            // decay, then spring to start and twirl
  Animated.decay(position, \{   // 멈춤
    velocity: \{x: gestureState.vx, y: gestureState.vy}, // 제스처 릴리즈 할 때 속도
    deceleration: 0.997,
  }),
  Animated.parallel([          // decay 이후에 아래 두 애니메이션을 병렬로 동작:
    Animated.spring(position, \{
      toValue: \{x: 0, y: 0}    // 시작점으로 돌아감
    }),
    Animated.timing(twirl, \{   // 그리고 회전한다.
      toValue: 360,
    }),
  ]),
]).start();                    // 시퀀스 그룹을 시작
\`\`\`

하나의 애니메이션이 멈추거나 방해를 받는다면, 그룹 안에 있는 다른 모든 애니메이션도 멈추게 됩니다. 이를 막기 위해서는 \`Animated.parallel\`에 \`stopTogether\`를 \`false\`로 설정하면 됩니다.

\`Animated\` API 레퍼런스의 [Composing animations](docs/animated.html#composing-animations) 섹션에서 모든 컴포지션 메서드를 확인할 수 있습니다.

### animated 값을 병합하기

새로운 animated 값을 만들기 위해 기본적인 연산(더하기, 빼기, 곱하기, 나누기 등)을 통해 [animated 값을 병합](docs/animated.html#combining-animated-values) 할 수 있습니다.

연산을 위해 animated 값이 다른 값을 invert 할 필요가 있는 경우가 있습니다. 한 예로 스케일 값을 invert 하는 것입니다(2x --> 0.5x):

\`\`\`javascript
const a = Animated.Value(1);
const b = Animated.divide(1, a);

Animated.spring(a, \{
  toValue: 2,
}).start();
\`\`\`

### 인터폴레이션

첫 번째로 각 속성은 인터폴레이션을 통해서 수행된다. 인터폴레이션은 입력 범위와 출력 범위를 매핑 시킨다. 일반적으로 선형적 인터폴레이션을 이용하지만 esaing 함수도 지원합니다. 기본값으로 주어진 범위를 넘어서면 커브를 extrapolate할 것이지만 출력값을 clamp 할 수도 있습니다.

0-1 입력 범위를 0-100 출력 범위로 변환하는 간단한 매핑은 아래와 같습니다:

\`\`\`javascript
value.interpolate(\{
  inputRange: [0, 1],
  outputRange: [0, 100],
});
\`\`\`

예를 들면, 입력 범위가 0에서 1로 갈 때 \`Animated.Value\`에 대해 생각해보길 원할 수 있지만 투명도가 0에서 1로, 그리고 위치가 150px에서 0px로 이동하는 애니메이션을 고려할 수도 있습니다. 이것은 아래와 같이 위의 예제로부터 \`style\`을 수정해서 간단하게 해결할 수 있습니다.

\`\`\`javascript
  style=\{\{
    opacity: this.state.fadeAnim, // Binds directly
    transform: [\{
      translateY: this.state.fadeAnim.interpolate(\{
        inputRange: [0, 1],
        outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
      }),
    }],
  }}
\`\`\`

[\`interpolate()\`](docs/animated.html#interpolate)은 여러 개의 범위 세그먼트를 지원합니다. 이는 dead zone과 다른 간단한 트릭을 정의할 때 편리합니다. 예를 들면, -300에서 -100으로 가는 동안 300에서 0으로 출력이 변화한 뒤에 0이면 1로 돌아오고 이후에는 계속 0을 유지한다면 아래와 같이 설정할 수 있습니다.

\`\`\`javascript
value.interpolate(\{
  inputRange: [-300, -100, 0, 100, 101],
  outputRange: [300,    0, 1,   0,   0],
});
\`\`\`

이는 아래와 같은 매핑이 될 수 있습니다:

\`\`\`
Input | Output
------|-------
  -400|    450
  -300|    300
  -200|    150
  -100|      0
   -50|    0.5
     0|      1
    50|    0.5
   100|      0
   101|      0
   200|      0
\`\`\`

\`interpolate()\`는 또한 문자열로 매핑하는 것을 지원해서 색상이나 단위를 가진 값에 애니메이션을 적용하는 것도 가능합니다. 예를 들면, 회전하는 애니메이션을 원한다면 아래와 같이 할 수 있습니다.

\`\`\`javascript
value.interpolate(\{
  inputRange: [0, 360],
  outputRange: ['0deg', '360deg']
})
\`\`\`

또한 \`interpolate()\`는 임의의 easing 함수를 지원하는데 이미 많은 함수들이 [\`Easing\`](docs/easing.html) 모듈 안에 구현되어 있습니다. \`interpolate()\`는 또한 \`outputRange\`를 extrapolate 하기 위한 설정을 가지고 있습니다. \`extrapolate\`, \`extrapolateLeft\`, 혹은 \`extrapolateRight\` 옵션을 이용해서 extrapolation을 설정할 수 있습니다. 기본값은 \`extend\`입니다 하지만 출력값이 \`outputRange\`를 넘어서지 않게 하기 위해 \`clamp\`를 사용할 수도 있습니다.

### 동적인 값을 트래킹하기

Animated 값은 다른 값을 트래킹 할 수 있습니다. 그저 애니메이션의 \`toValue\`를 일반적인 숫자가 아닌 animated 값으로 설정하시면 됩니다. 예를 들어, "Chat Heads" 애니메이션은 또 다른 animated 값 위에 고정된 \`spring()\` 혹은 \`timing\`과 \`duration\` 0을 가지고 구현할 수 있습니다. 이것들은 interpolation으로 조합될 수 있습니다.

\`\`\`javascript
Animated.spring(follower, \{toValue: leader}).start();
Animated.timing(opacity, \{
  toValue: pan.x.interpolate(\{
    inputRange: [0, 300],
    outputRange: [1, 0],
  }),
}).start();
\`\`\`

\`leader\`와 \`follower\`는 animated 값인데 \`Animated.ValueXY()\`를 이용해서 구현될 수 있습니다. \`ValueXY\`는 팬이나 드래그 같은 2차원 교차점을 다룰 수 있는 간단한 방법입니다. 이는 기본적으로 두 개의 \`Animated.Value\` 인스턴스와 몇 가지 헬퍼 함수를 포함하는 간단한 래퍼입니다. 많은 경우에 \`Value\`의 대체재로 \`ValueXY\`를 사용하고 위에서의 예제에서 x와 y 값 모두 트래킹 할 수 있습니다.

### 제스처 트랙킹하기

팬(panning)이나 스크롤(scolling) 같은 제스처 그리고 다른 이벤트는 [\`Animated.event\`](docs/animated.html#event)을 이용해서 animated 값에 직접 매핑할 수 있습니다. 구조화된 맵 문법을 이용해서 값들이 복잡한 이벤트 객체로부터 추출될 수 있습니다. 첫 번째 레벨은 많은 인수들 간의 매핑을 가능하게 해주는 배열이고 배열은 중첩된 객체를 포함합니다.

예를 들어, 좌우 스크롤 제스처로 동작할 때 \`event.nativeEvent.contentOffset.x\`을 \`scrollX\` (\`Animated.Value\`)에 매핑하기 위해서 아래와 같이 할 수 있습니다.

\`\`\`javascript
 onScroll=\{Animated.event(
   // scrollX = e.nativeEvent.contentOffset.x
   [\{ nativeEvent: \{
        contentOffset: \{
          x: scrollX
        }
      }
    }]
 )}
\`\`\`

\`PanResponder\`를 사용할 때 \`gestureState.dx\`와 \`gestureState.dy\`로부터 x, y 포지션 정보를 추출하는 다음과 같은 코드를 작성할 수 있습니다. \`PanResponder\` 핸들러인 \`gestureState\`에 전달될 두 번째 인수만 고려하면 되기 때문에 배열을 첫 번째 항목은 \`null\`을 넣습니다.

\`\`\`javascript
onPanResponderMove=\{Animated.event(
  [null, // 네이티브 이벤트를 무시
  // 'pan.x = gestureState.dx, pan.y = gestureState.dy' 처럼
  // gestureState로 부터 dx와 dy를 추출
  \{dx: pan.x, dy: pan.y}
])}
\`\`\`

### 현재 애니메이션 값에 응답하기

애니메이션 중에 현재 값을 읽는 명확한 방법이 없다는 것을 알아차렸을 것입니다. 이건 해당 값이 최적화로 인해 네이티브 런타임에서만 알 수 있기 때문입니다. 만약 현재 값에 대한 응답을 JavaScropt에서 알고 싶다면 두 가지 방법이 있습니다:

- \`spring.stopAnimation(callback)\`는 애니메이션을 멈추고 콜백을 통해서 최종 값을 전다합니다. 이는 제스처 트랜지션을 만들 때 유용합니다.

- \`spring.addListener(callback)\`는 애니메이션이 동작하는 동안 비동기로 \`callback\`을 호출하고 현재 값을 제공합니다. 이는 사용자가 bobble을 가까이 드래그할 때 새로운 옵션에 달라붙는 것 같은 상태 변화를 유발하는데 유용합니다 왜냐하면 이런 큰 상태 변경은 60 fps로 수행되어야 하는 팬(panning) 같은 연속적인 제스처와 비교해서 몇 프레임 뒤로 밀리는 것에 대해 덜 민감하기 때문입니다.

\`Animated\`는 완전히 직렬화되도록 디자인되어 있기 때문에 애니메이션이 고성능으로 동작할 수 있고, 일반 JavaScript 이벤트 루프와는 독립적입니다. 이는 API에 영향을 미칩니다. 그래서 완전 동기적인 시스템과 비교해서 무언가 할 때 약간 까다롭게 느껴질 수 있습니다. 이러한 제약을 회피하는 방법으로는 \`Animated.Value.addListener\`를 확인해 보세요. 하지만 나중에 성능에 영향을 줄 수도 있으니 가능한 적게 쓰세요.

### 네이티브 드라이버 사용하기

\`Animated\` API는 직렬화되도록 디자인되어 있습니다. [native driver](http://facebook.github.io/react-native/blog/2017/02/14/using-native-driver-for-animated.html)를 이용함으로써 애니메이션이 시작하기 전에 애니메이션에 대한 모든 것을 네이티브 쪽에 전달하고 네이티브 코드는 매번 브리지를 통할 필요 없이 UI 스레드에서 애니메이션을 수행할 수 있습니다. 애니메이션이 시작하면 JS 스레드는 애니메이션에 영향을 주지 않고 멈출 수 있습니다.

일반적인 애니메이션에 대한 네이티브 드라이버는 꽤 간단합니다. 단순히 애니메이션이 시작할 때 \`useNativeDriver: true\`를 애니메이션 설정에 추가하면 됩니다.

\`\`\`javascript
Animated.timing(this.state.animatedValue, \{
  toValue: 1,
  duration: 500,
  useNativeDriver: true, // <-- 이걸 추가
}).start();
\`\`\`

Animated 값은 오직 하나의 드라이버와 연결됩니다 그래서 만약 어떤 값 위에서 애니메이션이 시작할 때 모든 애니메이션이 같은 네이티브 드라이버를 사용하는지 확인하세요.

또한 네이티브 드라이버는 \`Animated.event\`와 함께 동작합니다. 이는 스크롤 포지션을 따라갈 때 유용합니다. 왜냐하면 네이티브 드라이버가 없으면 React Native의 비동기 특성으로 인해 애니메이션이 항상 제스처 뒤 프레임에서 움직이기 때문입니다.

\`\`\`javascript
<Animated.ScrollView // <-- Animated.ScrollView를 사용
  scrollEventThrottle=\{1} // <-- 모든 이벤트를 놓치지 않기 위해 1로 설정
  onScroll=\{Animated.event(
    [\{ nativeEvent: \{ contentOffset: \{ y: this.state.animatedValue } } }],
    \{ useNativeDriver: true } // <-- 이걸 추가
  )}
>
  \{content}
</Animated.ScrollView>
\`\`\`

[RNTester 앱](https://github.com/facebook/react-native/blob/master/RNTester/)을 실행해서 Native Naimated 예제를 보면 네이티브 드라이버의 동작을 확인할 수 있습니다. 그리고 [소스 코드](https://github.com/facebook/react-native/blob/master/RNTester/js/NativeAnimationsExample.js)에서 예제들이 어떻게 만들어지는지 확인할 수 있습니다.

#### 경고

현재 \`Animated\`로 할 수 있는 모든 것이 네이티브 드라이브에서 지원되는 것은 아닙니다. 주요 제약 사항은 레이아웃과 관련 없는 속성에 애니메이션을 적용하는 것만 가능하다는 것입니다: \`transform\`과 \`opacity\` 같은 속성은 동작하지만 flexbox와 위치 속성은 동작하지 않습니다. \`Animated.event\`를 사용할 때 직접 이벤트만 동작하지만 이벤트 버블링은 동작하지 않습니다. 이것은 \`PanResponder\`와는 동작하지 않지만 \`ScrollView의 onScroll\`과는 동작한다는 의미입니다.

### 추가 예제

RNTester 앱은 다양한 \`Animated\` 예제를 포함하고 있습니다:

- [AnimatedGratuitousApp](https://github.com/facebook/react-native/tree/master/RNTester/js/AnimatedGratuitousApp)
- [NativeAnimationsExample](https://github.com/facebook/react-native/blob/master/RNTester/js/NativeAnimationsExample.js)

## \`LayoutAnimation\` API

\`LayoutAnimation\`은 \`생성\`과 \`업데이트\` 애니메이션을 전역으로 설정할 수 있는데 다음 redner/layout 사이클에서 모든 화면에 대해 사용할 수 있습니다. 이는 애니메이션을 하기 위해서 특정 속성을 측정 혹은 계산하는 불편함 없이 flexbox 레이아웃을 업데이트하는데 유용합니다. 그리고 특히나 레이아웃 변경이 상위 화면에 영향을 미칠 때 유용합니다. 예를 들면 "더 보기" 확장은 부모의 크기를 늘리고 행을 밑으로 밀어내야 하는데 이를 동기화된 상태로 애니메이션 하기 위해서는 컴포넌트 간의 명시적인 좌표가 필요합니다.

\`LayoutAnimation\`이 매우 강력하고 꽤 유용하지만 \`Animated\`와 다른 애니메이션 라이브러리 보다 적은 제어 방법을 제공합니다. 그래서 \`LayoutAnimation\`으로 원하는 것을 할 수 없다면 다른 방법을 찾아봐야 합니다.

**Android**에서 \`LayoutAnimation\`이 동작하기 위해서는 \`UIManager\`를 통해서 아래 플래그를 설정해야 한다는 사실에 주목하세요.

\`\`\`javascript
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
\`\`\`

\`\`\`SnackPlayer
import React from 'react';
import \{
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

const \{ UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends React.Component \{
  state = \{
    w: 100,
    h: 100,
  };

  _onPress = () => \{
    // 업데이트를 애니메이션으로 보여준다
    LayoutAnimation.spring();
    this.setState(\{w: this.state.w + 15, h: this.state.h + 15})
  }

  render() \{
    return (
      <View style=\{styles.container}>
        <View style=\{[styles.box, \{width: this.state.w, height: this.state.h}]} />
        <TouchableOpacity onPress=\{this._onPress}>
          <View style=\{styles.button}>
            <Text style=\{styles.buttonText}>Press me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create(\{
  container: \{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: \{
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  button: \{
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: \{
    color: '#fff',
    fontWeight: 'bold',
  },
});
\`\`\`

이 예제는 미리 설정된 값을 사용하지만 필요시에 애니메이션을 입맛에 맞게 수정할 수 있습니다. 더 많은 정보는 [LayoutAnimation.js](https://github.com/facebook/react-native/blob/master/Libraries/LayoutAnimation/LayoutAnimation.js)를 참고하세요.

## 추가 내용

### \`requestAnimationFrame\`

\`requestAnimationFrame\`는 브라우저에서 익숙한 한 polyfill입니다. 함수를 인수로 받아서 다음에 화면에 그림을 그리기 전에 호출합니다. 모든 JavaScript 기반의 애니메이션 API의 기반이 되는 애니메이션에 있어서 중요한 부분입니다. 일반적으로 애니메이션 API가 프레임 업데이트를 관리하기 때문에 직접 호출할 필요는 없습니다.

### \`setNativeProps\`

[직접 조작 섹션](docs/direct-manipulation.html)에서 언급되는 것처럼, \`setNativeProps\`는 네이티브를 기반으로 하는 컴포넌트(컴포지트 컴포넌트와 다르게 네이티브 뷰를 대행하는 컴포넌트)의 속성을, \`setState\`와 컴포넌트 계층을 다시 그리는 것 없이, 직접 수정할 수 있습니다.

Rebound 예제에서 스케일을 업데이트하기 위해 \`setNativeProps\`를 사용할 수 있습니다 - 이는 업데이트하려는 컴포넌트가 깊게 중첩되어있고 \`shouldComponentUpdate\`로 최적화되지 않았을 때 도움이 될 것입니다.

만약 애니메이션 프레임이 60fps 이하로 떨어진다면 \`setNativeProps\` 혹은 \`shouldComponentUpdate\`로 프레임 최적화를 시도해보세요. 아니면 [useNativeDriver 옵션](http://facebook.github.io/react-native/blog/2017/02/14/using-native-driver-for-animated.html)를 이용해서 JavaScript 스레드가 아닌 UI 스레드에서 애니메이션을 수행하도록 할 수 있습니다. 또는 [InteractionManager](docs/interactionmanager.html)을 이용해서 애니메이션이 끝날 때까지 계산 로직이 많은 작업을 뒤로 미룰 수도 있습니다. 프레임률는 앱 내 개발자 메뉴의 "FPS Monitor" 도구를 사용하여 모니터링할 수 있습니다.
`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"animations","title":"애니메이션","layout":"docs","category":"Guides","permalink":"docs/animations.html","next":"accessibility","previous":"images","filename":"Animations.md"}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;