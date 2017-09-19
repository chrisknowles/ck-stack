import babel from 'rollup-plugin-babel';

export default {
  input: 'src/stack-test.js',
  output: [
    {
      file: 'dist/stack-test.js',
      format: 'cjs'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
