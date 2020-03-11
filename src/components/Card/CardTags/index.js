/** @jsx jsx */
import { jsx } from 'theme-ui';

import CardLabel from '../CardLabel';
import CardTag from './CardTag';

export default p => {
  const { url, tags, label, ismail } = p;
  const directTo = ismail ? `mailto:${url}` : url;
  return (
    <div
        {...p}
        sx={{
          fontSize: [1,2],
          color: ['black'],
          lineHeight: ['heading'],
          fontFamily: 'body',
          paddingBottom: [2,3,4]
        }}
    >
      <CardLabel>{label}</CardLabel>
      <div
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}
      >
        {tags.map(t => (
          <CardTag>{t}</CardTag>
        ))}
      </div>
    </div>
  )
}