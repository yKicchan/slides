import container from 'markdown-it-container';
import prism from 'markdown-it-prism';
import attrs from 'markdown-it-attrs';

/** 
 * @type {import('@marp-team/marp-cli').Config<typeof import('@marp-team/marpit').Marpit>["engine"]}
 */
export default ({ marp }) => marp
  .use(prism)
  .use(attrs)
  .use(container, '_')
  .use(container, 'c')
  .use(container, 'h');
