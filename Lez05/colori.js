const colori = [
{codice: '#000000', nome: 	'Black (W3C)'},
{codice: '#0C090A', nome: 	'Night'},
{codice: '#34282C', nome: 	'Charcoal'},
{codice: '#3B3131', nome: 	'Oil'},
{codice: '#3A3B3C', nome: 	'Dark Gray'},
{codice: '#454545', nome: 	'Light Black'},
{codice: '#413839', nome: 	'Black Cat'},
{codice: '#3D3C3A', nome: 	'Iridium'},
{codice: '#463E3F', nome: 	'Black Eel'},
{codice: '#4C4646', nome: 	'Black Cow'},
{codice: '#504A4B', nome: 	'Gray Wolf'},
{codice: '#565051', nome: 	'Vampire Gray'},
{codice: '#52595D', nome: 	'Iron Gray'},
{codice: '#5C5858', nome: 	'Gray Dolphin'},
{codice: '#625D5D', nome: 	'Carbon Gray'},
{codice: '#666362', nome: 	'Ash Gray'},
{codice: '#696969', nome: 	'DimGray or DimGrey (W3C)'},
{codice: '#686A6C', nome: 	'Nardo Gray'},
{codice: '#6D6968', nome: 	'Cloudy Gray'},
{codice: '#726E6D', nome: 	'Smokey Gray'},
{codice: '#736F6E', nome: 	'Alien Gray'},
{codice: '#757575', nome: 	'Sonic Silver'},
{codice: '#797979', nome: 	'Platinum Gray'},
{codice: '#837E7C', nome: 	'Granite'},
{codice: '#808080', nome: 	'Gray or Grey (W3C)'},
{codice: '#848482', nome: 	'Battleship Gray'},
{codice: '#8D918D', nome: 	'Gunmetal Gray'},
{codice: '#A9A9A9', nome: 	'DarkGray or DarkGrey (W3C)'},
{codice: '#B6B6B4', nome: 	'Gray Cloud'},
{codice: '#C0C0C0', nome: 	'Silver (W3C)'},
{codice: '#C9C0BB', nome: 	'Pale Silver'},
{codice: '#D1D0CE', nome: 	'Gray Goose'},
{codice: '#CECECE', nome: 	'Platinum Silver'},
{codice: '#D3D3D3', nome: 	'LightGray or LightGrey (W3C)'},
{codice: '#DCDCDC', nome: 	'Gainsboro (W3C)'},
{codice: '#E5E4E2', nome: 	'Platinum'},
{codice: '#BCC6CC', nome: 	'Metallic Silver'},
{codice: '#98AFC7', nome: 	'Blue Gray'},
{codice: '#838996', nome: 	'Roman Silver'},
{codice: '#778899', nome: 	'LightSlateGray or LightSlateGrey (W3C)'},
{codice: '#708090', nome: 	'SlateGray or SlateGrey (W3C)'},
{codice: '#6D7B8D', nome: 	'Rat Gray'},
{codice: '#657383', nome: 	'Slate Granite Gray'},
{codice: '#616D7E', nome: 	'Jet Gray'},
{codice: '#646D7E', nome: 	'Mist Blue'},
{codice: '#566D7E', nome: 	'Marble Blue'},
{codice: '#737CA1', nome: 	'Slate Blue Grey'},
{codice: '#728FCE', nome: 	'Light Purple Blue'},
{codice: '#4863A0', nome: 	'Azure Blue'},
{codice: '#2B547E', nome: 	'Blue Jay'},
{codice: '#36454F', nome: 	'Charcoal Blue'},
{codice: '#29465B', nome: 	'Dark Blue Grey'},
{codice: '#2B3856', nome: 	'Dark Slate'},
{codice: '#123456', nome: 	'Deep-Sea Blue'},
{codice: '#151B54', nome: 	'Night Blue'},
{codice: '#191970', nome: 	'MidnightBlue (W3C)'},
{codice: '#000080', nome: 	'Navy (W3C)'},
{codice: '#151B8D', nome: 	'Denim Dark Blue'},
{codice: '#00008B', nome: 	'DarkBlue (W3C)'},
{codice: '#15317E', nome: 	'Lapis Blue'},
{codice: '#0000A0', nome: 	'New Midnight Blue'},
{codice: '#0000A5', nome: 	'Earth Blue'},
{codice: '#0020C2', nome: 	'Cobalt Blue'},
{codice: '#0000CD', nome: 	'MediumBlue (W3C)'},
{codice: '#0041C2', nome: 	'Blueberry Blue'},
{codice: '#2916F5', nome: 	'Canary Blue'},
{codice: '#0000FF', nome: 	'Blue (W3C)'},
{codice: '#0909FF', nome: 	'Bright Blue'},
{codice: '#1F45FC', nome: 	'Blue Orchid'},
{codice: '#2554C7', nome: 	'Sapphire Blue'},
{codice: '#1569C7', nome: 	'Blue Eyes'},
{codice: '#1974D2', nome: 	'Bright Navy Blue'},
{codice: '#2B60DE', nome: 	'Balloon Blue'},
{codice: '#4169E1', nome: 	'RoyalBlue (W3C)'},
{codice: '#2B65EC', nome: 	'Ocean Blue'},
{codice: '#306EFF', nome: 	'Blue Ribbon'},
{codice: '#157DEC', nome: 	'Blue Dress'},
{codice: '#1589FF', nome: 	'Neon Blue'},
{codice: '#1E90FF', nome: 	'DodgerBlue (W3C)'},
{codice: '#368BC1', nome: 	'Glacial Blue Ice'},
{codice: '#4682B4', nome: 	'SteelBlue (W3C)'},
{codice: '#488AC7', nome: 	'Silk Blue'},
{codice: '#357EC7', nome: 	'Windows Blue'},
{codice: '#3090C7', nome: 	'Blue Ivy'},
{codice: '#659EC7', nome: 	'Blue Koi'},
{codice: '#87AFC7', nome: 	'Columbia Blue'},
{codice: '#95B9C7', nome: 	'Baby Blue'},
{codice: '#6495ED', nome: 	'CornflowerBlue (W3C)'},
{codice: '#6698FF', nome: 	'Sky Blue Dress'},
{codice: '#56A5EC', nome: 	'Iceberg'},
{codice: '#38ACEC', nome: 	'Butterfly Blue'},
{codice: '#00BFFF', nome: 	'DeepSkyBlue (W3C)'},
{codice: '#3BB9FF', nome: 	'Midday Blue'},
{codice: '#5CB3FF', nome: 	'Crystal Blue'},
{codice: '#79BAEC', nome: 	'Denim Blue'},
{codice: '#82CAFF', nome: 	'Day Sky Blue'},
{codice: '#87CEFA', nome: 	'LightSkyBlue (W3C)'},
{codice: '#87CEEB', nome: 	'SkyBlue (W3C)'},
{codice: '#A0CFEC', nome: 	'Jeans Blue'},
{codice: '#B7CEEC', nome: 	'Blue Angel'},
{codice: '#B4CFEC', nome: 	'Pastel Blue'},
{codice: '#ADDFFF', nome: 	'Light Day Blue'},
{codice: '#C2DFFF', nome: 	'Sea Blue'},
{codice: '#C6DEFF', nome: 	'Heavenly Blue'},
{codice: '#BDEDFF', nome: 	'Robin Egg Blue'},
{codice: '#B0E0E6', nome: 	'PowderBlue (W3C)'},
{codice: '#AFDCEC', nome: 	'Coral Blue'},
{codice: '#ADD8E6', nome: 	'LightBlue (W3C)'},
{codice: '#B0CFDE', nome: 	'LightSteelBlue (W3C)'},
{codice: '#C9DFEC', nome: 	'Gulf Blue'},
{codice: '#D5D6EA', nome: 	'Pastel Light Blue'},
{codice: '#E3E4FA', nome: 	'Lavender Blue'},
{codice: '#E6E6FA', nome: 	'Lavender (W3C)'},
{codice: '#EBF4FA', nome: 	'Water'},
{codice: '#F0F8FF', nome: 	'AliceBlue (W3C)'},
{codice: '#F8F8FF', nome: 	'GhostWhite (W3C)'},
{codice: '#F0FFFF', nome: 	'Azure (W3C)'},
{codice: '#E0FFFF', nome: 	'LightCyan (W3C)'},
{codice: '#CCFFFF', nome: 	'Light Slate'},
{codice: '#9AFEFF', nome: 	'Electric Blue'},
{codice: '#7DFDFE', nome: 	'Tron Blue'},
{codice: '#57FEFF', nome: 	'Blue Zircon'},
{codice: '#00FFFF', nome: 	'Aqua or Cyan (W3C)'},
{codice: '#0AFFFF', nome: 	'Bright Cyan'},
{codice: '#50EBEC', nome: 	'Celeste'},
{codice: '#4EE2EC', nome: 	'Blue Diamond'},
{codice: '#16E2F5', nome: 	'Bright Turquoise'},
{codice: '#8EEBEC', nome: 	'Blue Lagoon'},
{codice: '#AFEEEE', nome: 	'PaleTurquoise (W3C)'},
{codice: '#CFECEC', nome: 	'Pale Blue Lily'},
{codice: '#81D8D0', nome: 	'Tiffany Blue'},
{codice: '#77BFC7', nome: 	'Blue Hosta'},
{codice: '#92C7C7', nome: 	'Cyan Opaque'},
{codice: '#78C7C7', nome: 	'Northern Lights Blue'},
{codice: '#7BCCB5', nome: 	'Blue Green'},
{codice: '#66CDAA', nome: 	'MediumAquaMarine (W3C)'},
{codice: '#AAF0D1', nome: 	'Magic Mint'},
{codice: '#7FFFD4', nome: 	'Aquamarine (W3C)'},
{codice: '#93FFE8', nome: 	'Light Aquamarine'},
{codice: '#40E0D0', nome: 	'Turquoise (W3C)'},
{codice: '#48D1CC', nome: 	'MediumTurquoise (W3C)'},
{codice: '#48CCCD', nome: 	'Deep Turquoise'},
{codice: '#46C7C7', nome: 	'Jellyfish'},
{codice: '#43C6DB', nome: 	'Blue Turquoise'},
{codice: '#00CED1', nome: 	'DarkTurquoise (W3C)'},
{codice: '#43BFC7', nome: 	'Macaw Blue Green'},
{codice: '#20B2AA', nome: 	'LightSeaGreen (W3C)'},
{codice: '#3EA99F', nome: 	'Seafoam Green'},
{codice: '#5F9EA0', nome: 	'CadetBlue (W3C)'},
{codice: '#3B9C9C', nome: 	'Deep-Sea'},
{codice: '#008B8B', nome: 	'DarkCyan (W3C)'},
{codice: '#008080', nome: 	'Teal (W3C)'},
{codice: '#045F5F', nome: 	'Medium Teal'},
{codice: '#033E3E', nome: 	'Deep Teal'},
{codice: '#25383C', nome: 	'DarkSlateGray or DarkSlateGrey (W3C)'},
{codice: '#2C3539', nome: 	'Gunmetal'},
{codice: '#3C565B', nome: 	'Blue Moss Green'},
{codice: '#4C787E', nome: 	'Beetle Green'},
{codice: '#5E7D7E', nome: 	'Grayish Turquoise'},
{codice: '#307D7E', nome: 	'Greenish Blue'},
{codice: '#348781', nome: 	'Aquamarine Stone'},
{codice: '#438D80', nome: 	'Sea Turtle Green'},
{codice: '#4E8975', nome: 	'Dull-Sea Green'},
{codice: '#306754', nome: 	'Deep-Sea Green'},
{codice: '#2E8B57', nome: 	'SeaGreen (W3C)'},
{codice: '#31906E', nome: 	'Dark Mint'},
{codice: '#00A36C', nome: 	'Jade'},
{codice: '#34A56F', nome: 	'Earth Green'},
{codice: '#50C878', nome: 	'Emerald'},
{codice: '#3EB489', nome: 	'Mint'},
{codice: '#3CB371', nome: 	'MediumSeaGreen (W3C)'},
{codice: '#78866B', nome: 	'Camouflage Green'},
{codice: '#848B79', nome: 	'Sage Green'},
{codice: '#617C58', nome: 	'Hazel Green'},
{codice: '#728C00', nome: 	'Venom Green'},
{codice: '#6B8E23', nome: 	'OliveDrab (W3C)'},
{codice: '#808000', nome: 	'Olive (W3C)'},
{codice: '#556B2F', nome: 	'DarkOliveGreen (W3C)'},
{codice: '#4B5320', nome: 	'Army Green'},
{codice: '#667C26', nome: 	'Fern Green'},
{codice: '#4E9258', nome: 	'Fall Forest Green'},
{codice: '#387C44', nome: 	'Pine Green'},
{codice: '#347235', nome: 	'Medium Forest Green'},
{codice: '#347C2C', nome: 	'Jungle Green'},
{codice: '#228B22', nome: 	'ForestGreen (W3C)'},
{codice: '#008000', nome: 	'Green (W3C)'},
{codice: '#006400', nome: 	'DarkGreen (W3C)'},
{codice: '#046307', nome: 	'Deep Emerald Green'},
{codice: '#254117', nome: 	'Dark Forest Green'},
{codice: '#437C17', nome: 	'Seaweed Green'},
{codice: '#347C17', nome: 	'Shamrock Green'},
{codice: '#6AA121', nome: 	'Green Onion'},
{codice: '#4AA02C', nome: 	'Green Pepper'},
{codice: '#41A317', nome: 	'Dark Lime Green'},
{codice: '#12AD2B', nome: 	'Parrot Green'},
{codice: '#3EA055', nome: 	'Clover Green'},
{codice: '#73A16C', nome: 	'Dinosaur Green'},
{codice: '#6CBB3C', nome: 	'Green Snake'},
{codice: '#6CC417', nome: 	'Alien Green'},
{codice: '#4CC417', nome: 	'Green Apple'},
{codice: '#32CD32', nome: 	'LimeGreen (W3C)'},
{codice: '#52D017', nome: 	'Pea Green'},
{codice: '#4CC552', nome: 	'Kelly Green'},
{codice: '#54C571', nome: 	'Zombie Green'},
{codice: '#99C68E', nome: 	'Frog Green'},
{codice: '#8FBC8F', nome: 	'DarkSeaGreen (W3C)'},
{codice: '#89C35C', nome: 	'Green Peas'},
{codice: '#85BB65', nome: 	'Dollar Bill Green'},
{codice: '#9CB071', nome: 	'Iguana Green'},
{codice: '#B0BF1A', nome: 	'Acid Green'},
{codice: '#B2C248', nome: 	'Avocado Green'},
{codice: '#9DC209', nome: 	'Pistachio Green'},
{codice: '#A1C935', nome: 	'Salad Green'},
{codice: '#9ACD32', nome: 	'YellowGreen (W3C)'},
{codice: '#77DD77', nome: 	'Pastel Green'},
{codice: '#7FE817', nome: 	'Hummingbird Green'},
{codice: '#59E817', nome: 	'Nebula Green'},
{codice: '#57E964', nome: 	'Stoplight Go Green'},
{codice: '#16F529', nome: 	'Neon Green'},
{codice: '#5EFB6E', nome: 	'Jade Green'},
{codice: '#36F57F', nome: 	'Lime Mint Green'},
{codice: '#00FF7F', nome: 	'SpringGreen (W3C)'},
{codice: '#00FA9A', nome: 	'MediumSpringGreen (W3C)'},
{codice: '#5FFB17', nome: 	'Emerald Green'},
{codice: '#00FF00', nome: 	'Lime (W3C)'},
{codice: '#7CFC00', nome: 	'LawnGreen (W3C)'},
{codice: '#66FF00', nome: 	'Bright Green'},
{codice: '#7FFF00', nome: 	'Chartreuse (W3C)'},
{codice: '#87F717', nome: 	'Yellow Lawn Green'},
{codice: '#98F516', nome: 	'Aloe Vera Green'},
{codice: '#B1FB17', nome: 	'Dull Green Yellow'},
{codice: '#ADFF2F', nome: 	'GreenYellow (W3C)'},
{codice: '#BDF516', nome: 	'Chameleon Green'},
{codice: '#DAEE01', nome: 	'Neon Yellow Green'},
{codice: '#E2F516', nome: 	'Yellow Green Grosbeak'},
{codice: '#CCFB5D', nome: 	'Tea Green'},
{codice: '#BCE954', nome: 	'Slime Green'},
{codice: '#64E986', nome: 	'Algae Green'},
{codice: '#90EE90', nome: 	'LightGreen (W3C)'},
{codice: '#6AFB92', nome: 	'Dragon Green'},
{codice: '#98FB98', nome: 	'PaleGreen (W3C)'},
{codice: '#98FF98', nome: 	'Mint Green'},
{codice: '#B5EAAA', nome: 	'Green Thumb'},
{codice: '#E3F9A6', nome: 	'Organic Brown'},
{codice: '#C3FDB8', nome: 	'Light Jade'},
{codice: '#DBF9DB', nome: 	'Light Rose Green'},
{codice: '#F0FFF0', nome: 	'HoneyDew (W3C)'},
{codice: '#F5FFFA', nome: 	'MintCream (W3C)'},
{codice: '#FFFACD', nome: 	'LemonChiffon (W3C)'},
{codice: '#FFFFC2', nome: 	'Parchment'},
{codice: '#FFFFCC', nome: 	'Cream'},
{codice: '#FFFDD0', nome: 	'Cream White'},
{codice: '#FAFAD2', nome: 	'LightGoldenRodYellow (W3C)'},
{codice: '#FFFFE0', nome: 	'LightYellow (W3C)'},
{codice: '#F5F5DC', nome: 	'Beige (W3C)'},
{codice: '#FFF8DC', nome: 	'Cornsilk (W3C)'},
{codice: '#FBF6D9', nome: 	'Blonde'},
{codice: '#F7E7CE', nome: 	'Champagne'},
{codice: '#FAEBD7', nome: 	'AntiqueWhite (W3C)'},
{codice: '#FFEFD5', nome: 	'PapayaWhip (W3C)'},
{codice: '#FFEBCD', nome: 	'BlanchedAlmond (W3C)'},
{codice: '#FFE4C4', nome: 	'Bisque (W3C)'},
{codice: '#F5DEB3', nome: 	'Wheat (W3C)'},
{codice: '#FFE4B5', nome: 	'Moccasin (W3C)'},
{codice: '#FFE5B4', nome: 	'Peach'},
{codice: '#FED8B1', nome: 	'Light Orange'},
{codice: '#FFDAB9', nome: 	'PeachPuff (W3C)'},
{codice: '#FFDEAD', nome: 	'NavajoWhite (W3C)'},
{codice: '#FBE7A1', nome: 	'Golden Blonde'},
{codice: '#F3E3C3', nome: 	'Golden Silk'},
{codice: '#F0E2B6', nome: 	'Dark Blonde'},
{codice: '#F1E5AC', nome: 	'Light Gold'},
{codice: '#F3E5AB', nome: 	'Vanilla'},
{codice: '#ECE5B6', nome: 	'Tan Brown'},
{codice: '#E8E4C9', nome: 	'Dirty White'},
{codice: '#EEE8AA', nome: 	'PaleGoldenRod (W3C)'},
{codice: '#F0E68C', nome: 	'Khaki (W3C)'},
{codice: '#EDDA74', nome: 	'Cardboard Brown'},
{codice: '#EDE275', nome: 	'Harvest Gold'},
{codice: '#FFE87C', nome: 	'Sun Yellow'},
{codice: '#FFF380', nome: 	'Corn Yellow'},
{codice: '#FAF884', nome: 	'Pastel Yellow'},
{codice: '#FFFF33', nome: 	'Neon Yellow'},
{codice: '#FFFF00', nome: 	'Yellow (W3C)'},
{codice: '#FFEF00', nome: 	'Canary Yellow'},
{codice: '#F5E216', nome: 	'Banana Yellow'},
{codice: '#FFDB58', nome: 	'Mustard Yellow'},
{codice: '#FFDF00', nome: 	'Golden Yellow'},
{codice: '#F9DB24', nome: 	'Bold Yellow'},
{codice: '#FFD801', nome: 	'Rubber Ducky Yellow'},
{codice: '#FFD700', nome: 	'Gold (W3C)'},
{codice: '#FDD017', nome: 	'Bright Gold'},
{codice: '#FFCE44', nome: 	'Chrome Gold'},
{codice: '#EAC117', nome: 	'Golden Brown'},
{codice: '#F6BE00', nome: 	'Deep Yellow'},
{codice: '#F2BB66', nome: 	'Macaroni and Cheese'},
{codice: '#FBB917', nome: 	'Saffron'},
{codice: '#FBB117', nome: 	'Beer'},
{codice: '#FFAE42', nome: 	'Yellow Orange or Orange Yellow'},
{codice: '#FFA62F', nome: 	'Cantaloupe'},
{codice: '#FFA500', nome: 	'Orange (W3C)'},
{codice: '#EE9A4D', nome: 	'Brown Sand'},
{codice: '#F4A460', nome: 	'SandyBrown (W3C)'},
{codice: '#E2A76F', nome: 	'Brown Sugar'},
{codice: '#C19A6B', nome: 	'Camel Brown'},
{codice: '#E6BF83', nome: 	'Deer Brown'},
{codice: '#DEB887', nome: 	'BurlyWood (W3C)'},
{codice: '#D2B48C', nome: 	'Tan (W3C)'},
{codice: '#C8AD7F', nome: 	'Light French Beige'},
{codice: '#C2B280', nome: 	'Sand'},
{codice: '#BCB88A', nome: 	'Sage'},
{codice: '#C8B560', nome: 	'Fall Leaf Brown'},
{codice: '#C9BE62', nome: 	'Ginger Brown'},
{codice: '#BDB76B', nome: 	'DarkKhaki (W3C)'},
{codice: '#BAB86C', nome: 	'Olive Green'},
{codice: '#B5A642', nome: 	'Brass'},
{codice: '#C7A317', nome: 	'Cookie Brown'},
{codice: '#D4AF37', nome: 	'Metallic Gold'},
{codice: '#E9AB17', nome: 	'Bee Yellow'},
{codice: '#E8A317', nome: 	'School Bus Yellow'},
{codice: '#DAA520', nome: 	'GoldenRod (W3C)'},
{codice: '#D4A017', nome: 	'Orange Gold'},
{codice: '#C68E17', nome: 	'Caramel'},
{codice: '#B8860B', nome: 	'DarkGoldenRod (W3C)'},
{codice: '#C58917', nome: 	'Cinnamon'},
{codice: '#CD853F', nome: 	'Peru (W3C)'},
{codice: '#CD7F32', nome: 	'Bronze'},
{codice: '#C88141', nome: 	'Tiger Orange'},
{codice: '#B87333', nome: 	'Copper'},
{codice: '#AA6C39', nome: 	'Dark Gold'},
{codice: '#AB784E', nome: 	'Dark Almond'},
{codice: '#966F33', nome: 	'Wood'},
{codice: '#806517', nome: 	'Oak Brown'},
{codice: '#665D1E', nome: 	'Antique Bronze'},
{codice: '#8E7618', nome: 	'Hazel'},
{codice: '#8B8000', nome: 	'Dark Yellow'},
{codice: '#827839', nome: 	'Dark Moccasin'},
{codice: '#8A865D', nome: 	'Khaki Green'},
{codice: '#AF9B60', nome: 	'Bullet Shell'},
{codice: '#827B60', nome: 	'Army Brown'},
{codice: '#786D5F', nome: 	'Sandstone'},
{codice: '#483C32', nome: 	'Taupe'},
{codice: '#493D26', nome: 	'Mocha'},
{codice: '#513B1C', nome: 	'Milk Chocolate'},
{codice: '#3D3635', nome: 	'Gray Brown'},
{codice: '#3B2F2F', nome: 	'Dark Coffee'},
{codice: '#43302E', nome: 	'Old Burgundy'},
{codice: '#49413F', nome: 	'Western Charcoal'},
{codice: '#5C3317', nome: 	'Bakers Brown'},
{codice: '#654321', nome: 	'Dark Brown'},
{codice: '#704214', nome: 	'Sepia Brown'},
{codice: '#804A00', nome: 	'Dark Bronze'},
{codice: '#6F4E37', nome: 	'Coffee'},
{codice: '#835C3B', nome: 	'Brown Bear'},
{codice: '#7F5217', nome: 	'Red Dirt'},
{codice: '#7F462C', nome: 	'Sepia'},
{codice: '#A0522D', nome: 	'Sienna (W3C)'},
{codice: '#8B4513', nome: 	'SaddleBrown (W3C)'},
{codice: '#8A4117', nome: 	'Dark Sienna'},
{codice: '#7E3817', nome: 	'Sangria'},
{codice: '#7E3517', nome: 	'Blood Red'},
{codice: '#954535', nome: 	'Chestnut'},
{codice: '#C34A2C', nome: 	'Chestnut Red'},
{codice: '#C04000', nome: 	'Mahogany'},
{codice: '#C35817', nome: 	'Red Fox'},
{codice: '#B86500', nome: 	'Dark Bisque'},
{codice: '#B5651D', nome: 	'Light Brown'},
{codice: '#B76734', nome: 	'Petra Gold'},
{codice: '#C36241', nome: 	'Rust'},
{codice: '#CB6D51', nome: 	'Copper Red'},
{codice: '#C47451', nome: 	'Orange Salmon'},
{codice: '#D2691E', nome: 	'Chocolate (W3C)'},
{codice: '#CC6600', nome: 	'Sedona'},
{codice: '#E56717', nome: 	'Papaya Orange'},
{codice: '#E66C2C', nome: 	'Halloween Orange'},
{codice: '#FF6700', nome: 	'Neon Orange'},
{codice: '#FF5F1F', nome: 	'Bright Orange'},
{codice: '#F87217', nome: 	'Pumpkin Orange'},
{codice: '#F88017', nome: 	'Carrot Orange'},
{codice: '#FF8C00', nome: 	'DarkOrange (W3C)'},
{codice: '#F87431', nome: 	'Construction Cone Orange'},
{codice: '#FF7722', nome: 	'Indian Saffron'},
{codice: '#E67451', nome: 	'Sunrise Orange'},
{codice: '#FF8040', nome: 	'Mango Orange'},
{codice: '#FF7F50', nome: 	'Coral (W3C)'},
{codice: '#F88158', nome: 	'Basket Ball Orange'},
{codice: '#F9966B', nome: 	'Light Salmon Rose'},
{codice: '#FFA07A', nome: 	'LightSalmon (W3C)'},
{codice: '#E9967A', nome: 	'DarkSalmon (W3C)'},
{codice: '#E78A61', nome: 	'Tangerine'},
{codice: '#DA8A67', nome: 	'Light Copper'},
{codice: '#FA8072', nome: 	'Salmon (W3C)'},
{codice: '#F08080', nome: 	'LightCoral (W3C)'},
{codice: '#F67280', nome: 	'Pastel Red'},
{codice: '#E77471', nome: 	'Pink Coral'},
{codice: '#F75D59', nome: 	'Bean Red'},
{codice: '#E55451', nome: 	'Valentine Red'},
{codice: '#CD5C5C', nome: 	'IndianRed (W3C)'},
{codice: '#FF6347', nome: 	'Tomato (W3C)'},
{codice: '#E55B3C', nome: 	'Shocking Orange'},
{codice: '#FF4500', nome: 	'OrangeRed (W3C)'},
{codice: '#FF0000', nome: 	'Red (W3C)'},
{codice: '#FD1C03', nome: 	'Neon Red'},
{codice: '#FF2400', nome: 	'Scarlet'},
{codice: '#F62217', nome: 	'Ruby Red'},
{codice: '#F70D1A', nome: 	'Ferrari Red'},
{codice: '#F62817', nome: 	'Fire Engine Red'},
{codice: '#E42217', nome: 	'Lava Red'},
{codice: '#E41B17', nome: 	'Love Red'},
{codice: '#DC381F', nome: 	'Grapefruit'},
{codice: '#C24641', nome: 	'Cherry Red'},
{codice: '#C11B17', nome: 	'Chilli Pepper'},
{codice: '#B22222', nome: 	'FireBrick (W3C)'},
{codice: '#B21807', nome: 	'Tomato Sauce Red'},
{codice: '#A52A2A', nome: 	'Brown (W3C)'},
{codice: '#A70D2A', nome: 	'Carbon Red'},
{codice: '#9F000F', nome: 	'Cranberry'},
{codice: '#931314', nome: 	'Saffron Red'},
{codice: '#990000', nome: 	'Crimson Red'},
{codice: '#990012', nome: 	'Red Wine or Wine Red'},
{codice: '#8B0000', nome: 	'DarkRed (W3C)'},
{codice: '#800000', nome: 	'Maroon (W3C)'},
{codice: '#8C001A', nome: 	'Burgundy'},
{codice: '#7E191B', nome: 	'Vermilion'},
{codice: '#800517', nome: 	'Deep Red'},
{codice: '#660000', nome: 	'Red Blood'},
{codice: '#551606', nome: 	'Blood Night'},
{codice: '#560319', nome: 	'Dark Scarlet'},
{codice: '#3D0C02', nome: 	'Black Bean'},
{codice: '#3F000F', nome: 	'Chocolate Brown'},
{codice: '#2B1B17', nome: 	'Midnight'},
{codice: '#550A35', nome: 	'Purple Lily'},
{codice: '#810541', nome: 	'Purple Maroon'},
{codice: '#7D0541', nome: 	'Plum Pie'},
{codice: '#7D0552', nome: 	'Plum Velvet'},
{codice: '#872657', nome: 	'Dark Raspberry'},
{codice: '#7E354D', nome: 	'Velvet Maroon'},
{codice: '#7F4E52', nome: 	'Rosy-Finch'},
{codice: '#7F525D', nome: 	'Dull Purple'},
{codice: '#7F5A58', nome: 	'Puce'},
{codice: '#997070', nome: 	'Rose Dust'},
{codice: '#B38481', nome: 	'Rosy Pink'},
{codice: '#BC8F8F', nome: 	'RosyBrown (W3C)'},
{codice: '#C5908E', nome: 	'Khaki Rose'},
{codice: '#C48793', nome: 	'Lipstick Pink'},
{codice: '#C48189', nome: 	'Pink Brown'},
{codice: '#E799A3', nome: 	'Pink Daisy'},
{codice: '#D58A94', nome: 	'Dusty Pink'},
{codice: '#E8ADAA', nome: 	'Rose'},
{codice: '#C4AEAD', nome: 	'Silver Pink'},
{codice: '#ECC5C0', nome: 	'Rose Gold'},
{codice: '#FFCBA4', nome: 	'Deep Peach'},
{codice: '#F8B88B', nome: 	'Pastel Orange'},
{codice: '#EDC9AF', nome: 	'Desert Sand'},
{codice: '#FFDDCA', nome: 	'Unbleached Silk'},
{codice: '#FDD7E4', nome: 	'Pig Pink'},
{codice: '#FFE6E8', nome: 	'Blush'},
{codice: '#FFE4E1', nome: 	'MistyRose (W3C)'},
{codice: '#FFDFDD', nome: 	'Pink Bubble Gum'},
{codice: '#FFCCCB', nome: 	'Light Red'},
{codice: '#FBCFCD', nome: 	'Light Rose'},
{codice: '#FBBBB9', nome: 	'Deep Rose'},
{codice: '#FFC0CB', nome: 	'Pink (W3C)'},
{codice: '#FFB6C1', nome: 	'LightPink (W3C)'},
{codice: '#FAAFBE', nome: 	'Donut Pink'},
{codice: '#FAAFBA', nome: 	'Baby Pink'},
{codice: '#F9A7B0', nome: 	'Flamingo Pink'},
{codice: '#FEA3AA', nome: 	'Pastel Pink'},
{codice: '#E7A1B0', nome: 	'Rose Pink or Pink Rose'},
{codice: '#E38AAE', nome: 	'Cadillac Pink'},
{codice: '#F778A1', nome: 	'Carnation Pink'},
{codice: '#E56E94', nome: 	'Blush Red'},
{codice: '#DB7093', nome: 	'PaleVioletRed (W3C)'},
{codice: '#D16587', nome: 	'Purple Pink'},
{codice: '#C25A7C', nome: 	'Tulip Pink'},
{codice: '#C25283', nome: 	'Bashful Pink'},
{codice: '#E75480', nome: 	'Dark Pink'},
{codice: '#F660AB', nome: 	'Dark Hot Pink'},
{codice: '#FF69B4', nome: 	'HotPink (W3C)'},
{codice: '#FC6C85', nome: 	'Watermelon Pink'},
{codice: '#F6358A', nome: 	'Violet Red'},
{codice: '#F52887', nome: 	'Hot Deep Pink'},
{codice: '#FF1493', nome: 	'DeepPink (W3C)'},
{codice: '#F535AA', nome: 	'Neon Pink'},
{codice: '#FD349C', nome: 	'Neon Hot Pink'},
{codice: '#E45E9D', nome: 	'Pink Cupcake'},
{codice: '#E3319D', nome: 	'Dimorphotheca Magenta'},
{codice: '#E4287C', nome: 	'Pink Lemonade'},
{codice: '#E30B5D', nome: 	'Raspberry'},
{codice: '#DC143C', nome: 	'Crimson (W3C)'},
{codice: '#C32148', nome: 	'Bright Maroon'},
{codice: '#C21E56', nome: 	'Rose Red'},
{codice: '#C12869', nome: 	'Rogue Pink'},
{codice: '#C12267', nome: 	'Burnt Pink'},
{codice: '#CA226B', nome: 	'Pink Violet'},
{codice: '#C71585', nome: 	'MediumVioletRed (W3C)'},
{codice: '#C12283', nome: 	'Dark Carnation Pink'},
{codice: '#B3446C', nome: 	'Raspberry Purple'},
{codice: '#B93B8F', nome: 	'Pink Plum'},
{codice: '#DA70D6', nome: 	'Orchid (W3C)'},
{codice: '#DF73D4', nome: 	'Deep Mauve'},
{codice: '#EE82EE', nome: 	'Violet (W3C)'},
{codice: '#F433FF', nome: 	'Bright Neon Pink'},
{codice: '#FF00FF', nome: 	'Fuchsia or Magenta (W3C)'},
{codice: '#E238EC', nome: 	'Crimson Purple'},
{codice: '#D462FF', nome: 	'Heliotrope Purple'},
{codice: '#C45AEC', nome: 	'Tyrian Purple'},
{codice: '#BA55D3', nome: 	'MediumOrchid (W3C)'},
{codice: '#A74AC7', nome: 	'Purple Flower'},
{codice: '#B048B5', nome: 	'Orchid Purple'},
{codice: '#D291BC', nome: 	'Pastel Violet'},
{codice: '#915F6D', nome: 	'Mauve Taupe'},
{codice: '#7E587E', nome: 	'Viola Purple'},
{codice: '#614051', nome: 	'Eggplant'},
{codice: '#583759', nome: 	'Plum Purple'},
{codice: '#5E5A80', nome: 	'Grape'},
{codice: '#4E5180', nome: 	'Purple Navy'},
{codice: '#6A5ACD', nome: 	'SlateBlue (W3C)'},
{codice: '#6960EC', nome: 	'Blue Lotus'},
{codice: '#736AFF', nome: 	'Light Slate Blue'},
{codice: '#7B68EE', nome: 	'MediumSlateBlue (W3C)'},
{codice: '#7575CF', nome: 	'Periwinkle Purple'},
{codice: '#6667AB', nome: 	'Very Peri'},
{codice: '#6F2DA8', nome: 	'Bright Grape'},
{codice: '#6C2DC7', nome: 	'Purple Amethyst'},
{codice: '#6A0DAD', nome: 	'Bright Purple'},
{codice: '#5453A6', nome: 	'Deep Periwinkle'},
{codice: '#483D8B', nome: 	'DarkSlateBlue (W3C)'},
{codice: '#4E387E', nome: 	'Purple Haze'},
{codice: '#571B7E', nome: 	'Purple Iris'},
{codice: '#4B0150', nome: 	'Dark Purple'},
{codice: '#36013F', nome: 	'Deep Purple'},
{codice: '#461B7E', nome: 	'Purple Monster'},
{codice: '#4B0082', nome: 	'Indigo (W3C)'},
{codice: '#342D7E', nome: 	'Blue Whale'},
{codice: '#663399', nome: 	'RebeccaPurple (W3C)'},
{codice: '#6A287E', nome: 	'Purple Jam'},
{codice: '#8B008B', nome: 	'DarkMagenta (W3C)'},
{codice: '#800080', nome: 	'Purple (W3C)'},
{codice: '#86608E', nome: 	'French Lilac'},
{codice: '#9932CC', nome: 	'DarkOrchid (W3C)'},
{codice: '#9400D3', nome: 	'DarkViolet (W3C)'},
{codice: '#8D38C9', nome: 	'Purple Violet'},
{codice: '#A23BEC', nome: 	'Jasmine Purple'},
{codice: '#B041FF', nome: 	'Purple Daffodil'},
{codice: '#842DCE', nome: 	'Clematis Violet'},
{codice: '#8A2BE2', nome: 	'BlueViolet (W3C)'},
{codice: '#7A5DC7', nome: 	'Purple Sage Bush'},
{codice: '#7F38EC', nome: 	'Lovely Purple'},
{codice: '#9D00FF', nome: 	'Neon Purple'},
{codice: '#8E35EF', nome: 	'Purple Plum'},
{codice: '#893BFF', nome: 	'Aztech Purple'},
{codice: '#967BB6', nome: 	'Lavender Purple'},
{codice: '#9370DB', nome: 	'MediumPurple (W3C)'},
{codice: '#8467D7', nome: 	'Light Purple'},
{codice: '#9172EC', nome: 	'Crocus Purple'},
{codice: '#9E7BFF', nome: 	'Purple Mimosa'},
{codice: '#CCCCFF', nome: 	'Periwinkle'},
{codice: '#DCD0FF', nome: 	'Pale Lilac'},
{codice: '#E0B0FF', nome: 	'Mauve'},
{codice: '#D891EF', nome: 	'Bright Lilac'},
{codice: '#B666D2', nome: 	'Rich Lilac'},
{codice: '#C38EC7', nome: 	'Purple Dragon'},
{codice: '#C8A2C8', nome: 	'Lilac'},
{codice: '#DDA0DD', nome: 	'Plum (W3C)'},
{codice: '#E6A9EC', nome: 	'Blush Pink'},
{codice: '#F2A2E8', nome: 	'Pastel Purple'},
{codice: '#F9B7FF', nome: 	'Blossom Pink'},
{codice: '#C6AEC7', nome: 	'Wisteria Purple'},
{codice: '#D2B9D3', nome: 	'Purple Thistle'},
{codice: '#D8BFD8', nome: 	'Thistle (W3C)'},
{codice: '#E9CFEC', nome: 	'Periwinkle Pink'},
{codice: '#FCDFFF', nome: 	'Cotton Candy'},
{codice: '#EBDDE2', nome: 	'Lavender Pinocchio'},
{codice: '#E1D9D1', nome: 	'Dark White'},
{codice: '#E9E4D4', nome: 	'Ash White'},
{codice: '#EDE6D6', nome: 	'White Chocolate'},
{codice: '#FAF0DD', nome: 	'Soft Ivory'},
{codice: '#F8F0E3', nome: 	'Off White'},
{codice: '#F8F6F0', nome: 	'Pearl White'},
{codice: '#FFF0F5', nome: 	'LavenderBlush (W3C)'},
{codice: '#FDEEF4', nome: 	'Pearl'},
{codice: '#FFF9E3', nome: 	'Egg Shell'},
{codice: '#FDF5E6', nome: 	'OldLace (W3C)'},
{codice: '#FAF0E6', nome: 	'Linen (W3C)'},
{codice: '#FFF5EE', nome: 	'SeaShell (W3C)'},
{codice: '#FAF5EF', nome: 	'Rice'},
{codice: '#FFFAF0', nome: 	'FloralWhite (W3C)'},
{codice: '#FFFFF0', nome: 	'Ivory (W3C)'},
{codice: '#FFFFF7', nome: 	'Light White'},
{codice: '#F5F5F5', nome: 	'WhiteSmoke (W3C)'},
{codice: '#FBFBF9', nome: 	'Cotton'},
{codice: '#FFFAFA', nome: 	'Snow (W3C)'},
{codice: '#FEFCFF', nome: 	'Milk White'},
{codice: '#FFFFFF', nome: 	'White (W3C)'}
];