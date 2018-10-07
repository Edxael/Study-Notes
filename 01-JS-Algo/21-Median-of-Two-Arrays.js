
// 4. Median of Two Sorted Arrays
// https://leetcode.com/problems/median-of-two-sorted-arrays/description/

var findMedianSortedArrays = function(nums1, nums2) {
    let temp = []
    let ans = 0
    while(nums1.length || nums2.length){
        if( nums1[0] < nums2[0] || nums2[0] === undefined ){ temp.push(nums1.shift()) }
        if( nums1[0] > nums2[0] || nums1[0] === undefined ){ temp.push(nums2.shift()) }
    }

    console.log(temp)

    let midle = Math.floor(temp.length / 2)

    if(temp.length % 2 === 0){
      console.log("runing");
      console.log(temp[(temp.length / 2) ]);
      console.log(temp[(temp.length / 2) - 1]);
      ans = ( temp[(temp.length / 2) ]   +   temp[(temp.length / 2) - 1] ) / 2
    } else {
      ans = Math.floor((temp.length / 2) + 1)
    }

    return ans
}


console.log( findMedianSortedArrays( [1, 3], [2] ) )
