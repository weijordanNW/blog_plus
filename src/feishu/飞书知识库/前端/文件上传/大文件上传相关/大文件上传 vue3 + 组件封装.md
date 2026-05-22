---
title: 大文件上传 vue3 + 组件封装
date: '2026-05-21'
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端/文件上传/大文件上传相关
tag:
  - feishu
---
[前端大文件上传 - 总结（Vue3 + hook + Web Worker实现，通过多个Worker线程大大提高Hash计算的速度）-CSDN博客](https://blog.csdn.net/qq_41068362/article/details/132358338?ops_request_misc=&request_id=&biz_id=102&utm_term=%E5%89%8D%E7%AB%AF%E5%A4%A7%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E9%A1%B9%E7%9B%AE&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-1-132358338.142^v100^pc_search_result_base8&spm=1018.2226.3001.4187)

[前端大文件上传 -- 上传文件到S3或本地服务器_前端直接上传文件到s3-CSDN博客](https://blog.csdn.net/qq_41068362/article/details/137642362?spm=1001.2014.3001.5502)

[guodh/大文件分片上传](https://gitee.com/guodh-su/nuxt-file-upload)

其他

[始于清风/big-file-upload_front](https://gitee.com/li_haohao_1/big-file-upload_front)

vue3-简单切片上传前后端代码

[https://github.com/kethonC/upload-bigfile](https://github.com/kethonC/upload-bigfile)

vue3 -大文件上传,切片上传,秒传&断点续传 前端vue3+vite 

[https://github.com/heyu3913/BigFileUpLoad](https://github.com/heyu3913/BigFileUpLoad)

项目进入,分别进入client,server,npm i ; npm run dev
### **BigFileUpLoad**
#### client/App.vue
```plaintext
<script setup lang="ts">
  import { ref } from 'vue'
  import SparkMD5 from 'spark-md5'

  // 1MB = 1024KB = 1024 * 1024B
  const CHUNK_SIZE = 1024 * 1024

  const fileName = ref<string>('')
  const fileSize = ref<number>(0)
  const fileHash = ref<string>('')

  // 文件分片
  const createFileChunks = (file: File) => {
    let cur = 0
    const chunks = []
    while(cur < file.size) {
      chunks.push(file.slice(cur, cur + CHUNK_SIZE))
      cur += CHUNK_SIZE
    }

    return chunks
  }

  // 计算hash值
  const calcuteHash = (chunks: Array<Blob>) => {
    return new Promise(resolve => {
      const targets: Blob[] = []
      const spark = new SparkMD5.ArrayBuffer()
      // 1. 第一个和最后一个切片全部参与计算
      // 2. 中间的切片只有前两个字节、中间两个字节、后面两个字节参与计算
      chunks.forEach((chunk, index) => {
        if (index === 0 || index === chunks.length - 1) {
          targets.push(chunk)
        } else {
          targets.push(chunk.slice(0, 2)) // 前两个字节
          targets.push(chunk.slice(CHUNK_SIZE / 2, CHUNK_SIZE / 2 + 2)) // 中间两个字节
          targets.push(chunk.slice(CHUNK_SIZE - 2, CHUNK_SIZE)) // 后面两个字节
        }
      })

      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(new Blob(targets))

      fileReader.onload = (e) => {
        spark.append((e.target as FileReader).result); 
        resolve(spark.end());
      }
    })
  }

  // 合并请求
  const mergeRequest = () => {
    fetch('http://localhost:3000/merge', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fileHash: fileHash.value,
        fileName: fileName.value,
        size: CHUNK_SIZE
      })
    }).then(() => {
      alert('合并成功！')
    })
  }

  // 分片上传
  const uploadChunks = async (chunks: Array<Blob>, existsChunks: string[]) => {
    const data = chunks.map((chunk, index) => {
      return {
        fileName: fileName.value,
        fileHash: fileHash.value,
        chunkHash: fileHash.value + '-' + index,
        chunk: chunk
      }
    })

    const formDatas = data
      .filter((item) => !existsChunks.includes(item.chunkHash))// 过滤掉已经上传过的
      .map((item) => {// 把每一个分片转换成formdata
        const formData = new FormData()
        formData.append('fileName', item.fileName)
        formData.append('fileHash', item.fileHash)
        formData.append('chunkHash', item.chunkHash)
        formData.append('chunk', item.chunk)

        return formData
      })

    // [1,2,3,4,6,7]
    const max = 6 // 最大并行请求数
    const taskPool: any = [] // 请求队列
    let index = 0

    while(index < formDatas.length) {
      const task = fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formDatas[index]
      })

      task.then(() => {
        // 执行完后把当前任务从任务队列中删除
        taskPool.splice(taskPool.findIndex((item: any) => item === task))
      })
      taskPool.push(task)// 加入任务队列
      if (taskPool.length === max) {
        await Promise.race(taskPool)// 等待任务队列中任意一个任务完成
      }
      index ++
    }

    await Promise.all(taskPool)

    // 所有分片上传完成后，通知服务器可以合并了
    mergeRequest()
  }

  /**
 * 验证该文件是否需要上传，文件通过hash生成唯一，改名后也是不需要再上传的，也就相当于秒传
 */
  const verifyUpload = async () => {
    return fetch('http://127.0.0.1:3000/verify', {
                 method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fileName: fileName.value,
      fileHash: fileHash.value
    })
  })
  .then((response) => response.json())
  .then((data) => {
    return data; // data中包含对应的表示服务器上有没有该文件的查询结果
  });
}

const handleUpload = async (e: Event) => {
  // console.log((e.target as HTMLInputElement).files); // 伪数组
  // 读取文件
  const files = (e.target as HTMLInputElement).files
  if (!files) return
  // console.log(files[0]);
  fileName.value = files[0].name
  fileSize.value = files[0].size

  // 文件分片  
  const chunks = createFileChunks(files[0])

  // 计算hash值
  const hash = await calcuteHash(chunks)
  fileHash.value = hash as string
  // console.log(hash);

  // 校验是否需要上传
  const { data } = await verifyUpload()
  console.log(data);
  
  if (!data.shouldUpload) {
    alert('秒传成功')
    return;
  }
  // 分片上传
  uploadChunks(chunks, data.existsChunks)// data.existsChunks表示已经上传过的分片
  
}

</script>

<template>
  <h1>大文件上传</h1>
  <input @change="handleUpload" type="file">
</template>

<style scoped>
</style>
```
#### server/index.js
```javascript
const express = require('express');
const path = require('path');
const multiparty = require('multiparty');
const fse = require('fs-extra');
const cors = require("cors");
const bodyParser = require('body-parser');

const UPLOAD_DIR = path.resolve(__dirname, 'uploads')

const app = express();

// 提取文件后缀名
const extractExt = filename => {
  return filename.slice(filename.lastIndexOf('.'), filename.length)
}

app.use(bodyParser.json());
app.use(cors());

app.post('/upload', function (req, res) {
  const form = new multiparty.Form()

  form.parse(req, async (err, fields, files) => {
    const fileHash = fields['fileHash'][0]
    const chunkHash = fields['chunkHash'][0]

    // 临时存放切片的文件夹 
    const chunkDir = path.resolve(UPLOAD_DIR, fileHash)

    // 如果目录不存在，则创建一个新的
    if (!fse.existsSync(chunkDir)) {
      await fse.mkdirs(chunkDir)
    }

    // 如果存在，将所有的切片放到对应的目录里面
    const oldPath = files['chunk'][0]['path']
    await fse.move(oldPath, path.resolve(chunkDir, chunkHash))

    res.status(200).json({
      ok: true,
      msg: '上传成功'
    })
  })
})

app.post('/merge', async function(req, res) {
  const { fileHash, fileName, size } = req.body
  // console.log(fileHash);
  // console.log(fileName);

  const filePath = path.resolve(UPLOAD_DIR, fileHash + extractExt(fileName))
  const chunkDir = path.resolve(UPLOAD_DIR, fileHash)

  if(fse.existsSync(filePath)) {
    res.status(200).json({
      ok: true,
      msg: '合并成功'
    })
    return;
  }

  if (!fse.existsSync(chunkDir)) {
    res.status(410).json({
      ok: true,
      msg: '合并失败，请重新上传'
    })
    return;
  }

  const allChunks = await fse.readdir(chunkDir)

  allChunks.sort((a, b) => {
    return a.split('-')[1] - b.split('-')[1]
  })

  // console.log(filePath);

  const list = allChunks.map((chunkPath, index) => {
    return new Promise(resolve => {
      const readSream = fse.createReadStream(path.resolve(chunkDir, chunkPath))
      const writeSream = fse.createWriteStream(filePath, {
        start: index * size,
        end: (index + 1) * size
      })

      readSream.on('end', async () => {
        await fse.unlink(path.resolve(chunkDir, chunkPath))
        resolve()
      })

      readSream.pipe(writeSream)
    })
  })

  await Promise.all(list)
  fse.rmdirSync(chunkDir)


  res.status(200).json({
    ok: true,
    msg: '合并成功'
  })
})

app.post('/verify', async function (req, res) {
  const { fileHash, fileName } = req.body

  const filePath = path.resolve(UPLOAD_DIR, fileHash + extractExt(fileName))
  const chunkDir = path.resolve(UPLOAD_DIR, fileHash)

  let allChunks = []
  // 拿到之前已经上传过的分片
  if (fse.existsSync(chunkDir)) {
    allChunks = await fse.readdir(chunkDir)
  }

  if (fse.existsSync(filePath)) {
    res.status(200).json({
      ok: true,
      data: {
        shouldUpload: false
      }
    })
  } else {
    res.status(200).json({
      ok: true,
      data: {
        shouldUpload: true,
        existsChunks: allChunks
      }
    })
  }
})


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```
## 大文件上传
大文件上传 -分片,worker线程
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/CmPSbg01Eo2rDUxKkBXcBrmanPb.png)
### Hooks封装
src/workers/cutFile.js

[📎cutFile.js](https://www.yuque.com/attachments/yuque/0/2024/js/45821596/1724142068685-1103aac8-4fa8-45ae-a4ba-6cf68a199e45.js)

[📎big-file-upload-v3.js](https://www.yuque.com/attachments/yuque/0/2024/js/45821596/1724141246906-0c76e050-4387-4f28-b290-1be5f2df5856.js)
```javascript
// 大文件切片上传，worker.js
import SparkMD5 from 'spark-md5';
const DefaultChunkSize = 1024 * 1024 * 50; // 50MB
// const DefaultChunkSize = 1024 * 1024 * 1; // 1MB

self.onmessage = (e) => {// 接收主线程传递过来的参数
        const { file, chunkSize = DefaultChunkSize } = e.data;// 获取文件和切片大小

        // 获取文件切片方法
        let blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
                chunks = Math.ceil(file.size / chunkSize),// 计算切片数量
                currentChunk = 0,// 当前切片索引
                spark = new SparkMD5.ArrayBuffer(),// 创建sparkMD5对象
                fileChunkHashList = [],// 存储切片的hash值
                fileChunkList = [],// 存储切片
                fileReader = new FileReader();// 创建文件读取对象

        loadNext();// 开始读取文件

        function loadNext() {// 读取下一块
                let start = currentChunk * chunkSize,// 起始位置
                        // 结束位置，如果当前切片索引加1等于切片数量，则结束位置为文件大小，否则为当前切片索引加1乘以切片大小
                        end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;

                // 调用slice方法获取切片
                let chunk = blobSlice.call(file, start, end);
                // 将切片添加到切片列表中
                fileChunkList.push(chunk);
                fileReader.readAsArrayBuffer(chunk);// 读取切片
        }

        // 计算切片的hash值
        function getChunkHash(e) {// 获取切片的hash值
                const chunkSpark = new SparkMD5.ArrayBuffer()// 创建sparkMD5对象;
                chunkSpark.append(e.target.result);// 将切片添加到sparkMD5对象中
                fileChunkHashList.push(chunkSpark.end());// 将切片的hash值添加到切片hash值列表中
        }

        // 处理每一块的分片
        fileReader.onload = function (e) {// 读取成功
                // 计算分片的hash值
                spark.append(e.target.result); // Append array buffer
                // 计算当前切片索引
                currentChunk++;

                // 计算当前切片的hash值
                getChunkHash(e)

                if (currentChunk < chunks) {// 如果当前切片索引小于切片数量，则继续读取下一块
                        loadNext();// 读取下一块
                } else {
                        // 计算完成后，返回结果
                        self.postMessage({// 发送消息给主线程
                                fileMd5: spark.end(),// 文件hash值
                                fileChunkList,// 文件切片列表
                                fileChunkHashList,// 文件切片hash值列表
                        });
                        fileReader.abort();// 关闭文件读取对象
                        fileReader = null;// 清空文件读取对象
                }
        }

        // 读取失败
        fileReader.onerror = function () {
                self.postMessage({// 发送消息给主线程
                        error: 'oops, something went wrong.'
                });
        }
};
```
```javascript
//这里通过 hook 封装了这一块代码。代码中并没有处理文件上传完成，
//但没有发起合并请求的情况，因为后端没返回这种情况，所以这里没写；建议与后端进行沟通要求考虑全部情况。

import request from '@/utils/request'
import modal from '@/plugins/modal'
import { mapLimit } from 'async'
import { useI18n } from "vue-i18n"

const DefaultChunkSize = 1024 * 1024 * 50; // 50MB

// 上传文件
//uploadUrl:上传地址，checkFileFn:检查文件是否已上传，mergeFileFn:合并文件，callback:回调函数
const useCutFile = ({ uploadUrl, checkFileFn, mergeFileFn, callback }) => {
    const store = useStore();//获取store
    const { t } = useI18n()//获取语言包

    const file = ref(null)//上传文件
    const fileName = computed(() => file.value?.name || '')//文件名
    const fileSize = computed(() => file.value?.size || 0)//文件大小

    const fileMd5 = ref('')//文件md5
    const fileChunkList = ref([])//文件切片列表
    const fileChunkHashList = ref([])//文件切片hash列表
    const chunkTotal = ref(0)//切片总数
    // 上传id
    const uploadId = ref('')
    // 上传进度
    let uploadProgress = 0
    // 每一个分片已上传的大小
    let chunkUploadedSize = {}
    // 断点续传时已上传的大小
    let uploadedSize = 0

    // 监听上传文件弹框的文件改变
    async function handleUploadChange(fileObj) {
        file.value = fileObj
    }

    // 开始处理文件分块
    async function handleCutFile() {//处理文件分块
        const worker = new Worker(new URL('@/workers/cutFile.js', import.meta.url), {//创建worker
            type: 'module',//使用模块方式加载
        })

        // 文件切块的过程不可点击
        worker.postMessage({ file: file.value.raw })//发送文件给worker
        worker.onmessage = (e) => {//监听worker的消息
            handleCutSuccess(e.data)//处理切片成功
            worker.terminate()//终止worker
        }
    }

    // 切片文件成功
    async function handleCutSuccess(data) {//处理切片成功
        fileMd5.value = data.fileMd5//文件md5
        fileChunkList.value = data.fileChunkList//文件切片列表
        fileChunkHashList.value = data.fileChunkHashList//文件切片hash列表
        chunkTotal.value = fileChunkList.value.length//切片总数

        uploadFile()//上传文件
    }

    // 上传文件
    async function uploadFile() {//上传文件
        const data = await checkFile()//检查文件是否已经上传过
        if (!data) return//如果文件已经上传过，则直接返回

        const { chunk_upload, upload_id } = data//获取已上传的分片和上传id
        uploadId.value = upload_id//设置上传id

        if (chunk_upload.length === 0) {//如果文件没有上传过，则直接上传整个文件
            // 上传整个文件
            return await handleUploadRequest()
        }
        // 上传未上传的分片，过滤已上传的分片 - 断点续传
        if (chunk_upload.length !== chunkTotal.value) {//如果有未上传的分片，则上传未上传的分片
            uploadedSize = chunk_upload.length * DefaultChunkSize//已上传的大小

            return await handleUploadRequest(chunk_upload)//上传未上传的分片
        }
        // 上传完成 - 秒传
        store.dispatch('upload/setSampleUploading', false)//关闭上传弹框
        modal.msgSuccess(t('upload.uploadedTip'))//提示上传完成
        resetData()//重置数据
        return true
    }

    // 检查文件是否已经上传过
    async function checkFile() {
        // 这个接口要配置防响应拦截
        const params = {
            filename: fileName.value,//文件名
            file_hash: fileMd5.value,//文件md5
            total_chunks: chunkTotal.value,//切片总数
        }
        const { code, msg, data } = await checkFileFn(params)//检查文件是否已经上传过
        // 已经上传过返回对应hash值
        if (code === 0) {//已经上传过
            return data//返回数据
        }

        modal.msgError(msg)//提示错误
        store.dispatch('upload/setSampleUploading', false)//关闭上传弹框
        return false//返回false
    }

    // 处理分片文件的上传
    function uploadChunk(chunk, index, fileMd5) {//处理分片文件的上传
        const params = {//请求参数
            chunk_id: index + 1,//分片id
            file_hash: fileMd5,//文件md5
            upload_id: uploadId.value,//上传id
            chunk_hash: fileChunkHashList.value[index],//分片hash
        }

        const formData = new FormData()//创建formdata
        formData.append('file_chunk', chunk)//添加分片文件

        return {//返回请求
            url: uploadUrl,//上传地址
            method: 'post',//请求方式
            timeout: 5 * 60 * 1000,//超时时间
            data: formData,//请求参数
            params,//请求参数
            skipInterceptor: true,//跳过拦截器
            headers: {//请求头
                // 以前的人写了避免重复提交
                repeatSubmit: false,//避免重复提交
            },
            onUploadProgress: (progressEvent) => {//上传进度
                chunkUploadedSize[index] = progressEvent.loaded//设置已上传的大小

                // 计算uploadedSize的总和
                const size = Object.values(chunkUploadedSize).reduce((total, item) => {//计算已上传的大小
                    return total + item//已上传的大小
                }, 0)

                // 计算总的上传进度
                uploadProgress = ((size + uploadedSize) / fileSize.value) * 100//计算总的上传进度

                store.dispatch('upload/setProgress', uploadProgress)//设置上传进度
            }
        }
    }

    // 通过请求池的方式上传文件
    async function handleUploadRequest(uploadedChunks = []) {//通过请求池的方式上传文件
        const requestList = []//请求列表
        for (let i = 0; i < fileChunkList.value.length; i++) {//遍历分片列表
            if (uploadedChunks.indexOf(i + 1) === -1) {//如果当前分片没有上传过
                requestList.push(uploadChunk(fileChunkList.value[i], i, fileMd5.value))//添加到请求列表
            }
        }

        // 方法一：使用请求池的方式发送请求
        await processRequests(requestList)

        // 方法二：使用Promise.all一次性发送全部请求，uploadChunk需要返回request({})
        // await Promise.all(requestList)
        // // 上传完成后，合并文件
        // await mergeFileFn({ upload_id: uploadId.value })
        // return true
    }

    async function processRequests(requestList) {//处理请求
        mapLimit(requestList, 3, async (reqItem) => {//并发请求
            await request(reqItem)//发送请求
        }, async (err) => {
            if (err) {//请求失败
                console.log('err: ', err)//打印错误
                modal.msgError(t('upload.error'))//提示错误
                store.dispatch('upload/setSampleUploading', false)//关闭上传弹框
                resetData()//还原数据
                return false//返回false
            }
            await mergeFileFn({ upload_id: uploadId.value })//合并文件
            modal.msgSuccess(t('upload.success'))//提示成功
            callback && callback()//回调
            store.dispatch('upload/setSampleUploading', false)//关闭上传弹框
            resetData()//还原数据
            return true
        })
    }

    // 上传成功，还原数据
    function resetData() {
        fileMd5.value = ''
        fileChunkList.value = []
        fileChunkHashList.value = []
        chunkTotal.value = 0
        uploadId.value = ''
        uploadProgress = 0
        chunkUploadedSize = {}
        uploadedSize = 0
    }

    return {
        file,
        handleUploadChange,
        handleCutFile,
        handleCutSuccess,
        uploadFile,
        resetData,
    }
}

export default useCutFile
```
### 组件
[📎big-files-upload-v3.js](https://www.yuque.com/attachments/yuque/0/2024/js/45821596/1724142229050-094dbd8b-6b14-4d9c-b565-8351c9563d5d.js)

改成.vue
```javascript
<template>
        <el-dialog
                v-model="visible"
                :title="title"
                :width="width"
                append-to-body
                class="common-center-dialog"
                @close="emit('update:visible', false)"
        >
                <el-upload
                        ref="uploadRef"
                        :headers="getHeaders"
                        :limit="1"
                        :accept="accept"
                        :action="actionUrl"
                        :show-file-list="showFileList"
                        :before-upload="handleBeforeUpload"
                        :on-change="handleChange"
                        :on-success="handleSuccess"
                        :on-error="handleError"
                        :on-exceed="handleExceed"
                        :on-remove="handleRemove"
                        :auto-upload="autoUpload"
                        :disabled="loading"
                        drag
                >
                        <el-icon class="el-icon--upload">
                                <upload-filled />
                        </el-icon>
                        <div class="el-upload__text">
                                {{ t('upload.drag') }}
                                <em>{{ t('upload.upload') }}</em>
                        </div>
                        <template #tip>
                                <div class="el-upload__tip text-center">
                                        <span>{{ tipText || t('upload.onlyCsv') }}</span>
                                        <span v-if="templateUrl || customDownload">
                                                (<el-link
                                                        type="primary"
                                                        :underline="false"
                                                        style="font-size: 12px; vertical-align: baseline"
                                                        @click="handleDownload"
                                                        >{{ t('upload.downloadTemplate2') }}
                                                </el-link>)
                                        </span>
                                </div>
                        </template>
                </el-upload>

                <div class="content">
                        <slot />
                </div>

                <template #footer>
                        <div class="dialog-footer">
                                <el-button @click="emit('update:visible', false)">
                                        {{ t('pub.cancel') }}
                                </el-button>
                                <el-button type="primary" :disabled="disabled" @click="handleConfirm">
                                        {{ t('pub.sure') }}
                                </el-button>
                        </div>
                </template>
        </el-dialog>
</template>

<script setup>
import modal from '@/plugins/modal'
import { genFileId } from 'element-plus'
import { download } from '@/utils/request'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const props = defineProps({
        // 弹框参数
        visible: {
                type: Boolean,
                default: false,
        },
        title: {
                type: String,
                default: 'Upload File',
        },
        width: {
                type: String,
                default: '450px',
        },
        // 上传参数
        hasAuthorization: {
                type: Boolean,
                default: true,
        },
        // * 任意文件
        accept: {
                type: String,
                default: '.csv',
        },
        action: {
                type: String,
                default: '',
        },
        showFileList: {
                type: Boolean,
                default: true,
        },
        autoUpload: {
                type: Boolean,
                default: false,
        },
        // 500MB
        size: {
                type: Number,
                default: 500,
        },
        tipText: {
                type: String,
                default: '',
        },
        templateUrl: {
                type: String,
                default: '',
        },
        templateName: {
                type: String,
                default: 'template',
        },
        customDownload: {
                type: Boolean,
                default: false,
        },
        downloadMethod: {
                type: String,
                default: 'post',
        },
        autoSubmit: {
                type: Boolean,
                default: true,
        },
})
const emit = defineEmits(['change', 'remove', 'success', 'error', 'submit', 'cut-success'])

const store = useStore()
const getHeaders = computed(() => {
        if (props.hasAuthorization) {
                return { Authorization: 'Bearer ' + store.getters.token }
        }
        return {}
})

const actionUrl = computed(() => {
        return props.action ? `${ import.meta.env.VITE_APP_BASE_API }${props.action}` : ''
})

const loading = ref(false)
const uploadRef = ref()
const isAbort = ref(false)
const disabled = ref(true)

const fileObj = ref(null)

const handleBeforeUpload = (file) => {
        if(isAbort.value) {
                abort(file)
                return
        }
        loading.value = true
}

const handleChange = (file) => {
        const isLt = file.size / 1024 / 1024 < props.size
        const allowedExtensions = (props.accept && props.accept !== '*') ? props.accept.split(',').map(item => item.substring(1)) : []
        // 以第一个.后面的所有作为文件后缀
        const tmp = file.name.split('.')
        tmp.shift()
        const fileExtension = tmp.join('.').toLowerCase()

        if (!isLt) {
                modal.msgError(`${t('upload.sizeLimit')}${props.size}MB!`)
                isAbort.value = true
                return false
        }

        if (allowedExtensions.length && !allowedExtensions.includes(fileExtension)) {
                modal.msgError(`${t('upload.fileType')} ${allowedExtensions.join(', ')}`)
                isAbort.value = true
                return false
        }

        disabled.value = false
        fileObj.value = file
        emit('change', file)

        return true
}

const handleRemove = () => {
        disabled.value = true
        emit('remove', null, null)
}

const handleSuccess = (res, file) => {
        if (res.code && res.code !== 0) {
                emit('change', null, null)
                uploadRef.value.clearFiles()
                modal.msgError(res.msg, 10000)
                loading.value = false
                return
        }
        modal.msgSuccess(t('upload.success'))
        // 不知道为什么，这里触发的就算多级嵌套也能在父级接收到
        emit('success', res, file)
        emit('update:visible', false)
        loading.value = false
}

const handleError = (err) => {
        modal.msgError(t('upload.error'))
        emit('error', err)
        loading.value = false
}

const handleExceed = (files) => {
  uploadRef.value.clearFiles()
  const file = files[0]
  file.uid = genFileId()
  uploadRef.value.handleStart(file)
}

const handleDownload = () => {
        if (props.customDownload) {
                emit('download')
                return
        }

        if (props.templateName.includes('.')) {
                download(props.templateUrl, {}, props.templateName)
                return
        }
        download(props.templateUrl, {}, `${props.templateName}${props.accept}`, props.downloadMethod)
}

const handleReset = () => {
        uploadRef.value.clearFiles()
}

const handleConfirm = () => {
        if (props.autoSubmit) {
                uploadRef.value.submit()
        } else {
                emit('submit', uploadRef.value, fileObj.value)
        }
}

defineExpose({
        handleReset,
})
</script>

<style scoped lang="scss">
.content {
        margin-top: 18px;
}
</style>
```
## 上传s3
上传s3
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/Eannbk3gNoxx03xp5QdcCeLpn27.png)

