function linkBuilder(links){
    //
    //
    return links
      .map(function linkLister(link){
        return '<li>${link}</li>';
      })
      .join('');
    }

    links.forEach(function linkHandler(link){
        listHTML += `
      <li>${link}</li>
      `;
    });


}

export default function(state){
    return `
    <nav>
<ul>
  ${linkBuilder(state.links.primary)}
  <li class="dropdown">
    Portfolio
    <ul>
    ${linkBuilder(state.links.dropdown)}
    </ul>
  </li>
</ul>
</nav>
`;
}
