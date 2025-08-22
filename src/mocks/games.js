export function getProductImage(id) {
  return `/images/games/game_${id}_background.webp`;
}

export function getScreenshots(id) {
  const count = 6;
  return Array.from({ length: count }, (_, i) => `/images/games/game_${id}_screenshot_${i + 1}.webp`);
}

export const games = [
  {
    id: 52790,
    name: "Castlevania: Symphony of the Night",
    description: "Castlevania: Symphony of the Night is a platform-adventure action role-playing game developed and published by Konami in 1997 for the PlayStation. It was directed and produced by Toru Hagihara, with Koji Igarashi acting as assistant director. It is the direct sequel to Castlevania: Rondo of Blood taking place four years later. It features Dracula's dhampir son Alucard as the protagonist rising from his slumber to explore the Dracula's castle which has re-appeared after Richter Belmont has vanished. It marks a break from previous games in the series, introducing exploration, non-linear level design and role-playing elements.\nInitially, the game was unsuccessful – particularly in the United States where it was meagerly publicized – but thanks to praise by critics, it gained sales through word-of-mouth and became a hit. It has been re-released on several consoles and is considered a sleeper hit, a cult classic, and one of the best video games ever made.",
    platforms: [
      "SEGA Saturn",
      "PlayStation",
      "Android",
      "Xbox 360",
      "iOS"
    ],
    category: "Multiplatform Games",
    genres: [
      "Action",
      "Adventure"
    ],
    developers: [
      "Sony Interactive Entertainment",
      "Konami Digital Entertainment",
      "Digital Eclipse"
    ],
    publishers: [
      "Konami"
    ],
    released: "1997-03-20",
    rating: 4.34,
    price: 9.99,
    discount: 0,
    cover: getProductImage(1),
    screenshots: getScreenshots(1)
  },
  {
    id: 30261,
    name: "Aliens Versus Predator",
    description: "Aliens Versus Predator Classic 2000 features the Colonial Marine, Alien and Predator Campaigns and the frenetic single-player Skirmish mode from the original title: Alien Versus Predator Gold Edition, which was released to massive acclaim in 2000.\r\nAlien Versus Predator Classic 2000 has been updated to run on modern PCs and laptops using DirectX 9.0c and includes support for Xbox 360 Controller for Windows.\r\nThe three most ferocious species in the universe in a bloodthirsty battle for the ultimate prize: survival. Take your pick: be a Colonial Marine, a Predator or an Alien. Fight through suspense-filled environments: from starships and space stations to colonial bases and eerie planetscapes. One wrong move turns you from hunter to prey.\r\nThree campaigns: Colonial Marine, Alien and Predator",
    platforms: [
      "macOS",
      "Classic Macintosh",
      "PC"
    ],
    category: "PC Games",
    genres: [
      "Action",
      "Shooter"
    ],
    developers: [
      "Rebellion"
    ],
    publishers: [
      "Rebellion",
      "Fox Interactive"
    ],
    released: "1999-04-30",
    rating: 3.72,
    price: 5.99,
    discount: 20,
    cover: getProductImage(2),
    screenshots: getScreenshots(2)
  },
  {
    id: 30789,
    name: "The Curse of Monkey Island",
    description: "I've sailed the seas from Trinidad to Tortuga and I've never seen anything like it! The engagement ring I gave Elaine has a terrible pirate curse on it. LeChuck is behind it, I'm sure. I should have known that nothing good could come out of that evil zombie's treasures. And if that's not bad enough, the clairvoyant I met in the mangrove swamp told me that if I am to break the curse and save Elaine, I will have to die!\nExcerpted from \"\"The Memoirs of Guybrush Threepwood: The Monkey Island Years\"\"\n- Third in the legendary Monkey Island series of graphic adventures\n- Film quality animation, voice, sound and music--the undead come to life before your very eyes!\n- Incredible high-resolution (640 x 480) graphics!\n- A barrel of gameplay--estimated 30-plus hours!\n- Two difficulty settings: regular and Mega-Monkey (now with more puzzley goodness)!\n- New and improved insults suitable for swordfights and other fun occasions!",
    platforms: [
      "PC",
      "macOS"
    ],
    category: "PC Games",
    genres: [
      "Adventure"
    ],
    developers: [
      "LucasArts Entertainment"
    ],
    publishers: [
      "Disney Interactive",
      "LucasArts Entertainment"
    ],
    released: "1997-10-31",
    rating: 4.29,
    price: 8.19,
    discount: 0,
    cover: getProductImage(3),
    screenshots: getScreenshots(3)
  },
  {
    id: 32197,
    name: "Heroes of Might and Magic 3: The Restoration of Erathia",
    description: "Heroes of Might and Magic III: The Restoration of Erathia is a turn-based strategy game developed by Jon Van Caneghem through New World Computing and published by The 3DO Company in 1999. The game is the third installment of the Heroes of Might and Magic series. The player can choose to play through seven different campaigns, following the story of the restoration of the kingdom of Erathia, or play in a scenario against computer or human opponents.",
    platforms: [
      "PC"
    ],
    category: "PC Games",
    genres: [
      "Strategy"
    ],
    developers: [
      "New World Computing"
    ],
    publishers: [
      "The 3DO Company"
    ],
    released: "1999-03-03",
    rating: 4.33,
    price: 8.99,
    discount: 0,
    cover: getProductImage(4),
    screenshots: getScreenshots(4)
  },
  {
    id: 53207,
    name: "Comix Zone",
    description: "Comix Zone is a 1995 beat 'em up video game developed and published by Sega for the Sega Genesis. An unusual feature of the game is that it is set within the panels of a comic book with dialogue rendered within talk bubbles and sprites and backgrounds possessing the bright colours and dynamic drawing style favoured by superhero comics. This style had been used in video games previously, for example Ocean Software's Batman: The Caped Crusader in 1988, but Comix Zone stretched the idea to such an extent that Sega applied for and were granted a patent for a \"Videogame system for creating a simulated comic book game\".\nThe concept for the game originated from a Commodore Amiga demo video animated by Peter Morawiec titled \"Joe Pencil Trapped In The Comix Zone\". The video was made in 1992, displaying the animation of how the gameplay and the comic book elements would blend in.",
    platforms: [
      "PlayStation 3",
      "iOS",
      "PC",
      "Xbox 360",
      "Android",
      "Game Boy Advance",
      "Genesis",
      "SEGA Master System",
      "Wii"
    ],
    category: "Multiplatform Games",
    genres: [
      "Action"
    ],
    developers: [
      "SEGA",
      "Sonic Team",
      "Backbone Entertainment"
    ],
    publishers: [
      "SEGA"
    ],
    released: "1995-01-01",
    rating: 4.35,
    price: 2.49,
    discount: 50,
    cover: getProductImage(5),
    screenshots: getScreenshots(5)
  },
  {
    id: 343595,
    name: "Sonic Adventure",
    description: "Join Sonic and friends as they embark on their first truly epic quest to stop Dr, Eggman’s most villainous scheme in the hit Dreamcast title Sonic Adventure™ now available on Xbox®LIVE Arcade.  An ancient evil lurking within the Master Emerald has been unleashed from its slumber by the devious Dr. Eggman and is on the verge of becoming the ultimate monster using the 7 Chaos Emeralds. Only Sonic and his friends are heroic enough to put a stop to Dr. Eggman and his evil minions. Hit the ground running in this classic epic adventure in a race against time to save the world!  There are no refunds for this item. For more information, see www.xbox.com/live/accounts.",
    platforms: [
      "PlayStation 3",
      "PC",
      "Xbox 360",
      "Xbox One",
      "Dreamcast"
    ],
    category: "Multiplatform Games",
    genres: [
      "Action",
      "Adventure",
      "RPG",
      "Family",
      "Platformer"
    ],
    developers: [
      "SEGA",
      "Sonic Team",
      "Now Production"
    ],
    publishers: [
      "SEGA"
    ],
    released: "1998-12-23",
    rating: 4,
    price: 6.99,
    discount: 0,
    cover: getProductImage(6),
    screenshots: getScreenshots(6)
  },
  {
    id: 5137,
    name: "Resident Evil 3: Nemesis",
    description: "Join Jill Valentine, the heroine and amazing survivor of the notorious disaster at the mansion, as her nightmare continues.  The next terrifying drama from the blockbuster Resident Evil® Series. This unique adventure intricately reveals more of Umbrella Corporation’s nightmarish plot and picks up just hours before the events from Resident Evil® 2.",
    platforms: [
      "Dreamcast",
      "GameCube",
      "PlayStation",
      "PC"
    ],
    category: "Multiplatform Games",
    genres: [
      "Action"
    ],
    developers: [
      "Capcom"
    ],
    publishers: [
      "Capcom"
    ],
    released: "1999-09-22",
    rating: 4.34,
    price: 14.99,
    discount: 15,
    cover: getProductImage(7),
    screenshots: getScreenshots(7)
  },
  {
    id: 6954,
    name: "Riven: The Sequel to Myst",
    description: "“I know what he’s doing… He’s watching you.”\nTravel to Riven, a beautiful and mysterious world on the verge of collapse. Explore this mysterious place, solve its puzzles, reveal its mysteries, make a daring rescue, and escape.VISIT A MYSTERIOUS WORLD\n“I am Gehn. I assume you’ve heard of me.”\nRiven takes you on a journey through dense jungles, awe-inspiring caverns, and monolithic structures. Explore a world bent to the whims of a man who sees himself as a god and where every corner will immerse you in an otherworldly adventure.IMMERSE YOURSELF IN A SURREAL LANDSCAPE\n“There’s a great deal of history that you should know…”\nRiven rewards careful observation. Challenge Riven’s cunning puzzles, deftly woven throughout its narrative. The environment of Riven will reveal the story of this world as you make meaning from seemingly disparate bits of information and learn everything you need to know about this world.UNRAVEL RIVEN’S SECRETS\n“...it may be time to give this inexplicable mystery a second look.”\nWho are the mysterious island dwellers you encounter during your exploration? What purpose does the giant golden dome serve? Why is this world on the verge of collapse? Play Riven  and discover the answers to these mysteries- and more.ABOUT THIS REMAKE\nCreated by the legendary indie developer Cyan Worlds and based on the smash-hit original released in 1997, Riven  has been lovingly revisited by its key original visionaries to expand the epic narrative of the Myst  universe.\nExperience Riven like never before - with free movement through a real-time 3D environment. This brand-new, re-imagined, and expanded version of Riven offers a deeper story, new captivating visuals, and a journey that stays true to the original release while also expanding on Riven’s breathtaking world.",
    platforms: [
      "macOS",
      "PC",
      "iOS",
      "SEGA Saturn",
      "PlayStation",
      "Classic Macintosh",
      "Android"
    ],
    category: "Multiplatform Games",
    genres: [
      "Adventure",
      "Casual",
      "Puzzle"
    ],
    developers: [
      "Noodlecake Studios",
      "Cyan Worlds"
    ],
    publishers: [
      "SEGA",
      "Acclaim Entertainment",
      "Cyan Worlds",
      "Red Orb Entertainment"
    ],
    released: "1997-10-29",
    rating: 4.08,
    price: 7.99,
    discount: 10,
    cover: getProductImage(8),
    screenshots: getScreenshots(8)
  },
  {
    id: 5415,
    name: "Rayman 2: The Great Escape",
    description: "Rayman 2: The Great Escape is a platform video game developed by Ubi Pictures and published by Ubi Soft for the Nintendo 64, Microsoft Windows and Sega Dreamcast. An enhanced port titled Rayman Revolution (Rayman 2: Revolution in North America) was developed by Ubi Soft Annecy for the PlayStation 2.\nSubsequently it also released on Nintendo DS & 3DS as well as the PS Vita and on mobile.\n\nRayman 2 takes place in a world called the Glade of Dreams, and revolves around its invasion and occupation by an armada of interstellar Robo-Pirates, led by Admiral Razorbeard. Prior to the invasion, the Robo-Pirates destroyed over one hundred planets in the galaxy, with the intention of enslaving their inhabitants. Upon the invasion of the Glade of Dreams, the Robo-Pirates were battled against by Rayman, Globox, and other allies. After some battles, Rayman's capture occurs after the explosion of the Primordial Core. Ly the Fairy telepathically communicates with Rayman explaining the consequences of the damage, with the core's shattering into 1000 Yellow Lums, and the capture of many fighters. Rayman's powers are also lost due to this, and he finds himself captured by the Robo-Pirates at the beginning of the game.\n\nRayman's job after escaping the pirate ship is to collect all 1000 yellow lums, kick robo pirate butt and smash all the cages he can find to free the denizens of the Glade.\nHe will have various encounters, nice and not so nice, on his way who will help him get stronger throughout the course of his story and rid the planet off the pirates once and for all!\nJump, throw, plum-ride, helicopter, swim your way through the various platorm stages that will keep you occupied and enjoy Rayman's first ever jump into the 3D space considered elevating 3D platformers to the next level around the turn of the century.",
    platforms: [
      "Nintendo 64",
      "PlayStation",
      "PlayStation 2",
      "Nintendo DS",
      "Nintendo 3DS",
      "PC",
      "Dreamcast",
      "SEGA Saturn",
      "iOS"
    ],
    category: "Multiplatform Games",
    genres: [
      "Action",
      "Adventure",
      "Platformer"
    ],
    developers: [
      "Ubisoft",
      "Ubisoft Montpellier",
      "Ubisoft Casablanca",
      "Ubi Soft Montpellier"
    ],
    publishers: [
      "Ubisoft Entertainment"
    ],
    released: "1999-10-29",
    rating: 4.13,
    price: 6.99,
    discount: 0,
    cover: getProductImage(9),
    screenshots: getScreenshots(9)
  },
  {
    id: 31014,
    name: "The Neverhood",
    description: "The Neverhood is a clay animation adventure game. You play as Klaymen, a strange but likable fellow who wakes up one day in a bizarre world with no memory of how he got there. As you guide Klaymen through the surreal landscapes of The Neverhood, you'll encounter mind-bending puzzles, eccentric characters, and a deep lore told through scattered wall inscriptions. The game is renowned for its unique visual style, entirely crafted from clay, and its quirky, memorable soundtrack.",
    platforms: [
      "PlayStation",
      "PC"
    ],
    category: "Multiplatform Games",
    genres: [
      "Adventure",
      "Puzzle"
    ],
    developers: [
      "DreamWorks Interactive",
      "The Neverhood"
    ],
    publishers: [
      "Microsoft Studios"
    ],
    released: "1996-10-31",
    rating: 4.37,
    price: 5.99,
    discount: 0,
    cover: getProductImage(10),
    screenshots: getScreenshots(10)
  },
  {
    id: 23033,
    name: "Warhammer: Shadow of the Horned Rat",
    description: "Warhammer: Shadow of the Horned Rat follows the adventures of Morgan Bernhardt, the commander of the Grudgebringer mercenaries and leader of the Grudgebringer Cavalry regiment. Once a star student of the great Gunnery School Officer Academy, Bernhardt’s love for gold and glory had him cast out of the school and into the welcoming arms of the mercenary life. With a fine steed to carry him to battle, his dwarven-forged, magical sword Grudgebringer in his hand and an army at his helm, he and the Grudgebringers have travelled the length and breadth of the Old World, bringing honour and fame to his house. However, an insidious plot by the Skaven Grey Seer, Thanquol and his accomplice, Orc Warboss Urgat Rip-Eye, is uncovered by Bernhardt, forcing him and his troops to defend the Empire. With Paymaster Dietrich ensuring that your efforts are justly rewarded, join Bernhardt and the Grudgebringers as they enter the maelstrom of war and fight for glory, the Empire and, most importantly, gold!\nAs the first ever video-game adaption of the Warhammer world, Shadow of the Horned Rat not only brings the table-top adventure to life in this real-time strategy, but adds its own story to the wondrous mythos. With over 25 individual troops to choose from, you can create and lead your own army to battle across the many fields of the Old World. You can also forge your own story in this adventure, choosing to follow the main story and defeat the Skaven and Orc forces, or accept the work of the many patrons Paymaster Dietrich can procure. With increasing difficulty and expansive lore, this adaptation is a fine first-step for the franchise and a must-play for both RTS and Warhammer fans alike. Lead Imperial forces against the Skaven and Greenskin Forces and defend the Empire from their nefarious plot\nCo-ordinate your army and strategise victory in real-time\nCreate your own legacy - Follow the campaign and uncover the Skaven plot, or complete your patrons’ missions and earn fame, glory and gold\nFully customise and augment your army, with over 25 troops to choose from",
    platforms: [
      "PlayStation",
      "PC"
    ],
    category: "Multiplatform Games",
    genres: [
      "Strategy"
    ],
    developers: [
      "Mindscape"
    ],
    publishers: [
      "MINDSCAPE",
      "GOG",
      "SSI"
    ],
    released: "1995-11-11",
    rating: 2.64,
    price: 3.99,
    discount: 60,
    cover: getProductImage(11),
    screenshots: getScreenshots(11)
  },
  {
    id: 21490,
    name: "Pilot Brothers",
    description: "A provincial Russian town has been shaken in disbelief: their prized, rare, striped elephant, Baldakhin, disappeared from the zoo in the dead of night. The main suspect is its notorious former owner, Karbofoss. Two well-known detectives, the Pilot Brothers, set up a new investigation, pursuing the rogue through 15 comic-style locations to find the missing elephant. Sensible Brother Chief and his not-so-bright assistant, Brother Colleague, solve tricky puzzles and play their parts with precise timing in this humorous adventure game for the whole family!\n● 15 Increasingly difficult levels to solve\n● 2 Different characters: Brother Chief and Brother Colleague\n● Fast-paced, arcade mini-games and loads of absurdly witty mini-games!\n● Join the famed duo in their search for the elusive thief!",
    platforms: [
      "PC",
      "Android",
      "iOS"
    ],
    category: "Multiplatform Games",
    genres: [
      "Adventure",
      "Casual"
    ],
    developers: [
      "1C Wireless",
      "Gamos"
    ],
    publishers: [
      "1C Company"
    ],
    released: "1997-09-22",
    rating: 4.07,
    price: 1.99,
    discount: 0,
    cover: getProductImage(12),
    screenshots: getScreenshots(12)
  },
  {
    id: 5143,
    name: "Dino Crisis",
    description: "Survival Horror on a Much Larger Scale.  Your most primal fears grab you on this new journey into survival horror from the creators of Resident Evil®. Suspicious and terrifying... the world's most renowned scientist has disappeared and you've been recruited to investigate on a mysterious, remote island. Suddenly, out of the mist appears a predator, which has haunted mankind's imagination for centuries... experience the pure terror!",
    platforms: [
      "Dreamcast",
      "PlayStation",
      "PC"
    ],
    category: "Multiplatform Games",
    genres: [
      "Action",
      "Adventure"
    ],
    developers: [
      "Capcom",
      "GOG"
    ],
    publishers: [
      "Capcom",
      "Virgin Interactive",
      "Virgin Interactive Entertainment",
      "PAL"
    ],
    released: "1999-07-01",
    rating: 4.06,
    price: 12.99,
    discount: 0,
    cover: getProductImage(13),
    screenshots: getScreenshots(13)
  },
  {
    id: 17797,
    name: "Realms of Chaos",
    description: "The story of the darkness is revealed as you finish each of the three game chapters. Each chapter, or episode, has three unique realms. Each realm has new enemies, new graphics, new traps and new challenges - all in 26 killer levels!\nPlay as two different characters: A male warrior with a devastating sword attack and extra stamina, and a female sorceress with a long-range fireball attack and leap ability. Switch characters at the stroke of a key and decide which character is best to handle each challenge.Features\nA World of its Own: Vibrant, realistic VGA graphics with a high-speed, 360-degree scrolling playfield, viewed at a tilted perspective.\nBoss Battles: Five bosses: four incredible bosses and a final super boss!\nBrilliant Bobby: MIDI music and digital sound effects by Bobby Prince, known for his award-winning work in Wolfenstein 3D, DOOM I & II, and Duke Nukem 3D.\nDare to be Dangerous: Five difficulty levels: \"Super Easy\" to \"Psycho Warrior.\" Higher levels introduces new hazards and challenges.\nSave Your Game: Save and restore as you play (save anywhere) - plus convenient quick save and restore buttons\nController Support: Partial Xbox 360 Controller support.",
    platforms: [
      "macOS",
      "PC",
      "Linux"
    ],
    category: "PC Games",
    genres: [
      "Action",
      "Adventure"
    ],
    developers: [
      "3D Realms",
      "Apogee Software"
    ],
    publishers: [
      "3D Realms"
    ],
    released: "1995-11-10",
    rating: 2.58,
    price: 2.99,
    discount: 20,
    cover: getProductImage(14),
    screenshots: getScreenshots(14)
  },
  {
    id: 52949,
    name: "Final Fantasy Tactics",
    description: "Final Fantasy Tactics (ファイナルファンタジータクティクス, Fainaru Fantajī Takutikusu) is a tactical role-playing game developed and published by Squaresoft (later changed to Square and now Square Enix) for the Sony PlayStation video game console. It is the first game of the Final Fantasy Tactics series and was released in Japan in June 1997 and in the United States in January 1998. The game combines thematic elements of the Final Fantasy video game series with a game engine and battle system unlike those previously seen in the franchise. In contrast to other 32-bit era Final Fantasy titles, Final Fantasy Tactics uses a 3D, isometric, rotatable playing field, with bitmap sprite characters.\nFinal Fantasy Tactics is set in a fictional medieval-inspired kingdom called Ivalice, created by Yasumi Matsuno. The game's story follows Ramza Beoulve, a highborn cadet who finds himself thrust into the middle of an intricate military conflict known as The Lion War, where two opposing noble factions are coveting the throne of the kingdom. As the story progresses, Ramza and his allies discover a sinister plot behind the war.\nA spin-off title, Final Fantasy Tactics Advance, was released for the Nintendo Game Boy Advance in 2003 and a sequel to that title, Final Fantasy Tactics A2: Grimoire of the Rift, was released in 2007 for the Nintendo DS. Various other games have also utilized the Ivalice setting, including Vagrant Story for the PlayStation and Final Fantasy XII for the PlayStation 2. An enhanced port of Final Fantasy Tactics, Final Fantasy Tactics: The War of the Lions, was released in 2007 as part of Square Enix's Ivalice Alliance project. Overall, the game received positive reviews from gaming magazines and websites and has become a cult classic since its release.",
    platforms: [
      "PlayStation",
      "Android",
      "iOS"
    ],
    category: "Multiplatform Games",
    genres: [
      "Adventure",
      "RPG"
    ],
    developers: [
      "Square Enix",
      "Sony Interactive Entertainment",
      "Square",
      "SquareSoft"
    ],
    publishers: [
      "Square Enix",
      "Sony Computer Entertainment",
      "Sony Interactive Entertainment",
      "Square"
    ],
    released: "1997-06-28",
    rating: 4.36,
    price: 11.99,
    discount: 0,
    cover: getProductImage(15),
    screenshots: getScreenshots(15)
  },
  {
    id: 5340,
    name: "Blood Omen: Legacy of Kain",
    description: "Blood Omen: Legacy of Kain introduces the fictional setting of Nosgoth. In the game, the player takes the role of Kain, a human nobleman, who is murdered and given the chance to exact revenge on his assassins by becoming a vampire. He travels Nosgoth, slaughtering the corrupt sorcerers of the Circle of Nine in hopes of discovering a cure for his vampirism, but gradually begins to view his transformation as a blessing over the course of the story.",
    platforms: [
      "PlayStation",
      "PC"
    ],
    category: "Multiplatform Games",
    genres: [
      "Action",
      "Adventure",
      "Arcade"
    ],
    developers: [
      "Sony Interactive Entertainment",
      "Crystal Dynamics",
      "Silicon Knights",
      "Semi Logic Entertainments"
    ],
    publishers: [
      "Square Enix",
      "Activision Blizzard",
      "Crystal Dynamics"
    ],
    released: "1996-11-01",
    rating: 4.16,
    price: 5.99,
    discount: 25,
    cover: getProductImage(16),
    screenshots: getScreenshots(16)
  },
  {
    id: 30057,
    name: "Blade Runner",
    description: "In 1997 Westwood Studios released a title that won universal praise from gamers and critics all around the world, along with accolades like AIAS’s Adventure Game of the Year award. Set in the same time and universe as the 1982 classic science fiction film by Ridley Scott, Blade Runner video game is now making a big comeback on modern computers.\nIn the game, you take the role of detective Ray McCoy. Armed with your investigative skills and tools of the Blade Runner trade, you must roam the dark, rainy streets of Los Angeles A.D. 2019 in pursuit of androids gone rogue. Searching for those so-called replicants is a tough nut to crack because they look and behave almost exactly like real people. Faced with growing moral dilemmas, McCoy will soon have to answer questions about his own humanity.\nFeatures:\nImmerse yourself in the dark, gritty world of Los Angeles 2019, where you become both the hunter and the hunted.\nExplore over 100 interactive environments including sets from the Ridley Scott’s 1982 movie.\nTake part in a non-linear story that creates a unique experience every time you play.\nInteract with over 70 motion-captured characters, all with their own AI and agendas.\nWitness the climatic noir-style visuals, engulfed in smoke and rain.\nRecognize the Hollywood cast from the original film including Sean Young, James Hong, Joe Turkel, Brion James, and William Sanderson.\nListen to the ambient, multi-track audio and hear the music which includes specially recreated cuts from the original Blade Runner soundtrack.\nStep into the role of detective Ray McCoy and utilize Blade Runner tools you know from the movie. Use ESPER photo analysis machine to distinguish replicants from humans, and analyze all case clues with the Knowledge Integration Assistant.",
    platforms: [
      "Linux",
      "macOS",
      "PC"
    ],
    category: "PC Games",
    genres: [
      "Adventure"
    ],
    developers: [
      "Westwood Studios"
    ],
    publishers: [
      "Virgin Interactive Entertainment",
      "Alcon Interactive Group"
    ],
    released: "1997-11-21",
    rating: 4.18,
    price: 8.99,
    discount: 0,
    cover: getProductImage(17),
    screenshots: getScreenshots(17)
  },
  {
    id: 54311,
    name: "Medal of Honor (1999)",
    description: "Tomorrow is D-Day. Tonight you land behind enemy lines. The tide of the way is in your hands. You are an elite Special Forces agent sent to execute covert operations, search and rescue missions, and commando raids. Fight to win the medal of Honor in the only game that lets you take on Nazis in WWII.",
    platforms: [
      "PlayStation",
      "PlayStation 3",
      "PSP"
    ],
    category: "Console Games",
    genres: [
      "Action",
      "Shooter"
    ],
    developers: [
      "Danger Close Games",
      "DreamWorks Interactive"
    ],
    publishers: [
      "Electronic Arts"
    ],
    released: "1999-10-31",
    rating: 4.23,
    price: 9.99,
    discount: 0,
    cover: getProductImage(18),
    screenshots: getScreenshots(18)
  },
  {
    id: 32781,
    name: "Mortal Kombat Trilogy",
    description: "This successor to the arcade megahits features the meanest of the mean and the baddest of the bad. If you think you've mastered the moves and out-bossed the bosses, think again!\nIt's one-on-one action with one of the most successful martial arts series of all times.\nShao Kahn's final attempt to control the earth is upon us...\n32 immediately playable characters plus 4 classic characters\nNew Brutalities let you pound opponents 'til they explode!\n7 humiliating Stage Fatalities that send defeated opponents pummeling out of the arena to a grizzly death!\nNon-stop challenge\n...You have no choice. Defeat Kahn's deadly Warriors or die trying.",
    platforms: [
      "Nintendo 64",
      "SEGA Saturn",
      "PlayStation",
      "PC"
    ],
    category: "Multiplatform Games",
    genres: [
      "Arcade",
      "Fighting"
    ],
    developers: [
      "Midway Games",
      "Avalanche Software",
      "Williams Entertainment",
      "Point of View"
    ],
    publishers: [
      "Warner Bros. Interactive",
      "GT Interactive Software",
      "GT Interactive",
      "Midway Games",
      "SoftBank",
      "Williams Entertainment",
      "Tectoy",
      "WMS Industries",
      "Gradiente"
    ],
    released: "1996-09-01",
    rating: 4.23,
    price: 4.99,
    discount: 0,
    cover: getProductImage(19),
    screenshots: getScreenshots(19)
  },
  {
    id: 23052,
    name: "An Elder Scrolls Legend: Battlespire",
    description: "When you buy this game, The Elder Scrolls: Arena and The Elder Scrolls Chapter II: Daggerfall will be added to your GOG.com account for free!\r\nFor years, you have trained to become an Imperial Battlemage, learning the ways of magic and combat to serve and defend the Emperor. Now, as your final test, you must complete the dreaded Battlespire, facing the challenges that lie within. As you enter the proving ground, however, something doesn’t feel right. You soon discover that Mehrunes Dagon, a Daedra Lord, has invaded and ravaged the Battlespire, killing all in his wake. You are the last hope and although ill-equipped and unprepared, it's up to you to stop Dagon’s plan and restore the Battlespire to Imperial control.\r\nOriginally envisioned as an expansion for The Elder Scrolls: Daggerfall, this installment was instead released by Bethesda as a stand-alone title. Although still within the Elder Scrolls world and brimming with many loved elements, Battlespire is unique in several aspects; rather than open-world exploration, the game emphasises survival, taking players through 7 levels, including various realms of Oblivion. There are also no shops or merchants, leaving players to salvage whatever they can from their fallen foes. Full character and stat customisation are still a key component of gameplay, as is the ability to craft spells on the fly and the game is full of the lore and characterisation for which the series’ is renowned. Can you defeat Dagon and prove you are worthy of serving the Emperor?Traverse the world of Battlespire, from the depths of its sinister dungeons to the heights of its towering castles, in your quest to stop Mehrunes Dagon and his forces\r\nCreate your champion using the unique character design system, with unrivaled power to custom-build the exact type of hero you want, based on the Daggerfall game system\r\nThe custom SpellMaker system allows you to customise your own magic spells on the fly\r\nDo battle with numerous fiendishly rendered original monsters and complete cunningly-crafted tactical challenges and action puzzles",
    platforms: [
      "PC"
    ],
    category: "PC Games",
    genres: [
      "Action",
      "RPG"
    ],
    developers: [
      "Bethesda Softworks"
    ],
    publishers: [
      "Bethesda Softworks"
    ],
    released: "1997-01-01",
    rating: 2.54,
    price: 5.99,
    discount: 0,
    cover: getProductImage(20),
    screenshots: getScreenshots(20)
  },
  {
    id: 31777,
    name: "Thief: The Dark Project",
    description: "Thief: The Dark Project is a first-person stealth game that revolutionized the genre. You are Garrett, a master thief in a dark, steampunk, medieval city. Your tools are not swords and spells, but blackjacks, lockpicks, and water arrows to douse torches. The game emphasizes avoiding confrontation, using shadows for cover, and listening to enemy patrol routes. The rich atmosphere, innovative sound design, and focus on stealth over combat made it an instant classic.",
    platforms: [
      "PC"
    ],
    category: "PC Games",
    genres: [
      "Action"
    ],
    developers: [
      "Looking Glass Studios"
    ],
    publishers: [
      "Eidos Interactive"
    ],
    released: "1998-12-02",
    rating: 4.32,
    price: 7.99,
    discount: 30,
    cover: getProductImage(21),
    screenshots: getScreenshots(21)
  },
  {
    id: 2293,
    name: "The Last Express",
    description: "Step aboard the 1914 Orient Express in this award-winning mystery adventure from Prince of Persia creator  Jordan Mechner, now for the first time on iOS!\nJULY, 1914. With Europe on the brink of war, the luxurious Orient Express departs Paris for Constantinople, plunging American doctor Robert Cath into a maelstrom of treachery, romance, and international intrigue.\nThe Last Express is a complete, faithful iOS version of the internationally-acclaimed 1997 PC classic.\nGAME FEATURES:\n- 20+ hours of game play\n- Interact with 30+ characters who behave like actual people on a train -- moving about in real-time and conversing in their native languages\n- Eavesdrop on conversations, sneak into compartments, and uncover clues\n- Explore a richly detailed, historically accurate 3D recreation of the 1914 Orient Express\n- Your actions affect other characters’ behavior, making every play-through different\n- Rewind feature allows you to back up to any point in the story and choose a different course of action\n- Playable in 5 languages: English, French, German, Italian and Spanish\nEXCLUSIVE ADDITIONAL FEATURES ONLY FOR iOS:\n- Unlock challenging achievements that test your sleuthing skills\n- Dynamic, 3-tiered hint system created specifically for iOS\n- 20 unlockable character biographies\n- Unlock cinematics to replay at any time\n**** Reviews ! 90% on Metacritic ****\n\"The Last Express is just one of those games that adventure fans, or just fans of a good story, need to play.\" 4/4 - Slide To Play\n\"A shining example of how deeply gameplay and storytelling can be intertwined\" 5/5 - AppSpy\n\"It's a piece of videogame history and a shining example of what can be done to create an experience so much more immersive than the Heavy Rains of today.\" - 8/10, Destructoid\n****************\n“Exquisite design and a literary story. A thrilling ride.” – Newsweek\n“The top adventure game… thumbs up by all ages and both genders.” – Family PC\n“A masterpiece.” – Computer Games Strategy Plus\n“Gripping… amazing… totally unique. The best adventure game I have ever played. Beautiful, skillfully crafted, and worth every penny and hour of your time.” – Games Domain Review\nFOR MORE ABOUT THE LAST EXPRESS, VISIT:\nhttp://www.facebook.com/lastexpress\nfacebook.com/dotemu\ntwitter.com/dotemu\nyoutube.com/dotemu\nhttp://jordanmechner.com/",
    platforms: [
      "iOS",
      "PC",
      "Android"
    ],
    category: "Multiplatform Games",
    genres: [
      "Adventure",
      "Family"
    ],
    developers: [
      "DotEmu",
      "Smoking Car Productions"
    ],
    publishers: [
      "DotEmu",
      "Phoenix Licensing"
    ],
    released: "1997-03-29",
    rating: 4.26,
    price: 5.99,
    discount: 0,
    cover: getProductImage(22),
    screenshots: getScreenshots(22)
  },
  {
    id: 5075,
    name: "Grandia",
    description: "Purchase this PS one® Classic and play it on both your PS3™ and PSP® (PlayStation®Portable) systems!\nTake the role of Justin, a young boy obsessed with becoming a great adventurer, who inherits a magic stone that leads him on an epic journey to uncover the mystery of a long lost civilization in this classic RPG. Meet an exciting cast of characters who join you along the way and unravel the mysteries of this ancient legend.\nGrandia is an unforgettable journey with over 80 hours of gameplay, with a ground-breaking strategic battle system featuring over 200 weapons and items to collect and more than 80 magic spells and techniques to master.\nOne of the most critically-acclaimed games of its time, Grandia helped shape the RPG genre as we know it today.",
    platforms: [
      "SEGA Saturn",
      "PlayStation",
      "PC"
    ],
    category: "Multiplatform Games",
    genres: [
      "RPG"
    ],
    developers: [
      "GAME ARTS"
    ],
    publishers: [
      "Ubisoft Entertainment",
      "Sony Computer Entertainment",
      "ESP Software"
    ],
    released: "1997-12-18",
    rating: 4.18,
    price: 14.99,
    discount: 0,
    cover: getProductImage(23),
    screenshots: getScreenshots(23)
  },
  {
    id: 22782,
    name: "Amerzone: The Explorer's Legacy",
    description: "You are a journalist summoned by an aged explorer who has been \"branded\" with questionable credibility for over 50 years. The old explorer's tale tells of traveling to the mysterious Central American country, called Amerzone. His story claims that the large egg that he brought back was associated with native Indian tribal beliefs and rituals involving the proliferation of great white birds that fly continuously from the time that they are born and never land seems incredible. But curiosity and the opportunity for a good story will probably get the best of you...An immersive cinematic adventure with an unforgettable storyline\nBeautiful scenery and visuals designed by Belgian comic artist Benoît Sokal\nMany memorable characters and interesting puzzles",
    platforms: [
      "macOS",
      "PC",
      "iOS",
      "PlayStation"
    ],
    category: "Multiplatform Games",
    genres: [
      "Adventure"
    ],
    developers: [
      "Microids"
    ],
    publishers: [
      "Anuman Interactive"
    ],
    released: "1999-03-19",
    rating: 3,
    price: 3.99,
    discount: 0,
    cover: getProductImage(24),
    screenshots: getScreenshots(24)
  },
  {
    id: 54551,
    name: "Vigilante 8",
    description: "Vigilante 8 is a vehicular combat video game developed by Luxoflux and published by Activision for PlayStation, Nintendo 64 and Game Boy Color. It is a spin-off of the Interstate '76 series, featuring several of its theme concepts (auto-vigilantes, the 1970s time frame, and specific fictional vehicle companies).",
    platforms: [
      "PlayStation",
      "Game Boy Color",
      "Nintendo 64"
    ],
    category: "Console Games",
    genres: [
      "Action"
    ],
    developers: [
      "Vicarious Visions",
      "Luxoflux"
    ],
    publishers: [
      "Activision Blizzard"
    ],
    released: "1998-05-31",
    rating: 4.25,
    price: 4.99,
    discount: 40,
    cover: getProductImage(25),
    screenshots: getScreenshots(25)
  },
  {
    id: 31041,
    name: "Heroes of Might and Magic 2: The Price of Loyalty",
    description: "Heroes of Might and Magic II: The Price of Loyalty is the expansion pack for the turn-based strategy game Heroes of Might and Magic II: The Succession Wars. It adds four new campaigns, new towns, new heroes, new creatures, and new artifacts to the base game, further expanding the rich fantasy world and strategic depth that made the series famous.",
    platforms: [
      "PC"
    ],
    category: "PC Games",
    genres: [
      "Strategy"
    ],
    developers: [
      "New World Computing",
      "Cyberlore Studios"
    ],
    publishers: [
      "3DO Company, The"
    ],
    released: "1997-01-01",
    rating: 4.27,
    price: 2.49,
    discount: 10,
    cover: getProductImage(26),
    screenshots: getScreenshots(26)
  },
  {
    id: 54684,
    name: "Marvel vs. Capcom: Clash of Super Heroes",
    description: "Marvel vs. Capcom: Clash of Super Heroes (Japanese: マーヴル VS. カプコン クラッシュ オブ スーパー ヒーローズ, Hepburn: Māvuru bāsasu Kapukon: Kurasshu obu Sūpā Hīrōzu), known as just Marvel vs. Capcom for short, is a crossover fighting game developed and published by Capcom. It is the third installment in the Marvel vs. Capcom series, which features characters from Capcom's video game franchises and comic book series published by Marvel Comics. The game debuted in Japanese and North American arcades in 1998. It was ported to the Dreamcast and PlayStation, which was released from 1999 through 2000. The game was re-released in 2012 for the PlayStation 3 and Xbox 360 as part of the Marvel vs. Capcom Origins collection.\nPlayers select a team of characters from the Marvel and Capcom universes to engage in combat and attempt to knock out their opponents. In contrast to the series previous entry, Marvel Super Heroes vs. Street Fighter, the game features characters from numerous Capcom video game franchises, rather than strictly Street Fighter characters. While the gameplay is largely identical to its predecessor, Clash of Super Heroes features two distinct changes: the removal of the traditional character assist system and the introduction of the \"Variable Cross\" attack.\nThe Dreamcast version of the game was praised for its visuals, gameplay, and translation of the original arcade experience. Due to the PlayStation's limited RAM capacity, Capcom removed tag team battles in an attempt to preserve the game's speed and graphical integrity. Consequently, the PlayStation port received positive reviews, just not as much as the Dreamcast version. A sequel to Clash of Super Heroes, Marvel vs. Capcom 2: New Age of Heroes, was released in 2000.",
    platforms: [
      "Dreamcast",
      "PlayStation"
    ],
    category: "Console Games",
    genres: [
      "Fighting"
    ],
    developers: [
      "Capcom"
    ],
    publishers: [
      "Capcom",
      "Virgin Interactive"
    ],
    released: "1998-01-23",
    rating: 4.27,
    price: 14.99,
    discount: 0,
    cover: getProductImage(27),
    screenshots: getScreenshots(27)
  },
  {
    id: 4791,
    name: "Tactics Ogre: Let Us Cling Together",
    description: "The creators of Final Fantasy Tactics bring you the next evolution in Tactics games from Square Enix in Tactics Ogre: Let Us Cling Together! A dream team lead by Yasumi Matsuno has reunited to bring a perfect vision of their lost tale of political intrigue, conquest, and rebellion to vivid life. Experience an epic story where your choices determine the fate of the Walister Resistance.",
    platforms: [
      "SEGA Saturn",
      "PlayStation 4",
      "PlayStation 5",
      "Nintendo Switch",
      "PC",
      "PSP",
      "PlayStation",
      "SNES"
    ],
    category: "Multiplatform Games",
    genres: [
      "Strategy"
    ],
    developers: [
      "Square Enix",
      "Quest"
    ],
    publishers: [
      "Square Enix",
      "Atlus",
      "Riverhillsoft",
      "Quest"
    ],
    released: "1995-10-06",
    rating: 4.35,
    price: 11.99,
    discount: 5,
    cover: getProductImage(28),
    screenshots: getScreenshots(28)
  },
  {
    id: 54660,
    name: "The House of the Dead 2",
    description: "The House of the Dead 2 is a first-person light gun shooter arcade game with a horror theme and the second game in The House of the Dead series of video games, developed by Sega for video arcades in 1998 and later ported to the Dreamcast and Microsoft Windows, and also found on the Xbox as an unlockable bonus in The House of the Dead III. The game appears in the compilation The House of the Dead 2 & 3 Return for Wii. The Dreamcast version became one of the few Sega All Stars titles.",
    platforms: [
      "PC",
      "Wii",
      "Dreamcast"
    ],
    category: "PC Games",
    genres: [
      "Arcade"
    ],
    developers: [
      "SEGA",
      "Wow Entertainment"
    ],
    publishers: [
      "SEGA"
    ],
    released: "1999-03-25",
    rating: 4.04,
    price: 4.99,
    discount: 0,
    cover: getProductImage(29),
    screenshots: getScreenshots(29)
  },
  {
    id: 327230,
    name: "Romancing SaGa 3",
    description: "The celebrated RPG classic comes west for the first time! Developed by industry veterans including the legendary developer Akitoshi Kawazu, Romancing SaGa™ 3 was originally released in Japan in 1995. This HD remaster of the legendary RPG masterpiece introduces optimized graphics, a new dungeon to explore, new scenarios and a new game+ function. Select one of the 8 unique protagonists and embark on an epic adventure defined by your own choices!\nOnce every 300 years, the Rise of Morastrum—an event where the dark star blocks out the sun—threatens the very existence of our world. All born in that year are doomed to perish before its end. Whether man or beast, none have a chance at survival.\nHowever, there came a time when a sole child did survive. He was entranced by the power of death, using it to conquer the world. He came to be known as the Archfiend. Yet one day, he simply vanished.\nAnother 300 years passed, and again a child defied fate. She did not give in to the same powers that controlled the Archfiend, and came to be known as the Matriarch.\nIt has been nearly two decades since the previous rising of Morastrum, and 300-odd years since the appearance of the Matriarch. Humanity now stands at the fulcrum between hope and despair.\nWill there be another child of destiny? Will the child be righteous, evil, or another force that the world cannot fathom?",
    platforms: [
      "SNES",
      "Android",
      "PC",
      "iOS",
      "Nintendo Switch",
      "Xbox One",
      "PlayStation 4"
    ],
    category: "Multiplatform Games",
    genres: [
      "RPG"
    ],
    developers: [
      "Square Enix",
      "ArtePiazza"
    ],
    publishers: [
      "Square Enix"
    ],
    released: "1995-11-11",
    rating: 3.86,
    price: 17.99,
    discount: 0,
    cover: getProductImage(30),
    screenshots: getScreenshots(30)
  },
  {
    id: 22672,
    name: "Die By The Sword + Limb From Limb",
    description: "Adventure deep into a sinister undermountain stronghold to rescue your true love from a horrific ritual sacrifice. As Enric the adventurer, slash your way through hordes of intelligent and fearless enemies.\nEngage Kobolds, Orc masters and even a giant octopus in brutal combat as you explore dangerous dwarf mines, escape bubbling lava and pilot down treacherous underground rivers. Stretch your strength, dexterity and wits to the limit and steel yourself for the combat adventure of a lifetime.\nCan you succeed in your ultimate quest? Even if, at what cost? Find out as you return to the caverns to destroy the black queen. Step into the arena and play Ogre Hockey, where the players are invincible and a Kobold is the peck.\nSharpen your skills and your weapons in the continuation of your adventure brought to you by Die by the Sword: Limb from Limb expansion. Now both games, including the move editor, bundled together.Includes the original Die by The Sword and it's expansion Limb from Limb along with the move editor for both games\nRevolutionary fighting mechanics that let the user freely swing his sword\nChallenging gameplay with a complex damage system, maiming included",
    platforms: [
      "PC"
    ],
    category: "PC Games",
    genres: [
      "Action",
      "Adventure"
    ],
    developers: [
      "Treyarch"
    ],
    publishers: [
      "Interplay Productions"
    ],
    released: "1998-02-27",
    rating: 3.3,
    price: 3.49,
    discount: 0,
    cover: getProductImage(31),
    screenshots: getScreenshots(31)
  }
]

export const newArrayGenres = Array.from(new Set(games.flatMap((game) => game.genres)));
