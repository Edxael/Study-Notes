// ============================================================================================
//                                        INSTRUCTIONS
// ============================================================================================
// The spreadsheet consists of rows of apparently-random numbers. To make sure the recovery process is on the right track, they need you to calculate the spreadsheet's checksum. For each row, determine the difference between the largest value and the smallest value; the checksum is the sum of all of these differences.
//
// For example, given the following spreadsheet:
//
// 5 1 9 5
// 7 5 3
// 2 4 6 8
//
// The first row's largest and smallest values are 9 and 1, and their difference is 8.
// The second row's largest and smallest values are 7 and 3, and their difference is 4.
// The third row's difference is 6.
// In this example, the spreadsheet's checksum would be 8 + 4 + 6 = 18
//
// Puzzle input:
//
// 1224	926	1380	688	845	109	118	88	1275	1306	91	796	102	1361	27	995
// 1928	2097	138	1824	198	117	1532	2000	1478	539	1982	125	1856	139	475	1338
// 848	202	1116	791	1114	236	183	186	150	1016	1258	84	952	1202	988	866
// 946	155	210	980	896	875	925	613	209	746	147	170	577	942	475	850
// 1500	322	43	95	74	210	1817	1631	1762	128	181	716	171	1740	145	1123
// 3074	827	117	2509	161	206	2739	253	2884	248	3307	2760	2239	1676	1137	3055
// 183	85	143	197	243	72	291	279	99	189	30	101	211	209	77	198
// 175	149	259	372	140	250	168	142	146	284	273	74	162	112	78	29
// 169	578	97	589	473	317	123	102	445	217	144	398	510	464	247	109
// 3291	216	185	1214	167	495	1859	194	1030	3456	2021	1622	3511	222	3534	1580
// 2066	2418	2324	93	1073	82	102	538	1552	962	91	836	1628	2154	2144	1378
// 149	963	1242	849	726	1158	164	1134	658	161	1148	336	826	1303	811	178
// 3421	1404	2360	2643	3186	3352	1112	171	168	177	146	1945	319	185	2927	2289
// 543	462	111	459	107	353	2006	116	2528	56	2436	1539	1770	125	2697	2432
// 1356	208	5013	4231	193	169	3152	2543	4430	4070	4031	145	4433	4187	4394	1754
// 5278	113	4427	569	5167	175	192	3903	155	1051	4121	5140	2328	203	5653	3233
// ********************************************************************************************



// ============================================================================================
//                                        LOGIC FOR CODE
// ============================================================================================
// - Wrap the input in backticks to convert to string literal, and pass it as input parameter.
// - Creat variable "total" initialized as zero, to return after adding values.
// - Create an Array named "data".
// - Populate the array wth the input spliting each new line.
// - For each element in the array "data" create a sub array by spliting each "Tab".
// - Convert each element in the subarrays of "data" to type 'number'.
// - Sort each of the sub arrays from smalles to largest.
// - Loop each element of the array "data"
//       a) Subtract the numeric value of 1st element of sub-array to the the numeric value of last element of sub-array
//       b) Add the result of computation in step "a)" to the current value of total.
// - Returen total.
// ********************************************************************************************



// ============================================================================================
//                                             CODE
// ============================================================================================
// The result calculated by this function given the input providide on instructtions is: 34581

const spread = (input) => {
  let total = 0

  let data = input.split(/[\n]/)
                .map((x) => { return x.split("	")
                  .map((y) => { return parseInt(y) })
                  .sort((a, b) => { return a - b })
                })

  data.forEach((line) => {
    total += (line[line.length -1] - line[0])
  })

  return total
}


// *************** Input & Calling the Function ***************
const input =
`1224	926	1380	688	845	109	118	88	1275	1306	91	796	102	1361	27	995
1928	2097	138	1824	198	117	1532	2000	1478	539	1982	125	1856	139	475	1338
848	202	1116	791	1114	236	183	186	150	1016	1258	84	952	1202	988	866
946	155	210	980	896	875	925	613	209	746	147	170	577	942	475	850
1500	322	43	95	74	210	1817	1631	1762	128	181	716	171	1740	145	1123
3074	827	117	2509	161	206	2739	253	2884	248	3307	2760	2239	1676	1137	3055
183	85	143	197	243	72	291	279	99	189	30	101	211	209	77	198
175	149	259	372	140	250	168	142	146	284	273	74	162	112	78	29
169	578	97	589	473	317	123	102	445	217	144	398	510	464	247	109
3291	216	185	1214	167	495	1859	194	1030	3456	2021	1622	3511	222	3534	1580
2066	2418	2324	93	1073	82	102	538	1552	962	91	836	1628	2154	2144	1378
149	963	1242	849	726	1158	164	1134	658	161	1148	336	826	1303	811	178
3421	1404	2360	2643	3186	3352	1112	171	168	177	146	1945	319	185	2927	2289
543	462	111	459	107	353	2006	116	2528	56	2436	1539	1770	125	2697	2432
1356	208	5013	4231	193	169	3152	2543	4430	4070	4031	145	4433	4187	4394	1754
5278	113	4427	569	5167	175	192	3903	155	1051	4121	5140	2328	203	5653	3233`

console.log( spread(input) )
// ********************************************************************************************
