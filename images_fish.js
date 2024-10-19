/*
Ethereal Farm
Copyright (C) 2020-2024  Lode Vandevenne

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


var image_missingfish = createFishImage(
`
................
................
................
.........$$.....
.......$$$......
.......$$.....$.
....$$$$$$$..$$.
...$$$$$$$$$$$$.
..$$0$$$$$$$$$$.
.$$$$$$$$$$$$$$.
.$$$$$$$$$$$.$$.
..$$$$$$$$$...$.
....$$$$$$......
......$$........
.......$$.......
........$$......
`);

var image_goldfish0 = createFishImage(`
+:#fb8a X:#fb8 O:#d96
................
.......+++......
.......++++.....
.......+++++....
......XXO+++...+
....XZXOXOX+.+++
...XZ0ZXOXOXO+++
..XXXZXOXOXOO+..
..XXOXOXOXOOO...
...OXOXOXOOOO+..
....OOOOOO++.++.
......OOO.++.+++
......++......++
......+++.......
.......++.......
................
`);

var image_goldfish1 = createFishImage(`
+:#f63a X:#fb8 O:#d96
................
.......+++......
.......++++.....
.......+++++....
......PPR+++...+
....PZPRPRP+.+++
...PZ0ZPRPRPR+++
..PPPZPRPRPRR+..
..PPRPRPRPRRR...
...RPRPRPRRRR+..
....RRRRRR++.++.
......RRR.++.+++
......++......++
......+++.......
.......++.......
................
`);

var image_goldfish2 = createFishImage(`
................
.......444......
.......4444.....
.......44444....
......221444...4
....26212124.444
...2606212121444
..222621212114..
..22121212111...
...12121211114..
....11111144.44.
......111.44.444
......44......44
......444.......
.......44.......
................
`);

var image_goldfish3 = createFishImage(`
................
.......333......
.......3333.....
.......33333....
......997333...3
....9$979793.333
...9$0$979797333
..999$97979773..
..99797979777...
...79797977773..
....77777733.33.
......777.33.333
......33......33
......333.......
.......33.......
................
`);



var image_koi0 = createFishImage(`
................
................
................
................
................
9......999......
99..9$$$999999..
.999999999$$909.
.9999$$$99$$$9$9
99.9$$$$$9999999
9........9.99..9
........9..9....
................
................
................
................
`);

var image_koi1 = createFishImage(`
................
................
................
................
................
P......PPP......
PP..P333PPPPPP..
.PPPPPPPPP33P0P.
.PPPP333PP333P3P
PP.P33333PPPPPPP
P........P.PP..P
........P..P....
................
................
................
................
`);

var image_octopus0 = createFishImage(`
aa:#d33
......999N......
....99NNNNNN....
...9NNNNNNNNN...
...9NNNNNNNNN...
..9NNNNNNNNNNN..
..NN90NNNN90NM..
..NN00NNNN00NM..
..NNNNNNNNNNNM..
...NNN0NN0NNM...
...NNNN00NNNM...
.NNNNNNNNNMMMNN.
.NM.NNNMMMNN.NM.
....NM.NN.NM....
....NM.NM.NM....
.......NM.......
................
`);

var image_octopus1 = createFishImage(`
......999P......
....99PPPPPP....
...9PPPPPPPPP...
...9PPPPPPPPP...
..9PPPPPPPPPPP..
..PP90PPPP90PR..
..PP00PPPP00PR..
..PPPPPPPPPPPR..
...PPP0PP0PPR...
...PPPP00PPPR...
.PPPPPPPPPRRRPP.
.PR.PPPRRRPP.PR.
....PR.PP.PR....
....PR.PR.PR....
.......PR.......
................
`);

var image_octopus2 = createFishImage(`
......5552......
....55222222....
...5222222222...
...5222222222...
..522222222222..
..22H02222H021..
..220022220021..
..222222222221..
...2220220221...
...2222002221...
.22222222211122.
.21.22211122.21.
....21.22.21....
....21.21.21....
.......21.......
................
`);

var image_anemone0 = createFishImage(`
...........9....
..9........M....
..NM..9...NN....
...M..N...M....9
.9.N..MM..MN...M
.N.N...N...N.Mmm
MM.MM..NM.MM.M..
N...N...M.N..m.9
NM..NMM.N.N.Mm.M
.M....N.N.M.M.mm
.NN...N.M.M.m.M.
..M..MMXXXMMm.M.
..MNNMXXOXXMmmm.
....MMMXXXMmMM..
......MMMmmm....
................
`);

var image_anemone1 = createFishImage(`
...........p....
..p........R....
..PR..p...PP....
...R..P...R....p
.p.P..RR..RP...R
.P.P...P...P.Rrr
RR.RR..PR.RR.R..
P...P...R.P..r.0
PR..PRR.P.P.Rr.R
.R....P.P.R.R.rr
.PP...P.R.R.r.R.
..R..RRZZZRRr.R.
..RPPRZZzZZRrrr.
....RRRZZZRrRR..
......RRRrrr....
................
`);

var image_anemone2 = createFishImage(`
...........0....
..0........3....
..53..0...55....
...3..5...3....0
.0.5..33..35...3
.5.5...5...5.311
33.33..53.33.3..
5...5...3.5..1.0
53..533.5.5.31.3
.3....5.5.3.3.11
.55...5.3.3.1.3.
..3..33999331.3.
..3553990993111.
....3339993133..
......333111....
................
`);

var image_shrimp0 = createFishImage(`
.......ssssss...
.............s..
.....sssssss..s.
....s.......s.s.
......s$$$$..s..
.....$s$$$0$s...
....$$s$$$$$....
....$$Ss$$......
...$$Ss..s......
...s$S.s..s.....
...$sss.........
...$S...........
...$Sss.........
...SS...........
....ss..........
................
`);

var image_shrimp1 = createFishImage(`
ts0:1
.......rrrrrr...
.............r..
.....rrrrrrr..r.
....r.......r.r.
......rPPPP..r..
.....PrPPP0Pr...
....PPrPPPPP....
....PPRrPP......
...PPRr..r......
...rPR.r..r.....
...Prrr.........
...PR...........
...PRrr.........
...RR...........
....rr..........
................
`);

var image_puffer0 = createFishImage(`
......X.........
......X..X......
....X.XXXX.X....
....XXOOOOXX....
..XXOOOOoOOOXX..
...XOoOOOOOOX...
XXXO0OOO0OoOoXXX
.XXOOOOOOOOooXX.
88847000OOO66888
8887770777466888
...8747476668...
..887777464688..
....88476688....
....8.8888.8....
......8..8......
.........8......
`);

var image_puffer1 = createFishImage(`
.........P......
......P..P......
....P.PPPP.P....
....PPRRrrPP....
..PPRRrRRRRRPP..
...PRRRRRrRRP...
PPPRxRrRxRRRrPPP
.PPRRRRRRRrRRPP.
88847xxxRRR66888
888777x777664888
...8777476468...
..887477766688..
....88746688....
....8.8888.8....
......8..8......
.........8......
`);

var image_puffer2 = createFishImage(`
.........4......
......4..4......
....4.4444.4....
....44221244....
..442212222244..
...4222221214...
4442021202221444
.44222222212244.
8884700022266888
8887770777664888
...8777476668...
..884777764688..
....88764688....
....8.8888.8....
......8..8......
.........8......
`);


var image_eel0 = createFishImage(`
................
.........$$$&&&.
.......$$$a&&900
.....$$$aa&&000.
....$$aa&000....
...$$a&&00......
...$a&&0........
...$a&&.........
...$a&&&........
....$&&&&.......
....$$&&&&......
.....$$&&00.....
..$$$aa&&00.....
.$$aa00000......
.0000...........
................
`);


// red eel
var image_eel1 = createFishImage(`
................
.........XXXrrr.
.......XXXRrr9pp
.....XXXRRrrppp.
....XXRRrppp....
...XXRrrpp......
...XRrrp........
...XRrr.........
...XRrrr........
....Xrrrr.......
....XXrrrr......
.....XXrrpp.....
..XXXRRrrpp.....
.XXRRppppp......
.pppp...........
................
`);


// white eel
var image_eel2 = createFishImage(`
................
.........222888.
.......222988066
.....2229988666.
....22998666....
...2298866......
...29886........
...2988.........
...29888........
....28888.......
....228888......
.....228866.....
..222998866.....
.229966666......
.6666...........
................
`);



// yellow tang
var image_tang0 = createFishImage(`h0y:#dc0 h1y:#ff4 h0l:#cd0 h1l:#ef4
................
................
.....KLKKLKK....
....KLKKLKKLK...
....ZZZZZZZKK...
...Z0YYYYYYKL...
..Z0Y0YYYYYYK..K
..ZY0YYYYYYYy.LL
ZZYYYKKYYYYYYyKK
.ZYYLLLYYYYYyyLL
ZZYYYKKYYYYyK.KK
...yYYYYYyyyL..K
....yyyyyyyKK...
......KLKKLKK...
........LKKL....
................
`);

// red tang
var image_tang1 = createFishImage(`
+:#e66
................
................
.....rprrprr....
....rprrprrpr...
....PPPPPPPrr...
...P0++++++rp...
..P0+0++++++r..r
..P+0+++++++R.pp
PP+++rr++++++Rrr
.P++ppp+++++RRpp
PP+++rr++++Rr.rr
...R++++++RRp..r
....RRRRRRRrr...
......rprrprr...
........prrp....
................
`);

// black tang
var image_tang2 = createFishImage(`
................
................
.....3233233....
....323323323...
....444444433...
...4]11111132...
..4]1]1111113..3
..41]11111110.22
4411133111111033
.411222111110022
4411133111103.33
...0111111002..3
....000000033...
......3233233...
........2332....
................
`);

// leporinus
var image_leporinus0 = createFishImage(`
................
................
................
........R.......
........Rr......
r.......RrR.....
Rr....22Z22ZZZ..
.Rr22Z00--00-0-.
..--00-00-00--yy
.rR-00-00-00yyy.
rR.y00y00y00....
R.......RrR.....
........Rr......
........R.......
................
................
`);

// red banded leporinus
var image_leporinus1 = createFishImage(`
................
................
................
........I.......
........Ii......
i.......IiI.....
Ii....22P22PPP..
.Ii22P00++00+0+.
..++00+00+00++rr
.iI+00+00+00rrr.
iI.r00r00r00....
I.......IiI.....
........Ii......
........I.......
................
................
`);

// oranda
var image_oranda0 = createFishImage(`
................
................
................
......5656......
.66..65656.+++..
5566.656999++++.
6655.9999998+++.
..6699999989808.
..66999999898888
6655.9999998888.
5566.999988888..
.66...988888....
.......566......
......656.......
......56........
................
`);

// red oranda
var image_oranda1 = createFishImage(`
................
................
................
......%s%s......
.ss..s%s%s.+++..
%%ss.s%s$$$++++.
ss%%.$$$$$$S+++.
..ss$$$$$$S$S0S.
..ss$$$$$$S$SSSS
ss%%.$$$$$$SSSS.
%%ss.$$$$SSSSS..
.ss...$SSSSS....
.......%ss......
......s%s.......
......%s........
................
`);

// black oranda
var image_oranda2 = createFishImage(`
................
................
................
......0101......
.11..10101.+++..
0011.101333++++.
1100.3333332+++.
..11333333232|2.
..11333333232222
1100.3333332222.
0011.333322222..
.11...322222....
.......011......
......101.......
......01........
................
`);
