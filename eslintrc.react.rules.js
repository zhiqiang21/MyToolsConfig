module.exports = {

    // react 文件Lint rules
    'rules': {
        // "react/default-props-match-prop-types": "error",
        "react/display-name": "off",
        "react/forbid-component-props": "off",
        "react/forbid-elements": "off",
        "react/forbid-foreign-prop-types": "warn",
        "react/forbid-prop-types": "off",
        "react/jsx-boolean-value": "error",
        "react/jsx-closing-bracket-location": "error",
        "react/jsx-curly-spacing": "error",
        "react/jsx-equals-spacing": "error",
        "react/jsx-filename-extension": ["error", {"extensions": [".js", ".jsx", ".es"]}],
        "react/jsx-first-prop-new-line": "error",
        "react/jsx-handler-names": "off",
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-indent": ["error", 2],
        "react/jsx-key": "error",
        "react/jsx-max-props-per-line": ["error", {"when": "multiline", "maximum": 1}],
        "react/jsx-no-bind": ["warn", {"ignoreRefs": true}],
        "react/jsx-no-comment-textnodes": "warn",
        "react/jsx-no-duplicate-props": "error",
        "react/jsx-no-literals": "off",
        "react/jsx-no-target-blank": "error",
        "react/jsx-no-undef": "error",
        "react/jsx-pascal-case": "error",
        "react/jsx-sort-props": "off",
        "react/jsx-tag-spacing": "error",
        "react/jsx-uses-react": "off",
        "react/jsx-uses-vars": "error",
        "react/jsx-wrap-multilines": "error",
        "react/no-array-index-key": "error",
        "react/no-children-prop": "error",
        "react/no-danger-with-children": "error",
        "react/no-danger": "warn",
        "react/no-deprecated": "error",
        "react/no-did-mount-set-state": "error",
        "react/no-did-update-set-state": "error",
        "react/no-direct-mutation-state": "error",
        "react/no-find-dom-node": "error",
        "react/no-is-mounted": "error",
        "react/no-multi-comp": ["error", {"ignoreStateless": true}],
        "react/no-render-return-value": "error",
        "react/no-set-state": "off",
        "react/no-string-refs": "error",
        "react/no-unescaped-entities": "error",
        "react/no-unknown-property": "error",
        "react/no-unused-prop-types": "warn",
        "react/no-will-update-set-state": "error",
        "react/prefer-es6-class": "error",
        "react/prefer-stateless-function": "error",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "react/require-default-props": "error",
        "react/require-optimization": "off",
        "react/require-render-return": "error",
        "react/self-closing-comp": ["error", {"html": false}],
        "react/sort-prop-types": "off",
        "react/style-prop-object": "error",
        "react/void-dom-elements-no-children": "error",
        // 按照react的声明周期排列代码，以方便能够快速的定位代码和代码的执行顺序
        "react/sort-comp": [
            2,
            {
                "order": [
                    "static-properties",
                    "static-methods",
                    "lifecycle",
                    "everything-else",
                    "render"
                ],
                "groups": {
                    "static-properties": [
                        "displayName",
                        "propTypes",
                        "contextTypes",
                        "childContextTypes",
                        "mixins",
                        "statics"
                    ],
                    "lifecycle": [
                        "constructor",
                        "getDefaultProps",
                        "getInitialState",
                        "state",
                        "getChildContext",
                        "componentWillMount",
                        "componentDidMount",
                        "componentWillReceiveProps",
                        "shouldComponentUpdate",
                        "componentWillUpdate",
                        "componentDidUpdate",
                        "componentWillUnmount"
                    ]
                }
            }
        ]
    }
};
