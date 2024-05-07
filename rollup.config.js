// const buildOptions = {
//   // 多入口配置
//   input: ['src/index.js', 'src/util.js'],
//   output: [
//     // 多产物配置
//     {
//       dir: 'dist/es',
//       format: "es"
//     },
//     {
//       dir: 'dist/cjs',
//       format: "cjs"
//     }
//   ]
// }

// export default buildOptions

// 如果不同入口对应的打包配置不一样，我们也可以默认导出一个配置数组
const buildIndexOptions = {
  input: ['src/index.js'],
  output: {
    dir: 'dist/es',
    format: "es"
  }
}

const buildUtilOptions = {
  input: ['src/util.js'],
  output: {
    dir: 'dist/cjs',
    format: "cjs"
  }
}

export default [buildIndexOptions, buildUtilOptions]