/**
 * @generated
 */
var React = require("React");
var Layout = require("AutodocsLayout");
var content = `\{
  "description": "A performant interface for rendering sectioned lists, supporting the most handy features:\\n\\n - Fully cross-platform.\\n - Configurable viewability callbacks.\\n - List header support.\\n - List footer support.\\n - Item separator support.\\n - Section header support.\\n - Section separator support.\\n - Heterogeneous data and item rendering support.\\n - Pull to Refresh.\\n - Scroll loading.\\n\\nIf you don't need section support and want a simpler interface, use\\n[\`<FlatList>\`](/react-native/docs/flatlist.html).\\n\\nSimple Examples:\\n\\n    <SectionList\\n      renderItem=\{(\{item}) => <ListItem title=\{item.title} />}\\n      renderSectionHeader=\{(\{section}) => <H1 title=\{section.title} />}\\n      sections=\{[ // homogenous rendering between sections\\n        \{data: [...], title: ...},\\n        \{data: [...], title: ...},\\n        \{data: [...], title: ...},\\n      ]}\\n    />\\n\\n    <SectionList\\n      sections=\{[ // heterogeneous rendering between sections\\n        \{data: [...], title: ..., renderItem: ...},\\n        \{data: [...], title: ..., renderItem: ...},\\n        \{data: [...], title: ..., renderItem: ...},\\n      ]}\\n    />\\n\\nThis is a convenience wrapper around [\`<VirtualizedList>\`](docs/virtualizedlist.html),\\nand thus inherits its props (as well as those of \`ScrollView\`) that aren't explicitly listed\\nhere, along with the following caveats:\\n\\n- Internal state is not preserved when content scrolls out of the render window. Make sure all\\n  your data is captured in the item data or external stores like Flux, Redux, or Relay.\\n- This is a \`PureComponent\` which means that it will not re-render if \`props\` remain shallow-\\n  equal. Make sure that everything your \`renderItem\` function depends on is passed as a prop\\n  (e.g. \`extraData\`) that is not \`===\` after updates, otherwise your UI may not update on\\n  changes. This includes the \`data\` prop and parent component state.\\n- In order to constrain memory and enable smooth scrolling, content is rendered asynchronously\\n  offscreen. This means it's possible to scroll faster than the fill rate and momentarily see\\n  blank content. This is a tradeoff that can be adjusted to suit the needs of each application,\\n  and we are working on improving it behind the scenes.\\n- By default, the list looks for a \`key\` prop on each item and uses that for the React key.\\n  Alternatively, you can provide a custom \`keyExtractor\` prop.",
  "methods": [
    \{
      "name": "scrollToLocation",
      "docblock": "Scrolls to the item at the specified \`sectionIndex\` and \`itemIndex\` (within the section)\\npositioned in the viewable area such that \`viewPosition\` 0 places it at the top (and may be\\ncovered by a sticky header), 1 at the bottom, and 0.5 centered in the middle. \`viewOffset\` is a\\nfixed number of pixels to offset the final target position, e.g. to compensate for sticky\\nheaders.\\n\\nNote: cannot scroll to locations outside the render window without specifying the\\n\`getItemLayout\` prop.",
      "modifiers": [],
      "params": [
        \{
          "name": "params",
          "type": \{
            "names": [
              "object"
            ]
          }
        }
      ],
      "returns": null,
      "description": "Scrolls to the item at the specified \`sectionIndex\` and \`itemIndex\` (within the section)\\npositioned in the viewable area such that \`viewPosition\` 0 places it at the top (and may be\\ncovered by a sticky header), 1 at the bottom, and 0.5 centered in the middle. \`viewOffset\` is a\\nfixed number of pixels to offset the final target position, e.g. to compensate for sticky\\nheaders.\\n\\nNote: cannot scroll to locations outside the render window without specifying the\\n\`getItemLayout\` prop."
    },
    \{
      "name": "recordInteraction",
      "docblock": "Tells the list an interaction has occured, which should trigger viewability calculations, e.g.\\nif \`waitForInteractions\` is true and the user has not scrolled. This is typically called by\\ntaps on items or by navigation actions.",
      "modifiers": [],
      "params": [],
      "returns": null,
      "description": "Tells the list an interaction has occured, which should trigger viewability calculations, e.g.\\nif \`waitForInteractions\` is true and the user has not scrolled. This is typically called by\\ntaps on items or by navigation actions."
    },
    \{
      "name": "flashScrollIndicators",
      "docblock": "Displays the scroll indicators momentarily.\\n\\n@platform ios",
      "modifiers": [],
      "params": [],
      "returns": null,
      "description": "Displays the scroll indicators momentarily."
    }
  ],
  "props": \{
    "sections": \{
      "flowType": \{
        "name": "$ReadOnlyArray",
        "elements": [
          \{
            "name": "SectionT"
          }
        ],
        "raw": "$ReadOnlyArray<SectionT>"
      },
      "required": true,
      "description": "The actual data to render, akin to the \`data\` prop in [\`<FlatList>\`](/react-native/docs/flatlist.html).\\n\\nGeneral shape:\\n\\n    sections: $ReadOnlyArray<\{\\n      data: $ReadOnlyArray<SectionItem>,\\n      renderItem?: (\{item: SectionItem, ...}) => ?React.Element<*>,\\n      ItemSeparatorComponent?: ?ReactClass<\{highlighted: boolean, ...}>,\\n    }>"
    },
    "renderItem": \{
      "flowType": \{
        "name": "signature",
        "type": "function",
        "raw": "(info: \{\\n  item: Item,\\n  index: number,\\n  section: SectionT,\\n  separators: \{\\n    highlight: () => void,\\n    unhighlight: () => void,\\n    updateProps: (select: 'leading' | 'trailing', newProps: Object) => void,\\n  },\\n}) => ?React.Element<any>",
        "signature": \{
          "arguments": [
            \{
              "name": "info",
              "type": \{
                "name": "signature",
                "type": "object",
                "raw": "\{\\n  item: Item,\\n  index: number,\\n  section: SectionT,\\n  separators: \{\\n    highlight: () => void,\\n    unhighlight: () => void,\\n    updateProps: (select: 'leading' | 'trailing', newProps: Object) => void,\\n  },\\n}",
                "signature": \{
                  "properties": [
                    \{
                      "key": "item",
                      "value": \{
                        "name": "any",
                        "required": true
                      }
                    },
                    \{
                      "key": "index",
                      "value": \{
                        "name": "number",
                        "required": true
                      }
                    },
                    \{
                      "key": "section",
                      "value": \{
                        "name": "SectionT",
                        "required": true
                      }
                    },
                    \{
                      "key": "separators",
                      "value": \{
                        "name": "signature",
                        "type": "object",
                        "raw": "\{\\n  highlight: () => void,\\n  unhighlight: () => void,\\n  updateProps: (select: 'leading' | 'trailing', newProps: Object) => void,\\n}",
                        "signature": \{
                          "properties": [
                            \{
                              "key": "highlight",
                              "value": \{
                                "name": "signature",
                                "type": "function",
                                "raw": "() => void",
                                "signature": \{
                                  "arguments": [],
                                  "return": \{
                                    "name": "void"
                                  }
                                },
                                "required": true
                              }
                            },
                            \{
                              "key": "unhighlight",
                              "value": \{
                                "name": "signature",
                                "type": "function",
                                "raw": "() => void",
                                "signature": \{
                                  "arguments": [],
                                  "return": \{
                                    "name": "void"
                                  }
                                },
                                "required": true
                              }
                            },
                            \{
                              "key": "updateProps",
                              "value": \{
                                "name": "signature",
                                "type": "function",
                                "raw": "(select: 'leading' | 'trailing', newProps: Object) => void",
                                "signature": \{
                                  "arguments": [
                                    \{
                                      "name": "select",
                                      "type": \{
                                        "name": "union",
                                        "raw": "'leading' | 'trailing'",
                                        "elements": [
                                          \{
                                            "name": "literal",
                                            "value": "'leading'"
                                          },
                                          \{
                                            "name": "literal",
                                            "value": "'trailing'"
                                          }
                                        ]
                                      }
                                    },
                                    \{
                                      "name": "newProps",
                                      "type": \{
                                        "name": "Object"
                                      }
                                    }
                                  ],
                                  "return": \{
                                    "name": "void"
                                  }
                                },
                                "required": true
                              }
                            }
                          ]
                        },
                        "required": true
                      }
                    }
                  ]
                }
              }
            }
          ],
          "return": \{
            "elements": [
              \{
                "name": "any"
              }
            ],
            "raw": "React.Element<any>",
            "nullable": true
          }
        }
      },
      "required": true,
      "description": "Default renderer for every item in every section. Can be over-ridden on a per-section basis."
    },
    "ItemSeparatorComponent": \{
      "flowType": \{
        "name": "ReactClass",
        "elements": [
          \{
            "name": "any"
          }
        ],
        "raw": "ReactClass<any>",
        "nullable": true
      },
      "required": false,
      "description": "Rendered in between each item, but not at the top or bottom. By default, \`highlighted\`,\\n\`section\`, and \`[leading/trailing][Item/Separator]\` props are provided. \`renderItem\` provides\\n\`separators.highlight\`/\`unhighlight\` which will update the \`highlighted\` prop, but you can also\\nadd custom props with \`separators.updateProps\`."
    },
    "ListHeaderComponent": \{
      "flowType": \{
        "name": "union",
        "raw": "(ReactClass<any> | React.Element<any>)",
        "elements": [
          \{
            "name": "ReactClass",
            "elements": [
              \{
                "name": "any"
              }
            ],
            "raw": "ReactClass<any>"
          },
          \{
            "elements": [
              \{
                "name": "any"
              }
            ],
            "raw": "React.Element<any>"
          }
        ],
        "nullable": true
      },
      "required": false,
      "description": "Rendered at the very beginning of the list. Can be a React Component Class, a render function, or\\na rendered element."
    },
    "ListEmptyComponent": \{
      "flowType": \{
        "name": "union",
        "raw": "(ReactClass<any> | React.Element<any>)",
        "elements": [
          \{
            "name": "ReactClass",
            "elements": [
              \{
                "name": "any"
              }
            ],
            "raw": "ReactClass<any>"
          },
          \{
            "elements": [
              \{
                "name": "any"
              }
            ],
            "raw": "React.Element<any>"
          }
        ],
        "nullable": true
      },
      "required": false,
      "description": "Rendered when the list is empty. Can be a React Component Class, a render function, or\\na rendered element."
    },
    "ListFooterComponent": \{
      "flowType": \{
        "name": "union",
        "raw": "(ReactClass<any> | React.Element<any>)",
        "elements": [
          \{
            "name": "ReactClass",
            "elements": [
              \{
                "name": "any"
              }
            ],
            "raw": "ReactClass<any>"
          },
          \{
            "elements": [
              \{
                "name": "any"
              }
            ],
            "raw": "React.Element<any>"
          }
        ],
        "nullable": true
      },
      "required": false,
      "description": "Rendered at the very end of the list. Can be a React Component Class, a render function, or\\na rendered element."
    },
    "SectionSeparatorComponent": \{
      "flowType": \{
        "name": "ReactClass",
        "elements": [
          \{
            "name": "any"
          }
        ],
        "raw": "ReactClass<any>",
        "nullable": true
      },
      "required": false,
      "description": "Rendered at the top and bottom of each section (note this is different from\\n\`ItemSeparatorComponent\` which is only rendered between items). These are intended to separate\\nsections from the headers above and below and typically have the same highlight response as\\n\`ItemSeparatorComponent\`. Also receives \`highlighted\`, \`[leading/trailing][Item/Separator]\`,\\nand any custom props from \`separators.updateProps\`."
    },
    "extraData": \{
      "flowType": \{
        "name": "any"
      },
      "required": false,
      "description": "A marker property for telling the list to re-render (since it implements \`PureComponent\`). If\\nany of your \`renderItem\`, Header, Footer, etc. functions depend on anything outside of the\\n\`data\` prop, stick it here and treat it immutably."
    },
    "initialNumToRender": \{
      "flowType": \{
        "name": "number"
      },
      "required": true,
      "description": "How many items to render in the initial batch. This should be enough to fill the screen but not\\nmuch more. Note these items will never be unmounted as part of the windowed rendering in order\\nto improve perceived performance of scroll-to-top actions."
    },
    "inverted": \{
      "flowType": \{
        "name": "boolean",
        "nullable": true
      },
      "required": false,
      "description": "Reverses the direction of scroll. Uses scale transforms of -1."
    },
    "keyExtractor": \{
      "flowType": \{
        "name": "signature",
        "type": "function",
        "raw": "(item: Item, index: number) => string",
        "signature": \{
          "arguments": [
            \{
              "name": "item",
              "type": \{
                "name": "any"
              }
            },
            \{
              "name": "index",
              "type": \{
                "name": "number"
              }
            }
          ],
          "return": \{
            "name": "string"
          }
        }
      },
      "required": true,
      "description": "Used to extract a unique key for a given item at the specified index. Key is used for caching\\nand as the react key to track item re-ordering. The default extractor checks item.key, then\\nfalls back to using the index, like react does. Note that this sets keys for each item, but \\neach overall section still needs its own key."
    },
    "onEndReached": \{
      "flowType": \{
        "name": "signature",
        "type": "function",
        "raw": "(info: \{distanceFromEnd: number}) => void",
        "signature": \{
          "arguments": [
            \{
              "name": "info",
              "type": \{
                "name": "signature",
                "type": "object",
                "raw": "\{distanceFromEnd: number}",
                "signature": \{
                  "properties": [
                    \{
                      "key": "distanceFromEnd",
                      "value": \{
                        "name": "number",
                        "required": true
                      }
                    }
                  ]
                }
              }
            }
          ],
          "return": \{
            "name": "void"
          }
        },
        "nullable": true
      },
      "required": false,
      "description": "Called once when the scroll position gets within \`onEndReachedThreshold\` of the rendered\\ncontent."
    },
    "onEndReachedThreshold": \{
      "flowType": \{
        "name": "number",
        "nullable": true
      },
      "required": false,
      "description": "How far from the end (in units of visible length of the list) the bottom edge of the\\nlist must be from the end of the content to trigger the \`onEndReached\` callback.\\nThus a value of 0.5 will trigger \`onEndReached\` when the end of the content is\\nwithin half the visible length of the list."
    },
    "onRefresh": \{
      "flowType": \{
        "name": "signature",
        "type": "function",
        "raw": "() => void",
        "signature": \{
          "arguments": [],
          "return": \{
            "name": "void"
          }
        },
        "nullable": true
      },
      "required": false,
      "description": "If provided, a standard RefreshControl will be added for \\"Pull to Refresh\\" functionality. Make\\nsure to also set the \`refreshing\` prop correctly."
    },
    "onViewableItemsChanged": \{
      "flowType": \{
        "name": "signature",
        "type": "function",
        "raw": "(info: \{\\n  viewableItems: Array<ViewToken>,\\n  changed: Array<ViewToken>,\\n}) => void",
        "signature": \{
          "arguments": [
            \{
              "name": "info",
              "type": \{
                "name": "signature",
                "type": "object",
                "raw": "\{\\n  viewableItems: Array<ViewToken>,\\n  changed: Array<ViewToken>,\\n}",
                "signature": \{
                  "properties": [
                    \{
                      "key": "viewableItems",
                      "value": \{
                        "name": "Array",
                        "elements": [
                          \{
                            "name": "ViewToken"
                          }
                        ],
                        "raw": "Array<ViewToken>",
                        "required": true
                      }
                    },
                    \{
                      "key": "changed",
                      "value": \{
                        "name": "Array",
                        "elements": [
                          \{
                            "name": "ViewToken"
                          }
                        ],
                        "raw": "Array<ViewToken>",
                        "required": true
                      }
                    }
                  ]
                }
              }
            }
          ],
          "return": \{
            "name": "void"
          }
        },
        "nullable": true
      },
      "required": false,
      "description": "Called when the viewability of rows changes, as defined by the\\n\`viewabilityConfig\` prop."
    },
    "refreshing": \{
      "flowType": \{
        "name": "boolean",
        "nullable": true
      },
      "required": false,
      "description": "Set this true while waiting for new data from a refresh."
    },
    "removeClippedSubviews": \{
      "flowType": \{
        "name": "boolean"
      },
      "required": false,
      "description": "Note: may have bugs (missing content) in some circumstances - use at your own risk.\\n\\nThis may improve scroll performance for large lists."
    },
    "renderSectionHeader": \{
      "flowType": \{
        "name": "signature",
        "type": "function",
        "raw": "(info: \{section: SectionT}) => ?React.Element<any>",
        "signature": \{
          "arguments": [
            \{
              "name": "info",
              "type": \{
                "name": "signature",
                "type": "object",
                "raw": "\{section: SectionT}",
                "signature": \{
                  "properties": [
                    \{
                      "key": "section",
                      "value": \{
                        "name": "SectionT",
                        "required": true
                      }
                    }
                  ]
                }
              }
            }
          ],
          "return": \{
            "elements": [
              \{
                "name": "any"
              }
            ],
            "raw": "React.Element<any>",
            "nullable": true
          }
        },
        "nullable": true
      },
      "required": false,
      "description": "Rendered at the top of each section. These stick to the top of the \`ScrollView\` by default on\\niOS. See \`stickySectionHeadersEnabled\`."
    },
    "renderSectionFooter": \{
      "flowType": \{
        "name": "signature",
        "type": "function",
        "raw": "(info: \{section: SectionT}) => ?React.Element<any>",
        "signature": \{
          "arguments": [
            \{
              "name": "info",
              "type": \{
                "name": "signature",
                "type": "object",
                "raw": "\{section: SectionT}",
                "signature": \{
                  "properties": [
                    \{
                      "key": "section",
                      "value": \{
                        "name": "SectionT",
                        "required": true
                      }
                    }
                  ]
                }
              }
            }
          ],
          "return": \{
            "elements": [
              \{
                "name": "any"
              }
            ],
            "raw": "React.Element<any>",
            "nullable": true
          }
        },
        "nullable": true
      },
      "required": false,
      "description": "Rendered at the bottom of each section."
    },
    "stickySectionHeadersEnabled": \{
      "flowType": \{
        "name": "boolean"
      },
      "required": false,
      "description": "Makes section headers stick to the top of the screen until the next one pushes it off. Only\\nenabled by default on iOS because that is the platform standard there.",
      "defaultValue": \{
        "value": "Platform.OS === 'ios'",
        "computed": false
      }
    },
    "legacyImplementation": \{
      "flowType": \{
        "name": "boolean",
        "nullable": true
      },
      "required": false,
      "description": ""
    }
  },
  "type": "component",
  "filepath": "Libraries/Lists/SectionList.js",
  "componentName": "SectionList",
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
      <Layout metadata={{"id":"sectionlist","title":"SectionList","layout":"autodocs","category":"components","permalink":"docs/sectionlist.html","platform":"cross","next":"segmentedcontrolios","previous":"scrollview","sidebar":true,"path":"Libraries/Lists/SectionList.js","filename":null}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;