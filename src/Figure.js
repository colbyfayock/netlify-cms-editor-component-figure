export const Figure = {
  id: 'figure',
  label: 'Figure',
  fields: [
    {
      name: 'src',
      label: 'Image',
      widget: 'image',
      required: true
    },
    {
      name: 'caption',
      label: 'Caption',
      widget: 'string',
      required: true
    },
    {
      name: 'alt',
      label: 'Alt',
      widget: 'string'
    }
  ],
  pattern: /^\s*<figure>\s*<img src="([^"]*)" alt="([^"]*)" \/>\s*(?:<figcaption>([^"]*)<\/figcaption>\s*)<\/figure>\s*$/,
  fromBlock: function(match) {
    const src = match[1];
    const alt = match[2];
    const caption = match[3];
    return {
      src,
      caption,
      alt
    };
  },
  toBlock: createFigure,
  toPreview: createFigure
}

/**
 * createFigure
 * @description Creates an HTML string given the attributes
 */

function createFigure({ src, caption, alt = ''}) {
  if ( !src || !caption ) return '';
  return (
    ''
    + '<figure>'
      + ( src ? '<img src="' + src + '" alt="' + alt + '" />' : '')
      + ( caption ? '<figcaption>' + caption + '</figcaption>' : '')
    + '</figure>'
  )
}
