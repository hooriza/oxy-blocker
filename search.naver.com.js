var css = `
  .--oxy-blocker {
    {{css:item}}
    {{css:cover}}
  }

  .--oxy-blocker::after {
    {{css:image}}
  }

  .thumb_area a > :not(.mask),
  .detail_area > * {
    {{css:transition}}
  }

  .--oxy-blocker .thumb_area a > :not(.mask),
  .--oxy-blocker .detail_area > * {
    {{css:hide}}
  }
`;

OxyBlocker.initialize(css, {
  wrap: '#_shopping_guide_view',
  list: 'li.bx:not(--oxy-blocker-processed)',
  title: '.tit'
}, true);
