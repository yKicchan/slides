import container from 'markdown-it-container';
import attrs from 'markdown-it-attrs';
import ins from 'markdown-it-ins';
import mark from 'markdown-it-mark'
import prism from 'markdown-it-prism';
import textualUml from 'markdown-it-textual-uml';

/** 
 * @type {import('@marp-team/marp-cli').Config<typeof import('@marp-team/marpit').Marpit>["engine"]}
 */
export default ({ marp }) => marp
  .use(textualUml)
  .use(prism)
  .use(mark)
  .use(ins)
  .use(attrs)
  .use(container, '_')
  .use(container, 'c')
  .use(container, 'h');
