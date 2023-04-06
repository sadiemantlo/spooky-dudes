const { Scene } = require("../models");
const sceneData = [
  {
    id: 0,
    image: "title1.png",
    title: "Prendergast Manor",
    text: "Only the bravest enter the manor. The luckiest survive. Which one are you?",
    choice1:["1", "Start"],
    choice2:["","@"],
    choice3:["","@"]
  },
  {
    id: 1,
    image: "mansion-front.png",
    title: "Prendergast Manor",
    text: "You and your friends stand at the doorstep of Prendergast Manor. Everyone in town knows about this place, or the rumors anyway. The previous owner, Lord Prendergast, was as eccentric as he was rich. When he died, his will stated that whoever could last a full night in the manor would earn the rights to his lavish fortune. You and your friends agreed to stay the night together, then split your winnings. Unbeknownst to your group, the mansion is a death trap. You all look at each other, daring the other to back out before it is too late. But no one does.",
    choice1:["2","Enter the Mansion"],
    choice2:["","@"],
    choice3:["","@"]
  },
  {
    id:2,
    image: "foyer.png",
    title: "The Foyer",
    text: "It's been awhile since someone has dusted in here. The once lavish manor has fallen into disrepair since the previous owner’s death. Most of the doors and windows are sealed shut, except for the doors to the kitchen, the library, and the back door leading to the garden. Where do you go?",
    choice1:["3","The Kitchen"],
    choice2:["4","The Library"],
    choice3:["6","The Garden"]
  },
  {
    id: 3,
    image: "kitchen.jpg",
    title: "The Kitchen",
    text: "Twinkies don't expire right? You make your way to the kitchen. The floorboards whine with each step you take, piercing the manor's heavy silence. Unfortunately the kitchen was emptied out long ago. You notice, however, a waft of cold air coming from what looks like a wine cellar. Weird. You wouldn't turn down an expensive cask of wine though.",
  choice1:["5","Go down to the Cellar"],
  choice2:["2","Keep Exploring the Manor"],
  choice3:["","@"]
  },
  {
    id: 4,
    image: "library.png",
    title: "The Library",
    text: "Libraries are safe. Maybe you and your friends can camp out here for the night. Despite the state of the rest of the manor, the library seems to be in good condition. Books line the shelves neatly, and ladders ascend to the top of the room’s vaulted ceilings. Out of the corner of your eye, you notice a brief rush of movement as something skitters up a ladder and disappears behind one of the shelves. You notice a draft from behind this bookshelf. Maybe there's a secret door?",
    choice1:["8","Climb the Ladder"],
    choice2:["2","This is creepy. Go back to the Foyer"],
    choice3:["","@"]
  },
  {
    id:5,
    image: "cellar.png",
    title: "The Cellar",
    text: "You open the cellar door to find a stairwell that leads underground in pitch darkness. You take a deep breath and decide to forge ahead. When you reach the bottom, you realize this isn't an ordinary cellar. Strange medieval devices clutter the room. Despite the lack of ventilation, you can't help but notice another rush of cold air. This place is creepy.",
    choice1:["9","Run up the stairs as fast as you can!"],
    choice2:["","@"],
    choice3:["","@"]
  },
  {
    id: 6,
    image: "garden.png",
    title: "The Garden",
    text: "Perhaps if you stay outside, the horrors of the mansion won't reach you. You step into the overgrown garden. In the distance you notice a strange golden glow. It's coming from the cemetery! Perhaps the Prendergast fortune is hidden there.",
    choice1:["7","Go to the Cemetery"],
    choice2:["2","Keep exploring the Mansion"],
    choice3:["","@"]
  },
  {
    id: 7,
    image: "cemetary.jpg",
    title: "The Cemetery",
    text: "You push open the creaky iron gate. The grass and trees are terribly overgrown, but the glowing golden light is unmistakable now. You rush forward. Maybe you can trick your way out of staying the night here. Grave robbing is a victimless crime right?",
    choice1:["10","..."],
    choice2:["","@"],
    choice3:["","@"]
  },

  {
    id: 8,
    image: "seance.png",
    title: "The Seance",
    text: "As you climb, you notice a faint light peeking between books from behind the bookshelf. You push the books aside and find a secret reading room. In the center of the table you see a ouija board. As you move closer you notice the planchette moving over the board on its own. You put your hands on the planchette and it spells out. “My manor is yours, for a price.” Do you agree?",
    choice1:["11","Yes!"],
    choice2:["2","No!"],
    choice3:["","@"]
  },
  {
    id: 9,
    image: "cellar.png",
    title: "You Die in the Cellar",
    text: "Forget the wine, you book it up the dark stairway, setting your sight on the dim light of the kitchen above you. You almost reach the top when a rush of cold air hits you. Out of nowhere, you feel icy hands claw at your shoulder blades and lift you up by the back of your shirt. Your shoes scuff the stone staircase as you kick out at nothing. “Let go of me!” You shout. The hands release you, sending you into a free fall down to the cellar far below you. Everything goes black.",
    choice1:["2","Try Again?"],
    choice2:["/select","Accept your fate"],
    choice3:["","@"]
  },
  {
    id: 10,
    image: "cemetery-hand.png",
    title: "You Die in the Cemetery",
    text: "Just as the thought crosses your mind, and undead arm bursts from the ground and latches onto you leg. You cry out, your ankle twisting painfully as the ghoul's strong grip pulls you down. Darkness quickly overtakes you as your body is dragged into the earth.",
    choice1:["2","Try Again?"],
    choice2:["/select","Accept your fate"],
    choice3:["","@"]
  },
  {
    id: 11,
    image: "treasureopen_720.png",
    title: "You Survived!",
    text: "You agree. The whole manor seems to start shaking, books falling from the shelves. One particularly large tome hits your head and you black out. When you wake up, you notice daylight streaming into the library. A nearby chest filled to the brim with Lord Prendergast's fortune sits open. You go to find your friends, but they have all mysteriously disappeared. The following days are filled with fame and luxury, but you never see your friends again. Perhaps that was the price for your survival.",
    choice1:["/select","The End"],
    choice2:["","@"],
    choice3:["","@"]
  },
];

const seedScenes = () => Scene.bulkCreate(sceneData);

module.exports = seedScenes;
