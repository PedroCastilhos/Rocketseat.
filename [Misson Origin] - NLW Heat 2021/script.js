function showMeSomething(teste) {
  return alert(links.instagram);
}

const links = {
  github: 'pedroCastilhos',
  youtube: 'UCRyPWUDr73BJfKiemoAUZBA',
  facebook: 'pedrocastilhospdc',
  instagram: 'pedrocstlhs',
  twitter: 'pedrocstlhs',
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class');
    li.children[0].href = `https://www.${social}.com/${links[social]}`;
    alert(li.children[0].href);
  }
}

changeSocialMediaLinks();
