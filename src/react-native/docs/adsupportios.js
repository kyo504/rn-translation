/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "methods": [
    \{
      "line": 31,
      "source": "getAdvertisingId: function(onSuccess: Function, onFailure: Function) \{\\n    AdSupport.getAdvertisingId(onSuccess, onFailure);\\n  }",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "onSuccess"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "onFailure"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "getAdvertisingId"
    },
    \{
      "line": 35,
      "source": "getAdvertisingTrackingEnabled: function(onSuccess: Function, onFailure: Function) \{\\n    AdSupport.getAdvertisingTrackingEnabled(onSuccess, onFailure);\\n  }",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "onSuccess"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "onFailure"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "getAdvertisingTrackingEnabled"
    }
  ],
  "properties": [],
  "classes": [],
  "superClass": null,
  "type": "api",
  "line": 30,
  "name": "AdSupportIOS",
  "docblock": "/**\\n * \`AdSupport\` provides access to the \\"advertising identifier\\". If you link this library\\n * in your project, you may need to justify your use for this identifier when submitting\\n * your application to the App Store.\\n *\\n * In order to use \`AdSupport\` in your project, you must link the \`RCTAdSupport\` library.\\n * In Xcode, you can manually add the \`RCTAdSupport.m\` and \`RCTAdSupport.h\` files from\\n * \`node_modules/react-native/Libraries/AdSupport/\` to the \`Libraries/React/Base/\` folder\\n * of your current project.\\n *\\n * You can refer to [Linking](docs/linking-libraries-ios.html) for help.\\n *\\n */\\n",
  "requires": [
    \{
      "name": "NativeModules"
    }
  ],
  "filepath": "Libraries/AdSupport/AdSupportIOS.js",
  "componentName": "AdSupportIOS",
  "componentPlatform": "ios"
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"adsupportios","title":"AdSupportIOS","layout":"autodocs","category":"APIs","permalink":"docs/adsupportios.html","platform":"ios","next":"alert","previous":"actionsheetios","sidebar":true,"path":"Libraries/AdSupport/AdSupportIOS.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;