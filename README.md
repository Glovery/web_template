# web-template
## 开发环境
1. node version 14.17.6
2. npm version 6.14.15
## 项目启动
```cmd
-- npm install
or
-- yarn install

-- npm run dev
or
yarn dev
```
## 项目打包
```cmd
-- npm run build
or
yarn build
```

## 代码规范
推荐编辑器 vscode
### 代码提交规范
```cmd
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>

--type: 类型
1. feat: 一个新特性
2. fix: 修复bug
3. docs: 文档修改
4. style: 不影响代码含义的更改（空格、格式、缺少分号等）
5. refactor: 代码重构
6. perf: 优化性能
7. test: 测试用例修改
8.chore: 对构建过程或辅助工具和库的更改，例如文档生成

--scope: 影响范围

--subject: 对更改的简洁描述，

--body: commit 具体修改内容，可以分多行，应该包括改变的动机，并与以前的行为进行对比

--footer: 一些备注，通常是修复的bug的链接
```
### 提交规范检查插件：commitlint

### 格式化规范
推荐编辑器：vscode
推荐插件：prettier eslint  husky  lint-staged

husky与lint-staged：git commit 提交阶段将提交的代码进行格式化，主要帮助在git阶段检查提交消息、运行测试、检查代码等

1. 安装eslint插件
```Shell
yarn add eslint
npx eslint --init
```
2. 配置eslintrc.js
```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: { // 扩展解析器的解析后缀
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
        ],
      },
    },
 'import/extensions': ['error', 'always', { // 缺少文件后缀报错
    js: 'never',
    mjs: 'never',
    jsx: 'never',
    ts: 'never',
    tsx: 'never',
  }],
  },
  extends: [
    'plugin:vue/vue3-recommended', // vue3校验方式
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
  },
};

```
3. 安装prettier插件
```Shell
yarn add prettier eslint-config-prettier eslint-plugin-prettier -S

```
4. 配置.prettierrc.js
```javascript
module.exports = {
    printWidth: 120, // 一行最多120个字符
    tabWidth: 4,
    semi: false, // 行尾不需要分号
    singleQuote: true, // 单引号代替双引号
    trailingComma: 'es5',
    bracketSpacing: true,
    arrowParens: 'always', // 箭头函数只有一个参数时也要有括号
    proseWrap: 'preserve',
    htmlWhitespaceSensitivity: 'css', // 根据显示样式决定 html 要不要折行
    endOfLine: 'auto'
}
```
5. 修改.eslintrc.js
```javascript
modele.exports={
  ...
  extends: ['plugin:vue/vue3-recommended', 'airbnb-base', 'prettier', 'plugin:prettier/recommended'],
}
```

### 命名规范
#### css命名规范
1. 多个单词命名使用“-”连接
2. 首字母小写
3. 禁止在行内添加样式，尽量采用class类名命名方式

### JavaScript命名规范
1. 首字母小写
2. 方法名由多个单词组成，使用驼峰命名方式
3. 常量使用const声明，局部变量使用let命名
4. 方法名见名知义
5. 复杂逻辑功能，尽量拆分方法，书写简要的逻辑步骤
6. 方法之间的调用尽量减少耦合
