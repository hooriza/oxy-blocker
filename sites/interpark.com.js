var css = `
  .--oxy-blocker {
    {{css:item}}
    {{css:cover}}
    background-color:#fff;
  }

  li.--oxy-blocker::after,
  div.--oxy-blocker::after,
  p.--oxy-blocker::after,
  tr.--oxy-blocker .nameNcateWrap::after {
    {{css:image}}
  }

  li > * {
    {{css:transition}};
  }

  .--oxy-blocker > * {
    {{css:hide}}
  }

  .list_view.--oxy-blocker {
    overflow:hidden;
  }

  p.--oxy-blocker::after {
    margin:-25px;
  }

  .itemList li.--oxy-blocker::after {
    margin:-35px;
  }
`;

OxyBlocker.initialize(css, {
  wrap: '#shoppingMain',
  list: [
    'div.categoryBestSection li:not(--oxy-blocker-processed)',
    'div.specialMallSection li:not(--oxy-blocker-processed)',
  ].join(','),
  title: '.productName'
}, true);

OxyBlocker.initialize('', {
  wrap: '#searchList',
  list: [ 'table.smallsortingList tr:not(--oxy-blocker-processed)' ].join(','),
  title: '.prodName'
}, true);

OxyBlocker.initialize('', {
  wrap: '#specialList',
  list: [ 'li:not(--oxy-blocker-processed)' ].join(','),
  title: '.listTitle'
}, true);

OxyBlocker.initialize('', {
  wrap: '.itemList',
  list: [ 'li:not(--oxy-blocker-processed)' ].join(','),
  title: '.listTitle'
}, true);

OxyBlocker.initialize('', {
  wrap: '.bestItem',
  list: [ 'div.prdCont:not(--oxy-blocker-processed)' ].join(','),
  title: '.contTitle'
}, true);

OxyBlocker.initialize('', {
  wrap: '.displayMain',
  list: [ '.bannerBox p:not(--oxy-blocker-processed)' ],
  title: function(el) {
    return el.querySelector('a').getAttribute('href');
  }
});