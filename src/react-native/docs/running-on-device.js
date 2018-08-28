/**
 * @generated
 */
var React = require("React");
var Layout = require("DocsLayout");
var content = `
<style>
  .toggler li \{
    display: inline-block;
    position: relative;
    top: 1px;
    padding: 10px;
    margin: 0px 2px 0px 2px;
    border: 1px solid #05A5D1;
    border-bottom-color: transparent;
    border-radius: 3px 3px 0px 0px;
    color: #05A5D1;
    background-color: transparent;
    font-size: 0.99em;
    cursor: pointer;
  }
  .toggler li:first-child \{
    margin-left: 0;
  }
  .toggler li:last-child \{
    margin-right: 0;
  }
  .toggler ul \{
    width: 100%;
    display: inline-block;
    list-style-type: none;
    margin: 0;
    border-bottom: 1px solid #05A5D1;
    cursor: default;
  }
  @media screen and (max-width: 960px) \{
    .toggler li,
    .toggler li:first-child,
    .toggler li:last-child \{
      display: block;
      border-bottom-color: #05A5D1;
      border-radius: 3px;
      margin: 2px 0px 2px 0px;
    }
    .toggler ul \{
      border-bottom: 0;
    }
  }
  .toggler a \{
    display: inline-block;
    padding: 10px 5px;
    margin: 2px;
    border: 1px solid #05A5D1;
    border-radius: 3px;
    text-decoration: none !important;
  }
  .display-os-mac .toggler .button-mac,
  .display-os-linux .toggler .button-linux,
  .display-os-windows .toggler .button-windows,
  .display-platform-ios .toggler .button-ios,
  .display-platform-android .toggler .button-android \{
    background-color: #05A5D1;
    color: white;
  }
  block \{ display: none; }
  .display-platform-ios.display-os-mac .ios.mac,
  .display-platform-ios.display-os-linux .ios.linux,
  .display-platform-ios.display-os-windows .ios.windows,
  .display-platform-android.display-os-mac .android.mac,
  .display-platform-android.display-os-linux .android.linux,
  .display-platform-android.display-os-windows .android.windows \{
    display: block;
  }
</style>

앱을 사용자들에게 공개하기 전에 실제 장치에서 테스트하는 것이 좋습니다. 이 문서에서 React Native 앱을 장치에서 실행하고, 앱 제작을 준비하는데 필요한 과정을 알려드릴 것입니다. 프로젝트가 Create React Native App을 통해 만들어졌다면, 실제 장치의 Expo 앱에서 QR코드를 스캔을 통해 만든 앱을 미리 확인해 볼 수 있습니다. 장치에서 앱을 빌드하고 실행하기 위해서는 [Getting Started](docs/getting-started.html)에서 eject와 사전 설치 과정이 필요합니다.

<div class="toggler">

  <ul role="tablist" >
    <li id="ios" class="button-ios" aria-selected="false" role="tab" tabindex="0" aria-controls="iostab" onclick="displayTab('platform', 'ios')">
      iOS
    </li>
    <li id="android" class="button-android" aria-selected="false" role="tab" tabindex="-1" aria-controls="androidtab" onclick="displayTab('platform', 'android')">
      Android
    </li>
  </ul>
</div>

<block class="linux windows mac ios" />

## iOS 장치에서 앱 실행하기

<block class="linux windows mac android" />

## Android 장치에서 앱 실행하기

<block class="linux windows mac ios android" />

<div class="toggler">
<span>개발환경:</span>
<a href="javascript:void(0);" class="button-mac" onclick="displayTab('os', 'mac')">macOS</a>
<a href="javascript:void(0);" class="button-linux" onclick="displayTab('os', 'linux')">Linux</a>
<a href="javascript:void(0);" class="button-windows" onclick="displayTab('os', 'windows')">Windows</a>
</div>

<block class="linux windows ios" />

iOS용으로 작성된 프로젝트를 빌드하기 위해서는 반드시 Mac이 필요합니다. Mac이 없는 경우, [Quick Start](docs/getting-started.html) 지침서를 참조하여 Create React Native App을 통한 앱 빌드 방법을 배울 수 있습니다. Expo 앱으로 직접 만든 앱을 실행하는 방법을 알려줍니다.
<block class="mac ios" />

### 1. USB를 통해 연결하기

iOS 장치와 Mac을 Lightning-USB 케이블로 연결하세요. 프로젝트 내 \`ios\` 폴더 아래에 있는 \`.xcodeproj\` 파일을 Xcode로 여세요.

iOS 개발이 처음이라면, 개발자 등록이 필요할 수도 있습니다. Xcode 메뉴바의 **Product**를 열고 **Destination**으로 이동합니다. 연결된 장치를 선택하면 Xcode가 해당 장치를 개발용으로 등록합니다.

### 2. 개발자 인증

개발자 계정이 없다면 [Apple 개발자 홈페이지](https://developer.apple.com/kr/)에서 등록하세요.

Xcode Project Navigator에서 프로젝트를 선택하고 메인 target을 선택해줍니다(프로젝트 이름과 같습니다). "General"탭의 "Signing"을 보면 Team을 고르게 되어 있습니다. 자신의 Apple 개발자 계정을 선택하고 인증 과정을 마칩니다.



![](img/RunningOnDeviceCodeSigning.png)

메인 target에 했던 것처럼, Tests target에도 인증을 해줍니다.


### 3. 앱 빌드, 실행하기

모든 설정을 마치고 나면 Xcode 툴바에 현재 연결된 장치 혹은 시뮬레이터 장치가 보이게 됩니다. Devices 창(\`⇧⌘2\`)에서도 같은 결과를 볼 수 있습니다. 이제 **Build and run** 버튼(\`⌘R\`)이나 **Product** 메뉴의 **Run**을 누르면 앱이 해당 장치에서 실행됩니다.

![](img/RunningOnDeviceReady.png)

> 문제가 발생하면 Apple 개발자 페이지의 [Launching Your App on a Device](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/LaunchingYourApponDevices/LaunchingYourApponDevices.html#//apple_ref/doc/uid/TP40012582-CH27-SW4) 문서를 참고하세요.

<block class="mac windows linux android" />

### 1. USB 디버깅 활성화하기

보통 Android 장치는 Google Play에서 받은 앱만을 설치하거나 실행할 수 있도록 설정되어 있습니다. 개발 과정에서 앱을 설치하거나 실행하기 위해서는 반드시 USB 디버깅 옵션을 활성화해야 합니다.

USB 디버깅 옵션 활성화를 위해서는 먼저 "개발자 옵션" 메뉴를 활성화해야 합니다. **설정** → **휴대폰 정보**(→ **소프트웨어 정보** 메뉴가 있다면 클릭)에 가서 \`빌드 번호\`를 7회 반복해서 탭하세요. 다시 **설정** → **개발자 옵션**으로 이동하여 "USB 디버깅"을 체크, 활성화해주면 됩니다.

### 2. USB를 통해 연결하기

이제 Android 장치에서 React Native 프로젝트를 실행하기 위한 몇 가지 설정이 필요합니다. USB를 통해 개발 환경에 Android 장치를 연결하십시오.


<block class="linux android" />

\`lsusb\` 명령어를 통해 제조업체 코드를 확인하십시오(macOS의 경우, [lsusb 설치](https://github.com/jlhonora/lsusb)가 필요합니다). \`lsusb\`를 입력하면 다음과 같은 화면이 출력될 것입니다:

\`\`\`bash
$ lsusb
Bus 002 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 001 Device 003: ID 22b8:2e76 Motorola PCS
Bus 001 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 004 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 003 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
\`\`\`

위의 결과는 현재 개발 환경에 연결된 USB 장치들을 나타냅니다.

자신의 장치가 무엇인지 확실하지 않다면, 장치에서 USB 케이블을 제거한 후 다시 명령어를 입력하세요:

\`\`\`bash
$ lsusb
Bus 002 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 001 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 004 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 003 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
\`\`\`

USB 케이블을 제거한 후 출력된 결과를 보면 이전 결과와 비교했을 때 어느 한 줄이 보이지 않습니다(위의 경우에는 "Motorola PCS"가 해당될 것입니다). 따라서, 연결한 장치는 다음과 같습니다.

\`Bus 001 Device 003: ID 22b8:2e76 Motorola PCS\`

장치 ID 첫 네 자리에 주목하시기 바랍니다:

\`22b8:2e76\`

이 경우에는 \`22b8\`이 되겠습니다. 바로 이 네 자리 숫자가 Motorola 장치의 식별자입니다.

이를 바탕으로 udev rule을 작성하면 다음과 같습니다:

\`\`\`sh
echo SUBSYSTEM=="usb", ATTR\{idVendor}=="22b8", MODE="0666", GROUP="plugdev" | sudo tee /etc/udev/rules.d/51-android-usb.rules
\`\`\`

연결하신 장치의 식별자는 제조사마다 차이가 있을 수 있으므로,  위 명령어에서 각자 연결된 장치의 식별자를 \`22b8\` 대신 바꿔 입력해주시면 됩니다.

<block class="mac windows linux android" />

연결된 장치가 ADB(Android Debug Bridge)에 제대로 연결되었는지 확인해봅시다. 명령어 \`adb devices\`를 입력해보세요:

\`\`\`
$ adb devices
List of devices attached
emulator-5554 offline   # Google emulator
14ed2fcc device         # Physical device
\`\`\`

오른쪽 열에 보이는 \`device\`가 현재 연결된 장치를 의미합니다. 무조건 **한 번에 하나의 장치**만 연결이 가능합니다.

### 3. 앱 실행하기

앱을 설치하고 실행하기 위해 명령어 프롬프트에 다음과 같이 입력하세요:

\`\`\`
$ react-native run-android
\`\`\`

> "bridge configuration isn't available" 에러가 발생한다면, [Using adb reverse](docs/running-on-device.html#method-1-using-adb-reverse-recommended)를 참고하세요.

> 알고 계시나요?
>
> \`Release\` 빌드를 생성하고 실행할 때에도 \`React Native CLI\` 를 활용할 수 있습니다. (예를 들어, \`react-native run-android --variant=release\`)

<block class="mac windows linux android ios" />

<block class="mac ios" />

## 개발 서버에 연결하기

개발 서버를 사용하여 빠르게 디버깅 작업을 할 수 있습니다. 장치가 컴퓨터와 동일한 Wi-Fi 네트워크에 연결되어 있어야 합니다. 장치를 흔들어 [개발자 메뉴](docs/debugging.html#accessing-the-in-app-developer-menu)를 불러온 후, Live Reload를 활성화 해주면 언제든지 변경된 내용을 바로 확인할 수 있습니다.


![](img/DeveloperMenu.png)

> 문제 발생 시 Mac과 해당 장치가 동일 네트워크에 있고, 서로 연결 가능한 상태인지 점검해보세요. 상당수의 captive portal 방식 개방형 무선 네트워크(통신사, 공공 와이파이 등)의 경우에는 기기 간 상호 접속이 불가능하도록 설정되어 있습니다. 이런 경우에는 기기의 개인용 핫스팟 기능을 이용하시기 바랍니다.

<block class="mac windows linux android" />

## 개발 서버에 연결하기

개발 서버를 사용하여 빠르게 디버깅 작업을 할 수 있습니다. USB 케이블 또는 Wi-Fi 네트워크 액세스 가능 여부에 따라서 몇 가지의 개발 서버 연결 방법이 있습니다.

### 방법 1: adb reverse 이용(추천)

<block class="mac windows linux android" />

이 방법은 연결할 장치가 Android 5.0 (Lollipop) 이상인 경우에 사용할 수 있습니다. 또한 USB 디버깅이 활성화되어 있어야 하며, USB 케이블을 통해 개발 환경과 연결되어 있어야 합니다.

<block class="mac windows linux android" />

명령 프롬프트에 다음과 같이 입력하세요:

\`\`\`
$ adb reverse tcp:8081 tcp:8081
\`\`\`

이제 [개발자 메뉴](docs/debugging.html#accessing-the-in-app-developer-menu)에서 Live reloading 기능을 사용할 수 있습니다. 이 기능을 사용하면 변경된 내용을 바로 확인할 수 있습니다.

### 방법 2: Wi-Fi 이용

Wi-Fi를 통해 개발 서버에 연결할 수도 있습니다. 처음에는 USB 케이블을 사용하여 장치에 앱을 설치해야 하지만, 일단 한 번 완료되면 이 방법을 통해 무선으로 디버깅이 가능합니다. 진행하기 전에 개발 환경의 IP 주소를 먼저 알아두세요.

<block class="mac android" />

**시스템 환경설정** → **네트워크**에서 mac의 IP 주소를 확인할 수 있습니다.

<block class="windows android" />

CMD(명령 프롬프트)를 열고 \`ipconig\`를 입력하면 IP 주소를 확인할 수 있습니다. ([참고 링크](http://windows.microsoft.com/en-us/windows/using-command-line-tools-networking-information))

<block class="linux android" />

터미널을 열고 \`/sbin/ifconfig\`를 입력하면 IP 주소를 확인할 수 있습니다.

<block class="mac windows linux android" />


1. 개발 환경과 장치가 **동일한** Wi-Fi 네트워크에 접속되어 있는지 확인하세요.
2. 장치에서 React Native 앱을 엽니다.
3. [red screen with an error](docs/debugging.html#in-app-errors-and-warnings)가 발생할 수도 있지만 괜찮습니다. 다음 단계에서 해결할 것입니다.
4. 앱 내의 [개발자 메뉴](docs/debugging.html#accessing-the-in-app-developer-menu)를 엽니다.
5. **Dev Settings** → **Debug server host for device**로 이동합니다.
6. 개발 환경의 IP 주소와 포트까지 입력합니다 (예를 들어, 10.0.1.1:8081).
7. **개발자 메뉴**로 돌아가 **Reload JS**를 선택합니다.


이제 [개발자 메뉴](docs/debugging.html#accessing-the-in-app-developer-menu)에서 Live reloading 기능을 사용할 수 있습니다. 이 기능을 사용하면 변경된 내용을 바로 확인할 수 있습니다.

<block class="mac ios" />

## 정식 배포용 빌드

React Native로 앱도 만들었겠다, App Store에 정식으로 앱을 런칭하고 싶지 않으신가요? 사실 일반적인 iOS 앱 등록 과정과 동일하지만, 몇 가지 고려해야 할 사항이 있습니다.


### 1. App Transport Security 허용하기

App Transport Security는 iOS 9 출시와 함께 등장하였으며, HTTPS가 아닌 HTTP(보안에 취약한) 요청은 거부하도록 하는 기능입니다. 개발자의 React Native 서버를 포함한 모든 HTTP 요청이 거부될 수 있습니다. 단, 개발의 편의를 위해서 \`localhost\`에는 ATS 기능이 비활성화되도록 초기 설정이 되어 있습니다.

따라서, 앱을 정식으로 배포하기 전, \`ios/\` 폴더에 있는 \`Info.plist\`파일의 \`NSExceptionDomains\` dictionary에서 \`localhost\` 항목을 제거하여 ATS를 다시 활성화해야 합니다. 혹은 Xcode로 Info 페이지를 열어 App Transport Security Setting을 직접 수정하여 활성화할 수도 있습니다.


> 앱에서 HTTP 리소스 접근이 필요하다면 [이 페이지](http://ste.vn/2015/06/10/configuring-app-transport-security-ios-9-osx-10-11/)를 참고하여 ATS를 어떻게 설정하는지 배울 수 있습니다.

### 2. Release scheme 설정하기

빌드한 앱을 정식으로 App Store에 배포하려면 Xcode의 \`Release\` scheme을 사용해야합니다. \`Release\`용으로 빌드된 앱은 앱 내의 개발자 메뉴가 자동으로 비활성화되어 일반 사용자들이 개발자 메뉴에 실수로 접근하는 것을 방지합니다. 또한 JavaScript를 번들로 제공하므로, 컴퓨터에 연결되어 있지 않은 상태에서도 앱을 저장하고 테스트할 수 있습니다.

\`Release\` scheme을 사용하여 빌드되도록 설정하기 위해서는 **Product** → **Scheme** → **Edit Scheme**으로 이동하세요. 사이드바에 있는 **Run**을 클릭하면 Build Configuration에서 \`Release\`를 선택할 수 있습니다.

![](img/ConfigureReleaseScheme.png)

### 3. Release용으로 빌드하기

이제 release용으로 빌드가 가능합니다. \`⌘B\` 또는 메뉴에서 **Product** → **Build**를 선택해주세요. Release용으로 빌드하면 베타 테스터에게 앱을 배포하거나 App Store에 검수 요청을 보낼 수 있게 됩니다.

> \`React Native CLI\`에서 \`--configuration\` 옵션에 \`Release\`를 사용하는 것도 위와 같은 결과를 볼 수 있습니다. (예를 들어, \`react-native run-ios --configuration Release\`)


<block class="mac windows linux android" />

## 정식 배포용 빌드

React Native로 앱도 만들었겠다, Play Store에 정식으로 앱을 런칭하고 싶지 않으신가요? 사실 일반적인 Android 앱 등록 과정과 동일하지만, 몇 가지 고려해야 할 사항이 있습니다. [generating a signed APK](docs/signed-apk-android.html)를 참고하세요.


<script>
function displayTab(type, value) \{
  var container = document.getElementsByTagName('block')[0].parentNode;
  container.className = 'display-' + type + '-' + value + ' ' +
    container.className.replace(RegExp('display-' + type + '-[a-z]+ ?'), '');
}
</script>
`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"running-on-device","title":"Running On Device","layout":"docs","category":"Guides","permalink":"docs/running-on-device.html","banner":"ejected","next":"upgrading","previous":"integration-with-existing-apps","filename":"RunningOnDevice.md"}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;