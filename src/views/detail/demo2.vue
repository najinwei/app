<template>
  <div>
<button @click=" toast()">提示信息</button>
  <button @click=" icon()">操作成功</button>
   <span> <button @click=" indicator()">操作成功</button>
    <button @click=" close()">操作成功</button></span>
  </div>
</template>

<script>
 /* message	文本内容
  position	Toast 的位置	String	'top','bottom','middle'	,'middle'
  duration	持续时间（毫秒），若为 -1 则不会自动关闭	Number		3000
  className	Toast 的类名。可以为其添加样式
  iconClass	icon 图标的类名	*/
  import { Toast,Indicator } from 'mint-ui';

    export default {
      methods: {
        toast() {
          // Toast('提示信息');
          Toast({
            message: '提示',
            position: 'top',
            duration: 5000
          })
        },
          icon(){
            // Toast('提示信息');
            Toast({
              message: '操作成功',
              iconClass: 'icon icon-success'//若需在文字上方显示一个 icon 图标，可以将图标的类名作为 iconClass 的值传给 Toast（图标需自行准备）
            });
        },
       /* ext	文本内容
        spinnerType	加载图标的类型		'snake'
          'fading-circle'
        'double-bounce'
          'triple-bounce'	'snake'
*/
          indicator(){
          // Toast('提示信息');
          Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
          });

        },

        close(){
          // Toast('提示信息');
          Indicator.close();
        }
      },
        name: ""

    }
</script>

<style scoped>

</style>
