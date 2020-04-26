module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true,
        'jquery': true,
        'commonjs': true
    },
    // 'parser': 'babel-eslint',
    'extends': [
        'eslint:recommended',
        // vue文件使用 eslint
        // 'plugin:vue/essential'
    ],
    'parserOptions': {
        "parser": "babel-eslint",
        'ecmaVersion': 6,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true
        }
    },
    'plugins': [
        "babel",
        // 配置react 插件lint react
        // "react",
        // "vue"
    ],
    'rules': {
        // 控制几个空格一个缩进
        'indent': ['error', 4],

        // 双引号错误提示
        'quotes': [
            'warn',
            'single',
            { 'allowTemplateLiterals': true }
        ],

        // 空格和tab混用
        'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],

        // 空语句块
        'no-empty': ['error', {
            'allowEmptyCatch': true // 允许catch语句中空语句
        }],

        // 变量声明后出现空行
        "newline-after-var": ["warn", "always"],

        // 分号
        'semi': ['warn', 'always'],

        // 分号前后是否有空格
        "semi-spacing": ["error", { "before": false, "after": true }],

        // 没有使用的变量
        'no-unused-vars': ['error', {
            // 不需要检测的变量，支持正则
            "varsIgnorePattern": "React"
        }],

        // 禁止在代码中出现console
        'no-console': ['error', {
            allow: ['warn', 'error', 'dir', 'log']
        }],
        'no-alert': ['warn'],

        // es6 模版字符串中不出现空格
        'template-curly-spacing': ['error', 'never'],

        // 禁止花括号使用空格
        'object-curly-spacing': ['error', 'never', { 'objectsInObjects': true }],

        // 在数组元素的开始盒末尾不使用空格
        'array-bracket-spacing': ['error', 'never'],

        // 在开始注释的地方后出现一个空格
        'spaced-comment': ['error', 'always', { 'exceptions': ['-', '+', '/'] }],

        // 构造函数中的super调用
        'constructor-super': 'error',

        // 函数括号之前是否有空格
        'space-before-function-paren': ['error', {
            'anonymous': 'always',
            'named': 'always',
            'asyncArrow': 'always'
        }],

        // 禁止或强制圆括号内的空格
        'space-in-parens': ['error', 'never'],

        // 要求中缀操作符周围有空格
        'space-infix-ops': 'error',

        // 不允许出现debugger
        "no-debugger": "off",

        // 要求对象字面量属性都使用引号
        // "quote-props": ["error", "always"],

        // 将对像的属性分行显示
        "object-property-newline": ["error", { "allowAllPropertiesOnSameLine": false }],

        // 配置对象属性是否自动换行对象个数 >= 2是自动换行
        "object-curly-newline": ["error", {
            "ObjectExpression": {
                "multiline": true,
                "minProperties": 3
            },
            "ObjectPattern": { "multiline": true },
            "ImportDeclaration": "never",
            "ExportDeclaration": {
                "multiline": true,
                "minProperties": 3
            }
        }],

        //"array-bracket-newline": ["warn", { "multiline": true }],

        // 强制数组方括号中使用一致的空格
        "array-bracket-spacing": ["error", "never"],

        // 强制数组方法的回调函数中有 return 语句
        "array-callback-return": "error",

        // 要求箭头函数体使用大括号
        "arrow-body-style": "off",

        // 要求箭头函数的参数使用圆括号
        "arrow-parens": ["error", "as-needed"],

        // 箭头函数前后有空格
        "arrow-spacing": "error",

        // 强制把变量的使用限制在其定义的作用域范围内
        "block-scoped-var": "warn",

        // 强制在但行代码块使用一致的空格
        "block-spacing": ["error", "never"],

        // 强制在代码块中使用一致的大括号风格 不允许开括号和闭括号在同一行
        "brace-style": ["error", "1tbs", { "allowSingleLine": false }],

        // nodejs中的一些回掉函数应该强制使用return
        "callback-return": ["error", [
            "done",
            "send.error",
            "send.success"
        ]],

        // 强制使用骆驼拼写法命名约定
        "camelcase": ["error", {properties: "never"}],

        // 强制或禁止一个注释的第一个字母大写
        "capitalized-comments": "off",
        "class-methods-use-this": "off",

        // 要求或禁止末尾逗号
        "comma-dangle": ["error", "never"],

        // 强制在逗号前后使用一致的空格
        "comma-spacing": ["error", { "before": false, "after": true }],

        // 强制使用一致的逗号风格
        "comma-style": ["error", "last"],

        // 此规则目的在于通过在项目中设置一个圈复杂度阈值来控制代码的复杂度
        //"complexity": ["warn", 10],

        // 强制在计算的属性的方括号中使用一致的空格
        "computed-property-spacing": ["error", "never"],

        //要求 return 语句要么总是指定返回的值，要么不指定
        //"consistent-return": ["error", { "treatUndefinedAsUnspecified": true }],

        // 当获取当前执行环境的上下文时，强制使用一致的命名
        "consistent-this": "off",

        // 要求在构造函数中有 super() 的调用
        "constructor-super": "error",

        // 强制所有控制语句使用一致的括号风格
        "curly": ["error", "multi-line"],

        // 要求 switch 语句中有 default 分支
        "default-case": "off",

        // 强制在点号之前和之后一致的换行
        "dot-location": ["error", "property"],

        // 强制尽可能地使用点号
        // "dot-notation": ["error", { "allowKeywords": false }],

        //要求或禁止文件末尾存在空行
        "eol-last": ["error", "always"],

        // 要求使用 === 和 !==
        // "eqeqeq": ["error", "always", { "null": "ignore" }],

         // enforce “for” loop update clause moving the counter in the right direction.
        "for-direction": "off",
        "func-call-spacing": ["error", "never"],
        "func-name-matching": "off",
        "func-style": "off",
        "generator-star-spacing": ["error", { "before": false, "after": true }],

        // require语句放在一个文件的首部
        // "global-require": "warn",
        "guard-for-in": "warn",
        "handle-callback-err": "off",
        "id-blacklist": "off",
        "id-length": "off",
        "id-match": "off",
        "indent-legacy": "off",
        "init-declarations": "warn",
        "jsx-quotes": ["error", "prefer-double"],

        // 对象的字面量和值之间有空格
        "key-spacing": ["error", {"beforeColon": false, "afterColon": true}],
        "keyword-spacing": "error",

        // 在关键字前后有空格 if  function
        // "line-comment-position": "off",

        // 在函数内部使用一致的换行风格 函数的括号内的参数永远不换行
        "function-paren-newline": ["error", "never"],

        // 强制使用一致的换行符风格
        "linebreak-style": ["error", "unix"],

        // "lines-around-comment": "off",
        // "max-depth": ["warn", 3],
        // "max-len": ["error", 120, 4, {"ignoreUrls": true}],
        // "max-lines": ["warn", 800],
        // "max-nested-callbacks": "off",
        // "max-params": "off",
        // "max-statements": ["warn", 30, {"ignoreTopLevelFunctions": true}],
        // "max-statements-per-line": ["error", { "max": 1 }],
        // "multiline-ternary": "off",
        // "new-cap": "error",
        // "new-parens": "warn",
        "newline-per-chained-call": "off",
        // "no-alert": "warn",
        // "no-array-constructor": "off",
        // "no-await-in-loop": "off",
        // "no-bitwise": "off",
        // "no-buffer-constructor": "warn",
        // "no-caller": "error",
        // "no-case-declarations": "error",
        // "no-catch-shadow": "off",
        // "no-class-assign": "error",
        // "no-compare-neg-zero": "error",
        // "no-cond-assign": "error",
        // "no-confusing-arrow": ["error", {"allowParens": true}],
        // "no-console": "error",
        // "no-const-assign": "error",
        // "no-constant-condition": "error",
        // "no-continue": "off",
        // "no-control-regex": "error",
        // "no-delete-var": "error",
        // "no-div-regex": "off",
        // "no-dupe-args": "error",
        // "no-dupe-class-members": "error",
        // "no-dupe-keys": "error",
        // "no-duplicate-case": "error",
        // "no-duplicate-imports": "warn",
        // "no-else-return": "off",
        // "no-empty": "error",
        // "no-empty-character-class": "error",
        // "no-empty-function": "error",
        // "no-empty-pattern": "error",
        // "no-eq-null": "off",
        // "no-eval": "error",
        // "no-ex-assign": "error",
        // "no-extend-native": "error",
        // "no-extra-bind": "warn",
        // "no-extra-boolean-cast": "error",
        // "no-extra-label": "error",
        // "no-extra-parens": ["error", "functions"],
        // 禁止不必要的分号  比如使用多个分号 ;;
        "no-extra-semi": "error",
        // "no-fallthrough": "error",
        // "no-floating-decimal": "error",
        // "no-func-assign": "warn",
        // "no-global-assign": "error",
        // "no-implicit-coercion": "off",
        // "no-implicit-globals": "off",
        // "no-implied-eval": "error",
        // "no-inline-comments": "off",
        // "no-inner-declarations": "error",
        // "no-invalid-regexp": "error",
        // "no-invalid-this": "off",
        // "no-irregular-whitespace": "error",
        // "no-iterator": "off",
        // "no-label-var": "off",
        // "no-labels": "off",
        // "no-lone-blocks": "off",
        // "no-lonely-if": "error",
        // "no-loop-func": "warn",
        // "no-magic-numbers": "off",
        // "no-mixed-operators": "off",
        // "no-mixed-requires": "off",
        // "no-mixed-spaces-and-tabs": "error",
        // "no-multi-assign": "warn",
        // "no-multi-spaces": ["error", {"exceptions": {"Property": false}}],
        // "no-multi-str": "warn",
        "no-multiple-empty-lines":  ["error", { "max": 2, "maxEOF": 0 }],
        // "no-negated-condition": "warn",
        // "no-negated-in-lhs": "error",
        // "no-nested-ternary": "off",
        // "no-new": "error",
        // "no-new-func": "error",
        // "no-new-object": "error",
        // "no-new-require": "error",
        // "no-new-symbol": "error",
        // "no-new-wrappers": "error",
        // "no-obj-calls": "error",
        // "no-octal": "error",
        // "no-octal-escape": "error",
        // "no-param-reassign": ["warn", {"props": true}],
        // "no-path-concat": "off",
        // "no-plusplus": "off",
        // "no-process-env": "off",
        // "no-process-exit": "off",
        // "no-proto": "error",
        // "no-prototype-builtins": "off",
        // "no-redeclare": "error",
        // "no-regex-spaces": "error",
        // "no-restricted-globals": "off",
        // "no-restricted-imports": "off",
        // "no-restricted-modules": "off",
        // "no-restricted-properties": "off",
        // "no-restricted-syntax": "off",

        // 禁止在返回语句中赋值，如果需要使用使用括号将表达式括起来
        "no-return-assign": ["error", "except-parens"],
        // "no-return-await": "error",
        // "no-script-url": "warn",
        // "no-self-assign": "error",
        // "no-self-compare": "error",
        // "no-sequences": "error",
        // "no-shadow": "off",
        // "no-shadow-restricted-names": "off",
        // "no-spaced-func": "error",
        // "no-sparse-arrays": "error",
        // "no-sync": "off",
        // "no-tabs": "warn",
        // "no-template-curly-in-string": "off",
        // "no-ternary": "off",
        // "no-this-before-super": "error",
        // "no-throw-literal": "warn",
        "no-trailing-spaces": "error",
        // "no-undef": "error",
        // "no-undef-init": "warn",
        // "no-undefined": "off",
        // "no-underscore-dangle": "warn",
        // "no-unexpected-multiline": "error",
        // "no-unmodified-loop-condition": "warn",
        // "no-unneeded-ternary": "error",
        // "no-unreachable": "error",
        // "no-unsafe-finally": "error",
        // "no-unsafe-negation": "error",
        // "no-unused-expressions": ["warn", {"allowShortCircuit": true}],
        // "no-unused-labels": "error",
        // "no-use-before-define": ["error", {"variables": false, "classes": false, "functions": true}],
        // "no-useless-call": "warn",
        // "no-useless-computed-key": "error",
        // "no-useless-concat": "warn",
        // "no-useless-constructor": "error",

        // 禁止不必要的转义
        "no-useless-escape": "error",

        // disallow renaming import, export, and destructured assignments to the same name
        "no-useless-rename": "error",

        // "no-useless-return": "error",

        // "no-var": "error",
        // "no-void": "error",
        // "no-warning-comments": "off",
        // "no-whitespace-before-property": "error",
        // "no-with": "error",
        // "nonblock-statement-body-position": "off",
        // "object-property-newline": "off",
        // "object-shorthand": ["off", "consistent-as-needed"],
        // "one-var": ["error", "never"],

        // 强制变量声明使用一致的的换行
        "one-var-declaration-per-line": ["error", "always"],
        // "operator-assignment": "off",

        // 强制操作符使用一致的换行符风格  比如 2+3+4 如果使用多行书写 + 号在行首
        "operator-linebreak": ["error", "before"],
        // "padded-blocks": "off",
        // "padding-line-between-statements": "off",
        // "prefer-arrow-callback": "warn",
        // "prefer-const": "error",
        // "prefer-destructuring": "off",
        // "prefer-numeric-literals": "error",
        // "prefer-promise-reject-errors": "warn",
        // "prefer-reflect": "off",
        // "prefer-rest-params": "error",
        // "prefer-spread": "warn",
        // "prefer-template": "off",
        // "quote-props": "off",
        // "radix": "error",
        // "require-await": "warn",
        // "require-jsdoc": "off",
        // "require-yield": "error",
        // "rest-spread-spacing": ["error", "never"],
        // "semi": ["error", "always"],
        // 强制使用分号的位置 只允许分号出现在句子的末尾
        "semi-style": ["error", "last"],
        // "sort-imports": "off",
        "sort-keys": "off",
        "sort-vars": "off",
        "space-before-blocks": ["error", "always"],
        "space-before-function-paren": ["error", { "anonymous": "always", "named": "never" }],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": "warn",
        "spaced-comment": ["error", "always"],
        // "strict": "off",
        // "switch-colon-spacing": ["error", {"before": false, "after": true}],
        // "symbol-description": "warn",
        // "template-curly-spacing": ["error", "never"],
        // "template-tag-spacing": ["error", "never"],
        // "unicode-bom": "warn",
        // "use-isnan": "error",
        // "valid-jsdoc": "off",
        // "valid-typeof": "error",
        "vars-on-top": "off",
        // "wrap-iife": ["error", "any"],
        // "wrap-regex": "off",
        "yield-star-spacing": "off",
        // "yoda": "warn",

        // 禁止花括号内使用空格
        // "babel/object-curly-spacing": ['error', 'never', { 'objectsInObjects': true }],
    }
};
