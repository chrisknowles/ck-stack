import babel from 'rollup-plugin-babel';
import butternut from 'rollup-plugin-butternut';

export default {
  input: 'src/stack.js',
  output: [
    {
      file: 'dist/stack.min.js',
      name: 'Stack',
      format: 'umd',
      sourcemap: true
    }
  ],
  plugins: [
    butternut(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
