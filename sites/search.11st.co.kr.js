var css = `
  .--oxy-blocker {
    {{css:item}}
    {{css:cover}}
  }

  .--oxy-blocker::after {
    {{css:image}}
  }

  .type_listing li > * {
    {{css:transition}}
  }

  .--oxy-blocker > * {
    {{css:hide}}
  }
`;

// http://search.11st.co.kr/SearchPrdAction.tmall?method=getTotalSearchSeller&targetTab=T&isGnb=Y&prdType=&category=&cmd=&pageSize=&lCtgrNo=&mCtgrNo=&sCtgrNo=&dCtgrNo=&fromACK=&semanticFromGNB=&gnbTag=TO&schFrom=&ID=&ctgrNo=&srCtgrNo=&kwd=%BF%C1%BD%C3&adUrl=&adKwdTrcNo=1201605024126755430&adPrdNo=218706706
OxyBlocker.initialize(css, {
  wrap: '#contsWrap',
  list: '.type_listing li:not(--oxy-blocker-processed), .type_thumb li:not(--oxy-blocker-processed), .recomd_thumblist  li:not(--oxy-blocker-processed)',
  title: 'div.pup_title, em.pub_title'
}, true);

OxyBlocker.initialize(`
  div.dlp_shocking_deal li > * {
    {{css:transition}}
  }
`, {
  wrap: 'div.dlp_shocking_deal',
  list: 'ul.deal_li li:not(--oxy-blocker-processed)',
  title: 'div.pub_info em'
}, false);
