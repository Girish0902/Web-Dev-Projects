(function () {
  'use strict';

  /* === CHARACTER DATA === */
  const characters = [
    {
      id: 1,
      name: 'Bugs Bunny',
      universe: '90s Nostalgia',
      role: 'Trickster Rabbit & Looney Tunes Icon',
      bioDescription: 'The wisecracking, carrot-chomping trickster from Looney Tunes who outsmarts any adversary with wit and sarcasm. First appeared in 1940 and became one of the most recognizable cartoon characters in history, earning a star on the Hollywood Walk of Fame.',
      catchphrase: 'Eh, what\'s up, doc?',
      imageUrl: 'https://placehold.co/400x500/0a0a23/00f0ff?text=Bugs%20Bunny'
    },
    {
      id: 2,
      name: 'SpongeBob SquarePants',
      universe: '90s Nostalgia',
      role: 'Fry Cook & Optimistic Sponge',
      bioDescription: 'An eternally optimistic sea sponge who lives in a pineapple under the sea and works as a fry cook at the Krusty Krab. His boundless enthusiasm and childlike wonder make him a beloved cultural icon spanning generations.',
      catchphrase: 'I\'m ready! I\'m ready! I\'m ready!',
      imageUrl: 'https://placehold.co/400x500/0a0a23/ff2975?text=SpongeBob'
    },
    {
      id: 3,
      name: 'Sailor Moon',
      universe: '90s Nostalgia',
      role: 'Guardian of Love & Justice',
      bioDescription: 'Usagi Tsukino is an ordinary clumsy schoolgirl who transforms into Sailor Moon, the legendary guardian destined to protect Earth from dark forces. Leading the Sailor Scouts, she embodies compassion, friendship, and the power of believing in others.',
      catchphrase: 'In the name of the moon, I will punish you!',
      imageUrl: 'https://placehold.co/400x500/0a0a23/a855f7?text=Sailor%20Moon'
    },
    {
      id: 4,
      name: 'Tommy Pickles',
      universe: '90s Nostalgia',
      role: 'Leader of the Rugrats',
      bioDescription: 'The courageous one-year-old leader of the Rugrats gang. Armed with his screwdriver and boundless curiosity, Tommy leads his baby friends on imaginative adventures that explore the world from a toddler\'s perspective.',
      catchphrase: 'A baby\'s gotta do what a baby\'s gotta do.',
      imageUrl: 'https://placehold.co/400x500/0a0a23/00f0ff?text=Tommy%20Pickles'
    },
    {
      id: 5,
      name: 'Naruto Uzumaki',
      universe: 'Modern Anime',
      role: 'Ninja & Seventh Hokage',
      bioDescription: 'A hyperactive ninja who rose from being a lonely outcast to becoming the most powerful shinobi in the Hidden Leaf Village. Through sheer determination and an unbreakable will, Naruto earned the respect of his peers and achieved his dream of becoming Hokage.',
      catchphrase: 'Believe it! Dattebayo!',
      imageUrl: 'https://placehold.co/400x500/0a0a23/ff6a00?text=Naruto'
    },
    {
      id: 6,
      name: 'Goku',
      universe: 'Modern Anime',
      role: 'Saiyan Warrior & Earth\'s Protector',
      bioDescription: 'The pure-hearted Saiyan warrior raised on Earth who constantly pushes beyond his limits to protect his loved ones. Goku\'s insatiable love for battle and self-improvement has driven him to achieve god-like transformations, including Super Saiyan and Ultra Instinct.',
      catchphrase: 'It\'s over 9000!',
      imageUrl: 'https://placehold.co/400x500/0a0a23/ff2975?text=Goku'
    },
    {
      id: 7,
      name: 'Pikachu',
      universe: 'Modern Anime',
      role: 'Electric Mouse Pokémon & Ash\'s Partner',
      bioDescription: 'The most famous Pokémon in the world, Pikachu is an Electric-type mouse Pokémon who formed an unbreakable bond with Ash Ketchum. Despite refusing to evolve, Pikachu has proven to be one of the most powerful and loyal partners in the Pokémon world.',
      catchphrase: 'Pika pika! Pikachu!',
      imageUrl: 'https://placehold.co/400x500/0a0a23/ffd700?text=Pikachu'
    },
    {
      id: 8,
      name: 'Levi Ackerman',
      universe: 'Modern Anime',
      role: 'Captain of Survey Corps',
      bioDescription: 'Humanity\'s strongest soldier and captain of the Survey Corps special operations squad. Levi is a stoic, impeccably clean master swordsman who carries the weight of humanity\'s survival on his shoulders while maintaining an unwavering commitment to discipline and excellence.',
      catchphrase: 'Tch. Give up on your dreams and die.',
      imageUrl: 'https://placehold.co/400x500/0a0a23/00f0ff?text=Levi'
    },
    {
      id: 9,
      name: 'Rick Sanchez',
      universe: 'Sci-Fi Cartoons',
      role: 'Mad Scientist & Interdimensional Genius',
      bioDescription: 'A brilliant but alcoholic mad scientist who travels across dimensions with his grandson Morty. Rick is widely considered the smartest being in the known universe, though his genius is matched only by his nihilism, cynicism, and reckless disregard for consequences.',
      catchphrase: 'Wubba lubba dub dub!',
      imageUrl: 'https://placehold.co/400x500/0a0a23/a855f7?text=Rick%20Sanchez'
    },
    {
      id: 10,
      name: 'Dexter',
      universe: 'Sci-Fi Cartoons',
      role: 'Boy Genius & Secret Inventor',
      bioDescription: 'A prodigy child scientist who runs a massive secret laboratory hidden behind a bookshelf in his suburban home. Dexter constantly battles his annoyingly cheerful sister Dee Dee while inventing world-changing technology, though his creations rarely work as intended.',
      catchphrase: 'Omelette du fromage.',
      imageUrl: 'https://placehold.co/400x500/0a0a23/00f0ff?text=Dexter'
    },
    {
      id: 11,
      name: 'Philip J. Fry',
      universe: 'Sci-Fi Cartoons',
      role: 'Delivery Boy & Time-Tossed Hero',
      bioDescription: 'A dim-witted but good-hearted pizza delivery boy who was cryogenically frozen on December 31, 1999 and woke up 1000 years in the future. Fry joins his distant nephew Professor Farnsworth\'s delivery company, finding love, adventure, and purpose in the 31st century.',
      catchphrase: 'Shut up and take my money!',
      imageUrl: 'https://placehold.co/400x500/0a0a23/ff6a00?text=Fry'
    },
    {
      id: 12,
      name: 'Tina Belcher',
      universe: 'Sci-Fi Cartoons',
      role: 'Awkward Teen & Aspiring Writer',
      bioDescription: 'The eldest Belcher child who works the register at Bob\'s Burgers. Tina is a wonderfully awkward 13-year-old navigating adolescence with her unique blend of deadpan delivery, obsessive note-writing about zombies and butts, and unexpected moments of profound insight.',
      catchphrase: 'Uhhhhhhhh...',
      imageUrl: 'https://placehold.co/400x500/0a0a23/ff2975?text=Tina%20Belcher'
    }
  ];

  /* === DOM REFERENCES === */
  const grid = document.getElementById('galleryGrid');
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');
  const filterChips = document.getElementById('filterChips');
  const displayedCount = document.getElementById('displayedCount');
  const totalCount = document.getElementById('totalCount');
  const activeFilter = document.getElementById('activeFilter');
  const drawer = document.getElementById('characterDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerClose = document.getElementById('drawerClose');
  const drawerContent = document.getElementById('drawerContent');

  let currentFilter = 'all';
  let currentSearch = '';

  /* === RENDER === */
  function render() {
    const query = currentSearch.toLowerCase().trim();
    const filtered = characters.filter(ch => {
      const matchesUniverse = currentFilter === 'all' || ch.universe === currentFilter;
      const matchesSearch = !query ||
        ch.name.toLowerCase().includes(query) ||
        ch.bioDescription.toLowerCase().includes(query) ||
        ch.catchphrase.toLowerCase().includes(query) ||
        ch.role.toLowerCase().includes(query);
      return matchesUniverse && matchesSearch;
    });

    grid.innerHTML = '';

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="no-results">
          <div class="no-results-icon">◈</div>
          <div class="no-results-text">No Characters Found</div>
          <div class="no-results-sub">No characters match your search criteria. Try adjusting your filters.</div>
        </div>
      `;
    } else {
      filtered.forEach(ch => {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.dataset.id = ch.id;
        card.style.animationDelay = `${Math.random() * 0.15}s`;

        card.innerHTML = `
          <div class="card-image-wrapper">
            <img class="card-image" src="${ch.imageUrl}" alt="${ch.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
            <div class="card-image-placeholder" style="display:none">
              <span>${ch.name.charAt(0)}</span>
            </div>
            <span class="card-universe-tag" data-universe="${ch.universe}">${ch.universe}</span>
          </div>
          <div class="card-body">
            <h2 class="card-name">${ch.name}</h2>
            <span class="card-role">${ch.role}</span>
            <div class="card-catchphrase">${ch.catchphrase}</div>
          </div>
        `;

        card.addEventListener('click', () => openDrawer(ch));
        grid.appendChild(card);
      });
    }

    updateTelemetry(filtered.length);
  }

  /* === TELEMETRY === */
  function updateTelemetry(displayed) {
    displayedCount.textContent = displayed;
    totalCount.textContent = characters.length;
    activeFilter.textContent = currentFilter === 'all' ? 'All' : currentFilter;
  }

  /* === DRAWER === */
  function openDrawer(ch) {
    document.body.style.overflow = 'hidden';
    drawer.setAttribute('aria-hidden', 'false');
    drawer.classList.add('open');

    drawerContent.innerHTML = `
      <div class="drawer-hero">
        <img class="drawer-hero-image" src="${ch.imageUrl}" alt="${ch.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="drawer-hero-fallback" style="display:none">${ch.name.charAt(0)}</div>
        <span class="drawer-hero-tag" data-universe="${ch.universe}">${ch.universe}</span>
      </div>
      <div class="drawer-info">
        <h2 class="drawer-name">${ch.name}</h2>
        <div class="drawer-role">${ch.role}</div>
        <div class="drawer-universe" data-universe="${ch.universe}">${ch.universe}</div>
        <div class="drawer-divider"></div>
        <span class="drawer-bio-label">Biography</span>
        <p class="drawer-bio">${ch.bioDescription}</p>
        <div class="drawer-catchphrase-block">
          <div class="drawer-catchphrase">${ch.catchphrase}</div>
        </div>
        <div class="drawer-stats">
          <div class="drawer-stat">
            <div class="drawer-stat-label">Character ID</div>
            <div class="drawer-stat-value">#${String(ch.id).padStart(3, '0')}</div>
          </div>
          <div class="drawer-stat">
            <div class="drawer-stat-label">Universe</div>
            <div class="drawer-stat-value">${ch.universe}</div>
          </div>
        </div>
      </div>
    `;
  }

  function closeDrawer() {
    document.body.style.overflow = '';
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
  }

  /* === EVENT LISTENERS === */

  // Search input
  searchInput.addEventListener('input', () => {
    currentSearch = searchInput.value;
    render();
  });

  searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      searchInput.value = '';
      currentSearch = '';
      render();
      searchInput.blur();
    }
  });

  // Search clear
  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    currentSearch = '';
    render();
    searchInput.focus();
  });

  // Filter chips
  filterChips.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;

    filterChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentFilter = chip.dataset.universe;
    render();
  });

  // Drawer close
  drawerClose.addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (drawer.classList.contains('open')) {
        closeDrawer();
      }
    }
  });

  /* === INIT === */
  render();

})();
