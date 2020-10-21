toastLog("开始");

let deviceWidth = device.width;
let deviceHeight = device.height;

// yidongDay();
taobaoJinBi();

// 点击控件
function clickItemInCenter(item, time) {
    if (time == null) time = 50;
    if (item == null) return;
    let x = item.bounds().centerX();
    let y = item.bounds().centerY();
    press(x, y, time);
}

/**
 * 向上滑动
 */
function swipeUp(n) {
    sleep(200);
    console.log("滑动屏幕");
    let x = parseInt(deviceWidth / 2);
    let duration = 500;
    let y = [parseInt(deviceHeight * 0.75), parseInt(deviceHeight * 0.25)];

    for (let i = 0; i < n; i++) {
        swipe(x, y[0], x, y[1], duration);
    }
}

/**
 * 多任务菜单清空
 */
function menuClose(){
    if(recents()){
        let menu = desc("关闭所有最近打开的应用").findOne(500)
        if(menu != null){
            clickItemInCenter(menu)
            sleep(3000)
        }
    }
}

/**
 *  移动营业厅签到
 */
function yidongDay(){
    launch("com.jsmcc");
    //跳过广告
    className("android.widget.TextView").text("跳过").findOne().click();
    // sleep(10000);
    //进入签到页
    id("right_upper_view").findOne().click();
    console.log("进入签到页");
    sleep(2000);
    //点击签到
    click(550,800)
    // id("signBtnl").findOne().click();
    console.log("签到/补签");
}

/**
 *  淘金币
 */
function taobaoJinBi(){
    /* 
    launch("com.taobao.taobao");
    //进入 领淘金币 页面
    desc("领淘金币").findOne().click();
    sleep(10000)

    let qiandao = text("立即签到").findOne(500);
    if(qiandao != null){
        clickItemInCenter(qiandao)
        console.log("签到")
    }
    //点击"收菜领取淘金币"
    click(520, 980)
    console.log("领淘金币")
*/
    
    // let shuidi = text("做水滴任务加金币收益").findOne(500)
    // console.log(shuidi)
    // if(shuidi != null){
    //     clickItemInCenter(shuidi)
    //     console.log("领水滴")
    // }

    
    let flag = LinShuiDi()
    console.log(flag)
    sleep(2000)
    //
    if(flag){
        QuWanCheng()
        QuLinQu()
        QuGuangGuang()
        QuLinQu()
    }


    //向上滑动
    // swipeUp(3)
}

/**
 *  弹出领水滴
 */
function LinShuiDi(){
    // 弹出领水滴任务页
    while(true){
        if(IsLinShuiDi()){
            break
        }else{
            //不在领水滴页面
            click(950, 1080)
            console.log("弹出领水滴")
        }
    }
    console.log("领水滴页面")
    return true
}

/**
 * 是否在领水滴页面
 */
function IsLinShuiDi(){
    let toptitle = text("领水滴赚金币").findOne(500)
    if(toptitle != null){
        return true
    }else{
        return false
    }
}

/**
 * 去完成
 */
function QuWanCheng(){
    let quwanc = text("去完成").findOne(500)
    console.log(quwanc)
    if(quwanc == null){
        return
    }
    console.log("点击 去完成")
    clickItemInCenter(quwanc)
    sleep(3000)
    if(IsLinShuiDi()){
        return
    }
    swipeUp(3)
    //等待15秒
    sleep(15000)
    //返回
    back()
    sleep(3000)
}


/**
 * 去逛逛
 */
function QuGuangGuang(){
    let qugg = text("去逛逛").findOne(500)
    console.log(qugg)
    if(qugg == null){
        return
    }
    console.log("点击 去逛逛")
    clickItemInCenter(qugg)
    sleep(3000)
    if(IsLinShuiDi()){
        return
    }
    swipeUp(3)
    //等待15秒
    sleep(15000)
    //返回
    back()
    sleep(3000)
}


/**
 * 去领取
 */
function QuLinQu(){
    while(true){
        let qulinqu = text("领取").findOne(500)
        console.log(qulinqu)
        if(qulinqu == null){
            break
        }
        console.log("点击 领取")
        clickItemInCenter(qulinqu)
        sleep(5000)
    }
}

