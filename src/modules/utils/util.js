/*
import flyio from 'flyio'
const CryptoJS = require('crypto-js')
/!**
 * 获取url参数
 * @param name
 * @returns {*}
 *!/
export function getParameter (name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  let num = +window.location.hash.indexOf('?') + 1
  let r = window.location.hash === '' ? window.location.search.substr(1).match(reg) : window.location.hash.substr(num).match(reg)
  if (r != null) return decodeURIComponent(r[2])
  return null
}

/!**
 * sessionStorage 设置与获取
 * @param key
 * @param val
 * @returns {string}
 *!/
export function session (key, val) {
  if (val) {
    window.sessionStorage.setItem(key, JSON.stringify(val))
  } else {
    if (val === '') {
      window.sessionStorage.removeItem(key)
    } else {
      if (window.sessionStorage[key]) {
        return JSON.parse(window.sessionStorage.getItem(key))
      } else {
        return ''
      }
    }
  }
}

/!**
 * 手机号码校验
 * @param value
 * @returns {boolean}
 *!/
export function regexTel (mobile) {
  mobile = mobile.toString()
  let mobileReg = /^0*(86)*(13|15|14|17|18|19)\d{9}$/
  if (!mobileReg.test(mobile) || mobile === '13800138000') {
    return false
  }
  return true
}

/!**
 * 身份证号码校验
 * @param idCard
 * @returns {boolean}
 *!/
export function regexID (idCard) {
  if (idCard == null) {
    return false
  }
  let num = idCard.toUpperCase()
  // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
  if (!/^\d{17}([0-9]|X)$/.test(num)) {
    return false
  }
  // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
  // 下面分别分析出生日期和校验位
  let len, re
  len = num.length
  if (len === 18) {
    re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/)
    let arrSplit = num.match(re)

    // 检查生日日期是否正确
    let dtmBirth = new Date(arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4])
    let bGoodDay
    bGoodDay = (dtmBirth.getFullYear() === Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) === Number(arrSplit[3])) && (dtmBirth.getDate() < 32)
    if (!bGoodDay) {
      return false
    } else {
      // 检验18位身份证的校验码是否正确。
      // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
      let valnum
      let arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
      let arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
      let nTemp = 0
      let i = 0
      for (; i < 17; i++) {
        nTemp += num.substr(i, 1) * arrInt[i]
      }
      valnum = arrCh[nTemp % 11]
      if (valnum !== num.substr(17, 1)) {
        return false
      }
    }
  }
  return true
}

/!**
 * 正整数校验
 * @param value
 * @returns {boolean}
 *!/
export function regexPositiveInt (value) {
  return /^[1-9]\d*$/.test(value)
}

/!**
 * 特殊字符校验
 * @param value
 * @returns {boolean}
 *!/
export function specialChara (value) {
  let reg = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_]")
  return reg.test(value)
}
/!**
 * 数据加密
 * @param getPubKeyUrl {String}  [请求公钥地址]
 * @param data  {Object/String}  [要加密的数据]
 * @param fn  {function}  [加密后回调]
 *!/
export function encryption (getPubKeyUrl, data, fn) {
  flyio.get(getPubKeyUrl, { prodName: 'sepm' }).then(res => {
    if (!res.data) return
    let key = geneRandomHexStr(32)
    // /!*AES加密*!/
    let cryptkey = CryptoJS.enc.Hex.parse(key)
    if (typeof data === 'object') {
      data = JSON.stringify(data)
    }
    let encryptedData = CryptoJS.AES.encrypt(data, cryptkey, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    })
    let encrypted = encryptedData.ciphertext.toString()
    // /!*RSA加密*!/
    let newKey = key.toUpperCase()
    let encrypt = new window.JSEncrypt()
    encrypt.setPublicKey(res.data)
    let encryptData = encrypt.encrypt(newKey)
    typeof fn === 'function' && fn(`${encryptData}##${encrypted}`)
  }).catch(err => {
    console.log(err)
  })
}

/!**
 * 随机生成16进制字符串
 * @param length  [字节长度]
 * @returns {string}  [16进制字符串]
 *!/
export function geneRandomHexStr (length) {
  let text = ''
  let possible = '0123456789abcdef'
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

/!**
 *  Base64 encode / decode
 *!/
/!* eslint-disable*!/
export function Base64 () {
  let _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
  this.encode = function (input) {
    var output = ''
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4
    var i = 0
    input = _utf8_encode(input)
    while (i < input.length) {
      chr1 = input.charCodeAt(i++)
      chr2 = input.charCodeAt(i++)
      chr3 = input.charCodeAt(i++)
      enc1 = chr1 >> 2
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4)
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6)
      enc4 = chr3 & 63
      if (isNaN(chr2)) {
        enc3 = enc4 = 64
      } else if (isNaN(chr3)) {
        enc4 = 64
      }
      output = output +
        _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
        _keyStr.charAt(enc3) + _keyStr.charAt(enc4)
    }
    return output
  }
  this.decode = function (input) {
    var output = ''
    var chr1, chr2, chr3
    var enc1, enc2, enc3, enc4
    var i = 0
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '')
    while (i < input.length) {
      enc1 = _keyStr.indexOf(input.charAt(i++))
      enc2 = _keyStr.indexOf(input.charAt(i++))
      enc3 = _keyStr.indexOf(input.charAt(i++))
      enc4 = _keyStr.indexOf(input.charAt(i++))
      chr1 = (enc1 << 2) | (enc2 >> 4)
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2)
      chr3 = ((enc3 & 3) << 6) | enc4
      output = output + String.fromCharCode(chr1)
      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2)
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3)
      }
    }
    output = _utf8_decode(output)
    return output
  }

  // private method for UTF-8 encoding
  function _utf8_encode (string) {
    string = string.replace(/\r\n/g, '\n')
    var utftext = ''
    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n)
      if (c < 128) {
        utftext += String.fromCharCode(c)
      } else if ((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192)
        utftext += String.fromCharCode((c & 63) | 128)
      } else {
        utftext += String.fromCharCode((c >> 12) | 224)
        utftext += String.fromCharCode(((c >> 6) & 63) | 128)
        utftext += String.fromCharCode((c & 63) | 128)
      }
    }
    return utftext
  }
  /!* eslint-disable no-new *!/
  function _utf8_decode (utftext) {
    var string = ''
    var i = 0
    var c = c1 = c2 = 0
    while (i < utftext.length) {
      c = utftext.charCodeAt(i)
      if (c < 128) {
        string += String.fromCharCode(c)
        i++
      } else if ((c > 191) && (c < 224)) {
        c2 = utftext.charCodeAt(i + 1)
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63))
        i += 2
      } else {
        c2 = utftext.charCodeAt(i + 1)
        c3 = utftext.charCodeAt(i + 2)
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63))
        i += 3
      }
    }
    return string
  }
}
/!* 设置title *!/
export function setTitle (str) {
  if (window.document.title) {
    window.document.title = str
  }
}

function onBridgeReady () {
  if (window.WeixinJSBridge) {
    window.WeixinJSBridge.call('hideOptionMenu')
  }
}
/!* 禁用微信常用按钮 *!/
export function hideMenuInWechat (params) {
  if (typeof WeixinJSBridge === 'undefined') {
    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false)
    } else if (document.attachEvent) {
      document.attachEvent('WeixinJSBridgeReady', onBridgeReady)
      document.attachEvent('onWeixinJSBridgeReady', onBridgeReady)
    }
  } else {
    onBridgeReady()
  }
}
/!* 关闭当前页面 *!/
export function closeWindow (params) {
  if (typeof WeixinJSBridge === 'undefined') {
    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', function(){
        if (window.WeixinJSBridge) {
          window.WeixinJSBridge.call('closeWindow')
        }

      }, false)
    } else if (document.attachEvent) {
      document.attachEvent('WeixinJSBridgeReady', function(){
        if (window.WeixinJSBridge) {
          window.WeixinJSBridge.call('closeWindow')
        }

      })
      document.attachEvent('onWeixinJSBridgeReady', function(){
        if (window.WeixinJSBridge) {
          window.WeixinJSBridge.call('closeWindow')
        }

      })
    }
  } else {
      if (window.WeixinJSBridge) {
        window.WeixinJSBridge.call('closeWindow')
      }

  }
}

/!**
 * 通过身份证判断是男是女
 *
 * @param idCard
 *            15/18位身份证号码
 * @return 'female'-女、'male'-男
 *!/
export function maleOrFemalByIdCard(idCard) {
	if (idCard.length == 15) {
		if (idCard.substring(14, 15) % 2 == 0) {
			return '0';
		} else {
			return '1';
		}
	} else if (idCard.length == 18) {
		if (idCard.substring(14, 17) % 2 == 0) {
			return '0';
		} else {
			return '1';
		}
	} else {
		return null;
	}
}

/!**
 * 将数字转换成大写
 *
 * @param Num 要转换的数字
 *
 * @return 数字的大写
 *!/
export function arabiaToSimplifiedChinese(Num) {
  for (let i = Num.length - 1; i >= 0; i--) {
    Num = Num.replace(",", "") // 替换Num中的“,”
    Num = Num.replace(" ", "") // 替换Num中的空格
  }
  if (isNaN(Num)) { // 验证输入的字符是否为数字
    // alert("请检查小写金额是否正确");
    return
  }
  // 字符处理完毕后开始转换，采用前后两部分分别转换
  let part = String(Num).split(".")
  let newchar = ""
  // 小数点前进行转化
  for (let i = part[0].length - 1; i >= 0; i--) {
    if (part[0].length > 10) {
      // alert("位数过大，无法计算");
      return ''
    }// 若数量超过拾亿单位，提示
    let tmpnewchar = ''
    let perchar = part[0].charAt(i)
    switch (perchar) {
      case '0':
        tmpnewchar = '零' + tmpnewchar
        break
      case '1':
        tmpnewchar = '一' + tmpnewchar
        break
      case '2':
        tmpnewchar = '二' + tmpnewchar
        break
      case '3':
        tmpnewchar = '三' + tmpnewchar
        break
      case '4':
        tmpnewchar = '四' + tmpnewchar
        break
      case '5':
        tmpnewchar = '五' + tmpnewchar
        break
      case '6':
        tmpnewchar = '六' + tmpnewchar
        break
      case '7':
        tmpnewchar = '七' + tmpnewchar
        break
      case '8':
        tmpnewchar = '八' + tmpnewchar
        break
      case '9':
        tmpnewchar = '九' + tmpnewchar
        break
    }
    switch (part[0].length - i - 1) {
      case 0:
        tmpnewchar = tmpnewchar
        break
      case 1:
        if (perchar != 0) tmpnewchar = tmpnewchar + '十'
        break
      case 2:
        if (perchar != 0) tmpnewchar = tmpnewchar + '百'
        break
      case 3:
        if (perchar != 0) tmpnewchar = tmpnewchar + '千'
        break
      case 4:
        tmpnewchar = tmpnewchar + '万'
        break
      case 5:
        if (perchar != 0) tmpnewchar = tmpnewchar + '十'
        break
      case 6:
        if (perchar != 0) tmpnewchar = tmpnewchar + '百'
        break
      case 7:
        if (perchar != 0) tmpnewchar = tmpnewchar + '千'
        break
      case 8:
        tmpnewchar = tmpnewchar + '亿'
        break
      case 9:
        tmpnewchar = tmpnewchar + '十'
        break
    }
    newchar = tmpnewchar + newchar
  }
  // 替换所有无用汉字，直到没有此类无用的数字为止
  while (newchar.search('零零') !== -1 || newchar.search('零亿') !== -1 || newchar.search('亿万') !== -1 || newchar.search('零万') !== -1) {
    newchar = newchar.replace('零亿', '亿')
    newchar = newchar.replace('亿万', '亿')
    newchar = newchar.replace('零万', '万')
    newchar = newchar.replace('零零', '零')
  }
  // 替换以“一十”开头的，为“十”
  if (newchar.indexOf('一十') === 0) {
    newchar = newchar.substr(1)
  }
  // 替换以“零”结尾的，为“”
  if (newchar.lastIndexOf('零') === newchar.length - 1) {
    newchar = newchar.substr(0, newchar.length - 1)
  }
  return newchar
}
*/
