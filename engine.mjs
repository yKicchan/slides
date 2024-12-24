import container from 'markdown-it-container';
import prism from 'markdown-it-prism';
import attrs from 'markdown-it-attrs';

/** 
 * @type {import('@marp-team/marp-cli').Config<typeof import('@marp-team/marpit').Marpit>["engine"]}
 */
export default ({ marp }) => marp
  .use(prism)
  .use(attrs)
  .use(container, 's')
  .use(container, 'h')
  .use(container, 'note')
  .use(container, 'important')
  .use(container, 'tip')
  .use(container, 'caution')
  .use(container, "warning");
