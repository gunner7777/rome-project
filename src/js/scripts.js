const LabsInfo = [
  {
    id: 'l0001',
    name: 'Лаборатория экспериментальной гидропоники и органического земледелия',
    code: '<iframe width="560" height="315" src="https://www.youtube.com/embed/3gO2gvl8QxA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  },
  {
    id: 'l0002',
    name: 'Ветеринарная клиника',
    code: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mc4h6qHzOE0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  },
  {
    id: 'l0003',
    name: 'Лаборатория инновационных технологий пищевых производств',
    code: '<iframe width="560" height="315" loading="lazy" src="https://www.youtube.com/embed/5K27s0QUS80" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  },
  {
    id: 'l0004',
    name: 'Лаборатория иммунобиохимического анализа биологических объектов',
    code: '<iframe width="560" height="315" src="https://www.youtube.com/embed/3gO2gvl8QxA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  },
  {
    id: 'l0005',
    name: 'Лаборатория ветеринарной иммунологии и морфологии',
    code: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mc4h6qHzOE0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  },
  {
    id: 'l0006',
    name: 'Лаборатория по изучению патологии репродуктивных органов и молочной железы у животных',
    code: '<iframe width="560" height="315" loading="lazy" src="https://www.youtube.com/embed/5K27s0QUS80" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  },
  {
    id: 'l0007',
    name: 'Лаборатория диагностики качества кормов и разведения сельскохозяйственных животных им. Л.К. Эрнста',
    code: '<iframe width="560" height="315" src="https://www.youtube.com/embed/3gO2gvl8QxA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  },
  {
    id: 'l0008',
    name: 'Патологоанатомический музей ветеринарного факультета',
    code: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mc4h6qHzOE0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  },
  {
    id: 'l0009',
    name: 'Аналитическая лаборатория',
    code: '<iframe width="560" height="315" loading="lazy" src="https://www.youtube.com/embed/5K27s0QUS80" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  },
  {
    id: 'l0010',
    name: 'Музей истории Академии',
    code: '<iframe width="560" height="315" src="https://www.youtube.com/embed/3gO2gvl8QxA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  },
  {
    id: 'l0011',
    name: 'Лаборатория коневодства',
    code: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mc4h6qHzOE0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  },
  {
    id: 'l0012',
    name: 'Зерносушильный комплекс',
    code: '<iframe width="560" height="315" loading="lazy" src="https://www.youtube.com/embed/5K27s0QUS80" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  }
];

const BadgesInfo = [
  {
    id: 'b0001',
    name: 'Награды правительства',
    code: '<object data="https://vgsha.info/wp-content/uploads/docs/academy/docs/Pril1_akkred_03.09.2015.pdf" type="application/pdf"><p>Не удалось отобразить файл</p></object>'
  },
  {
    id: 'b0002',
    name: 'Награды минсельхоза',
    code: '<object data="https://vgsha.info/wp-content/uploads/docs/academy/docs/Pril1_akkred_03.09.2015.pdf" type="application/pdf"><p>Не удалось отобразить файл</p></object>'
  },
  {
    id: 'b0003',
    name: 'Награды академии',
    code: '<object data="https://vgsha.info/wp-content/uploads/docs/academy/docs/Pril1_akkred_03.09.2015.pdf" type="application/pdf"><p>Не удалось отобразить файл</p></object>'
  }
];

function TopscrollTo() {
  if (window.scrollY != 0) {
    setTimeout(function () {
      window.scrollTo(0, window.scrollY - 300);
      TopscrollTo();
    }, 20);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const firstBlockHeight = 600;
  const goToUp = document.querySelector(".GoToUp");
  const headerNode = document.querySelector(".Header-Outer");

  fixedHeader(headerNode);
  goToUpButton(goToUp, firstBlockHeight);

  window.addEventListener("scroll", function() {
    fixedHeader(headerNode);
    goToUpButton(goToUp, firstBlockHeight);
  });

  document.addEventListener("click", function (e) {
    if(e.target.classList.contains("LandingNav-Link")) {
      e.preventDefault();
      let blockForScroll = document.getElementById(e.target.dataset.toBlockId);
      blockForScroll.scrollIntoView({ block: "start", behavior: "smooth" });
    }

    if(e.target.classList.contains("LabsList-Item")) {
      e.preventDefault();
      document.querySelector(".Modal-Outer").classList.add("Modal-Outer_Show");
      document.body.classList.add('Modal_WithModalShow');
      //modalInfoUpdate(getCurrentLab(e.target.dataset.labId), document.querySelector('.Modal-Title'), document.querySelector('.Modal-Content'));
      modalInfoUpdate(getCurrentElem(e.target.dataset.labId, LabsInfo), document.querySelector('.Modal-Title'), document.querySelector('.Modal-Content'));
    }

    if(e.target.classList.contains("BadgesList-Item")) {
      e.preventDefault();
      document.querySelector(".Modal-Outer").classList.add("Modal-Outer_Show");
      document.body.classList.add('Modal_WithModalShow');
      //modalInfoUpdate(getCurrentLab(e.target.dataset.labId), document.querySelector('.Modal-Title'), document.querySelector('.Modal-Content'));
      modalInfoUpdate(getCurrentElem(e.target.dataset.badgeId, BadgesInfo), document.querySelector('.Modal-Title'), document.querySelector('.Modal-Content'));
    }

    if (e.target.classList.contains("Modal-Outer")) {
      e.target.classList.remove("Modal-Outer_Show");
      document.body.classList.remove('Modal_WithModalShow');
      modalClear();
    }
    if (e.target.classList.contains("Button_ModalClose")) {
      e.target.parentNode.parentNode.parentNode.classList.remove(
        "Modal-Outer_Show"
      );
      document.body.classList.remove('Modal_WithModalShow');
      modalClear();
    }
  });
});

function fixedHeader(h) {
  if (pageYOffset > 10) {
    h.classList.add("Header_Fixed");
  } else {
    h.classList.remove("Header_Fixed");
  }
}

function goToUpButton(gtu, fbh) {
  if (pageYOffset > fbh) {
    gtu.classList.add("GoToUp_Show");
  } else {
    gtu.classList.remove("GoToUp_Show");
  }
}

/* function getCurrentLab(labId) {
  const currentLab = LabsInfo.filter((lab) => {
    if(lab.id === labId) {
      return lab;
    }
  });
  return currentLab;
} */

function getCurrentElem(elId, elInfo) {
  const currentEl = elInfo.filter((el) => {
    if(el.id === elId) {
      return el;
    }
  });
  return currentEl;
}

/* function modalInfoUpdate(currLab, titleNode, contentNode) {
  titleNode.innerHTML = currLab[0].name;
  contentNode.innerHTML = currLab[0].code;
} */

function modalInfoUpdate(currEl, titleNode, contentNode) {
  titleNode.innerHTML = currEl[0].name;
  contentNode.innerHTML = currEl[0].code;
}

function modalClear() {
  document.querySelector('.Modal-Title').innerHTML = "";
  document.querySelector('.Modal-Content').innerHTML = "";
}