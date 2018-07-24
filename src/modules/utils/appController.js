/*
* 调用app壳硬件接口
*
*
* */


/*
* app壳打开相册
*
* 回调方法window.getImage，需初始加载，可.bind(this)
* */
const openImage = (number) =>{
  alert("1");
        window.JDAPP.open_PACrop(number);
};

/*
* app壳打开照相机
*
* 回调方法window.getImage，需初始加载，可.bind(this)
* */
const openPhoto = () =>{
         alert("2");
        window.JDAPP.open_PCCrop();
};




/*
* app壳退出登录
*
* */
const toExit = () => {
  alert("3");
        window.JDAPP.realm_exitLogon("Exit");
};
const appController = {};
appController.openImage = () => openImage();
appController.openPhoto = () => openPhoto();
appController.toExit = () => toExit();
export default appController
