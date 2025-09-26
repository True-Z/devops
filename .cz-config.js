module.exports = {
  messages: {
    type: '选择一种你的提交类型：',
    customScope: '选择一个scope（可选）：',
    subject: '填写简短精炼的变更描述：',
    body: '填写更加详细的变更描述，使用"|"换行（可选）：',
    footer: '列举关联的issue，例如：#31, #34（可选）：',
    confirmCommit: '是否提交或修改commit？'
  },
  types: [
    ['feat', '新功能'],
    ['fix', 'Bug 修复'],
    ['perf', '性能优化'],
    ['refactor', '代码重构'],
    ['release', '代码发布'],
    ['revert', '代码回退'],

    ['wip', '开发中'],
    ['docs', '文档'],
    ['style', '代码格式'],
    ['test', '测试'],

    ['build', '构建流程、外部依赖变更'],
    ['ci', 'CI 配置、脚本'],
    ['chore', '构建/工程依赖/工具'],
    ['init', '初始化']
  ].map(([value, description]) => ({
    value,
    name: `${value.padEnd(30)} ${description}`
  })),
  scopes: [
    ['core', '代码'],
    ['shared', '共享'],
    ['build', '构建'],
    ['release', '发布'],
    ['other', '其他']
  ].map(([value]) => ({
    value,
    name: value
  })),
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  subjectLimit: 100
}
