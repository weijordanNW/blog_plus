---
title: Promise all/allSettle/any/race 的使用场景
date: '2026-06-12 05:12:49'
updated: '2026-07-03 11:31:56'
---
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/KezabZqPcorXpoxIQ1HcwhEEnOh.png)
# Promise all/allSettle/any/race 的使用场景

## Promise.all


全部任务执行“成功”后，进入 then 逻辑，返回所有任务的结果。只要一个任务失败，进入 catch 逻辑。


```javascript
/**
 * 全部任务执行“成功”后，进入 then 逻辑
 * 返回所有任务的“结果”
 * 只要一个任务失败，进入 catch 逻辑
 */
Promise.all([
    Promise.resolve('p1'),
    Promise.resolve('p2'),
    Promise.resolve('p3'),
]).then(results => {
    console.log('success', results);
}).catch(error => {
    console.error('error', error);
});
```

### 使用场景：并发请求多个任务，且不容忍失败

```javascript
/**
 * 场景1: 首页多板块渲染数据请求
 */
Promise.all([
    // 板块A 请求接口 api-1
    // 板块B 请求接口 api-2
    // 板块C 请求接口 api-3
]).then(results => {
    render('pannelA', results[0]);
    render('pannelB', results[1]);
    render('pannelC', results[2]);
}).catch(error => {
    console.error('error', error);
});
```

## Promise.allSettled


全部任务执行“完成”后，进入 then 逻辑，返回所有任务的结果和状态。不会进入 catch 逻辑。


```javascript
/**
 * 全部任务执行“完成”后，进入 then 逻辑
 * 返回所有任务的“结果”和“状态”
 * 不会进入 catch 逻辑
 */
Promise.allSettled([
    Promise.resolve('p1'),
    Promise.resolve('p2'),
    Promise.resolve('p3'),
]).then(results => {
    console.log('success: ', results);
}).catch(error => {
    console.log('fail: ', error);
});
```

### 使用场景：并发请求多个任务，且能容忍失败

```javascript
/**
 * 场景1: 前端埋点日志上报
 */
Promise.allSettled([
    // 上传日志片段-1
    // 上传日志片段-2
    // 上传日志片段-3
]).then(results => {
    console.log('success', results);
}).catch(error => {
    console.error('error', error);
});
```

## Promise.any


首个任务执行“成功”后，进入 then 逻辑，返回该任务的结果。若全部任务失败，进入 catch 逻辑。


```javascript
/**
 * 首个任务执行“成功”后，进入 then 逻辑
 * 返回该任务的“结果”
 * 若全部任务失败，进入 catch 逻辑
 */
Promise.any([
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('p1')
        }, 100);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('p2')
        }, 200);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('p3')
        }, 300);
    }),
]).then((result) => {
    console.log('success ', result);
}).catch(error => {
    console.log('error ', error);
});
```

## Promise.race


首个任务执行“完成”后触发（无论成功或失败）。成功进入 then 逻辑，失败进入 catch 逻辑。


```javascript
/**
 * 首个任务执行“完成”后触发
 * 成功：进入 then 逻辑，返回该任务“结果”
 * 失败：进入 catch 逻辑
 */
Promise.race([
    new Promise((resolve, reject) => {
        setTimeout(() => reject('p1'), 100);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => reject('p2'), 200);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => reject('p3'), 300);
    }),
]).then((res) => {
    console.log('success', res);
}).catch(error => {
    console.log('error', error);
});
```

### 使用场景：需要获取最快返回的结果，不关心其他任务

```javascript
/**
 * 场景1：请求超时控制
 */
async function selfFetch(api, { timeout }) {
    return Promise.race([
        new Promise(resolve => {
            setTimeout(() => {
                resolve('fetch success');
            }, 500);
        }),
        new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('request timeout');
            }, timeout);
        }),
    ]);
}
selfFetch('/api', {
    timeout: 300
}).then(result => {
    console.log('success', result);
}).catch(error => {
    console.error('fail', error);
});
```

