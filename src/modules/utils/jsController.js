/*
* js原生公用方法
* author: zhangzhipeng 2018-04-10
* */


/*
* 判断是否为数组
* */
const isArray = (obj) => {

    // console.log(Object.prototype.toString.call(obj))
    let objFlag = false;

    if(Object.prototype.toString.call(obj)!=='[object String]' && obj.length){
        objFlag = true;
    }

    return objFlag;
}


/*
* 添加class
*
* obj: 需要修改的元素或元素数组
* cls: class名
*
* */
const r_addClass = (objs, cls) => {

    try{
        if(!isArray(objs)){//判断
            objs = [objs];
        }

        for(let i =0; i < objs.length ; i++){
            let obj = objs[i];
            let obj_class = obj.className,//获取 class 内容.
                blank = (obj_class !== '') ? ' ' : '';//判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
            let added = obj_class + blank + cls;//组合原来的 class 和需要添加的 class.
            obj.className = added;//替换原来的 class.
        }

    }catch(err){
        // console.log(err.message);
    }

}

/*
* 删除class
*
* obj: 需要修改的元素或元素数组
* cls: class名
*
* */
const r_removeClass = (objsReq, cls) => {
    try{
        let objs = [];
        if(!isArray(objsReq)){//判断
            objs[0] = objsReq;
        }else{
            for(let i =0; i < objsReq.length ; i++){
                objs[i] = objsReq[i];
            }
        }

        for(let i =0; i < objs.length ; i++){
            let obj = objs[i];
            let obj_class = ' ' + obj.className + ' ';//获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
            obj_class = obj_class.replace(/(\s+)/gi, ' ');//将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
            let removed = obj_class.replace(' ' + cls + ' ', ' ');//在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
             removed = removed.replace(/(^\s+)|(\s+$)/g, '');//去掉首尾空格. ex) 'bcd ' -> 'bcd'
            obj.className = removed;//替换原来的 class.
        }
    }catch(err){
            // console.log(err.message);
    }
}

/*
* 判断class是否存在
*
* obj: 需要修改的元素
* cls: class名
*
* */
const r_hasClass = (obj, cls) => {
    let obj_class = obj.className,//获取 class 内容.
        obj_class_lst = obj_class.split(/\s+/);//通过split空字符将cls转换成数组.
    let x = 0;
    for(x in obj_class_lst) {
        if(obj_class_lst[x] === cls) {//循环数组, 判断是否包含cls
            return true;
        }
    }
    return false;
}

/*
* 页面元素隐藏
*
* obj: 需要修改的元素或元素数组
* */
const r_hide = (objs) => {

    try{
        if(!isArray(objs)){//判断
            objs = [objs];
        }

        for(let i =0; i < objs.length ; i++){
            let obj = objs[i];
            obj.style.display = "none";
        }
    }catch(err){
        // console.log(err.message);
    }
}

/*
* 页面元素显示
*
* obj: 需要修改的元素或元素数组
* */
const r_show = (objs) => {

    try{
        if(!isArray(objs)){//判断
            objs = [objs];
        }

        for(let i =0; i < objs.length ; i++){
            let obj = objs[i];
            obj.style.display = "block";
        }
    }catch(err){
        // console.log(err.message);
    }
}

const jsController = {};

jsController.r_addClass = (obj, cls) => r_addClass(obj, cls);
jsController.r_removeClass = (obj, cls) => r_removeClass(obj, cls);
jsController.r_hasClass = (obj, cls) => r_hasClass(obj, cls);
jsController.r_show = (obj) => r_show(obj);
jsController.r_hide = (obj) => r_hide(obj);

export default jsController;