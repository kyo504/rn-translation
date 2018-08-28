/**
 * @generated
 */
var React = require("React");
var Layout = require("BlogPostLayout");
var content = `
Today we are releasing [React Native 0.36](https://github.com/facebook/react-native/releases/tag/v0.36.0). Read on to learn more about what's new.

## Headless JS

Headless JS is a way to run tasks in JavaScript while your app is in the background. It can be used, for example, to sync fresh data, handle push notifications, or play music. It is only available on Android, for now.

To get started, define your async task in a dedicated file (e.g. \`SomeTaskName.js\`):

\`\`\`javascript
module.exports = async (taskData) => \{
  // Perform your task here.
}
\`\`\`

Next, register your task in on \`AppRegistry\`:

\`\`\`javascript
AppRegistry.registerHeadlessTask('SomeTaskName', () => require\('SomeTaskName'));
\`\`\`

Using Headless JS does require some native Java code to be written in order to allow you to start up the service when needed. Take a look at our new [Headless JS docs](/react-native/docs/headless-js-android.html) to learn more!

## The Keyboard API

Working with the on-screen keyboard is now easier with [\`Keyboard\`](/react-native/docs/keyboard.html). You can now listen for native keyboard events and react to them. For example, to dismiss the active keyboard, simply call \`Keyboard.dismiss()\`:

\`\`\`js
import \{ Keyboard } from 'react-native'

// Hide that keyboard!
Keyboard.dismiss()
\`\`\`

## Animated Division

Combining two animated values via addition, multiplication, and modulo are already supported by React Native. With version 0.36, combining two [animated values via division](/react-native/docs/animated.html#divide) is now possible. There are some cases where an animated value needs to invert another animated value for calculation. An example is inverting a scale (2x --> 0.5x):

\`\`\`
const a = Animated.Value(1);
const b = Animated.divide(1, a);

Animated.spring(a, \{
  toValue: 2,
}).start();
\`\`\`

\`b\` will then follow \`a\`'s spring animation and produce the value of \`1 / a\`.

The basic usage is like this:

\`\`\`
<Animated.View style=\{\{transform: [\{scale: a}]}}>
  <Animated.Image style=\{\{transform: [\{scale: b}]}} />
<Animated.View>
\`\`\`

In this example, the inner image won't get stretched at all because the parent's scaling gets cancelled out. If you'd like to learn more, check out the [Animations guide](/react-native/docs/animations.html).

## Dark Status Bars

A new \`barStyle\` value has been added to \`StatusBar\`: \`dark-content\`. With this addition, you can now use [\`barStyle\`](/react-native/docs/statusbar.html#barstyle) on both iOS and Android. The behavior will now be the following:

- \`default\`: Use the platform default (light on iOS, dark on Android).
- \`light-content\`: Use a light status bar with black text and icons.
- \`dark-content\`: Use a dark status bar with white text and icons.

## ...and more

The above is just a sample of what has changed in 0.36. Check out the [release notes on GitHub](https://github.com/facebook/react-native/releases/tag/v0.36.0) to see the full list of new features, bug fixes, and breaking changes.

You can upgrade to 0.36 by running the following commands in a terminal:

\`\`\`bash
$ npm install --save react-native@0.36
$ react-native upgrade
\`\`\`
`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"path":"2016/10/25/0-36-headless-js-the-keyboard-api-and-more.html","content":"\nToday we are releasing [React Native 0.36](https://github.com/facebook/react-native/releases/tag/v0.36.0). Read on to learn more about what's new.\n\n## Headless JS\n\nHeadless JS is a way to run tasks in JavaScript while your app is in the background. It can be used, for example, to sync fresh data, handle push notifications, or play music. It is only available on Android, for now.\n\nTo get started, define your async task in a dedicated file (e.g. `SomeTaskName.js`):\n\n```javascript\nmodule.exports = async (taskData) => {\n  // Perform your task here.\n}\n```\n\nNext, register your task in on `AppRegistry`:\n\n```javascript\nAppRegistry.registerHeadlessTask('SomeTaskName', () => require('SomeTaskName'));\n```\n\nUsing Headless JS does require some native Java code to be written in order to allow you to start up the service when needed. Take a look at our new [Headless JS docs](/react-native/docs/headless-js-android.html) to learn more!\n\n## The Keyboard API\n\nWorking with the on-screen keyboard is now easier with [`Keyboard`](/react-native/docs/keyboard.html). You can now listen for native keyboard events and react to them. For example, to dismiss the active keyboard, simply call `Keyboard.dismiss()`:\n\n```js\nimport { Keyboard } from 'react-native'\n\n// Hide that keyboard!\nKeyboard.dismiss()\n```\n\n## Animated Division\n\nCombining two animated values via addition, multiplication, and modulo are already supported by React Native. With version 0.36, combining two [animated values via division](/react-native/docs/animated.html#divide) is now possible. There are some cases where an animated value needs to invert another animated value for calculation. An example is inverting a scale (2x --> 0.5x):\n\n```\nconst a = Animated.Value(1);\nconst b = Animated.divide(1, a);\n\nAnimated.spring(a, {\n  toValue: 2,\n}).start();\n```\n\n`b` will then follow `a`'s spring animation and produce the value of `1 / a`.\n\nThe basic usage is like this:\n\n```\n<Animated.View style={{transform: [{scale: a}]}}>\n  <Animated.Image style={{transform: [{scale: b}]}} />\n<Animated.View>\n```\n\nIn this example, the inner image won't get stretched at all because the parent's scaling gets cancelled out. If you'd like to learn more, check out the [Animations guide](/react-native/docs/animations.html).\n\n## Dark Status Bars\n\nA new `barStyle` value has been added to `StatusBar`: `dark-content`. With this addition, you can now use [`barStyle`](/react-native/docs/statusbar.html#barstyle) on both iOS and Android. The behavior will now be the following:\n\n- `default`: Use the platform default (light on iOS, dark on Android).\n- `light-content`: Use a light status bar with black text and icons.\n- `dark-content`: Use a dark status bar with white text and icons.\n\n## ...and more\n\nThe above is just a sample of what has changed in 0.36. Check out the [release notes on GitHub](https://github.com/facebook/react-native/releases/tag/v0.36.0) to see the full list of new features, bug fixes, and breaking changes.\n\nYou can upgrade to 0.36 by running the following commands in a terminal:\n\n```bash\n$ npm install --save react-native@0.36\n$ react-native upgrade\n```\n","publishedAt":"2016-10-25","excerpt":"Today we are releasing React Native 0.36. Read on to learn more about what's new.","title":"0.36: Headless JS, the Keyboard API, & more","author":"Héctor Ramos","authorTitle":"Developer Advocate at Facebook","authorURL":"https://twitter.com/hectorramos","authorImage":"https://s.gravatar.com/avatar/f2223874e66e884c99087e452501f2da?s=128","authorTwitter":"hectorramos","category":"announcements"}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;