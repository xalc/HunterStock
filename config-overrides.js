const {override, addWebpackModuleRule,getBabelLoader,useBabelRc, tap} = require('customize-cra')



const visit = require('unist-util-visit')
// custom plugin to fix mdx->jsx backslask escape {`\`} issue
function fixBasckslashMdPlugin() {
  return tree => visit(tree, 'text', node => {
    if (node.value === '\\') {
      node.value = '\\\\'
    }
  })
}
const useSelfDefinedBable = () => config => {
  const babelLoader = getBabelLoader(config)
   config.module.rules.map(rule => {
    if (typeof rule.test !== 'undefined' || typeof rule.oneOf === 'undefined') {
      return rule
    }
    rule.oneOf.unshift({
      test: /\.mdx?$/,
      use: [
        {
          loader: babelLoader.loader,
          options: babelLoader.options
        },
        {
          loader: '@mdx-js/loader',
          options: {
            mdPlugins: [
              fixBasckslashMdPlugin
            ]
          }
        }
      ]
    })
    console.log(rule.oneOf)
    return rule
   });
   return config
}

module.exports = override(

  useSelfDefinedBable()

);

// module.exports = (config, _env) => {
//   const babelLoader = getBabelLoader(config.module.rules)
//   config.module.rules.map(rule => {
//     if (typeof rule.test !== 'undefined' || typeof rule.oneOf === 'undefined') {
//       return rule
//     }

//     rule.oneOf.unshift({
//       test: /\.mdx?$/,
//       use: [
//         {
//           loader: babelLoader.loader,
//           options: babelLoader.options
//         },
//         '@mdx-js/loader'
//       ]
//     })

//     return rule
//   })
//   return config
// }