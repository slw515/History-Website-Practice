window.timelineEvents = {
  years: [
    {
      id: "lm001",
      event: "Battle of Singapore",
      month: "January",
      year: "1939",
      title: "Principal Landscape Architect",
      bio:
        "Tony grew up engulfed by the business of landscape design, working most summers with his father, Roberto, at Leaf & Mortar, and with every passing year he knew more and more that he wanted to walk in his father’s footsteps. Roberto, however, was adamant that Tony attend college before settling upon a career. They compromised and Tony set out to study landscape architecture.  After graduating in the top of his class with both a BLA and MLA from University of Oregon, in Eugene, Tony was ready and excited to commit to the family business. Tony’s contributions have included bringing in various public beautification and sustainable design projects that continue to make Portland a progressive, eco-friendly city, and have put Leaf & Mortar on the map for “Small Local Companies with a Big Heart.",
      order: 0
    },
    {
      id: "lm001",
      event: "Phony War",
      month: "September",
      year: "1939",
      title: "Principal Landscape Architect",
      bio:
        "Tony grew up engulfed by the business of landscape design, working most summers with his father, Roberto, at Leaf & Mortar, and with every passing year he knew more and more that he wanted to walk in his father’s footsteps. Roberto, however, was adamant that Tony attend college before settling upon a career. They compromised and Tony set out to study landscape architecture.  After graduating in the top of his class with both a BLA and MLA from University of Oregon, in Eugene, Tony was ready and excited to commit to the family business. Tony’s contributions have included bringing in various public beautification and sustainable design projects that continue to make Portland a progressive, eco-friendly city, and have put Leaf & Mortar on the map for “Small Local Companies with a Big Heart.",
      order: 0
    },
    {
      id: "lm002",
      event: "Pearl Harbor",
      month: "December",
      year: "1939",
      title: "landscape designer",
      bio:
        "Ailene grew up surrounded by green hills and marshlands in Scotland, and although that lush emerald richness is what first enticed her into landscape design, it was, ironically, her interest in water conservation that made her consider it as a serious career.  After completing her undergraduate studies at the University of Glasgow, she moved to California where she received her masters in Ecological Management and Restoration, and began freelancing with various landscape companies. After building up a healthy portfolio of prestigious landscape restoration projects in California’s drought-stricken environment, Ailene was granted membership into the Association of Professional Landscape Designers. Since then, she’s been a key member of our team, and has turned many green yards, into water-friendly rock gardens.",
      order: 1
    },

    {
      id: "lm003",
      event: "Invasion of France",
      month: "February",
      year: "1940",
      title: "LANDSCAPE DESIGNER",
      bio:
        "The daughter of a painter mother and a sculptor father, meant Kristiann was destined to be artistic, but what form that would take was a mystery to her family until she was 9. Suddenly, she became interested in the local community gardens, and had her very own plot at the age of 11. Her intricate weavings of local produce, ground covers, and wildflowers became a point of interest in the community. In fact, visitors, in search of gardening and landscape design tips, would swarm to her plot in numbers. By the age of 15, she was speaking at weekend landscape design workshops. Kristiann continued to hone her landscaping skills during summers and breaks away from her MFA program at NYU, and received her APLD shortly after graduation. Kristiann is responsible for designing some of the most exotic and pristine landscapes in the Portland area, where she applies her impressive skills in color and balance to the landscape, like a painter commits paint to the canvas.",
      order: 2
    },
    {
      id: "lm004",
      event: "Battle of Britain",
      month: "December",
      year: "1941",
      title: "HORTICULTURIST",
      bio:
        "There’s no logic that truly explains Geena’s keen interest in plants or her uncanny ability to cultivate original and viable plant stock. Her mother was a banker and her father, an accountant, and most of her siblings work in the finance industry, too. Perhaps the only commonality is that money and plants are both green. In any event, Geena excels at understanding plant growth, creating new and enticing strains of plants that are resistant to disease and drought, and finding or growing the perfect plants for every situation. We are fortunate to have lured Geena away from her work as an educational horticulturist at Portland State University, to her current role as resident plant specialist for Leaf & Mortar.",
      order: 3
    },
    {
      id: "lm004",
      event: "Stalingrad",
      month: "December",
      year: "1942",
      title: "HORTICULTURIST",
      bio:
        "There’s no logic that truly explains Geena’s keen interest in plants or her uncanny ability to cultivate original and viable plant stock. Her mother was a banker and her father, an accountant, and most of her siblings work in the finance industry, too. Perhaps the only commonality is that money and plants are both green. In any event, Geena excels at understanding plant growth, creating new and enticing strains of plants that are resistant to disease and drought, and finding or growing the perfect plants for every situation. We are fortunate to have lured Geena away from her work as an educational horticulturist at Portland State University, to her current role as resident plant specialist for Leaf & Mortar.",
      order: 3
    },
    {
      id: "lm004",
      event: "Hitler's Suicide",
      month: "October",
      year: "1943",
      title: "HORTICULTURIST",
      bio:
        "There’s no logic that truly explains Geena’s keen interest in plants or her uncanny ability to cultivate original and viable plant stock. Her mother was a banker and her father, an accountant, and most of her siblings work in the finance industry, too. Perhaps the only commonality is that money and plants are both green. In any event, Geena excels at understanding plant growth, creating new and enticing strains of plants that are resistant to disease and drought, and finding or growing the perfect plants for every situation. We are fortunate to have lured Geena away from her work as an educational horticulturist at Portland State University, to her current role as resident plant specialist for Leaf & Mortar.",
      order: 3
    },
    {
      id: "lm004",
      event: "Battle of Britain",
      month: "December",
      year: "1944",
      title: "HORTICULTURIST",
      bio:
        "There’s no logic that truly explains Geena’s keen interest in plants or her uncanny ability to cultivate original and viable plant stock. Her mother was a banker and her father, an accountant, and most of her siblings work in the finance industry, too. Perhaps the only commonality is that money and plants are both green. In any event, Geena excels at understanding plant growth, creating new and enticing strains of plants that are resistant to disease and drought, and finding or growing the perfect plants for every situation. We are fortunate to have lured Geena away from her work as an educational horticulturist at Portland State University, to her current role as resident plant specialist for Leaf & Mortar.",
      order: 3
    }
  ]
};

function getAllDatePoints(data) {
  let returnArray = [];
  data.years.forEach(element => {
    if (returnArray.includes(element.year) === false) {
      returnArray.push(element.year);
    }
  });
  returnArray.sort(sortNumber);
  return returnArray;
}

function sortNumber(a, b) {
  return a - b;
}

function renderYears() {
  var filterButtons = document.querySelector(".filter");
  var uniqueYears = getAllDatePoints(timelineEvents);

  for (i = 0; i < uniqueYears.length; i++) {
    var yearHeader = document.createElement("a");
    yearHeader.id = uniqueYears[i];
    yearHeader.setAttribute("role", "button");
    yearHeader.setAttribute("href", "#");
    yearHeader.setAttribute("data-filter", uniqueYears[i]);
    yearHeader.className = "yearvalues";
    yearHeader.innerHTML = uniqueYears[i];
    filterButtons.appendChild(yearHeader);
  }
}

function renderTimeline(data) {
  var infoBox = document.querySelector(".boxes");

  for (i = 0; i < data.years.length; i++) {
    var dataHeader = document.createElement("div");
    var titleHeader = document.createElement("div");
    var content = document.createElement("div");
    var h1Year = document.createElement("h1");
    var h2Title = document.createElement("h2");
    var contentParagraph = document.createElement("p");

    titleHeader.setAttribute("class", "title");
    dataHeader.setAttribute("class", "column");
    content.setAttribute("class", "description");

    h1Year.innerHTML = data.years[i].month;
    h2Title.innerHTML = data.years[i].event;
    titleHeader.appendChild(h2Title);
    titleHeader.appendChild(h1Year);

    contentParagraph.innerHTML = data.years[i].bio;
    content.appendChild(contentParagraph);

    dataHeader.setAttribute("data-category", data.years[i].year);

    dataHeader.appendChild(titleHeader);
    dataHeader.appendChild(content);
    infoBox.appendChild(dataHeader);
  }
}

renderYears(timelineEvents);
renderTimeline(timelineEvents);

(function($) {
  "use strict";

  var $filters = $(".filter [data-filter]"),
    $boxes = $(".boxes [data-category]");

  $(document).ready(function() {
    var firstYear = $(".filter").find("a:first");
    $filters.removeClass("active");
    firstYear.addClass("active");

    var $filterYear = firstYear.attr("data-filter");
    $boxes
      .removeClass("is-animated")
      .fadeOut()
      .finish()
      .promise();
    // .done(function() {
    $boxes.filter('[data-category = "' + $filterYear + '"]').each(function(i) {
      $(this)
        .addClass("is-animated")
        .delay(i++ * 200)
        .fadeIn();
    });
    // });
  });

  $filters.on("click", function(e) {
    e.preventDefault();
    var $this = $(this);
    console.log($this);
    $filters.removeClass("active");
    $this.addClass("active");

    var $filterYear = $this.attr("data-filter");

    $boxes
      .removeClass("is-animated")
      .fadeOut()
      .finish()
      .promise()
      .done(function() {
        $boxes
          .filter('[data-category = "' + $filterYear + '"]')
          .each(function(i) {
            $(this)
              .addClass("is-animated")
              .delay(i++ * 200)
              .fadeIn();
          });
      });
  });
})(jQuery);
