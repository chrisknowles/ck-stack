import babel from 'rollup-plugin-babel';

export default {
  input: 'src/stack-umd.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs'
    },
    {
      file: 'dist/stack.js',
      name: 'Stack',
      format: 'umd'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
