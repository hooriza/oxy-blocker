var css = `
  .--oxy-blocker {
    {{css:item}}
    background-color:#fff !important;
  }

  .--oxy-blocker::after {
    {{css:image}}
  }

  .--oxy-blocker > .link {
    {{css:cover}}
  }

  .list-item .link {
    {{css:transition}}
  }

  .--oxy-blocker > * {
    {{css:hide}}
  }
`;

OxyBlocker.initialize(css, {
  wrap: '#hotClickListDiv',
  list: '.lists-wrap .list-item:not(.--oxy-blocker-processed)',
  title: '.area-title'
}, true);

OxyBlocker.initialize(css, {
  wrap: '#dealListDiv',
  list: '.list-item:not(.--oxy-blocker-processed)',
  title: '.area-title'
}, true);