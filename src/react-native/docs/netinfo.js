/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "methods": [
    \{
      "line": 206,
      "source": "addEventListener(\\n    eventName: ChangeEventName,\\n    handler: Function\\n  ): \{remove: () => void} \{\\n    let listener;\\n    if (eventName === 'connectionChange') \{\\n      listener = NetInfoEventEmitter.addListener(\\n        DEVICE_CONNECTIVITY_EVENT,\\n        (appStateData) => \{\\n          handler(\{\\n            type: appStateData.connectionType,\\n            effectiveType: appStateData.effectiveConnectionType\\n          });\\n        }\\n      );\\n    } else if (eventName === 'change') \{\\n      console.warn('NetInfo\\\\'s \\"change\\" event is deprecated. Listen to the \\"connectionChange\\" event instead.');\\n\\n      listener = NetInfoEventEmitter.addListener(\\n        DEVICE_CONNECTIVITY_EVENT,\\n        (appStateData) => \{\\n          handler(appStateData.network_info);\\n        }\\n      );\\n    } else \{\\n      console.warn('Trying to subscribe to unknown event: \\"' + eventName + '\\"');\\n      return \{\\n        remove: () => \{}\\n      };\\n    }\\n\\n    _subscriptions.set(handler, listener);\\n    return \{\\n      remove: () => NetInfo.removeEventListener(eventName, handler)\\n    };\\n  }",
      "docblock": "/**\\n   * Adds an event handler. Supported events:\\n   *\\n   * - \`connectionChange\`: Fires when the network status changes. The argument to the event\\n   *   handler is an object with keys:\\n   *   - \`type\`: A \`ConnectionType\` (listed above)\\n   *   - \`effectiveType\`: An \`EffectiveConnectionType\` (listed above)\\n   * - \`change\`: This event is deprecated. Listen to \`connectionChange\` instead. Fires when\\n   *   the network status changes. The argument to the event handler is one of the deprecated\\n   *   connectivity types listed above.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"ChangeEventName\\",\\"length\\":1}",
          "name": "eventName"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "handler"
        }
      ],
      "tparams": null,
      "returntypehint": "\{remove: () => void}",
      "name": "addEventListener"
    },
    \{
      "line": 246,
      "source": "removeEventListener(\\n    eventName: ChangeEventName,\\n    handler: Function\\n  ): void \{\\n    const listener = _subscriptions.get(handler);\\n    if (!listener) \{\\n      return;\\n    }\\n    listener.remove();\\n    _subscriptions.delete(handler);\\n  }",
      "docblock": "/**\\n   * Removes the listener for network status changes.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"ChangeEventName\\",\\"length\\":1}",
          "name": "eventName"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "handler"
        }
      ],
      "tparams": null,
      "returntypehint": "void",
      "name": "removeEventListener"
    },
    \{
      "line": 262,
      "source": "fetch(): Promise<any> \{\\n    console.warn('NetInfo.fetch() is deprecated. Use NetInfo.getConnectionInfo() instead.');\\n    return RCTNetInfo.getCurrentConnectivity().then(resp => resp.network_info);\\n  }",
      "docblock": "/**\\n   * This function is deprecated. Use \`getConnectionInfo\` instead. Returns a promise that\\n   * resolves with one of the deprecated connectivity types listed above.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [],
      "tparams": null,
      "returntypehint": "Promise<any>",
      "name": "fetch"
    },
    \{
      "line": 272,
      "source": "getConnectionInfo(): Promise<any> \{\\n    return RCTNetInfo.getCurrentConnectivity().then(resp => \{\\n      return \{\\n        type: resp.connectionType,\\n        effectiveType: resp.effectiveConnectionType,\\n      };\\n    });\\n  }",
      "docblock": "/**\\n   * Returns a promise that resolves to an object with \`type\` and \`effectiveType\` keys\\n   * whose values are a \`ConnectionType\` and an \`EffectiveConnectionType\`, (described above),\\n   * respectively.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [],
      "tparams": null,
      "returntypehint": "Promise<any>",
      "name": "getConnectionInfo"
    },
    \{
      "line": 327,
      "source": "isConnectionExpensive(): Promise<boolean> \{\\n    return (\\n      Platform.OS === 'android' ? RCTNetInfo.isConnectionMetered() : Promise.reject(new Error('Currently not supported on iOS'))\\n    );\\n  }",
      "modifiers": [
        "static"
      ],
      "params": [],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"generic\\",\\"value\\":[\{\\"type\\":\\"simple\\",\\"value\\":\\"Promise\\",\\"length\\":1},\{\\"type\\":\\"simple\\",\\"value\\":\\"boolean\\",\\"length\\":1}],\\"length\\":4}",
      "name": "isConnectionExpensive"
    }
  ],
  "properties": [
    \{
      "name": "isConnected",
      "type": \{
        "name": "ObjectExpression"
      },
      "docblock": "/**\\n   * An object with the same methods as above but the listener receives a\\n   * boolean which represents the internet connectivity.\\n   * Use this if you are only interested with whether the device has internet\\n   * connectivity.\\n   */\\n",
      "source": "isConnected: \{\\n    addEventListener(\\n      eventName: ChangeEventName,\\n      handler: Function\\n    ): \{remove: () => void} \{\\n      const listener = (connection) => \{\\n        handler(_isConnected(connection));\\n      };\\n      _isConnectedSubscriptions.set(handler, listener);\\n      NetInfo.addEventListener(\\n        eventName,\\n        listener\\n      );\\n      return \{\\n        remove: () => NetInfo.isConnected.removeEventListener(eventName, handler)\\n      };\\n    },\\n\\n    removeEventListener(\\n      eventName: ChangeEventName,\\n      handler: Function\\n    ): void \{\\n      const listener = _isConnectedSubscriptions.get(handler);\\n      NetInfo.removeEventListener(\\n        eventName,\\n        /* $FlowFixMe(>=0.36.0 site=react_native_fb,react_native_oss) Flow error\\n         * detected during the deploy of Flow v0.36.0. To see the error, remove\\n         * this comment and run Flow */\\n        listener\\n      );\\n      _isConnectedSubscriptions.delete(handler);\\n    },\\n\\n    fetch(): Promise<any> \{\\n      return NetInfo.fetch().then(\\n        (connection) => _isConnected(connection)\\n      );\\n    },\\n  }",
      "modifiers": [
        "static"
      ],
      "propertySource": ""
    }
  ],
  "classes": [],
  "superClass": null,
  "type": "api",
  "line": 194,
  "name": "NetInfo",
  "docblock": "/**\\n * NetInfo exposes info about online/offline status\\n *\\n * \`\`\`\\n * NetInfo.getConnectionInfo().then((connectionInfo) => \{\\n *   console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);\\n * });\\n * function handleFirstConnectivityChange(connectionInfo) \{\\n *   console.log('First change, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);\\n *   NetInfo.removeEventListener(\\n *     'connectionChange',\\n *     handleFirstConnectivityChange\\n *   );\\n * }\\n * NetInfo.addEventListener(\\n *   'connectionChange',\\n *   handleFirstConnectivityChange\\n * );\\n * \`\`\`\\n *\\n * ### ConnectionType enum\\n *\\n * \`ConnectionType\` describes the type of connection the device is using to communicate with the network.\\n *\\n * Cross platform values for \`ConnectionType\`:\\n * - \`none\` - device is offline\\n * - \`wifi\` - device is online and connected via wifi, or is the iOS simulator\\n * - \`cellular\` - device is connected via Edge, 3G, WiMax, or LTE\\n * - \`unknown\` - error case and the network status is unknown\\n *\\n * Android-only values for \`ConnectionType\`:\\n * - \`bluetooth\` - device is connected via Bluetooth\\n * - \`ethernet\` - device is connected via Ethernet\\n * - \`wimax\` - device is connected via WiMAX\\n *\\n * ### EffectiveConnectionType enum\\n *\\n * Cross platform values for \`EffectiveConnectionType\`:\\n * - \`2g\`\\n * - \`3g\`\\n * - \`4g\`\\n * - \`unknown\`\\n *\\n * ### Android\\n *\\n * To request network info, you need to add the following line to your\\n * app's \`AndroidManifest.xml\`:\\n *\\n * \`<uses-permission android:name=\\"android.permission.ACCESS_NETWORK_STATE\\" />\`\\n *\\n * ### isConnectionExpensive\\n *\\n * Available on Android. Detect if the current active connection is metered or not. A network is\\n * classified as metered when the user is sensitive to heavy data usage on that connection due to\\n * monetary costs, data limitations or battery/performance issues.\\n *\\n * \`\`\`\\n * NetInfo.isConnectionExpensive()\\n * .then(isConnectionExpensive => \{\\n *   console.log('Connection is ' + (isConnectionExpensive ? 'Expensive' : 'Not Expensive'));\\n * })\\n * .catch(error => \{\\n *   console.error(error);\\n * });\\n * \`\`\`\\n *\\n * ### isConnected\\n *\\n * Available on all platforms. Asynchronously fetch a boolean to determine\\n * internet connectivity.\\n *\\n * \`\`\`\\n * NetInfo.isConnected.fetch().then(isConnected => \{\\n *   console.log('First, is ' + (isConnected ? 'online' : 'offline'));\\n * });\\n * function handleFirstConnectivityChange(isConnected) \{\\n *   console.log('Then, is ' + (isConnected ? 'online' : 'offline'));\\n *   NetInfo.isConnected.removeEventListener(\\n *     'change',\\n *     handleFirstConnectivityChange\\n *   );\\n * }\\n * NetInfo.isConnected.addEventListener(\\n *   'change',\\n *   handleFirstConnectivityChange\\n * );\\n * \`\`\`\\n *\\n * ### Connectivity Types (deprecated)\\n *\\n * The following connectivity types are deprecated. They're used by the deprecated APIs \`fetch\` and the \`change\` event.\\n *\\n * iOS connectivity types (deprecated):\\n * - \`none\` - device is offline\\n * - \`wifi\` - device is online and connected via wifi, or is the iOS simulator\\n * - \`cell\` - device is connected via Edge, 3G, WiMax, or LTE\\n * - \`unknown\` - error case and the network status is unknown\\n *\\n * Android connectivity types (deprecated).\\n * - \`NONE\` - device is offline\\n * - \`BLUETOOTH\` - The Bluetooth data connection.\\n * - \`DUMMY\` -  Dummy data connection.\\n * - \`ETHERNET\` - The Ethernet data connection.\\n * - \`MOBILE\` - The Mobile data connection.\\n * - \`MOBILE_DUN\` - A DUN-specific Mobile data connection.\\n * - \`MOBILE_HIPRI\` - A High Priority Mobile data connection.\\n * - \`MOBILE_MMS\` - An MMS-specific Mobile data connection.\\n * - \`MOBILE_SUPL\` -  A SUPL-specific Mobile data connection.\\n * - \`VPN\` -  A virtual network using one or more native bearers. Requires API Level 21\\n * - \`WIFI\` - The WIFI data connection.\\n * - \`WIMAX\` -  The WiMAX data connection.\\n * - \`UNKNOWN\` - Unknown data connection.\\n *\\n * The rest of the connectivity types are hidden by the Android API, but can be used if necessary.\\n */\\n",
  "requires": [
    \{
      "name": "Map"
    },
    \{
      "name": "NativeEventEmitter"
    },
    \{
      "name": "NativeModules"
    },
    \{
      "name": "Platform"
    }
  ],
  "filepath": "Libraries/Network/NetInfo.js",
  "componentName": "NetInfo",
  "componentPlatform": "cross"
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"netinfo","title":"NetInfo","layout":"autodocs","category":"APIs","permalink":"docs/netinfo.html","platform":"cross","next":"panresponder","previous":"linking","sidebar":true,"path":"Libraries/Network/NetInfo.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;