<template>
    <div>
        <h2>第一步，购买自己的域名</h2>
        <p>可以选阿里云、百度云等，个人推荐在哪个地方买服务器就在那个地方买域名，以我的域名为例,我实在阿里云买的域名。</p>
        <p>登陆我的阿里云，在产品中选择域名交易，点击进入</p>
        <img src="../../images/start/first.png">
        <p>选购自己的域名</p>
        <img src="../../images/start/second.png">
        <p>然后在我的控制台的域名下面就可以看到自己的域名，如图</p>
        <img src="../../images/start/third.png">
        <h2>第二步，购买自己的服务器。</h2>
        <p>还是建议和域名在一起购买，可以减少以下几步，我在百度云买的虚拟机，当然你买服务器也行，步骤都一样。</p>
        <img src="../../images/start/forth.png">
        <p>进入自己的控制台，对服务器进行配置，因为我买的是虚拟机所以分配了一个服务商的域名，需要绑定到我自己的域名。</p>
        <img src="../../images/start/sixth.png">
        <p>在这里对服务器进行初始化等一些操作。</p>
        <img src="../../images/start/seventh.png">
        <h2>第三步，域名备案与解析</h2>
        <p>同样在服务器的提供方一般都提供域名备案（首次申请的域名都要备案），这样也可以省去备案环节的麻烦，例如我在百度云做的认证，按照他的要求，一般半个月左右就能通过域名备案</p>
        <img src="../../images/start/fifth.png">
        <p>备案成功以后就可以在已备案成功选项查看你的备案。</p>
        <p>之后我们就去阿里云解析自己的域名。在自己的域名列表，点击解析，然后点击添加规则，把该域名解析到我的百度云分配的地址</p>
        <img src="../../images/start/eigth.png">
        <p>因为服务器和域名不是同一个厂商的，有时候需要去域名提供商修改DNS,在域名列表点击管理，进入有有DNS修改，修改为服务器的DNS</p>
        <img src="../../images/start/nineth.png">
        <h2>第四步，配置自己的网站</h2>
        <p>在服务器设置自己的默认主页，默认错误页之类，例如我的百度云</p>
        <img src="../../images/start/tenth.png">
        <h2>最后一步，就是上传自己的网站就可以了</h2>
        <p>开启服务器的FTP，我用的是WinSCP</p>
        <img src="../../images/start/eleventh.png">
    </div>
</template>
<style>
img{
    display: block;
    width: 400px;
}
p{
    line-height: 1.5;
}
</style>