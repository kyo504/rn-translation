/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "description": "A React component for displaying text.\\n\\n\`Text\` supports nesting, styling, and touch handling.\\n\\nIn the following example, the nested title and body text will inherit the \`fontFamily\` from\\n\`styles.baseText\`, but the title provides its own additional styles.  The title and body will\\nstack on top of each other on account of the literal newlines:\\n\\n\`\`\`ReactNativeWebPlayer\\nimport React, \{ Component } from 'react';\\nimport \{ AppRegistry, Text, StyleSheet } from 'react-native';\\n\\nexport default class TextInANest extends Component \{\\n  constructor(props) \{\\n    super(props);\\n    this.state = \{\\n      titleText: \\"Bird's Nest\\",\\n      bodyText: 'This is not really a bird nest.'\\n    };\\n  }\\n\\n  render() \{\\n    return (\\n      <Text style=\{styles.baseText}>\\n        <Text style=\{styles.titleText} onPress=\{this.onPressTitle}>\\n          \{this.state.titleText}\{'\\\\n'}\{'\\\\n'}\\n        </Text>\\n        <Text numberOfLines=\{5}>\\n          \{this.state.bodyText}\\n        </Text>\\n      </Text>\\n    );\\n  }\\n}\\n\\nconst styles = StyleSheet.create(\{\\n  baseText: \{\\n    fontFamily: 'Cochin',\\n  },\\n  titleText: \{\\n    fontSize: 20,\\n    fontWeight: 'bold',\\n  },\\n});\\n\\n// skip this line if using Create React Native App\\nAppRegistry.registerComponent('TextInANest', () => TextInANest);\\n\`\`\`",
  "displayName": "Text",
  "methods": [],
  "props": \{
    "ellipsizeMode": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "'head'",
            "computed": false
          },
          \{
            "value": "'middle'",
            "computed": false
          },
          \{
            "value": "'tail'",
            "computed": false
          },
          \{
            "value": "'clip'",
            "computed": false
          }
        ]
      },
      "required": false,
      "description": "When \`numberOfLines\` is set, this prop defines how text will be truncated.\\n\`numberOfLines\` must be set in conjunction with this prop.\\n\\nThis can be one of the following values:\\n\\n- \`head\` - The line is displayed so that the end fits in the container and the missing text\\nat the beginning of the line is indicated by an ellipsis glyph. e.g., \\"...wxyz\\"\\n- \`middle\` - The line is displayed so that the beginning and end fit in the container and the\\nmissing text in the middle is indicated by an ellipsis glyph. \\"ab...yz\\"\\n- \`tail\` - The line is displayed so that the beginning fits in the container and the\\nmissing text at the end of the line is indicated by an ellipsis glyph. e.g., \\"abcd...\\"\\n- \`clip\` - Lines are not drawn past the edge of the text container.\\n\\nThe default is \`tail\`.\\n\\n> \`clip\` is working only for iOS",
      "defaultValue": \{
        "value": "'tail'",
        "computed": false
      }
    },
    "numberOfLines": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "Used to truncate the text with an ellipsis after computing the text\\nlayout, including line wrapping, such that the total number of lines\\ndoes not exceed this number.\\n\\nThis prop is commonly used with \`ellipsizeMode\`."
    },
    "textBreakStrategy": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "'simple'",
            "computed": false
          },
          \{
            "value": "'highQuality'",
            "computed": false
          },
          \{
            "value": "'balanced'",
            "computed": false
          }
        ]
      },
      "required": false,
      "description": "Set text break strategy on Android API Level 23+, possible values are \`simple\`, \`highQuality\`, \`balanced\`\\nThe default value is \`highQuality\`.\\n@platform android"
    },
    "onLayout": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Invoked on mount and layout changes with\\n\\n  \`\{nativeEvent: \{layout: \{x, y, width, height}}}\`"
    },
    "onPress": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "This function is called on press.\\n\\ne.g., \`onPress=\{() => console.log('1st')}\`"
    },
    "onLongPress": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "This function is called on long press.\\n\\ne.g., \`onLongPress=\{this.increaseSize}>\`"
    },
    "pressRetentionOffset": \{
      "type": \{
        "name": "custom",
        "raw": "EdgeInsetsPropType"
      },
      "required": false,
      "description": "When the scroll view is disabled, this defines how far your touch may\\nmove off of the button, before deactivating the button. Once deactivated,\\ntry moving it back and you'll see that the button is once again\\nreactivated! Move it back and forth several times while the scroll view\\nis disabled. Ensure you pass in a constant to reduce memory allocations."
    },
    "selectable": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "Lets the user select text, to use the native copy and paste functionality."
    },
    "selectionColor": \{
      "type": \{
        "name": "custom",
        "raw": "ColorPropType"
      },
      "required": false,
      "description": "The highlight color of the text.\\n@platform android"
    },
    "suppressHighlighting": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "When \`true\`, no visual change is made when text is pressed down. By\\ndefault, a gray oval highlights the text on press down.\\n@platform ios"
    },
    "style": \{
      "type": \{
        "name": "stylesheet",
        "value": "TextStylePropTypes"
      },
      "required": false,
      "description": ""
    },
    "testID": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "Used to locate this view in end-to-end tests."
    },
    "nativeID": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "Used to locate this view from native code."
    },
    "allowFontScaling": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "Specifies whether fonts should scale to respect Text Size accessibility settings. The\\ndefault is \`true\`.",
      "defaultValue": \{
        "value": "true",
        "computed": false
      }
    },
    "accessible": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "When set to \`true\`, indicates that the view is an accessibility element. The default value\\nfor a \`Text\` element is \`true\`.\\n\\nSee the\\n[Accessibility guide](docs/accessibility.html#accessible-ios-android)\\nfor more information.",
      "defaultValue": \{
        "value": "true",
        "computed": false
      }
    },
    "adjustsFontSizeToFit": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "Specifies whether font should be scaled down automatically to fit given style constraints.\\n@platform ios"
    },
    "minimumFontScale": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "Specifies smallest possible scale a font can reach when adjustsFontSizeToFit is enabled. (values 0.01-1.0).\\n@platform ios"
    },
    "disabled": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "Specifies the disabled state of the text view for testing purposes\\n@platform android",
      "defaultValue": \{
        "value": "false",
        "computed": false
      }
    }
  },
  "fullDescription": "\\n\\n## Nested Text\\n\\nBoth iOS and Android allow you to display formatted text by annotating ranges of a string with specific formatting like bold or colored text (\`NSAttributedString\` on iOS, \`SpannableString\` on Android). In practice, this is very tedious. For React Native, we decided to use web paradigm for this where you can nest text to achieve the same effect.\\n\\n\`\`\`ReactNativeWebPlayer\\nimport React, \{ Component } from 'react';\\nimport \{ AppRegistry, Text } from 'react-native';\\n\\nexport default class BoldAndBeautiful extends Component \{\\n  render() \{\\n    return (\\n      <Text style=\{\{fontWeight: 'bold'}}>\\n        I am bold\\n        <Text style=\{\{color: 'red'}}>\\n          and red\\n        </Text>\\n      </Text>\\n    );\\n  }\\n}\\n\\n// skip this line if using Create React Native App\\nAppRegistry.registerComponent('AwesomeProject', () => BoldAndBeautiful);\\n\`\`\`\\n\\nBehind the scenes, React Native converts this to a flat \`NSAttributedString\` or \`SpannableString\` that contains the following information:\\n\\n\`\`\`javascript\\n\\"I am bold and red\\"\\n0-9: bold\\n9-17: bold, red\\n\`\`\`\\n\\n## Nested Views (iOS Only)\\n\\nOn iOS, you can nest views within your Text component. Here's an example:\\n\\n\`\`\`ReactNativeWebPlayer\\nimport React, \{ Component } from 'react';\\nimport \{ AppRegistry, Text, View } from 'react-native';\\n\\nexport default class BlueIsCool extends Component \{\\n  render() \{\\n    return (\\n      <Text>\\n        There is a blue square\\n        <View style=\{\{width: 50, height: 50, backgroundColor: 'steelblue'}} />\\n        in between my text.\\n      </Text>\\n    );\\n  }\\n}\\n\\n// skip this line if using Create React Native App\\nAppRegistry.registerComponent('AwesomeProject', () => BlueIsCool);\\n\`\`\`\\n\\n> In order to use this feature, you must give the view a \`width\` and a \`height\`.\\n\\n## Containers\\n\\nThe \`<Text>\` element is special relative to layout: everything inside is no longer using the flexbox layout but using text layout. This means that elements inside of a \`<Text>\` are no longer rectangles, but wrap when they see the end of the line.\\n\\n\`\`\`javascript\\n<Text>\\n  <Text>First part and </Text>\\n  <Text>second part</Text>\\n</Text>\\n// Text container: all the text flows as if it was one\\n// |First part |\\n// |and second |\\n// |part       |\\n\\n<View>\\n  <Text>First part and </Text>\\n  <Text>second part</Text>\\n</View>\\n// View container: each text is its own block\\n// |First part |\\n// |and        |\\n// |second part|\\n\`\`\`\\n\\n## Limited Style Inheritance\\n\\nOn the web, the usual way to set a font family and size for the entire document is to take advantage of inherited CSS properties like so:\\n\\n\`\`\`css\\n/* CSS, *not* React Native */\\nhtml \{\\n  font-family: 'lucida grande', tahoma, verdana, arial, sans-serif;\\n  font-size: 11px;\\n  color: #141823;\\n}\\n\`\`\`\\n\\nAll elements in the document will inherit this font unless they or one of their parents specifies a new rule.\\n\\nIn React Native, we are more strict about it: **you must wrap all the text nodes inside of a \`<Text>\` component**; you cannot have a text node directly under a \`<View>\`.\\n\\n\`\`\`javascript\\n// BAD: will raise exception, can't have a text node as child of a <View>\\n<View>\\n  Some text\\n</View>\\n\\n// GOOD\\n<View>\\n  <Text>\\n    Some text\\n  </Text>\\n</View>\\n\`\`\`\\n\\nYou also lose the ability to set up a default font for an entire subtree. The recommended way to use consistent fonts and sizes across your application is to create a component \`MyAppText\` that includes them and use this component across your app. You can also use this component to make more specific components like \`MyAppHeaderText\` for other kinds of text.\\n\\n\`\`\`javascript\\n<View>\\n  <MyAppText>Text styled with the default font for the entire application</MyAppText>\\n  <MyAppHeaderText>Text styled as a header</MyAppHeaderText>\\n</View>\\n\`\`\`\\n\\nAssuming that \`MyAppText\` is a component that simply renders out its children into a \`Text\` component with styling, then \`MyAppHeaderText\` can be defined as follows:\\n\\n\`\`\`javascript\\nclass MyAppHeaderText extends Component \{\\n  render() \{\\n    <MyAppText>\\n      <Text style=\{\{fontSize: 20}}>\\n        \{this.props.children}\\n      </Text>\\n    </MyAppText>\\n  }\\n}\\n\`\`\`\\n\\nComposing \`MyAppText\` in this way ensures that we get the styles from a top-level component, but leaves us the ability to add / override them in specific use cases.\\n\\nReact Native still has the concept of style inheritance, but limited to text subtrees. In this case, the second part will be both bold and red.\\n\\n\`\`\`javascript\\n<Text style=\{\{fontWeight: 'bold'}}>\\n  I am bold\\n  <Text style=\{\{color: 'red'}}>\\n    and red\\n  </Text>\\n</Text>\\n\`\`\`\\n\\nWe believe that this more constrained way to style text will yield better apps:\\n\\n- (Developer) React components are designed with strong isolation in mind: You should be able to drop a component anywhere in your application, trusting that as long as the props are the same, it will look and behave the same way. Text properties that could inherit from outside of the props would break this isolation.\\n\\n- (Implementor) The implementation of React Native is also simplified. We do not need to have a \`fontFamily\` field on every single element, and we do not need to potentially traverse the tree up to the root every time we display a text node. The style inheritance is only encoded inside of the native Text component and doesn't leak to other components or the system itself.\\n",
  "type": "component",
  "filepath": "Libraries/Text/Text.js",
  "componentName": "Text",
  "componentPlatform": "cross",
  "styles": \{
    "ViewStylePropTypes": \{
      "props": \{
        "backfaceVisibility": \{
          "type": \{
            "name": "enum",
            "value": [
              \{
                "value": "'visible'",
                "computed": false
              },
              \{
                "value": "'hidden'",
                "computed": false
              }
            ]
          },
          "required": false,
          "description": ""
        },
        "backgroundColor": \{
          "type": \{
            "name": "custom",
            "raw": "ColorPropType"
          },
          "required": false,
          "description": ""
        },
        "borderColor": \{
          "type": \{
            "name": "custom",
            "raw": "ColorPropType"
          },
          "required": false,
          "description": ""
        },
        "borderTopColor": \{
          "type": \{
            "name": "custom",
            "raw": "ColorPropType"
          },
          "required": false,
          "description": ""
        },
        "borderRightColor": \{
          "type": \{
            "name": "custom",
            "raw": "ColorPropType"
          },
          "required": false,
          "description": ""
        },
        "borderBottomColor": \{
          "type": \{
            "name": "custom",
            "raw": "ColorPropType"
          },
          "required": false,
          "description": ""
        },
        "borderLeftColor": \{
          "type": \{
            "name": "custom",
            "raw": "ColorPropType"
          },
          "required": false,
          "description": ""
        },
        "borderRadius": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "borderTopLeftRadius": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "borderTopRightRadius": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "borderBottomLeftRadius": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "borderBottomRightRadius": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "borderStyle": \{
          "type": \{
            "name": "enum",
            "value": [
              \{
                "value": "'solid'",
                "computed": false
              },
              \{
                "value": "'dotted'",
                "computed": false
              },
              \{
                "value": "'dashed'",
                "computed": false
              }
            ]
          },
          "required": false,
          "description": ""
        },
        "borderWidth": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "borderTopWidth": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "borderRightWidth": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "borderBottomWidth": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "borderLeftWidth": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "opacity": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "elevation": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": "(Android-only) Sets the elevation of a view, using Android's underlying\\n[elevation API](https://developer.android.com/training/material/shadows-clipping.html#Elevation).\\nThis adds a drop shadow to the item and affects z-order for overlapping views.\\nOnly supported on Android 5.0+, has no effect on earlier versions.\\n@platform android"
        }
      },
      "composes": [
        "LayoutPropTypes",
        "ShadowPropTypesIOS",
        "TransformPropTypes"
      ]
    },
    "TextStylePropTypes": \{
      "props": \{
        "color": \{
          "type": \{
            "name": "custom",
            "raw": "ColorPropType"
          },
          "required": false,
          "description": ""
        },
        "fontFamily": \{
          "type": \{
            "name": "string"
          },
          "required": false,
          "description": ""
        },
        "fontSize": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "fontStyle": \{
          "type": \{
            "name": "enum",
            "value": [
              \{
                "value": "'normal'",
                "computed": false
              },
              \{
                "value": "'italic'",
                "computed": false
              }
            ]
          },
          "required": false,
          "description": ""
        },
        "fontWeight": \{
          "type": \{
            "name": "enum",
            "value": [
              \{
                "value": "\\"normal\\"",
                "computed": false
              },
              \{
                "value": "'bold'",
                "computed": false
              },
              \{
                "value": "'100'",
                "computed": false
              },
              \{
                "value": "'200'",
                "computed": false
              },
              \{
                "value": "'300'",
                "computed": false
              },
              \{
                "value": "'400'",
                "computed": false
              },
              \{
                "value": "'500'",
                "computed": false
              },
              \{
                "value": "'600'",
                "computed": false
              },
              \{
                "value": "'700'",
                "computed": false
              },
              \{
                "value": "'800'",
                "computed": false
              },
              \{
                "value": "'900'",
                "computed": false
              }
            ]
          },
          "required": false,
          "description": "Specifies font weight. The values 'normal' and 'bold' are supported for\\nmost fonts. Not all fonts have a variant for each of the numeric values,\\nin that case the closest one is chosen."
        },
        "fontVariant": \{
          "type": \{
            "name": "arrayOf",
            "value": \{
              "name": "enum",
              "value": [
                \{
                  "value": "'small-caps'",
                  "computed": false
                },
                \{
                  "value": "'oldstyle-nums'",
                  "computed": false
                },
                \{
                  "value": "'lining-nums'",
                  "computed": false
                },
                \{
                  "value": "'tabular-nums'",
                  "computed": false
                },
                \{
                  "value": "'proportional-nums'",
                  "computed": false
                }
              ]
            }
          },
          "required": false,
          "description": "@platform ios"
        },
        "textShadowOffset": \{
          "type": \{
            "name": "shape",
            "value": \{
              "width": \{
                "name": "number",
                "required": false
              },
              "height": \{
                "name": "number",
                "required": false
              }
            }
          },
          "required": false,
          "description": ""
        },
        "textShadowRadius": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "textShadowColor": \{
          "type": \{
            "name": "custom",
            "raw": "ColorPropType"
          },
          "required": false,
          "description": ""
        },
        "letterSpacing": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": "@platform ios"
        },
        "lineHeight": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "textAlign": \{
          "type": \{
            "name": "enum",
            "value": [
              \{
                "value": "\\"auto\\"",
                "computed": false
              },
              \{
                "value": "'left'",
                "computed": false
              },
              \{
                "value": "'right'",
                "computed": false
              },
              \{
                "value": "'center'",
                "computed": false
              },
              \{
                "value": "'justify'",
                "computed": false
              }
            ]
          },
          "required": false,
          "description": "Specifies text alignment. The value 'justify' is only supported on iOS and\\nfallbacks to \`left\` on Android."
        },
        "textAlignVertical": \{
          "type": \{
            "name": "enum",
            "value": [
              \{
                "value": "\\"auto\\"",
                "computed": false
              },
              \{
                "value": "'top'",
                "computed": false
              },
              \{
                "value": "'bottom'",
                "computed": false
              },
              \{
                "value": "'center'",
                "computed": false
              }
            ]
          },
          "required": false,
          "description": "@platform android"
        },
        "includeFontPadding": \{
          "type": \{
            "name": "bool"
          },
          "required": false,
          "description": "Set to \`false\` to remove extra font padding intended to make space for certain ascenders / descenders.\\nWith some fonts, this padding can make text look slightly misaligned when centered vertically.\\nFor best results also set \`textAlignVertical\` to \`center\`. Default is true.\\n@platform android"
        },
        "textDecorationLine": \{
          "type": \{
            "name": "enum",
            "value": [
              \{
                "value": "\\"none\\"",
                "computed": false
              },
              \{
                "value": "'underline'",
                "computed": false
              },
              \{
                "value": "'line-through'",
                "computed": false
              },
              \{
                "value": "'underline line-through'",
                "computed": false
              }
            ]
          },
          "required": false,
          "description": ""
        },
        "textDecorationStyle": \{
          "type": \{
            "name": "enum",
            "value": [
              \{
                "value": "\\"solid\\"",
                "computed": false
              },
              \{
                "value": "'double'",
                "computed": false
              },
              \{
                "value": "'dotted'",
                "computed": false
              },
              \{
                "value": "'dashed'",
                "computed": false
              }
            ]
          },
          "required": false,
          "description": "@platform ios"
        },
        "textDecorationColor": \{
          "type": \{
            "name": "custom",
            "raw": "ColorPropType"
          },
          "required": false,
          "description": "@platform ios"
        },
        "writingDirection": \{
          "type": \{
            "name": "enum",
            "value": [
              \{
                "value": "\\"auto\\"",
                "computed": false
              },
              \{
                "value": "'ltr'",
                "computed": false
              },
              \{
                "value": "'rtl'",
                "computed": false
              }
            ]
          },
          "required": false,
          "description": "@platform ios"
        }
      },
      "composes": [
        "ViewStylePropTypes"
      ]
    },
    "ImageStylePropTypes": \{
      "props": \{
        "resizeMode": \{
          "type": \{
            "name": "enum",
            "computed": true,
            "value": "Object.keys(ImageResizeMode)"
          },
          "required": false,
          "description": ""
        },
        "backfaceVisibility": \{
          "type": \{
            "name": "enum",
            "value": [
              \{
                "value": "'visible'",
                "computed": false
              },
              \{
                "value": "'hidden'",
                "computed": false
              }
            ]
          },
          "required": false,
          "description": ""
        },
        "backgroundColor": \{
          "type": \{
            "name": "custom",
            "raw": "ColorPropType"
          },
          "required": false,
          "description": ""
        },
        "borderColor": \{
          "type": \{
            "name": "custom",
            "raw": "ColorPropType"
          },
          "required": false,
          "description": ""
        },
        "borderWidth": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "borderRadius": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "overflow": \{
          "type": \{
            "name": "enum",
            "value": [
              \{
                "value": "'visible'",
                "computed": false
              },
              \{
                "value": "'hidden'",
                "computed": false
              }
            ]
          },
          "required": false,
          "description": ""
        },
        "tintColor": \{
          "type": \{
            "name": "custom",
            "raw": "ColorPropType"
          },
          "required": false,
          "description": "Changes the color of all the non-transparent pixels to the tintColor."
        },
        "opacity": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "overlayColor": \{
          "type": \{
            "name": "string"
          },
          "required": false,
          "description": "When the image has rounded corners, specifying an overlayColor will\\ncause the remaining space in the corners to be filled with a solid color.\\nThis is useful in cases which are not supported by the Android\\nimplementation of rounded corners:\\n  - Certain resize modes, such as 'contain'\\n  - Animated GIFs\\n\\nA typical way to use this prop is with images displayed on a solid\\nbackground and setting the \`overlayColor\` to the same color\\nas the background.\\n\\nFor details of how this works under the hood, see\\nhttp://frescolib.org/docs/rounded-corners-and-circles.html\\n\\n@platform android"
        },
        "borderTopLeftRadius": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "borderTopRightRadius": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "borderBottomLeftRadius": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        },
        "borderBottomRightRadius": \{
          "type": \{
            "name": "number"
          },
          "required": false,
          "description": ""
        }
      },
      "composes": [
        "LayoutPropTypes",
        "ShadowPropTypesIOS",
        "TransformPropTypes"
      ]
    }
  }
}`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"text","title":"Text","layout":"autodocs","category":"components","permalink":"docs/text.html","platform":"cross","next":"textinput","previous":"tabbarios-item","sidebar":true,"path":"Libraries/Text/Text.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;