
// Given a magazine string, does that string have enough words to write the note? true or false


const hrnote = (note, article) => {

  let answer = true

  const mapNote = note.split(" ")
    .reduce((pv, cv) => {
      pv[cv] = (pv[cv] + 1 )|| 1
      return pv
    }, {})

  const mapArt = article.split(" ")
    .reduce((pv, cv) => {
      pv[cv] = (pv[cv] + 1) || 1
      return pv
    } ,{})


    Object.keys(mapNote).forEach((x) => {
      if(mapNote[x] > mapArt[x] || mapArt[x] === undefined){ answer = false }
    })

    return answer
}

const note = 'this is a secret note for you from a secret admirer'
const maga = 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'
console.log( hrnote(note, maga) );





// -------------------------------------------------------------------------------------------------------------------

const hrnote = (note, magazine) => {
  let not_arr = note.split(' ')
  let mag_arr = magazine.split(' ')

  let mag_obj = mag_arr.reduce((pv, cv) => {
    pv[cv] = (pv[cv] + 1) || 1
    return pv
  }, {})

  let noteIsPossible = true

  not_arr.forEach((word) => {
              if(mag_obj[word]){
                if(mag_obj[word] < 1){ noteIsPossible = false }
                mag_obj[word]--
              }else {
                noteIsPossible = false
              }
            })

  return noteIsPossible
}

const note = 'this is a secret note for you from a secret admirer'
const maga = 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'
console.log( hrnote(note, maga) );
