
var myFuns = {
    b64EncodeUnicode: (str) => { //base64转码
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
            return String.fromCharCode('0x' + p1);
        }));
    },
    b64DecodeUnicode: (str) => { //base64解码
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    },   
    // 获取时间
    formatTime:function(date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        var minute = date.getMinutes();
        minute = minute < 10 ? ('0' + minute) : minute;
        var second = date.getSeconds();
        second = second < 10 ? ('0' + second) : second;
        return y + '/' + m + '/' + d + ' ' + h + ':' + minute + ':' + second;
    }, 
    // 获取当前时间
    getNowTime:function(){
        var dd1 = new Date();
        var tgetMonth = dd1.getMonth() + 1,
            tdate = dd1.getDate(),
            tmin = dd1.getHours(),
            minutes = dd1.getMinutes(),
            Seconds = dd1.getSeconds();
        if (tdate < 10) {
            tdate = "0" + tdate;
        }
        if (tmin < 10) {
            tmin = "0" + tmin;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (Seconds < 10) {
            Seconds = "0" + Seconds;
        }
        return tgetMonth + "-" + tdate + " " + tmin + ":" + minutes + ":" + Seconds + " GMT+8";
    },
    /*获取当前时间day=-1前一天，day=1后一天*/
    getNowDate(day) {
        var d = new Date();
        var date = day ? new Date(d.getTime() + day * 24 * 60 * 60 * 1000) : d;
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        var minute = date.getMinutes();
        minute = minute < 10 ? ('0' + minute) : minute;
        var second = date.getSeconds();
        second = second < 10 ? ('0' + second) : second;
        return y + '/' + m + '/' + d + ' ' + h + ':' + minute + ':' + second;
    },
    // 整数转换为逗号分隔形势 10000 -> 10,000
    toDecimalNumber:function(v) {
        var c = 0;
        v = "" + v;
        var ret = "";
        for (var i = 0; i < v.length; i++) {
            c += 1;
            var ch = v[v.length - 1 - i];
            ret = ch + ret;
            if (c % 3 == 0) {
                ret = "," + ret;
            }
        }
        if (ret[0] == ",") {
            ret = ret.substr(1);
        }
        return ret;
    },
    /*格式化金额1000=1,000*/
    splitStringVal: function (val) {
        return val.split('').reverse().join('').replace(/(\d{3})/g, '$1,').replace(/\,$/, '').split('').reverse().join('')
    },
    /* 获取当前网站的host域名 */
    getHost(str){
        return window.location.host + str;
    },
    // 首先打开页面，再实现页面跳转，仿制拦截。
    windowOpen() {
        let newOpenObj = window.open('/other.html', '_blank');
        newOpenObj.urlError = function (message) {
            let r = newOpenObj.confirm(message + '关闭窗口?');
            if (r) {
                newOpenObj.close();
            }
        }
        return newOpenObj;
    },
    /* 随机数 */
    GetRandomNum: function (Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    },
    /* 收藏 */
    AddFavorite:function(title, favoriteUrl){
        var url = favoriteUrl ? favoriteUrl : window.location.origin;
        try{
            window.external.addFavorite(url, title);
        }catch(e){
            try{
                window.sidebar.addPanel(title, url, "");
            }catch(e){
                alert('请使用Ctrl+D')
            }
        }
    },
    // 全屏模式
    launchFullscreen: function (element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        } else {
            return false
        }
        return true;
    },
    // 退出全屏模式
    exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    },
    // 是否是中文
    isChinese: function (str) {
        var han = /^[\u4e00-\u9fa5]+$/;
        if (!han.test(str)) {
            return false;
        };
        return true;
    },
}