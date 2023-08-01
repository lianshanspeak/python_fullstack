public中
    index.html主页main！！！！
    robots爬虫规则文件

src文件：
    app.js-App组件！！！
    index.js是入口文件！！！
    setupTests.js用于组件测试


前面加上export之后可以暴露Component，其他地方引入可以直接写 import react,{Component}
export class Component{

}


文件jsx结尾的就是组件

先写index.js文件

安装react快捷插件，有个ES7那个，
rcc:快速创建class,类式组件
rfc:快速创建function，函数式组件

功能组件编码流程化
1、拆分组件：拆分界面抽取组件
2、实现静态组件：使用组件实现静态页面效果
3、实现动态组件
    动态显示初始化数据
        数据类型
        数据名称
        保存在哪个组件
    交互（绑定事件监听开始）


组件的组合使用-ToList


传统html转化为jsx注意事项
class 需要改为className
style="" 改为 style={{}}形式
例如style="dispaly:none"需要修改为style={{dispaly:'none'}}，none需要加上‘’，不然会找相关变量了

样式的拆分
先拆结构，在拆样式


开头引入包原则：第三方的包，上靠，自己的下靠，样式最后


checkbox里面，defaultChecked默认值，后面还可以改的


子组件给父组件传递数据
流程：父给子传递一个函数，子要传递数据得时候，调用以下函数





onChange={this.handleCheck(id)}

id这里是函数的形式，所以handleCheck需要写为高阶函数，返回箭头函数


需要看axios相关资料
使用axios发送网络请求

跨域问题
报错详情：Access-Control-Allow-Origin header is present on the requested resource


client端口是3000
服务器端口是5000
这样就涉及到跨域问题，信息能发出去不能收回。
需要开一个中间人，端口也是3000，也是能收5000,因为中间人没有axios引擎

FeHelper插件格式化json数据

如何开启中间代理人
第一种
在package.json文件的最后添加
“proxy”:"http://localhost:5000/"
所有发给3000的请求之后都发给5000，3000没有的就转给5000
第二种
在src文件夹里面新增setupProxy.js文件
const proxy = require('http-proxy-middleware')
//暴露对象

moudle.exports = function(app){
    proxy('/api1',{//遇见api1的前置请求，就会触发代理配置
        target:'http://localhost:5000',//请求转发给谁
        changeOrigin:true,//控制服务器接收到的响应头中Host字段的值
        //这个叫做重写，因为新增了api1，需要改回来才行
        pathRewrite:{'^/api1':''}//重写请求路径
    })，
    proxy('/api2',{
        target:'http://localhost:5001',
        changeOrigin:true,
        pathRewrite:{'^/api2':''}
    })
}

访问的时候需要配置axios.get('http://localhost:300/api1/students').then()

下次看p67