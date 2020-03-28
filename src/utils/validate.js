/*
    去除特殊字符
*/
export function stripscript(str) {
    var pattern = new RegExp("[`~%!@#^=''?~！ @#￥……&——‘”“'？*()（），,。.、]"); //[]内输入你要过滤的字符
    var rs = "";
    for (var i = 0; i < str.length; i++) {
        rs += str.substr(i, 1).replace(pattern, '');
    }
    return rs;
}

/**
 * 邮箱校验,邮箱密码,邮箱验证码
 */
export function validateForm(str, type) {
    let reg = "";
    if (type === 'Email') {
        reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    } else if (type === 'password') {
        reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
    } else if (type === 'code') {
        reg = /^[a-z0-9]{6}$/;
    }
    return !reg.test(str);
}