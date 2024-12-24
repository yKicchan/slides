import container from 'markdown-it-container';

/** 
 * @type {import('@marp-team/marp-cli').Config<typeof import('@marp-team/marpit').Marpit>["engine"]}
 */
export default ({ marp }) => marp
  .use(container, 's')
  .use(container, 'h')
  .use(container, 'note')
  .use(container, 'important')
  .use(container, 'tip')
  .use(container, 'caution')
  .use(container, "warning");
