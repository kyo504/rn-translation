/**
 * @generated
 */
var React = require("React");
var Layout = require("DocsLayout");
var content = `
## 키보드 단축키 사용

리엑트 네이티브(React Native)는 iOS 시뮬레이터(Simulator)에서 몇 가지 키보드 단축키를 지원합니다. 설명은 아래에 있습니다. 활성화를 위해서는 하드웨어(Hardware) 메뉴를 열고, 키보드를 선택한 다음, "Connect Hardware Keyboard"가 체크되어 있는지 확인합니다.

## 앱(App) 안의 개발자 메뉴 접근

여러분은 iOS 시뮬레이터(Simulator)안의 하드웨어(Hardware) 메뉴에서 "Shake Gesture" 선택하거나, 디바이스(device)를 흔드는 것으로 개발자 메뉴에 접근할 수 있습니다.또한 여러분은 앱이 실행되는 동안 iOS 시뮬레이터(Simulator)에서는 \`⌘D\` 단축키로, Android 에뮬레이터(emulator)에서는 \`⌘M\`를 사용할 수도 있습니다.

![](img/DeveloperMenu.png)

> 릴리즈(release production) 빌드에서는 개발자 메뉴를 사용할 수 없습니다. 

## 자바스크립트 리로딩(Reloading)

여러분의 앱(app)이 변할때마다 리컴파일링(recompiling) 하는 대신에, 여러분은 앱의 자바스크립트 코드를 바로 리로드(reload)할수 있습니다. 이렇게 하려면 개발자 메뉴의 "Reload"를 선택 합니다.
그리고 iOS 시뮬레이터(Simulator)에서는 \`⌘R\`을 누르거나, Android 에뮬레이터(emulator)에서는 \`R\`을 두번 탭합니다.

### 자동 리로딩(reloading)
여러분은 코드가 변경 될 때마다 앱(app)이 자동으로 리로드(reload)되도록해서 개발 속도를 올릴 수 있습니다.
자동 리로딩(reloading)은 개발자 메뉴의 "Enable Live Reload"를 선택해서 활성화할 수 있습니다.

한발 더 나아가, 여러분은 개발자 메뉴에서 [핫 리로딩(Hot Reloading)](https://facebook.github.io/react-native/blog/2016/03/24/introducing-hot-reloading.html)을 활성화해서 앱(app)을 계속 실행시키면서, 새로운 버젼의 파일을 자바스크립트 번들(bundle)에 주입할 수 있습니다.
이는 앱(app)의 상태를 지속해서 리로드(reloads)하도록 허용합니다. 

> 경우에 따라서 핫 리로딩(hot reloading)은 완벽하게 구현이 안될수도 있습니다. 다른 이슈가 생기면, 전체 리로드(reload)를 사용해서, 앱(app)을 리셋합니다.

여러분은 특정 상황에서, 변경 사항이 영향을 미치도록 앱(app)을 다시 빌드할 필요성이 있습니다.

* 여러분은 네이티브(native) 앱(app)의 번들(bundle)에 새로운 리소스(resources)를 추가했습니다. 예를 들면 iOS 이미지의 \`Images.xcassets\` 또는 Android 폴더의  \`res/drawable\` 입니다.
* 여러분은 네이티브(native) 코드를 수정합니다.(iOS의 Objective-C/Swift 또는 Android의 Java/C++)

## 인앱(In-app) 오류와 경고

오류와 경고는 개발 빌드에서 앱(app) 안에 표시 됩니다.

### 오류(Errors)

인앱(In-app) 오류는 빨간색 배경의 전체 화면 알림으로 표시 됩니다. 이 화면은 레드박스(RedBox)로 알려져있습니다. 여러분은 \`console.error()\` 를 사용해서 수동으로 트리거(trigger) 할수 있습니다.

### 경고(Warnings)

경고는 노란색 배경의 화면으로 표시 됩니다. 이 알림들은 엘로우박스(YellowBoxes)로 알려져있습니다. 알림을 클릭하면 상세한 정보가 보여지며, 확인 후 닫습니다. 
레드박스(RedBox)때 처럼, 여러분은 \`console.warn()\`를 사용해서 엘로우박스(YellowBox)를 트리거(trigger) 할수 있습니다.

엘로우박스(YellowBoxes)는 개발하는 동안에 \`console.disableYellowBox = true;\`를 사용해서 비활성화할 수 있습니다.

특정 경고를 접두사(prefixes) 배열을 설정하여 프로그램적으로 무시할 수 있습니다: \`console.ignoredYellowBox = ['Warning: ...'];\`
또한, CI/Xcode 안의 엘로우박스(YellowBoxes)는 \`IS_TESTING\` 환경변수에서 비활성화할 수 있습니다.

> 레드박스(RedBoxes)는 릴리즈(release production) 빌드에서 자동으로 비활성화 됩니다.


## 크롬 개발자 도구(Chrome Developer Tools)

크롬의 자바크스립트 코드 디버그를 하려면 개발자 메뉴(Developer Menu)의 "Debug JS Remotely" 선택합니다.
그러면 [http://localhost:8081/debugger-ui](http://localhost:8081/debugger-ui) 주소의 새로운 탭이 열립니다

크롬 메뉴의 \`Tools → Developer Tools\` 선택하면, [Developer Tools](https://developer.chrome.com/devtools) 열립니다. 또한 여러분은 키보드 단축키 (macOS는 \`⌘⌥I\` , Windows는\`Ctrl\` \`Shift\` \`I\`)로 개발자도구에 접근할 수 있습니다. 그리고 더 좋은 디버깅 환경을 위해서 [Pause On Caught Exceptions](http://stackoverflow.com/questions/2233339/javascript-is-there-a-way-to-get-chrome-to-break-on-all-errors/17324511#17324511)를 활성화할 수 있습니다.  

> 노트(Note): 여러분은 리엑트 네이티브 크롬 확장(extension) 도구(Tools)는 리엑트 네이티브와 함께 사용할수 없지만, 대신 독립형 버전을 사용할 수 있습니다. 사용방법은 [이 단락](docs/debugging.html#react-developer-tools)을 읽으십시요.


### 커스텀(custom) 자바스크립트 디버거를 이용한 디버깅(Debugging)

크롬 개발자 도구 대신에 커스텀(custom) 자바스크립트 디버거를 사용하기 위해서는 커스텀(custom)디버거가 시작할 명령으로 \`REACT_DEBUGGER\` 환경변수를 설정합니다.
그런 다음 개발자 도구의 "Debug JS Remotely"를 선택하여 디버깅(debugging)을 시작합니다. 
디버거는 공백으로 구분 된 모든 프로젝트 루트의 목록을 받습니다.예를 들면 디버거를 시작할때에 여러분이 \`REACT_DEBUGGER="node /path/to/launchDebugger.js --port 2345 --type ReactNative"\`를 설정하면 명령문은 \`node /path/to/launchDebugger.js --port 2345 --type ReactNative /path/to/reactNative/app\`를 사용합니다. 

> 커스텀(Custom) 디버거 명령으로 실행되는 방법은 짧은 생명주기(short-lived) 프로세스(processes)이며, 200 킬로바이트보다 출력물이 크면 안됩니다.

## 리엑트 개발자 도구(React Developer Tools)

여러분은 [the standalone version of React Developer Tools](https://github.com/facebook/react-devtools/tree/master/packages/react-devtools)을 사용해서 리엑트 컴포넌트의 계층 구조를 디버깅할 수 있습니다. 사용하기 위해서는 \`리엑트 개발도구(react-devtools)\`을 글로벌 패키지로 설치 합니다.

\`\`\`
npm install -g react-devtools
\`\`\`

이제 터미널에서 \`react-devtools\`을 실행해서 독립형 DevTools 앱을 실행합니다.  
 

\`\`\`
react-devtools
\`\`\`

![React DevTools](img/ReactDevTools.png)

여러분의 시물레이터(simulator)에 몇초 내에 연결해야 합니다.

> 노트(Note): 글로벌 설치를 피하고 싶으면 \`리엑트 개발도구(react-devtools)\`를 프로젝트 의존성 있게 추가할 수 있습니다. \`리엑트 개발도구(react-devtools)\` 패키지를 추가하기 위해서는 여러분의 프록젝트에 \`npm install --save-dev react-devtools\`를 사용한 다음에,\`"react-devtools": "react-devtools"\`을 \`package.json\`의 \`스크립트(scripts)\`부분에 추가한 후, 프로젝트 폴더에서 \`npm run react-devtools\` 실행하면, 개발도구(DevTools)가 열립니다.

### 리엑트 네이티브 인스펙터(Inspector) 통합 

인앱(in-app) 개발자 메뉴에서 "Show Inspector"를 선택합니다. UI 요소를 탭하면, 정보를 볼수 있는 오버레이(overlay)가 올라와서 표시됩니다.

![React Native Inspector](img/Inspector.gif)

하지만 \`리엑트 개발도구(react-devtools)\`가 실행될때 인스펙터(Inspector)는 특별한 모드 대신에 개발도구(DevTools)의 기본적인 UI를 사용합니다. 이 모드에서 시물레이터(simulator)의 다른 부분을 클릭하면은 개발도구(DevTools)의 관련 컴포넌트 정보가 올라와서 표시됩니다.

![React DevTools Inspector Integration](img/ReactDevToolsInspector.gif)

이 동일한 모드에서 "Hide Inspector"를 선택하여 모드를 종료할 수 있습니다.

### 인스펙팅(Inspecting) 컴포넌트 사례.

크롬에서 자바스크립트를 디벙깅할때에, 여러분은 속성(props)과 상태(state)를 브라우저의 콘솔에서 추적할 수 있습니다.

먼저, 크롬 디버깅 방법을 통해 크롬 콘솔을 오픈합니다.
크롬 콘솔의 왼쪽 상단 드롭다운에 \`debuggerWorker.js\`을 확인합니다. **이 단계는 필수입니다.**

그런 다음 리엑트 개발도구(DevTools)에서 리엑트 컴포넌트를 선택합니다. 상단의 검색 상자(box)는 이름으로 찾는것을 도와줍니다. 선택하자 마자 크롬의 콘솔에서 \`$r\`의 변수를 사용할수 있으며, 속성(props)과 상태(state) 그리고 인스턴스 속성(properties)을 추적할 수 있습니다.

![React DevTools Chrome Console Integration](img/ReactDevToolsDollarR.gif)

## 성능(Performance) 모니터(Monitor)

여러분은 개발자 도구의 "Perf Monitor"를 선택해서, 성능 문제 디버그를 도와주는 성능(performance) 오버레이(overlay)를 사용할 수 있습니다.


<hr style="margin-top:25px; margin-bottom:25px;"/>

# Ejected Apps(앱) 디버깅(Debugging)

<div class="banner-crna-ejected" style="margin-top:25px">
  <h3>네이티브 코드 전용 프로젝트</h3>
  <p>
	이 가이드의 나머지 부분은 <code>리엑트 네이티브 init(react-native init)</code>으로 작성된 프로젝트 또는 리엑트 네이티브 앱(React Native App)에서 생성된 후 eject한 프로젝트에서만 적용됩니다. eject에 관한 자세한 부분은 리엑트 네이티브 앱(App) 생성 저장소(repository) <a href="https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md" target="_blank">가이드(guide)</a>를 살펴 보십시요.    
  </p>
</div>

## 콘솔 로그 접근(Accessing console logs)

여러분은 앱(app)이 실행되는 동안 터미널에서 다음 명령을 사용해서 iOS 또는 Android 앱의 콘솔 로그를 표시할 수 있습니다.

\`\`\`
$ react-native log-ios
$ react-native log-android
\`\`\`

또한 여러분은 iOS 시물레이터(Simulator) 안의 \`Debug → Open System Log...\` 통해서 접근할 수 있습니다. Android 앱(app)은 디바이스(device) 또는 에물레이터에서 실행되는 동안 터미널에서 \`adb logcat *:S ReactNative:V ReactNativeJS:V\`를  실행하여 접근할 수 있습니다.

> 만약 리엑트 네이티브 앱(app)을 사용하면, 콘솔 로그는 이미 같은 터미널에서 출력되어서 나타납니다.

## 크롬 개발자 도구가 있는 디버깅(Debugging)

> 여러분이 리엑트 네이티브 앱(app)을 생성해서 사용하고 있다면, 이미 환경이 구성되어 있습니다. 

iOS 디바이스(device)에서  [\`RCTWebSocketExecutor.m\`](https://github.com/facebook/react-native/blob/master/Libraries/WebSocket/RCTWebSocketExecutor.m) 파일을 엽니다. 그리고 여러분의 컴퓨터 IP 주소를 "localhost"로 변경한 후, 개발자 도구의 "Debug JS Remotely"를 선택합니다.

USB에 연결 된 안드로이드(Android) 5.0+ 디바이스(devices)는 [\`adb\` command line tool](http://developer.android.com/tools/help/adb.html)를 사용해서 여러분의 컴퓨터 디바이스(device)의 포트를 설정할 수 있습니다.


\`adb reverse tcp:8081 tcp:8081\`

또는 개발자 메뉴의 "Dev Settings"을 선택한 다음, 여러분의 컴퓨터 IP 주소가 일치 하도록  "Debug server host for device"로 설정을 업데이트 합니다.


> 실행하는 동안 문제가 발생하면. 그것은 크롬 확장(extensions) 프로그램중 하나가 예상치 못한 방식으로 디버거와 충돌하고 있을수도 있습니다. 전체 확장(extensions) 프로그램을 비활성화하고, 문제가 있는 것을 찾을 때까지 한번에 하나씩 활성화해봅니다.


### Android에서 [Stetho](http://facebook.github.io/stetho/)로 디버깅(Debugging)

1. \`\`\`android/app/build.gradle\`\`\` 파일에서 다음 행을 \`dependencies\`에 추가 합니다.

   \`\`\`gradle
   compile 'com.facebook.stetho:stetho:1.3.1'
   compile 'com.facebook.stetho:stetho-okhttp3:1.3.1'
   \`\`\`

2. \`\`\`android/app/src/main/java/com/\{yourAppName}/MainApplication.java\`\`\` 파일에서 다음을 import 합니다.

   \`\`\`java
   import com.facebook.react.modules.network.ReactCookieJarContainer;
   import com.facebook.stetho.Stetho;
   import okhttp3.OkHttpClient;
   import com.facebook.react.modules.network.OkHttpClientProvider;
   import com.facebook.stetho.okhttp3.StethoInterceptor;
   import java.util.concurrent.TimeUnit;
   \`\`\`

3. \`\`\`android/app/src/main/java/com/\{yourAppName}/MainApplication.java\`\`\` 파일에서 function을 추가 합니다.
   \`\`\`java
   public void onCreate() \{
         super.onCreate();
         Stetho.initializeWithDefaults(this);
         OkHttpClient client = new OkHttpClient.Builder()
         .connectTimeout(0, TimeUnit.MILLISECONDS)
         .readTimeout(0, TimeUnit.MILLISECONDS)
         .writeTimeout(0, TimeUnit.MILLISECONDS)
         .cookieJar(new ReactCookieJarContainer())
         .addNetworkInterceptor(new StethoInterceptor())
         .build();
         OkHttpClientProvider.replaceOkHttpClient(client);
   }
   \`\`\`

4. 실행  \`\`\`react-native run-android \`\`\`

5. 크롬 새창에서 open: \`\`\`chrome://inspect\`\`\`, 그때에 'Inspect device' 를 클릭합니다.(the one followed by "Powered by Stetho").

## 네이티브 코드 디버깅(Debugging)

네이티브 코드를 네이티브 모듈로 작업할때에, 여러분은 Android Studio 또는 Xcod로 앱(app)을 실행할수 있습니다. 기본 네이티브 앱(app)을 빌드하는 경우처럼 네이티브 디버깅(브레이크포인트(breakpoints)을 설정)을 활용합니다.
`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"debugging","title":"디버깅(Debugging)","layout":"docs","category":"Guides","permalink":"docs/debugging.html","next":"performance","previous":"timers","filename":"Debugging.md"}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;