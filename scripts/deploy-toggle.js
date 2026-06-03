/**
 * 部署开关脚本
 *
 * 用法:
 *   node scripts/deploy-toggle.js status   # 查看当前开关状态
 *   node scripts/deploy-toggle.js on       # 开启自动部署
 *   node scripts/deploy-toggle.js off      # 关闭自动部署
 *
 * 原理:
 *   通过修改 .vercel-deploy 文件内容来控制 Vercel / GitHub Actions
 *   是否执行自动部署。该文件内容仅包含一行: enabled 或 disabled。
 */

const fs = require('fs');
const path = require('path');
const TOGGLE_FILE = path.join(__dirname, '..', '.vercel-deploy');

const command = process.argv[2] || 'status';

function readState() {
  try {
    const content = fs.readFileSync(TOGGLE_FILE, 'utf-8').trim();
    if (content === 'enabled' || content === 'disabled') return content;
  } catch {}
  return 'unknown';
}

function writeState(state) {
  fs.writeFileSync(TOGGLE_FILE, state + '\n', 'utf-8');
}

function printUsage() {
  console.log(`
用法: node scripts/deploy-toggle.js <status|on|off>

  status    查看当前部署开关状态（默认）
  on        开启自动部署（Vercel / GitHub Actions 正常触发）
  off       关闭自动部署（推送代码时不触发远程部署）
`);
}

switch (command) {
  case 'on': {
    writeState('enabled');
    console.log('✅ 部署开关已开启');
    console.log('   下次 push 到 main 时将正常触发 Vercel / GitHub Actions 部署');
    break;
  }
  case 'off': {
    writeState('disabled');
    console.log('❌ 部署开关已关闭');
    console.log('   下次 push 到 main 时将跳过 Vercel / GitHub Actions 部署');
    console.log('   需要手动部署时: pnpm run deploy:on 后再 push');
    break;
  }
  case 'status': {
    const state = readState();
    const icon = state === 'enabled' ? '🟢' : state === 'disabled' ? '🔴' : '⚪';
    const label = state === 'enabled' ? '开启' : state === 'disabled' ? '关闭' : '未知';
    console.log(`当前部署开关: ${icon} ${label}`);
    console.log(`标记文件: ${TOGGLE_FILE}`);
    break;
  }
  default: {
    console.error(`未知命令: ${command}`);
    printUsage();
    process.exit(1);
  }
}
