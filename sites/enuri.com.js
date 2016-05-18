var css = `
  .--oxy-blocker {
    {{css:item}}
    position:relative;
  }

  .--oxy-blocker::after {
    {{css:image}}
  }

  .--oxy-blocker > a,
  .--oxy-blocker > tbody {
    {{css:cover}}
  }

  li > a,
  table > tbody {
    {{css:transition}}
  }

  .--oxy-blocker > * {
    {{css:hide}}
  }
`;

OxyBlocker.initialize(css, {
  wrap: '.deal_srpList',
  list: 'li:not(.--oxy-blocker-processed)',
  title: 'strong'
}, true);

OxyBlocker.initialize(css, {
  wrap: 'body',
  list: 'table:not(.--oxy-blocker-processed)',
  title: '.modelname'
}, true);
