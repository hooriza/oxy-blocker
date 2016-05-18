var css = `
  .--oxy-blocker {
    {{css:item}}
    {{css:cover}}
  }

  .--oxy-blocker::after {
    {{css:image}}
  }

  .prod_item .prod_main_info {
    {{css:transition}}
  }

  .--oxy-blocker > * {
    {{css:hide}}
  }
`;

OxyBlocker.initialize(css, {
  wrap: '#productListArea',
  list: '.product_list .prod_item:not(.--oxy-blocker-processed)',
  title: '.prod_name'
}, true);

OxyBlocker.initialize(css, {
  wrap: '#marketArea',
  list: '.product_list .prod_item:not(.--oxy-blocker-processed)',
  title: '.prod_name'
}, true);

OxyBlocker.initialize(css, {
  wrap: '#recommandProductArea',
  list: '.product_list .prod_item:not(.--oxy-blocker-processed)',
  title: '.prod_name'
}, true);
