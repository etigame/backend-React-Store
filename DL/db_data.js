let users = [
  {
    email: 'john.doe@example.com',
    password: 'password123',
    fullName: 'John Doe',
  },
  {
    email: 'jane.smith@example.com',
    password: 'securePassword456',
    fullName: 'Jane Smith',
  },
  {
    email: 'alice.johnson@example.com',
    password: 'alicePass789',
    fullName: 'Alice Johnson',
  },
  {
    email: 'bob.brown@example.com',
    password: 'bobSecret987',
    fullName: 'Bob Brown',
  },
]

const items = [
  {
    id: '01',
    name: 'apple',
    color: 'Red',
    emoji: '🍎',
    price: 1.99,
    category: 'fruits',
    image:
      'https://i.pinimg.com/originals/c4/d9/ee/c4d9eefa0d4136938ed03c7359286f7a.png',
  },
  {
    id: '02',
    name: 'Banana',
    color: 'Yellow',
    emoji: '🍌',
    price: 0.99,
    category: 'fruits',
    image:
      'https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Fruit-PNG/Large_Bananas_PNG_Clipart.png?m=1434276917',
  },
  {
    id: '03',
    name: 'Orange',
    color: 'Orange',
    emoji: '🍊',
    price: 2.49,
    category: 'fruits',
    image:
      'https://purepng.com/public/uploads/large/purepng.com-orange-orangeorangefruitbitter-orangeorangesclip-art-17015273374288pjtg.png',
  },
  {
    id: '04',
    name: 'Grapes',
    color: 'Purple',
    emoji: '🍇',
    price: 3.99,
    category: 'fruits',
    image:
      'https://www.freepnglogos.com/uploads/grapes-png/mzr-red-grapes-36.png',
  },
  {
    id: '05',
    name: 'Strawberry',
    color: 'Red',
    emoji: '🍓',
    price: 2.79,
    category: 'fruits',
    image:
      'https://i.pinimg.com/originals/eb/d4/de/ebd4deb64c74e2f1246626d5a290274d.png',
  },
  {
    id: '06',
    name: 'Watermelon',
    color: 'Green',
    emoji: '🍉',
    price: 5.99,
    category: 'fruits',
    image: 'https://pngfre.com/wp-content/uploads/watermelon-27-1024x987.png',
  },
  {
    id: '07',
    name: 'Pinerouterle',
    color: 'Yellow',
    emoji: '🍍',
    price: 3.89,
    category: 'fruits',
    image:
      'https://www.vhv.rs/dpng/f/39-392139_fruit-pinerouterle-hd-png-download.png',
  },
  {
    id: '08',
    name: 'Mango',
    color: 'Orange',
    emoji: '🥭',
    price: 2.99,
    category: 'fruits',
    image:
      'https://static.vecteezy.com/system/resources/previews/029/200/082/non_2x/mango-transparent-background-free-png.png',
  },
  {
    id: '09',
    name: 'Kiwi',
    color: 'Brown',
    emoji: '🥝',
    price: 1.79,
    category: 'fruits',
    image:
      'https://static.vecteezy.com/system/resources/previews/008/530/509/original/kiwi-fruit-cutout-file-png.png',
  },
  {
    id: '10',
    name: 'Peach',
    color: 'Orange',
    category: 'fruits',
    emoji: '🍑',
    price: 2.29,
    image:
      'https://pngfre.com/wp-content/uploads/peach-png-image-from-pngfre-33-1024x815.png',
  },
  {
    id: '11',
    name: 'Cherry',
    color: 'Red',
    emoji: '🍒',
    price: 4.99,
    category: 'fruits',
    image:
      'https://parspng.com/wp-content/uploads/2023/01/cherrypng.parspng.com-5.png',
  },
  {
    id: '12',
    name: 'Pear',
    color: 'Green',
    emoji: '🍐',
    price: 1.89,
    category: 'fruits',
    image:
      'https://static.vecteezy.com/system/resources/previews/029/335/116/original/pear-transparent-background-png.png',
  },
  {
    id: '13',
    name: 'Plum',
    color: 'Purple',
    category: 'fruits',
    emoji: '🍑',
    price: 2.69,
    image: 'https://pngimg.com/d/plum_PNG8673.png',
  },
  {
    id: '14',
    name: 'Raspberry',
    color: 'Red',
    category: 'fruits',
    emoji: '🍇',
    price: 3.49,
    image:
      'https://static.vecteezy.com/system/resources/previews/022/825/587/non_2x/raspberry-fruit-raspberries-on-transparent-background-png.png',
  },
  {
    id: '15',
    name: 'Lemon',
    category: 'fruits',
    color: 'Yellow',
    emoji: '🍋',
    price: 1.49,
    image: 'https://pngimg.com/d/lemon_PNG25198.png',
  },
  {
    id: '16',
    name: 'Cranberry',
    color: 'Red',
    emoji: '🍒',
    price: 3.79,
    category: 'fruits',
    image:
      'https://static.vecteezy.com/system/resources/previews/027/144/570/original/fresh-cranberry-isolated-on-transparent-background-png.png',
  },
  {
    id: '17',
    name: 'Apricot',
    category: 'fruits',
    color: 'Orange',
    emoji: '🍑',
    price: 2.19,
    image:
      'https://static.vecteezy.com/system/resources/previews/015/100/094/non_2x/apricots-transparent-background-free-png.png',
  },
  {
    id: '18',
    category: 'fruits',
    name: 'Avocado',
    color: 'Green',
    emoji: '🥑',
    price: 4.99,
    image:
      'https://png.pngtree.com/png-clipart/20230114/ourmid/pngtree-photo-of-avocado-png-image_6561465.png',
  },
  {
    id: '19',
    name: 'Coconut',
    category: 'fruits',
    color: 'Brown',
    emoji: '🥥',
    price: 5.49,
    image: 'https://pngimg.com/d/coconut_PNG108885.png',
  },
  {
    id: '51',
    category: 'vegetables',
    name: 'Carrot',
    color: 'Orange',
    emoji: '🥕',
    price: 1.49,
    image:
      'https://purepng.com/public/uploads/large/purepng.com-carrotcarrotdomestic-carrotfast-growingcarrots-1701527243731np6ec.png',
  },
]

module.exports = {users, items}