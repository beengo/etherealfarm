/*
Ethereal Farm
Copyright (C) 2020  Lode Vandevenne

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/



var fern_spring_header = 'l0:#844 l1:#d66 hg:#2f0';
var fern_summer_header = 'hg:#0f4';
var fern_autumn_header = 'q:#a30 g:#f70';
var fern_winter_header = 'q:#88f g:#aaf G:#ccf Q:#eef';
var fern_ethereal_header = 'q:#ff8 g:#ffa G:#ffc Q:#ffe';

var fern_base_image = `
................
....g...........
....q.qg........
..gqqqg..g......
.....qgggqg.....
..gqqqqqqg......
.gqgggqgg.......
.....gq.ggg.....
..ggqqqqqqqgg...
.gqqgg.qgggqqg..
..gg.g.q.g.gg...
...gggqqqqggg...
..ggqq..qgqqgg..
.gqqgg..qgggqqg.
..gg....q..ggg..
................
`;

var fern_base_image2 = `
....$...........
...$g$$$........
..$$q$qg$$......
.$gqqqg$$g$.....
..$$$qgggqg$....
.$gqqqqqqg$.....
$gqgggqgg$$.....
.$$$$gq$ggg$$...
.$ggqqqqqqqgg$..
$gqqgg$qgggqqg$.
.$gg$g$q$g$gg$..
..$gggqqqqggg$..
.$ggqq$$qgqqgg$.
$gqqgg$$qgggqqg$
.$gg$$$$q$$ggg$.
..$$....$..$$$..
`;

var images_fern = [
  generateImageCanvas(fern_spring_header + fern_base_image),
  generateImageCanvas(fern_summer_header + fern_base_image),
  generateImageCanvas(fern_autumn_header + fern_base_image),
  generateImageCanvas(fern_winter_header + fern_base_image),
  generateImageCanvas(fern_ethereal_header + fern_base_image),
];

var images_fern2 = [
  generateImageCanvas(fern_spring_header + fern_base_image2),
  generateImageCanvas(fern_summer_header + fern_base_image2),
  generateImageCanvas(fern_autumn_header + fern_base_image2),
  generateImageCanvas(fern_winter_header + fern_base_image2),
  generateImageCanvas(fern_ethereal_header + fern_base_image2),
];

// default header is: '#l0:#400 l1:#822 l2:#a55 l3:#faa'

// less saturated than the default for fields
var fieldimageheader = 'l0:#622 l1:#966 l2:#a88 l3:#fcc';
// a header with much higher saturation, for fruits and flowers
var fruitimageheader = 'l0:#800 l1:#c22 l2:#f44 l3:#f88';
// a header for green plants, the difference with standard palette is that it has less shadow, so you can make subtler shades
var subtleplantimageheader = 'l0:#600 l1:#822 l2:#a55 l3:#faa';



var fieldheader_spring = '+:#dbecc8 -:#b5d571';
var fieldheader_summer = '+:#c3e4bc -:#c9bb9d';
var fieldheader_autumn = '+:#d3be9c -:#cea78b';
var fieldheader_winter = '+:#fff -:#eef';
var fieldheader_ethereal = '+:#9df -:#ffd';

var field0 = `
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
++--++++++++++++
++++-++--+-++--+
++++++++++++++++
++++++++++++++++
+++-+--+--+--+++
++++++++++++++++
++++++++++++++++
++++++++++++++++
+++++++++++---++
+---+-+---++++++
++++++++++++++++
++++++++++++++++
`;

var field1 = `
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
+++--++-+---++++
++++++++-+++++++
++++++++++++++++
++++++++++++++++
++----++++----++
+++++++++++++++-
++++++++++++++++
++++++++++++-+++
+---+---++-+++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
`;

var field2 = `
++++++++++++++++
++++++++++++++++
++++++++++++++++
+---++++++++---+
+++++--+-++-++++
++++++++++++++++
+-++++++++++++++
++---+++++++++++
+++++++---+--+++
++++++++++++++++
++++++++++++++++
++++++++++++++++
+----+++----++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
`;

var field3 = `
++++++++++++++++
++++++++++++++++
+-+----+-+++++++
+++++++++-----++
++++++++++++++++
++++++++++++++++
++++++++++++++++
+---++--++++++++
++++++++++-----+
++++++++++++++++
++++++++++++++++
++++++++-+++++++
++-----++----+++
++++++++++++++++
++++++++++++++++
++++++++++++++++
`;

var field_empty = `
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
++++++++++++++++
`;



// field array must have 5 values: 4 similar but slightly different patterns, and a patternless one for under tree

var field_spring = [
generateImageCanvas(fieldheader_spring + field0),
generateImageCanvas(fieldheader_spring + field1),
generateImageCanvas(fieldheader_spring + field2),
generateImageCanvas(fieldheader_spring + field3),
generateImageCanvas(fieldheader_spring + field_empty),
];

var field_summer = [
generateImageCanvas(fieldheader_summer + field0),
generateImageCanvas(fieldheader_summer + field1),
generateImageCanvas(fieldheader_summer + field2),
generateImageCanvas(fieldheader_summer + field3),
generateImageCanvas(fieldheader_summer + field_empty),
];

var field_autumn = [
generateImageCanvas(fieldheader_autumn + field0),
generateImageCanvas(fieldheader_autumn + field1),
generateImageCanvas(fieldheader_autumn + field2),
generateImageCanvas(fieldheader_autumn + field3),
generateImageCanvas(fieldheader_autumn + field_empty),
];

var field_winter = [
generateImageCanvas(fieldheader_winter + field0),
generateImageCanvas(fieldheader_winter + field1),
generateImageCanvas(fieldheader_winter + field2),
generateImageCanvas(fieldheader_winter + field3),
generateImageCanvas(fieldheader_winter + field_empty),
];

var field_ethereal = [
generateImageCanvas(fieldheader_ethereal + field0),
generateImageCanvas(fieldheader_ethereal + field1),
generateImageCanvas(fieldheader_ethereal + field2),
generateImageCanvas(fieldheader_ethereal + field3),
generateImageCanvas(fieldheader_ethereal + field_empty),
];

var images_field = [
  field_spring,
  field_summer,
  field_autumn,
  field_winter,
  field_ethereal,
];



var empty = generateImageCanvas(`
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
`);

var gray = generateImageCanvas(`
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
`);



var exclamation = generateImageCanvas(`
................
.....000000.....
...00------00...
..0----------0..
..0----00----0..
.0-----00-----0.
.0-----00-----0.
.0-----00-----0.
.0-----00-----0.
.0------------0.
.0-----00-----0.
..0----00----0..
..0----------0..
...00------00...
.....000000.....
................
`);





var upgrade_arrow = generateImageCanvas(`
...........0....
..........0-0...
.........0---0..
........0-----0.
.......0000-0000
..........0-0...
..........0-0...
..........0-0...
..........000...
................
................
................
................
................
................
................
`);



var image_seed = generateImageCanvas(`
................
................
................
................
........X.......
.......XOO......
.......XOO......
......XOOOo.....
.......OOo......
.......OOo......
........o.......
................
................
................
................
................
`);

var image_starting_seeds = generateImageCanvas(`
................
................
................
................
................
................
................
................
...OOoo...OOoo..
..Ooooxx.Ooooxx.
...oxxx...oxxx..
................
......OOoo......
.....Ooooxx.....
......oxxx......
................
`);

var image_spore = generateImageCanvas(`
................
................
................
................
................
................
.......22.......
......2110......
......2100......
.......00.......
................
................
................
................
................
................
`);

var image_spores = generateImageCanvas(`
................
................
................
................
...22...........
..2110....22....
..2100...2110...
...00....2100...
..........00....
......22........
.....2110.......
.....2100.......
......00........
................
................
................
`);

var image_resin = generateImageCanvas(`
................
................
................
........x.......
.......xx.......
......xxoo......
......xooo......
.....xxoooO.....
.....xooOOO.....
.....ooOOPO.....
.....oOOPXO.....
.....oOPX]O.....
......oOOO......
................
................
................
`);

var image_mist = generateImageCanvas(`
................
................
......aaaa......
....aa@@@@a.....
...a@@@@@@@aaa..
...a@@@@@@@@@@a.
.aa@@@@@@@@@@@a.
a@@@@@@@@@@@@@@a
a@@@@@@@@@@@@@@a
.a@@@aaa@a@@@@a.
..aa........aa..
.....a.aaaa.....
................
....aaaaa.aa....
................
................
`);

var image_sun = generateImageCanvas(`
+:#ff08
................
................
......+---+.....
.....-ZZZZZ-....
....-ZZZZZZZ-...
...+ZZZZZZZZZ+..
...-ZZZZZZZZZ-..
...-ZZZZZZZZZ-..
...-ZZZZZZZZZ-..
...+ZZZZZZZZZ+..
....-ZZZZZZZ-...
.....-ZZZZZ-....
......+---+.....
................
................
................
`);


var image_rainbow = generateImageCanvas(`
................
...............+
..............+-
.......0......+-
......0.0....+-*
......0.0...+-**
y....0...0..+-*/
.y..0.....0+-*/I
..y0+++++++-*/IM
...y********/IMM
..0MMMMMMMMMMM..
..0.........0...
.0000000000000..
................
................
................
`);

////////////////////////////////////////////////////////////////////////////////

var metalheader0 = ' hm:#999';
var metalheader1 = ' hm:#c70';
var metalheader2 = ' N:#eee M:#bbb m:#888 n:#555';
var metalheader3 = ' hm:#dfb';
var metalheader4 = ' hm:#ff0';
var metalheader5 = ' N:#fff M:#eee m:#ddd n:#ccc';
var metalheader6 = ' N:#fee M:#ecc m:#dbb n:#caa';
var metalheader7 = ' hm:#00f';
var metalheader8 = ' hm:#0f0';
var metalheader9 = ' hm:#f00';
var metalheader10 = ' N:#fff M:#eee m:#ddd n:#ccc';

var image_apple = `
................
.........h|.....
........h||.....
......0.||......
.......0........
.......0........
......N0MMN.....
....NNNMMNNm....
....NMNNNmmmn...
...NNMMmmmmnnn..
...NMMmmmmmmnn..
...NNMMmmmmnnn..
...NMMmmmmmmnn..
....NMMmmmmnn...
.....NMMnmnn....
................
`;


// spring fruit
var image_apricot = `
................
................
................
................
................
................
.....MMmMM......
...MMMmMMMMm....
...MMmMMMMMm....
..MMMmMMMMMmm...
..MMMmMMMMMmm...
..MMMmMMMMMmn...
..MMMmMMMMMmn...
...MMMMMMMmn....
....MMMMMmn.....
................
`;

// summer fruit
var image_pineapple = `
....|.|.|.|.....
.....|h|h|......
...|.||h||.|....
....|h|||h|.....
.....|h|h|......
.....M|||n......
....mMMnmmn.....
....Mmmmnnn.....
...mmMmnmnnn....
...MmMmnmmnm....
...mMmnmnnmn....
...mmMnnmnnm....
...MmMmnmmnn....
....Mmnmnnn.....
....mMmnmnn.....
.....mmnnn......
`;


// autumn fruit
var image_pear = `
................
........0.......
.......0........
.......0........
......mmn.......
.....MmMmn......
.....MMmmn......
.....MmMnn......
.....MMmmn......
....NMmMnnn.....
...NMmMmmnnn....
...NMMmMmmnn....
...MMmMmmnnn....
...MMMmMmmnn....
....MMMmmnn.....
................
`;

// winter fruit
var image_medlar = `
................
................
................
................
................
......0.0.......
.....0..0.0.....
.....0.00.0.....
.....n0nn00n....
....M000n00n....
....Mmn00nmm....
....MMmMmmmm....
....MMMmMmmm....
.....MmMmmm.....
......MmMm......
................
`;


// the different metal tiers for the fruits
var images_apple = [
generateImageCanvas(metalheader0 + image_apple),
generateImageCanvas(metalheader1 + image_apple),
generateImageCanvas(metalheader2 + image_apple),
generateImageCanvas(metalheader3 + image_apple),
generateImageCanvas(metalheader4 + image_apple),
generateImageCanvas(metalheader5 + image_apple),
generateImageCanvas(metalheader6 + image_apple),
generateImageCanvas(metalheader7 + image_apple),
generateImageCanvas(metalheader8 + image_apple),
generateImageCanvas(metalheader9 + image_apple),
generateImageCanvas(metalheader10 + image_apple),
];
var images_apricot = [
generateImageCanvas(metalheader0 + image_apricot),
generateImageCanvas(metalheader1 + image_apricot),
generateImageCanvas(metalheader2 + image_apricot),
generateImageCanvas(metalheader3 + image_apricot),
generateImageCanvas(metalheader4 + image_apricot),
generateImageCanvas(metalheader5 + image_apricot),
generateImageCanvas(metalheader6 + image_apricot),
generateImageCanvas(metalheader7 + image_apricot),
generateImageCanvas(metalheader8 + image_apricot),
generateImageCanvas(metalheader9 + image_apricot),
generateImageCanvas(metalheader10 + image_apricot),
];
var images_pineapple = [
generateImageCanvas(metalheader0 + image_pineapple),
generateImageCanvas(metalheader1 + image_pineapple),
generateImageCanvas(metalheader2 + image_pineapple),
generateImageCanvas(metalheader3 + image_pineapple),
generateImageCanvas(metalheader4 + image_pineapple),
generateImageCanvas(metalheader5 + image_pineapple),
generateImageCanvas(metalheader6 + image_pineapple),
generateImageCanvas(metalheader7 + image_pineapple),
generateImageCanvas(metalheader8 + image_pineapple),
generateImageCanvas(metalheader9 + image_pineapple),
generateImageCanvas(metalheader10 + image_pineapple),
];
var images_pear = [
generateImageCanvas(metalheader0 + image_pear),
generateImageCanvas(metalheader1 + image_pear),
generateImageCanvas(metalheader2 + image_pear),
generateImageCanvas(metalheader3 + image_pear),
generateImageCanvas(metalheader4 + image_pear),
generateImageCanvas(metalheader5 + image_pear),
generateImageCanvas(metalheader6 + image_pear),
generateImageCanvas(metalheader7 + image_pear),
generateImageCanvas(metalheader8 + image_pear),
generateImageCanvas(metalheader9 + image_pear),
generateImageCanvas(metalheader10 + image_pear),
];
var images_medlar = [
generateImageCanvas(metalheader0 + image_medlar),
generateImageCanvas(metalheader1 + image_medlar),
generateImageCanvas(metalheader2 + image_medlar),
generateImageCanvas(metalheader3 + image_medlar),
generateImageCanvas(metalheader4 + image_medlar),
generateImageCanvas(metalheader5 + image_medlar),
generateImageCanvas(metalheader6 + image_medlar),
generateImageCanvas(metalheader7 + image_medlar),
generateImageCanvas(metalheader8 + image_medlar),
generateImageCanvas(metalheader9 + image_medlar),
generateImageCanvas(metalheader10 + image_medlar),
];


var images_fruittypes = [
  images_apple,
  images_apricot,
  images_pineapple,
  images_pear,
  images_medlar
];

var images_rock = [generateImageCanvas(`
................
................
................
................
................
................
.......444......
.....444342.....
....44332221....
...4442322121...
..443232122111..
.4342222111212..
................
................
................
................
`), generateImageCanvas(`
................
................
................
................
.......444......
......444222....
.....44333222...
....434332221...
...44433333221..
..4433333322211.
.43433342333221.
.443.3431233221.
......43........
................
................
................
`),generateImageCanvas(`
................
................
................
................
.........422....
.........4442...
........444222..
.......4443322..
..4422.44332322.
..4322243333222.
.44332233332332.
.44332223.......
.4332332........
................
................
................
`),generateImageCanvas(`
................
................
................
................
......443.......
......4332......
.....443221.....
...44433221.....
..4443432211....
..4443322211....
.44433332221....
.444433222111...
.443332332111...
..43333311......
................
................
`)
];

var image_gear = generateImageCanvas(`
.......77.......
...7..7553..7...
..757.7553.753..
.75557555575553.
..755555555553..
...7555335553...
.775553..355533.
755553....755553
755553....755553
.335553..755533.
...7555775553...
..755555555553..
.75553555535553.
..353.3553.353..
...3..3553..3...
.......33.......
`);



var image_fruitsel_active = generateImageCanvas(`
................
................
................
................
................
................
..hhhhhhhhhhh...
...hhhhhhhhh....
....hhhhhhh.....
.....hhhhh......
......hhh.......
.......h........
................
................
................
................
`);

var image_fruitsel_inactive = generateImageCanvas(`
................
................
................
................
................
................
..33333333333...
...333333333....
....3333333.....
.....33333......
......333.......
.......3........
................
................
................
................
`);


var image_swap = generateImageCanvas(`
................
................
................
................
.....0....0.....
....00....00....
...0900000090...
..099999999990..
...0900000090...
....00....00....
.....0....0.....
................
................
................
................
................
`);



var image_pause = generateImageCanvas(`
................
................
................
..8888..8888....
..8660..8660....
..8660..8660....
..8660..8660....
..8660..8660....
..8660..8660....
..8660..8660....
..8660..8660....
..8660..8660....
..8000..8000....
................
................
................
`);


var image_paused = generateImageCanvas(`
................
................
................
..PPPP..PPPP....
..Prrp..Prrp....
..Prrp..Prrp....
..Prrp..Prrp....
..Prrp..Prrp....
..Prrp..Prrp....
..Prrp..Prrp....
..Prrp..Prrp....
..Prrp..Prrp....
..Pppp..Pppp....
................
................
................
`);
