import service from '@/utils/request.js';

// 获取验证码
export function getsms(data) {
    return service.request({
        method: 'post',
        url: '/getsms/',
        data: data
    });
}