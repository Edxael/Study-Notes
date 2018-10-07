//
// Name: Decompose single strand DNA into 3 reading frames
// Location: https://www.codewars.com/kata/decompose-single-strand-dna-into-3-reading-frames/train/javascript
//
// In genetics a reading frame is a way to divide a sequence of nucleotides (DNA bases) into a set of consecutive non-overlapping triplets (also called codon). Each of this triplets is translated into an amino-acid during a translation process to create proteins.
//
// Input
//
// In a single strand of DNA you find 3 Reading frames, take for example the following input sequence:
//
// AGGTGACACCGCAAGCCTTATATTAGC
// Output
//
// For the output we are going to take the combinations and show them in the following manner:
//
// Frame 1: AGG TGA CAC CGC AAG CCT TAT ATT AGC
// Frame 2: A GGT GAC ACC GCA AGC CTT ATA TTA GC
// Frame 3: AG GTG ACA CCG CAA GCC TTA TAT TAG C
// For frame 1 split all of them in groups of three starting by the first base (letter).
//
// For frame 2 split all of them in groups of three starting by the second base (letter) but having the first base (letter) at the beggining.
//
// For frame 3 split all of them in groups of three starting by the third letter, but having the first and second bases (letters) at the beginning in the same order.
//
// Series
//
// Decompose single strand DNA into 3 reading frames
// Decompose double strand DNA into 6 reading frames
// Translate DNA to protein in 6 frames
//
// --------------------------------------------------------------------------------------------------------------------------------------------


console.log('Algo 1')
console.log(" ");


const myFun = ( singleStrand ) => {
  console.log("The string: ")

  const subDv = (arr, num) => {
        var tempArr = []
        while (arr.length > 0) {
          tempArr.push(arr.splice(0, num))
        }
        return tempArr
  }


  const arr1 = subDv(singleStrand.split(""), 3)
  str1 = ""
  arr1.map((x) => { str1 = str1 + x.join("") + " " })
  str1 = str1.slice(0, -1)


  let arr2 = []
  let origArr = singleStrand.split("")
  arr2.push(origArr.splice(0, 1))
  arr2 = arr2.concat( subDv(origArr, 3) )
  str2 = ""
  arr2.map((x) => { str2 = str2 + x.join("") + " " })
  str2 = str2.slice(0, -1)


  let arr3 = []
  origArr = singleStrand.split("")
  arr3.push(origArr.splice(0, 2))
  arr3 = arr3.concat( subDv(origArr, 3) )

  str3 = ""
  arr3.map((x) => { str3 = str3 + x.join("") + " " })
  str3 = str3.slice(0, -1)



  return `Frame 1: ${str1}\nFrame 2: ${str2}\nFrame 3: ${str3}`
}


console.log(myFun("AGGTGACACCGCAAGCCTTATATTAGC"))


// ------------------------------------------------------
// Best Example

function decomposeSingleStrand(singleStrand) {
  return [
    `Frame 1: ${singleStrand.match(/.../g).join(' ')}`,
    `Frame 2: ${singleStrand.match(/^.|...|..$/g).join(' ')}`,
    `Frame 3: ${singleStrand.match(/^..|...|.$/g).join(' ')}`,
  ].join('\n');
}
