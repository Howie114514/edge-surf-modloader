# EdgeSurfModLoader

提取edge冲浪小游戏，使其能在**任意**浏览器上运行，并提供自定义模组功能及模组API！

[![Static Badge](https://img.shields.io/badge/在线-预览!-green)](https://howie114514.github.io/edge-surf-modloader)

## 功能

##### 基础
- [x] 脱离edge环境运行
- [x] 加载模组
- [ ] 模组管理器
##### 原API导出
- [x] 界面API
- [ ] 游戏模式API
- [ ] 渲染API

##### 附加API
###### 事件
- [x] 渲染事件(beforeRender/afterRender)
- [ ] 初始化(ready)
- [ ] 以及更多...

在[事件API文档]()了解更多

###### 技术性实现
- [x] 静态打补丁(基于babel，给文件打补丁，实现最低时间成本更新和导出API)
- [ ] 动态打补丁

## 免责声明
本项目作者与Microsoft没有任何关系，也不是edge://surf原版创作的参与者。