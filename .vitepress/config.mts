import { defineConfig } from 'vitepress'
import { teekConfig } from './teekConfig.mjs'

const description = [
  '欢迎来到 vitepress-theme-teek 使用文档',
  'Teek 是一个基于 VitePress 构建的主题，是在默认主题的基础上进行拓展，支持 VitePress 的所有功能、配置',
  'Teek 拥有三种典型的知识管理形态：结构化、碎片化、体系化，可以轻松构建一个结构化知识库，适用个人博客、文档站、知识库等场景'
].toString()

/**
 * VitePress 配置
 *
 * @tutorial https://vitepress.dev/zh/reference/site-config
 */
export default defineConfig({
  extends: teekConfig,
  // ? 站点配置
  base: '/docs/',
  srcDir: './docs',

  // ? frontmatter 配置
  title: 'true-devops',
  description,

  // ? 主题相关配置
  themeConfig: {
    logo: '/teek-logo-mini.svg',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '计算机',
        items: [
          {
            text: '基础',
            items: [
              { text: '操作系统', link: '/computer/os-intro/' },
              { text: '计算机组成原理', link: '/computer/constitute-intro/' },
              { text: '计算机网络', link: '/computer/network-intro/' },
              { text: '数据结构', link: '/computer/dataStructure-intro/' }
            ]
          },
          {
            text: '应用',
            items: [
              { text: '数据库', link: '/computer/database-intro/' },
              { text: '设计模式', link: '/computer/designMode-intro/' },
              { text: '算法', link: '/computer/algorithm-intro/' }
            ]
          }
        ]
      },
      {
        text: '前端',
        items: [
          {
            text: '基础',
            items: [
              { text: 'HTML', link: '/fe/html-intro/' },
              { text: 'CSS', link: '/fe/css-intro/' },
              { text: 'JavaScript', link: '/fe/javaScript-intro/' }
            ]
          },
          {
            text: '应用',
            items: [{ text: 'Web', link: '/fe/web-intro/' }]
          },
          {
            text: '原理',
            items: [{ text: 'V8', link: '/fe/V8-intro/' }]
          }
        ]
      },
      {
        text: '工具',
        items: [
          {
            text: 'IDE',
            items: [{ text: 'JetBrains', link: '/tools/ide-jetBrains/' }]
          },
          {
            text: 'Ops',
            items: [
              { text: 'Git', link: '/tools/git-intro/' },
              { text: 'Npm', link: '/tools/npm-intro/' }
            ]
          }
        ]
      },
      {
        text: '学习',
        items: [
          {
            text: '输入法',
            items: [{ text: '小鹤音形', link: '/study/inputMethod-xhyx/' }]
          }
        ]
      },
      {
        text: 'Ops',
        items: [
          {
            text: '操作与使用',
            items: [
              { text: 'Windows', link: '/ops/windows-intro/' },
              { text: 'Linux', link: '/ops/linux-intro/' }
            ]
          },
          {
            text: '自动化',
            items: []
          }
        ]
      },
      {
        text: '汇总功能',
        items: [
          { text: '归档页', link: '/archives' },
          { text: '清单页', link: '/articleOverview' },
          { text: '分类页', link: '/categories' },
          { text: '标签页', link: '/tags' }
        ]
      }
    ],
    outline: {
      level: [2, 3],
      label: '本页导航'
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/True-Z/devops-docs'
      }
    ],
    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    editLink: {
      text: '在 GitHub 上编辑此页',
      pattern: 'https://github.com/True-Z/devops-docs/edit/master/docs/:path'
    },
    lastUpdated: {
      text: '上次更新时间'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    search: {
      provider: 'local'
    }
  }
})
